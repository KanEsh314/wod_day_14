function pangram(str)
{
  var sente;
  var isWord = 'qwertyuiopasdfghjklzxcvbnm';
  //document.write(sente);
  
  if(str.length >= 26)
  {
    for(var i = 0; i < str.length; i++)
    {
      var let = str.trim().toLowerCase();
      if(let.indexOf(isWord.charAt(i)) == -1)
      {
        return false;
        //document.write("Pangram"); 
      }
    }
  }
  return true;
}
document.write(pangram("We promptly judged antique ivory buckles for the next prize"));