function removeDuplicates(a){
  let unique = [];
for(let num of a){
  if(!unique.includes(num)){
    unique.push(num);
  }
}
return unique;
}
console.log(removeDuplicates([1,2,2,2,3,4,5,6]))