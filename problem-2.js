function countVowels(string){
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let a of string){
    if(vowels.includes(a)){
      count++;
    }
  }
  
  return count;
}
console.log(countVowels("Good Evening")); 