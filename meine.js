let div = document.getElementById('div')
let input = document.getElementById('input');
button = document.getElementById("search")
//function click() {
    button.addEventListener('click', function (event) {
    let id = input.value;
    const f = fetch(`https://api.github.com/users/${id}`) 
    .then((response)=> {
        return response.json()
    }) 
     .then(result => {
        console.log(result);
        function User(){
            let h2 = document.createElement("h2");
            div.appendChild(h2);
            h2.innerHTML = "Name: " + result.name + "  login: " + result.login + "  id: " + result.id + "  type: " + result.type
        }
        User()
    })
    input.value = ""
    });
