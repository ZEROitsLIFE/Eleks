/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
   
 let arr='';

 let count=0;

 let temp=string[0];
  for (let i = 0; i < string.length; i++)  
 {  
 if (string[i]=temp&&count<size ) {
      arr=arr+string[i];
      count++;
  }
  else {
      temp=string[i];
      count=0;
  }
}
return arr;
}

