// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    let newArr=[];
  while (arr.length > 0) {
 let chunk = arr.splice(0,size)
 newArr.push(chunk);  
   
  }//console.log(chunk)
  return newArr;
};
