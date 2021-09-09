/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    numbers.sort(function(a, b) {return b-a;});
      //console.log(numbers); 
    return numbers[0] + numbers[1];
}
