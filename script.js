function createHeader () {
    let header = document.createElement("div");

    let addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.innerText = "+";
    addButton.addEventListener("click", () => {
        createInputNote();
    });

    let editButton = document.createElement("button");
    editButton.id = "editButton";
    editButton.innerText = "#";
    editButton.addEventListener("click", () => {
        editNote();
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

function createInputNote() {
    let inputNote = document.createElement('div');
    inputNote.classList.add('inputNote');
    inputNote.id = 'inputNote';

    let closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(inputNote);
    });

    let form = document.createElement('form');
    form.classList.add('form');
    form.id = 'form';


    let addNoteButton = document.createElement('button');
    addNoteButton.classList.add('addNoteButton');
    addNoteButton.type = 'submit';
    addNoteButton.innerText = 'Add Note';
    addNoteButton.addEventListener('click', () => {
        addNote();
    });

    let title = document.createElement('input');
    title.id = 'title';
    title.classList.add('title');
    title.placeholder = 'Title';
    title.type = 'text';
    title.name = 'title';
    title.required = true;

    let description = document.createElement('textarea');
    description.id = 'description';
    description.classList.add('description');
    description.placeholder = 'Task description';
    description.name = 'description';

    let date = document.createElement('input');
    date.id = 'date';
    date.classList.add('date');
    date.type = 'date';
    date.name = 'date';
    date.required = true;
    
    form.appendChild(title);
    form.appendChild(date);
    form.appendChild(description);
    form.appendChild(addNoteButton);
    
    inputNote.appendChild(form);
    inputNote.appendChild(closeButton);
    
    document.body.appendChild(inputNote);
}

function addNote(){
    let container = document.getElementById('container');
    let note = document.createElement('div');
    note.classList.add('note');
    note.id = `note${container.childElementCount}`;
    container.appendChild(note);
}

function deleteNote(noteId){
    let container = document.getElementById('container');
    let note = document.getElementById(noteId);
    container.removeChild(note);
}

function editNote(noteId, sectionId){

}

createHeader();
createContainer();
createFooter();