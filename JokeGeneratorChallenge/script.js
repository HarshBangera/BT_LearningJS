function getJoke(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            const response = JSON.parse(this.responseText);
            const jokeDiv = document.getElementById('joke');
            const loadingText = jokeDiv.firstChild;
            const jokeText = document.createTextNode(response.value);
            jokeDiv.replaceChild(jokeText, loadingText);
        }
    };
    xhr.send();
}

const button = document.getElementById('joke-btn');

button.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);