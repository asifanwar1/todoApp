const inputTxt = document.getElementById("inputTxt");
const list = document.getElementById("list");
const addbtn = document.getElementById("addbtn");
const delbtn = document.getElementById("delbtn");




addbtn.onclick = () =>{

    if(inputTxt.value !== ""){

    let li = document.createElement('li');
    let p = document.createElement('p');
    p.innerText = inputTxt.value;
    
    let editbtn = document.createElement('button');
    let editbtntxt = document.createTextNode('Edit');
    editbtn.appendChild(editbtntxt);
    editbtn.setAttribute('class', 'editbutton');
    editbtn.setAttribute('onclick','editItem(this)');

    let deletebtn = document.createElement('button');
    let deletebtntxt = document.createTextNode('Delete');
    deletebtn.appendChild(deletebtntxt);
    deletebtn.setAttribute('class', 'deletebtn');
    deletebtn.setAttribute('onclick','deleteItem(this)');
    
   
    li.appendChild(p);
    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    
    list.appendChild(li);

    localStorage.setItem('todos', list.innerHTML);
    }       
    else{
        alert("Please Enter a ToDO Task");
    }
} 



getFromLocalStorage=()=>{
    let reference = (localStorage.getItem('todos'));
    
    if(reference){
        
        list.innerHTML = reference;
    }
}
getFromLocalStorage();



deleteItem = (e)=>{
    let selectedItem = e.parentNode;
    selectedItem.remove();

    localStorage.setItem('todos',list.innerHTML);
    
}



editItem = (e) =>{
    let currentValue = e.parentNode.firstChild.innerText;
    let currentChild = e.parentNode.firstChild;
    let currentNode = e.parentNode;
    let editInput = document.createElement('input');
    
    currentNode.appendChild(editInput);
    currentNode.insertAdjacentElement("afterbegin",editInput);

    editInput.setAttribute('class', 'editInput');
    editInput.setAttribute('id', 'editInput');
    editInput.setAttribute('value', currentValue);

    currentNode.removeChild(currentChild);

    let x = document.getElementById("editInput");
    
    x.addEventListener("keyup", (event)=>{
        if(event.keyCode === 13){
            
            let editValue = editInput.value;
            let p = document.createElement('p');
            p.innerText = editValue;

            currentNode.appendChild(p);
            currentNode.insertAdjacentElement("afterbegin",p);

            currentNode.removeChild(editInput);

            localStorage.setItem('todos',list.innerHTML);
            
        }
    });

}



delbtn.onclick = () =>{
    list.innerHTML = "";
    localStorage.clear();
}
