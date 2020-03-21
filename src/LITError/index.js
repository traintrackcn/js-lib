export default class LITError extends Error{
    constructor(e, obj, args) {
        super(e.message);
        this.setObj(obj);
        this.setArgs(args);
        this.name = 'LITError';
        this.message = this.getMessage();
    }

    setArgs(value) {
        this._agrs = value;
    }

    getArgs() {
        return this._agrs;
    }

    setObj(value) {
        this._obj = value;
    }

    getObj() {
        return this._obj;
    }

    getCallee() {
        const args = this.getArgs();
        if (args) return args.callee;
        return {};
    }

    getFnName() {
        const callee = this.getCallee();
        return callee.name;
    }

    getObjName() {
        try{
            const obj = this.getObj();
            var result = obj.constructor.name;
            if (result === 'Object') result = undefined;
            return result;
        }catch(e) { }
    }

    getOriginalMessage() {
        return this.message;
    }

    getMessage (){
        const fnName = this.getFnName();
        const originalMsg = this.getOriginalMessage();
        const objName = this.getObjName();
        var from = [];
        if (objName) from.push(objName);
        if (fnName && fnName !== 'Object.<anonymous>') from.push(fnName);
        if (!from.length) return originalMsg;
        return `[ ${from.join('.')} ] ${originalMsg}`;
    }

}