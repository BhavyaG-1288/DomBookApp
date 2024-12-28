import { baseUrl } from "./baseUrl";

let books =[
    {Title:"The limit of Rules",Author:"James",Category:"Fiction"},
    {Title:"2 states",Author:"Chethan",Category:"Comedy"},
    {Title:"Half girlFriend",Author:"Chethan",Category:"Comedy"},
    {Title:"The Theif",Author:"Bob",Category:"Fiction"},
    {Title:"JavaScript",Author:"Robert",Category:"Technical"},

],

let books = document.getElementById("books"){
    books . addEventListner("submit", function(){
        display(books);
    })
    fetch(`${baseUrl}/books`){
        method:"POST"
        header:{
            "contenttype"="application/json"
        }
        body: JSON.stringify("booksobj"),{
         .then((res)=>{
            alert("Books Added SucessFully");
    
        });      
    }
        .catch ((err)=>{
            alert("Something Went wrong")
        })
      
    }
}

function getData(){
    fetch(`${baseUrl}/books`){
        .then((res)=>res{
            .then((data)=>{
                console.log(displaybooks);
            })
        })
    }
}
getData();
function displayData(books){
    books.map((el,i)=>{
        let card= document.createElement("div")
        let title=document.createElement("h3")
        title.textContent=(`Title:${Title}`),
        
        let Author=document.createElement("h4")
        Author.textContent=(`Author:${author}`),
        
        let category=document.createElement("h5")
        Category.textContent=(`Category:${category}`),

    })
    books.append(Title,Author,Category);
}