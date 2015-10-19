var names = require('./module.js'),
    findSuperman = require('./findSuperman.js');

if(findSuperman(names())){
  console.log("superman found...")
}else{
  console.log('superman not found....')
};
