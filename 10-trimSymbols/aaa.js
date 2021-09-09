
function trimSymbols(string, size) {
    console.log(start);
 let arr='';
 console.log(arr);
 let count=0;
 console.log(count);
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
