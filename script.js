var add = document.getElementById("add");
var newItem = document.getElementById("new-item");
var main = document.getElementsByTagName("main")[0];
var taskLeft = document.getElementById("task-left");

add.addEventListener("click", ItemAdd);

main.addEventListener("mouseenter", ItemAddDel);

function ItemAdd(){
    var itemDescription = newItem.value;
    if(itemDescription.length != 0){
        let item = document.createElement('div'); 
        item.classList.add("list-item");
        item.innerHTML = '<span class="check borderradius"><i class="far fa-circle fontsize2rem borderradius"></i></span><span class="ml10px description">'+itemDescription+'</span><span class="displaynone delete"><i class="fas fa-times-circle fontsize2rem"></i></span>';
        main.appendChild(item);
        taskLeft.innerHTML = parseInt(taskLeft.innerHTML) + 1;
    }
    newItem.value = '';
}

function ItemAddDel(){
    if(main.innerText.length != 0){
        let arrDelete = document.getElementsByClassName("delete");
        let checkItem = document.getElementsByClassName("check");

        for(var i = 0; i < arrDelete.length; i++){
            arrDelete[i].addEventListener("click", deleteItem);
        }

        for(var i = 0; i < checkItem.length; i++){
            checkItem[i].addEventListener("click", checkedItem);
        }
    }
}

function deleteItem(){
    if(this.parentElement.childNodes[0].classList.length>2){
        this.parentElement.remove();
        return;
    }
    this.parentElement.remove();
    taskLeft.innerHTML = parseInt(taskLeft.innerHTML) - 1;
}

function checkedItem(){
    if(this.classList.length < 3){
        taskLeft.innerHTML = parseInt(taskLeft.innerHTML) - 1;
    }else{
        taskLeft.innerHTML = parseInt(taskLeft.innerHTML) + 1;
    }
    this.classList.toggle("bgblack");
}