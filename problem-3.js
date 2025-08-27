function isPalindrome(string){
let revered = string.split("").reverse().join("");
if(string === revered)
  {
    return true;
  }
  return false;  
}
console.log(isPalindrome("Alo"));
console.log(isPalindrome("Yes"));