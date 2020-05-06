const callerE = require('./enum');

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
        console.log('=== caller scenario1 ===');
        const item = matches[0];
        const arr = item.split(' ');
        // console.log('arr ->', arr);
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (element !== 'at' && element !== '') return element; 
        }
        return callerE.UNKNOWN_CALLER;
    }

    getScenario2(matches) {
        console.log('=== caller scenario2 ===');
        const line0 = matches[0];
        const arr0 = line0.split('.caller');
        const instance = arr0[0].substring(1);
        const line1 = matches[1];
        const func = this.getFunc(line1);
        // console.log('func ->', func);
        return `${instance}.${func}`;
    }

    getScenario3(matches) {
        console.log('=== caller scenario3 ===');
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
        return callerE.UNKNOWN_CALLER;
    }

    getFunc(line) {
        var result = this.getFuncFromLineWithSpace(line);
        if (result === '') result = this.getFuncFromLineWithDot(line);
        return result;
    }

    getFuncFromLineWithSpace(line) {
        try {
            const arr = line.split(' ');
            const result = arr[2];
            return result;
        }catch(e) {
            throw e;
        }
    }

    getFuncFromLineWithDot(line) {
        try {
            const arr = line.split('.');
            const raw = arr[1];
            const result = raw.substring(0, raw.length - 1);
            return result;
        }catch(e) {
            throw e;
        }
    }


    parse() {
        const matches = this.getPossibleMatches();
        const line0 = matches[0];
        const line2 = matches[2];
        // console.log('matches ->', matches);
        if (line0.indexOf('.caller') > -1) return this.getScenario2(matches);
        if (line2.indexOf('at asyncGeneratorStep') >-1) return this.getScenario3(matches);
        return this.getScenario1(matches);
    }

}