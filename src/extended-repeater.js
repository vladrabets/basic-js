const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.repeatTimes==undefined)
    if(typeof(str)!='string' && str!=null)
      return str.toString()+options.addition;
    else
      return str+options.addition;
  else
  {
    if(typeof(str)!='string' && str!=null)
      str=str.toString();
    for(let key in options)
      {
        if(options[key]==null)
          options[key]='null';
        if(typeof(options[key])!="string")
          options[key]=options[key].toString();
      }
    console.log(options.separator);
    if(options.separator==undefined)
      options.separator='+';
  
    let arr=[];
    for(i=0;i<+options.repeatTimes;i++)
    {
      arr.push('');
      arr[i]+=str;
      if(options.addition!=undefined)
      for(j=0;j<+options.additionRepeatTimes;j++)
      {
        arr[i]+=options.addition;
        if((options.additionSeparator!=undefined) && (j+1!=+options.additionRepeatTimes))
          arr[i]+=options.additionSeparator;
      }
    }
    return arr.join(options.separator);
  }
};
  