const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members))
    return false;

  let team='';
  members=members.filter(str => typeof(str)==="string")
  members=members.map(function(str){
    str = str.split(' ').join('');
    return str;
  }
  );
  team = members.map(item => item.split('')[0]);
  team = team.join('').toUpperCase().split('').sort().join('');

  if(team==='')
    return false;
  else 
    return team;

};

