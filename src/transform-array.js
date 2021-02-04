const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr1=[];
  if(arr==[])
    return arr;
  else{
    for(let i=0; i<arr.length; i++)
      arr1.push(arr[i]);
    for(let i=0;i<arr1.length;i++){
    switch(arr1[i]){
      case '--discard-next':
        if((i+1<arr1.length) && (arr1[i+1]!=undefined))
          arr1[i+1]=undefined;
        arr1[i]=undefined;
        break;
      case '--discard-prev':
        if((i-1>=0) && (arr1[i-1]!=undefined))
          arr1[i-1]=undefined;
        arr1[i]=undefined;
        break;
      case '--double-next':
        if((i+1<arr1.length) && (arr1[i+1]!=undefined))
          arr1[i]=arr1[i+1];
        else
          arr1[i]=undefined;
        break;
      case '--double-prev':
        if((i-1>=0) && (arr[i-1]!=undefined))
          arr1[i]=arr1[i-1];
        else
          arr1[i]=undefined;
        break;
    }
  }
  return arr1.filter(item => item!=undefined);
  }
};
