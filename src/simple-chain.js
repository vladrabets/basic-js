const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(this.chain.length!=0)
    this.chain+="~~";
    this.chain+=`( ${value} )`;
    return this;
  },
  removeLink(position) {
    if(position<1 || typeof(position)!='number')
      {
        this.chain='';
        throw new Error;
      }
    else
    {
      this.chain=this.chain.split('~~');
      this.chain.splice(position-1,1);
      this.chain=this.chain.join('~~');
    }
    return this;
  },
  reverseChain() {
    if(this.chain.length>1)
      this.chain=this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let newChain = this.chain;
    this.chain='';
    return newChain;
  }
};

module.exports = chainMaker;
