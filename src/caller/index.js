export default () => {
    // var callerName;
    // try { 
    //     throw new Error(); 
    // }catch (e) { 
    //     console.log('e.stack ->', e.stack);
    //     var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    //     re.exec(st), m = re.exec(st);
    //     callerName = m[1] || m[2];
    // }
    // return callerName;

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
};

//  {
//     getFnName
// };