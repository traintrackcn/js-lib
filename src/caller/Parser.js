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

    getLines() {
        if (!this._lines) {
            const stack = this.getStack();
            this._lines = stack.split('at ');
        }
        return this._lines;
    }

    getLine2() {
        if (!this._line2) {
            const lines = this.getLines();
            this._line2 = lines[2];
        }
        return this._line2;
    }

    getLine3() {
        if (!this._line3) {
            const lines = this.getLines();
            this._line3 = lines[3];
        }
        return this._line3;
    }

    getInstanceFromLine2() {
        try {
            const line = this.getLine2();
            // console.log('line ->', line);
            const regex = /\w+./i;
            const matches = line.match(regex);
            // console.log('matches ->', matches);
            var result = line;
            if (matches && matches.length) {
                result = matches[0];
                const endIdx = result.length-1;
                result = result.substring(0, endIdx);
            }
            return result;
        }catch(e) {
            throw e;
        }
    }

    getFunctionFromLine3() {
        try {
            const line = this.getLine3();
            // console.log('line ->', line);
            const regex = /\w+\s/i;
            const matches = line.match(regex);
            // console.log('matches ->', matches);
            var result = line;
            if (matches && matches.length) {
                result = matches[0];
                const endIdx = result.length-1;
                result = result.substring(0, endIdx);
            }
            return result;
        }catch(e) {
            throw e;
        }
    }

    getScenario0() {
        const line = this.getLine2();
        var result = line.split(' ')[0];
        return result;
    }

    getScenario1() {
        const instance = this.getInstanceFromLine2();
        const func = this.getFunctionFromLine3();
        return `${instance}.${func}`;
    }

    parse() {
        const line2 = this.getLine2();
        var result;
        if (line2.indexOf('.caller') > 0) {
            result = this.getScenario1();
        }else{
            result = this.getScenario0();
        }
        return result;
    }

}