module.exports = class StackParser {

    constructor(stack) {
        this.setStack(stack);
    }

    setStack(value) {
        this._stack = value;
    }

    getStack() {
        return this._stack;
    }

    getPossibleMatches() {
        try {
            const stack = this.getStack();
            const regex = /\s\w+(.)\w+\s/ig;
            const matches = stack.match(regex);
            return matches;
        }catch(e) {
            throw e;
        }
    }

    getScenario1(matches) {
        const item = matches[0];
        const arr = item.split(' ');
        return arr[2];
    }

    getScenario2(matches) {
        const line0 = matches[0];
        const arr0 = line0.split('.caller');
        const instance = arr0[0].substring(1);
        const line1 = matches[1];
        const arr1 = line1.split(' ');
        const func = arr1[2];
        return `${instance}.${func}`;
    }

    getScenario3(matches) {
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            if (match.indexOf(' Generator.')>-1) continue;
            if (match.indexOf(' at ')>-1) continue;
            if (match.indexOf(' promise')>-1) continue;
            if (match.indexOf(' process')>-1) continue;

            // console.log('match ->', match, match.indexOf(' at '));
            const arr = match.split(' ');
            return arr[1];
        }
        return 'UNKNOWN_CALLER';
    }

    parse() {
        const matches = this.getPossibleMatches();
        const line0 = matches[0];
        const line2 = matches[2];
        console.log('matches ->', matches);
        if (line0.indexOf('.caller') > -1) return this.getScenario2(matches);
        if (line2.indexOf('at asyncGeneratorStep') >-1) return this.getScenario3(matches);
        return this.getScenario1(matches);
    }

}