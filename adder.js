function sum(...numb){
  return numb.reduce((total,num)=>total+num,0)
}

module.exports = sum;