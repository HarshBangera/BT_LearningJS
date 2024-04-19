const itemList = [];

const submit = document.querySelector('#item-form .btn');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const item = document.getElementById('item-input').value;
    document.getElementById('item-input').value = "";
    
    if(!item){
        return;
    }

    itemList.push(item);
    const ul = document.getElementById('item-list');
    const li = document.createElement('li');
    const text = document.createTextNode(item);
    li.appendChild(text);
    const btn = document.createElement('button');
    btn.className = "remove-item btn-link text-red";
    const i = document.createElement('i');
    i.className = "fa-solid fa-xmark";
    btn.appendChild(i);
    btn.addEventListener('click', deleteItem);
    li.appendChild(btn);
    ul.appendChild(li);

});

function deleteItem(e){
    if(!confirm("Are you sure, you want to delete the item?")){
        return;
    }
    if(e.target.nodeName === "I" ){
        e.target.parentNode.parentNode.remove();
        return;
    }
    if(e.target.nodeName === "BUTTON"){
        e.target.parentNode.remove();
        return;
    }

}

const clear = document.getElementById('clear');
clear.addEventListener('click', (e) => {
    if(!confirm("Are you sure, you want to clear all the item?")){
        return;
    }
    const items = document.querySelectorAll('li');
    items.forEach((item) => item.remove());
});

const filter = document.getElementById('filter');
filter.addEventListener('input', (e) => {
    
});