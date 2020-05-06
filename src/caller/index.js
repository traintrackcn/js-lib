const StackParser = require('./Parser');

module.exports = () => {

    try {
        const stack = getRealStack( new Error() );
        console.log('caller stack ->', stack);
        console.log('original caller stack ->', new Error().stack);
        const parser = new StackParser(stack);
        return parser.parse();
    } catch (e) {
        return 'UNKNOWN_CALLER';
    }

};

const getRealStack = (e) => {
    var result = e.stack;
    var arr = result.split('\n');
    arr.splice(1, 1);
    // console.log('arr ->', arr);
    return arr.join('\n');
}
