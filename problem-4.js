function findMax(a){
  let max = a[0];
  for(let n of a){
    if(n > max)
    {
      max = n;
    }
  }
  return max;
}
console.log(findMax([5,6,9,10,14,12]));