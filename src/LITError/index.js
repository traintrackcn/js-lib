module.exports = class LITError extends Error{
    constructor(e, caller) {
        super(e.message);
        // this.setObj(obj);
        this.setCaller(caller);
        // this.setArgs(args);
        this.name = 'LITError';
        this.message = this.getMessage();
    }

    setCaller(value) {
        this._caller = value;
    }

    getCaller() {
        return this._caller;
    }


    getFnName() {
        // const callee = this.getCallee();
        // return callee.name;
        return this.getCaller();
    }

    getOriginalMessage() {
        return this.message;
    }

    getMessage (){
        const fnName = this.getFnName();
        const originalMsg = this.getOriginalMessage();
        // const objName = this.getObjName();
        var from = [];
        // if (objName) from.push(objName);
        if (fnName && fnName !== 'Object.<anonymous>') from.push(fnName);
        if (!from.length) return originalMsg;
        return `[ ${from.join('.')} ] ${originalMsg}`;
    }

}