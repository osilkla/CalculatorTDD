function multiply(...numb){
  if(numb.length==1) return numb[0]
  if(numb.findIndex((num)=>num === 0) != -1) return 0
  return numb.reduce((total,num)=>total*num,1)
}

module.exports = multiply;