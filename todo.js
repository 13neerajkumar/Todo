const input=document.getElementById('inp');
const addbtn=document.getElementById('addbtn');
const list=document.getElementById('list');

addbtn.onclick=function(e){
    if(input.value==""){
        alert("Please Enter Something")
    }
    else{
        const todoText = inp.value;
        const li = document.createElement('li');
        li.innerText = todoText;
    
        const editbtn=document.createElement('button');
        editbtn.innerHTML="EDIT";
        li.append(editbtn);

        const deletebtn=document.createElement('button');
        deletebtn.innerHTML="DELETE";
        li.append(deletebtn);
    
        editbtn.onclick = function (e){
            input.value=li.innerText;
            li.remove();
        }
    
        deletebtn.onclick = function (e) {
           li.remove();
        }
    
        list.append(li);
    
        inp.value = "";
    } 
}