import './style.css';

const container = document.getElementById('container');

function createHeader () {
    let header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Notes';
    container.appendChild(header); 
};

function createNote () {
    let noteDisplay = document.createElement('div');
    noteDisplay.innerHTML = noteHTML();
    noteDisplay.classList.add('note');
    container.appendChild(noteDisplay);
}

function noteHTML () {
    let title = document.getElementById('title');
    let note = document.getElementById('note');
    let html =  `<h1>${title.value}</h1>`+
                `<p>${note.value}</p>`+
                `<button onclick="deleteNote()">Delete</button>`+
                `<button onclick="editText()">Edit</button>`+
                ``;
}

createHeader();