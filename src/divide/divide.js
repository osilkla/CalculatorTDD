function divide(...numb){
  if(numb.length==1) return numb[0]
  if(numb.findIndex((num)=>num === 0) != -1) throw new Error("can't divide by 0")
  return numb.reduce((total,num)=>total/num)
}

module.exports = divide;