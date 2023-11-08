document.addEventListener("click", ()=>{

    const div = document.getElementById("container");
    const gitForm = document.getElementById("form");
    const input = document.getElementById("search");
    let ul = document.createElement("ul");
    
   
   function findValues(event) { 
    event.preventDefault();

const value = input.value;

fetch(`https://api.github.com/search/users?q=${value}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
   }
})
userName.textContent = user.login;
userName.id = 'username';


const userContainer = document.createElement('li');
    userContainer.appendChild(userName);

