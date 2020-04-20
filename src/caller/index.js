module.exports = () => {

    try {
        throw new Error();
      }
      catch (e) {
        try {
            // console.log('e.stack ->', e.stack);
          return e.stack.split('at ')[2].split(' ')[0];
        } catch (e) {
          return '';
        }
      }


    //   var sCallerName;
    // {
    //     let re = /([^(]+)@|at ([^(]+) \(/g;
    //     const stack = new Error().stack;
    //     console.log('stack ->', stack);
    //     let aRegexResult = re.exec(stack);
    //     console.log('aRegexResult[1] ->', aRegexResult[1]);
    //     console.log('aRegexResult[2] ->', aRegexResult[2]);
    //     console.log('aRegexResult[3] ->', aRegexResult[3]);
    //     sCallerName = aRegexResult[1] || aRegexResult[2];
    // }

    // return sCallerName;

};
