if (letters.test(firstname) == false)
    {  
      
      alert("Name should only contain alphabets");
      document.getElementById("fname").focus();  
      return false;  
     }
     
     if(lastname == "" || lastname == null)
        {
         alert("Last name should not be empty");
         document.getElementById("lname").focus();  
         return false;  
        }
       
       if (password.length<6)
       {  
         
         alert("Password can't be less than 6 characters");
         document.getElementById("pass").focus();  
         return false;  
        }
   