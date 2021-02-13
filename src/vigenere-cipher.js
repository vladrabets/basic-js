const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode){
    this.mode = mode;
  }
  encrypt(str, key){
    str=str.toLowerCase().split('');
    key=key.toLowerCase();
    const abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let j=-1;
    for(let i=0;i<str.length;i++)
      if(abc.includes(str[i]))
      {
        j++;
        if(j>=key.length)
          j=j%key.length;
        if(abc.indexOf(str[i])+abc.indexOf(key[j])>=26)
          str[i]=abc[(abc.indexOf(str[i])+abc.indexOf(key[j]))%26];
        else
          str[i]=abc[abc.indexOf(str[i])+abc.indexOf(key[j])];                                                                                                                                                                                                                                                                                                                                   
      }                                            
    if(this.mode==false)
      return str.reverse().join('').toUpperCase();
    else
      return str.join('').toUpperCase();
  }      
  decrypt(str, key){
    str=str.toLowerCase().split('');
    key=key.toLowerCase();
    const abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let j=-1;
    for(let i=0;i<str.length;i++)
      if(abc.includes(str[i]))
      {
        j++;
        if(j>=key.length)
          j=j%key.length;
        if(abc.indexOf(str[i])-abc.indexOf(key[j])<0)
          str[i]=abc[(abc.indexOf(str[i])-abc.indexOf(key[j]))+26];
        else
          str[i]=abc[abc.indexOf(str[i])-abc.indexOf(key[j])];                                                                                                                                                                                                                                                                                                                                   
      }
    if(this.mode==false)
      return str.reverse().join('').toUpperCase();
    else
      return str.join('').toUpperCase(); 
  }
}

module.exports = VigenereCipheringMachine;
