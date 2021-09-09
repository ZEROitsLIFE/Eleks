/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    if(str==='') 
    {
        return '';
    }

    let temp = str[0].toUpperCase()+'-';
    for(let i = 1; i<str.length; i++)
    {
        temp+=str[i].toUpperCase();

        for(let j = 0; j<i; j++) {temp+=str[i].toLowerCase();}

        if(i!==str.length-1)
         {temp+='-';}
    }
    return temp;
}
