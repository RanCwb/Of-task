let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");




let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) ||  [];


function exList() {

    listElement.innerHTML = "";

    tarefas.map((todo) =>{

    
     let liElement = document.createElement("li");
     let tarefaText = document.createTextNode(todo);
     let linkElment = document.createElement("a");
     linkElment.setAttribute("href", "#");

     let = linkText = document.createTextNode("Excluir");
     linkElment.appendChild(linkText)

     let posicao = tarefas.indexOf(todo);

     linkElment.setAttribute("onclick", `delList(${posicao})`)

     liElement.appendChild(tarefaText);
     liElement.appendChild(linkElment)
     listElement.appendChild(liElement);

    })
    
}

exList()
function addList() {
    if (inputElement.value === "") {
        alert ("Por favor, defina uma tarefa :D")
        return false;
    } else {
        let novalist = inputElement.value;

        tarefas.push(novalist);
        inputElement.value = " "

        exList();
        save();
    }
    
}



function delList(posicao) {

   
    tarefas.splice(posicao, 1)
    exList();
    save();
}



function save() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
    
}


buttonElement.onclick = addList;




















