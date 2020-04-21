const StackParser = require('./Parser');

module.exports = () => {

    try {
        throw new Error();
    }
    catch (e) {
        try {
            const stack = e.stack;
            const parser = new StackParser(stack);
            return parser.parse();
        } catch (e) {
            return '';
        }
    }

};
