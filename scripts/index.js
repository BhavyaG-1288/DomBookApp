import { baseUrl } from "./baseUrl";

 
let form = document.getElementById("form")
form.addEventListner("Submit" ,function(){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    console.log(email,password)



    if (email =="admin@empher.com" && password=="empher@123"){
        alert("Logged in as Admin");
        window.location.href ="admin.html"
    }else if (email =="user@empher.com" && password == "user@123") {
        alert("Successful Login");
        window.location.href ="books.html"

    }else ("Somthing Went Wrong")
    
});
 fetch(`${baseUrl}/books`{
    .then((res)=>res.JSON {
    .then((data)=>{
        console.log(data)
    });
    });
 });

