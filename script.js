function createHeader () {
    let header = document.createElement("div");

    let addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.innerText = "+";
    addButton.addEventListener("click", () => {
        let newNote = document.getElementById('newNote');
        if (newNote) document.body.removeChild(newNote);
        createInput();
    });

    let editButton = document.createElement("button");
    editButton.id = "editButton";
    editButton.innerText = "#";
    editButton.addEventListener("click", () => {
        enableEditing();
    });

    header.classList.add('header');
    header.innerText = 'Tasks';

    header.appendChild(editButton);
    header.appendChild(addButton);
    document.body.appendChild(header);
};

function createFooter(){
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = `<p>Created by <a href="https://github.com/sadsultan">Saad Sultan</a></p>`;
    document.body.appendChild(footer);
}

function createContainer(){
    let container = document.createElement('div');
    container.classList.add('container');
    container.id = 'container';
    document.body.appendChild(container);
}

function createInput() {
    let newNote = document.createElement('div');
    newNote.classList.add('newNote');
    newNote.id = 'newNote';

    let closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(newNote);
    });

    let form = document.createElement('form');
    form.classList.add('form');
    form.id = 'form';


    let addNoteButton = document.createElement('button');
    addNoteButton.classList.add('addNoteButton');
    addNoteButton.type = 'submit';
    addNoteButton.innerText = 'Add Note';
    addNoteButton.addEventListener('click', () => {
        addNote()
    });

    let title = document.createElement('input');
    title.id = 'title';
    title.placeholder = 'Title';
    title.type = 'text';
    title.name = 'title';
    title.required = true;

    let description = document.createElement('textarea');
    description.id = 'description';
    description.placeholder = 'Task description';
    description.name = 'description';

    let date = document.createElement('input');
    date.id = 'date';
    date.type = 'date';
    date.name = 'date';
    date.required = true;
    
    form.appendChild(title);
    form.appendChild(date);
    form.appendChild(description);
    form.appendChild(addNoteButton);
    
    newNote.appendChild(form);
    newNote.appendChild(closeButton);
    
    document.body.appendChild(newNote);
}

function createNote(titleText, dateText, descriptionText){
    let container = document.getElementById('container');
    let note = document.createElement('div');
    note.id = `note${container.childElementCount}`;
    note.classList.add('note');
    
    let title = document.createElement('h2');
    title.innerText = titleText;
    title.classList.add('title');

    let date = document.createElement('p');
    date.innerText = dateText;
    date.classList.add('date');

    let description = document.createElement('p');  
    description.innerText = descriptionText;
    description.classList.add('description');

    note.appendChild(title);
    note.appendChild(date);
    note.appendChild(description);

    container.appendChild(note);
}

function addNote(){
    const titleText = document.getElementById('title').value;
    const dateText = document.getElementById('date').value;
    const descriptionText = document.getElementById('description').value;

    createNote(titleText, dateText, descriptionText);
    storeNote(titleText, dateText, descriptionText);

    document.body.removeChild(document.getElementById('newNote'));
}

function deleteNote(noteId){
    let container = document.getElementById('container');
    let note = document.getElementById(noteId);
    container.removeChild(note);

    deleteStoredNote(noteId);
}

function enableEditing(){
    
}

function storeNote(title, date, description){

}

function deleteStoredNote(noteId){

}

function loadStoredNotes() {

}

createHeader();
createContainer();
createFooter();
loadStoredNotes();