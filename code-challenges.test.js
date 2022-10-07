// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
 describe('cutAndShuffle',() => {
     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it('removes the first item from the array and shuffles the rest.', () => {

expect(cutAndShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
expect(cutAndShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))

// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
});
})

// b) Create the function that makes the test pass.
// cut and shuffle intakes an array slices index one off from the array 
// it will return new array and use sort with math random to shuffle the array each time the function runs
const cutAndShuffle = (array) => {
   let newArray = array.slice(1) 
   return newArray.sort((a,b) => 0.5 - Math.random()) 
}
 
// const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

//a) Create a test with expect statements for each of the variables provided.
// make describe a self documenting name and make it state the purpose
describe('voteCount', () => {
  it('looks at all votes and outputs net votes', () => {

const votes1 = {upVotes: 13, downVotes: 2}
expect(voteCount(votes1)).toEqual(11)
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31
expect(voteCount(votes2)).toEqual(-31)

})
})
// b) Create the function that makes the test pass.
// make function named after describe and have object as parameter
// make empty array to intake values and pass through the object
// have sum be 0 so itll take the votes and have it also pass the current value
// return the sum plus the current value of the object it will intake.
// changed so mathabs subtracts two values to be net value
// 

  const voteCount = (object) => {
    return object.upVotes - object.downVotes

    
  }


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
 describe('arrMerge',() => {
  it('merges two arrays and removes copies' ,() => {


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
expect(arrMerge(dataArray1,dataArray2)).toEqual(expect.arrayContaining(["array", "object", "number", "string", "Boolean", "null", "undefined"]))
 })
})

// b) Create the function that makes the test pass.
// parameters will pass both arrays
// returns both into one new array and will combine and delete any copy of a value
const arrMerge = (array1, array2) => {
 return 
 [...newSet(
  ...arr.reduce((arrayl, array2) =>{
  return array1.concat(array2);

}),
 )
];
};

