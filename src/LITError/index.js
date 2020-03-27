export default class LITError extends Error{
    constructor(e, caller) {
        super(e.message);
        // this.setObj(obj);
        this.setCaller(caller);
        // this.setArgs(args);
        this.name = 'LITError';
        this.message = this.getMessage();
    }

    // setArgs(value) {
    //     this._agrs = value;
    // }

    // getArgs() {
    //     return this._agrs;
    // }

    setCaller(value) {
        console.log('setCaller ->', value);
        this._caller = value;
    }

    getCaller() {
        return this._caller;
    }

    // setObj(value) {
    //     this._obj = value;
    // }

    // getObj() {
    //     return this._obj;
    // }

    // getCallee() {
    //     const args = this.getArgs();
    //     if (args) return args.callee;
    //     return {};
    // }

    getFnName() {
        // const callee = this.getCallee();
        // return callee.name;
        return this.getCaller();
    }

    // getObjName() {
    //     try{
    //         const obj = this.getObj();
    //         var result = obj.constructor.name;
    //         if (result === 'Object') result = undefined;
    //         return result;
    //     }catch(e) { }
    // }

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