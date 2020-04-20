const {caller} = require('../index');


function jiminyCricket (){
    return caller();
}

it('', () => {
    expect(jiminyCricket()).toBe('jiminyCricket');
})