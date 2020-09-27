function vowel(str2)
{
  var list = 'AEIOUaeiou';
  var cnt = 0;
  for(var i = 0; i < str2.length ; i++)
  {
    if (list.indexOf(str2[i]) !== -1)
    {
      cnt += 1;
    }
  
  }
  return cnt;
}
console.log('Total vowels',vowel("Betty brought some butter"));
function letters(str1)
{
  
  newstring= str1.replace(/ /g, "");
  var m = 0;
  for(var i = 0; i < newstring.length ; i++)
  {
      m += 1;
  }
  console.log('Total number of Letters',m);
}
letters("Betty brought some butter");

    
