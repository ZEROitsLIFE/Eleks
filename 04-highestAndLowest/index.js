/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
   
        let temp = numbers.split(' ');
        temp = temp.sort((a,b)=>{return a-b});
        temp = [temp[0], temp[temp.length-1]];
        temp = temp.join(' ');
        //console.log(temp);
        return temp;
    

}
