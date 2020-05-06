const fs = require('fs');
const StackParser = require('./Parser');


it('test single function', () => {
    const stack = readAsync('./stack/1');
    const p = new StackParser(stack);
    expect(p.parse()).toBe('jiminyCricket');
})

it('test node instance.function', () => {
    const stack = readAsync('./stack/2');
    const p = new StackParser(stack);
    expect(p.parse()).toBe('RouterHandler.getFile');
})

it('test async instance.function', () => {
    const stack = readAsync('./stack/3');
    const p = new StackParser(stack);
    expect(p.parse()).toBe('FakeQuery.fetchAsync');
})


it('test instance.function', () => {
    const stack = readAsync('./stack/4');
    const p = new StackParser(stack);
    expect(p.parse()).toBe('JestRequestHandler.applyHeaders');
})



function readAsync(path) {
    try {
        var filename = require.resolve(path);
        const result = fs.readFileSync(filename, 'utf8');
        return result;
    } catch (e) {
        throw e;
    }
}