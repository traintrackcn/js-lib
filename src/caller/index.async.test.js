import {caller} from '../index';


it('test async function of Object', async(done) => {
    try {
        const o = new FakeQuery();
        const result = await o.fetchAsync();
        expect(result).toBe();
        done();
    }catch(e) {
        done(e);
    }
})


class FakeQuery{
    async fetchAsync() {
        return caller();
    }
}