if (letters.test(firstname) == false)
    {  
      
      alert("Name should only contain alphabets");
      document.getElementById("fname").focus();  
      return false;  
     }
