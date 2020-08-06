/**
 * 1 - 
 * limitation assertion 
 * as soon one of this aasertion throw error, the other tests are not run, nd if we get an   error we cant able to figure out where the test are broken in sum or in substract
 */
function expect(actual) {
    return{
        toBe(expected){
            if(actual !== expected){
                throw new Error(`${result} is not equal to ${expected}`)
            }else{
                console.log(`success for actual - ${actual} nd expected ${expected}`)
            }
        },
        toEqual(expected){},
        toBeGreaterThan(expected){}
    }
}

/**
 * 2 - encapsulate or isolate testing
 * async nd await - to wait for the result other wise it will throw error 
 */
async function test(title, callback){
    try {
       await callback()
        console.log(title, ' success')
    } catch (error) {
        console.error(title, ' title error');
        console.error(error, ' error');
    }
}
