function validateform()
{  
    let firstname = document.myform.fname.value;
    let password = document.myform.pass.value;
    let cpassword = document.myform.cpass.value;
    let eMail = document.myform.email.value;
    let phone = document.myform.mobile.value;
    let address = document.myform.addr.value;
    let lastname = document.myform.lname.value;
    let letters = /^[A-Za-z]+$/;
    const emailexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneno = /^\d{10}$/;

    if (firstname.length<6)
        {  
          
          alert("First name can't be less than 6 characters");
          document.getElementById("fname").focus();  
          return false;  
         }
    
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
}