import LITError from '.';
import caller from '../caller';

it.only('test fnInClassThatThrowsError', () =>{

    try{
        const obj = new Instance();
        obj.fnInClassThatThrowsError();
    }catch(e) {
        expect(e.message).toBe('[ Instance.fnInClassThatThrowsError ] a.callNoExistFN is not a function');
    }

});

it('test arrowFnOutsideObjectThatThrowsError ( arguments not supported )', () =>{

    try{
        arrowFnOutsideObjectThatThrowsError();
    }catch(e) {
        expect(e.message).toBe('a.callNoExistFN is not a function');
    }

});

it('test arrowFnInClassThatThrowsError ( arguments not supported)', () => {
    try{
        const obj = new Instance();
        obj.arrowFnInClassThatThrowsError();
    }catch(e) {
        expect(e.message).toBe('[ Instance ] a.callNoExistFN is not a function');
    }
});


const runOutsideObject = () => {
    var stack = new Error().stack,
    caller = stack.split('\n')[2].trim();
    console.log('stack ->', stack);
    console.log('caller ->', caller);
}


class Instance {

    constructor() {
        this.fnInClassThatThrowsError = this.fnInClassThatThrowsError.bind(this);
    }

    runInsideObject() {
        var stack = new Error().stack,
        caller = stack.split('\n')[2].trim();
        console.log('stack ->', stack);
        console.log('caller ->', caller);
    }

    arrowFnInClassThatThrowsError = () => {
        try{
            var a = '';
            a.callNoExistFN();
        }catch(e) {
            throw new LITError(e, this);
        }
    }

    fnInClassThatThrowsError() {
        // console.log('caller() ->', caller());
        try{
            var a = '';
            a.callNoExistFN();
        }catch(e) {
            // console.log('caller() ->', caller());
            // console.log('fnName ->', arguments.callee.name);
            throw new LITError(e, caller());
        }
        
    }

}

const arrowFnOutsideObjectThatThrowsError = () => {
    try{
        var a = '';
        a.callNoExistFN();
    }catch(e) {
        throw new LITError(e, this, arguments);
    }
    
}