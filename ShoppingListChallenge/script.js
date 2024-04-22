const itemList = [];

const submit = document.querySelector('#item-form .btn');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    const item = document.getElementById('item-input').value;
    document.getElementById('item-input').value = "";
    if(!item){
        return;
    }

    if(itemList.length < 1){
        const container = document.querySelector('.container');
        
        const filterDiv = document.createElement('div');
        filterDiv.className = "filter";
        const filterInput = document.createElement('input');
        filterInput.type = "input";
        filterInput.className = "form-input-filter";
        filterInput.id = "filter";
        filterInput.placeholder ="Filter Items";
        filterDiv.appendChild(filterInput);
        filterInput.addEventListener('input', filterItems);

        const ul = document.createElement('ul');
        ul.className = "items";
        ul.id = "item-list";

        const clearBtn = document.createElement('button');
        clearBtn.id = "clear";
        clearBtn.className = "btn-clear";
        clearBtn.textContent = "Clear All";
        clearBtn.addEventListener('click', clearAllEvent);

        container.appendChild(filterDiv);
        container.appendChild(ul);
        container.appendChild(clearBtn);

    }

    itemList.push(item);
    addItemsToUL(item);
    localStorage.setItem("itemList", itemList);
});

function addItemsToUL(item) {
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
}

function deleteItem(e){
    if(!confirm("Are you sure, you want to delete the item?")){
        return;
    }
    if(e.target.nodeName === "I" ){
        itemList.splice(itemList.indexOf(e.target.parentNode.parentNode.textContent), 1);
        e.target.parentNode.parentNode.remove();
        localStorage.setItem("itemList", itemList);
        return;
    }
    if(e.target.nodeName === "BUTTON"){
        itemList.splice(itemList.indexOf(e.target.parentNode.textContent), 1);
        e.target.parentNode.remove();
        localStorage.setItem("itemList", itemList);
        return;
    }
}

function clearAllEvent(e){
    if(!confirm("Are you sure, you want to clear all the item?")){
        return;
    }
    clearAllItems();
    document.querySelector('ul').remove();
    document.querySelector('.filter').remove();
    e.target.remove();
    while(itemList.length > 0)
    {
        itemList.pop();
    }
    localStorage.setItem("itemList", itemList);
}


function filterItems(e){
    const filterValue = e.target.value.toLowerCase();
    const filteredItemList = itemList.filter((item) => {
        return item.toLowerCase().includes(filterValue);
    });
    clearAllItems();
    filteredItemList.forEach((item) => addItemsToUL(item));
};

function clearAllItems() {
    const items = document.querySelectorAll('li');
    items.forEach((item) => item.remove());
}
