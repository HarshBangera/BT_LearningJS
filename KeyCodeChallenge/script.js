function onKeyPress(e){
    const classItems = document.querySelectorAll('.key');
    
    const oldKey = classItems[0].firstChild;
    const newKey = document.createTextNode(e.key);
    classItems[0].replaceChild(newKey, oldKey);

    const oldKeyCode = classItems[1].firstChild;
    const newKeyCode = document.createTextNode(e.keyCode);
    classItems[1].replaceChild(newKeyCode, oldKeyCode);

    const oldCode = classItems[2].firstChild;
    const newCode = document.createTextNode(e.code);
    classItems[2].replaceChild(newCode, oldCode);
}

const input = document.querySelector('body');
input.addEventListener('keydown', onKeyPress);
