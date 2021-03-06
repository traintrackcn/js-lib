const { caller, LITError } = require('../index');

it('test fnInClassThatThrowsError', () =>{

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
        expect(e.message).toBe('[ arrowFnOutsideObjectThatThrowsError ] a.callNoExistFN is not a function');
    }

});

it('test arrowFnInClassThatThrowsError ( arguments not supported)', () => {
    try{
        const obj = new Instance();
        obj.arrowFnInClassThatThrowsError();
    }catch(e) {
        expect(e.message).toBe('[ Instance.arrowFnInClassThatThrowsError ] a.callNoExistFN is not a function');
    }
});



class Instance {

    constructor() {
        this.fnInClassThatThrowsError = this.fnInClassThatThrowsError.bind(this);
    }


    arrowFnInClassThatThrowsError = () => {
        try{
            var a = '';
            a.callNoExistFN();
        }catch(e) {
            throw new LITError(e, caller());
        }
    }

    fnInClassThatThrowsError() {
        try{
            var a = '';
            a.callNoExistFN();
        }catch(e) {
            console.log(new Error().stack);
            throw new LITError(e, caller());
        }
        
    }

}

const arrowFnOutsideObjectThatThrowsError = () => {
    try{
        var a = '';
        a.callNoExistFN();
    }catch(e) {
        throw new LITError(e, caller());
    }
    
}