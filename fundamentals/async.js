/**
 * with only assertion func we r getting the test erors but not specific to the cases
 * so we r creating an encapsulate(isolating or specigfic) functionality for that which runs all the test nd show the errors for the particualr test cases
 */

const { sum, substract } = require('./math')

//sum
test('sums add number asyncronously', async () => {
    const result = await sum(3, 7)
    const expected = 10
     
    expect(result).toBe(expected) 
})

// if(result !== expected){
    //     throw new Error(`${result} is not equal to ${expected}`)
    // }

//sunstract
test('substract number asynchronously', async () => {
    const result = await substract(7, 3)
    const expected = 4
    
    expect(result).toBe(expected)
})
// if(result !== expected){
//     throw new Error(`${result} is not equal to ${expected}`)
// }

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