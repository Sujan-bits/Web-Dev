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
  }