if (!localStorage.getItem('notes')) 
    localStorage.setItem('notes', JSON.stringify({}));

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
    editButton.id = "sortButton";
    editButton.innerText = "#";
    editButton.addEventListener("click", () => {
        sortBar();
    });

    header.classList.add('header');
    header.innerText = 'Tasks';

    header.appendChild(editButton);
    header.appendChild(addButton);
    document.body.appendChild(header);
    return;
};

function createFooter(){
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = `<p>Created by <a href="https://github.com/sadsultan">Saad Sultan</a></p>`;
    document.body.appendChild(footer);
    return;
}

function createContainer(){
    let container = document.createElement('div');
    container.classList.add('container');
    container.id = 'container';
    document.body.appendChild(container);
    return;
}

function sortBar(){
    let sortBar = document.createElement('div');
    sortBar.classList.add('sortBar');
    sortBar.id = 'sortBar';

    let sortTitle = document.createElement('button');
    sortTitle.classList.add('sortTitle');
    sortTitle.innerText = 'Title';
    sortTitle.addEventListener('click', () => {
        sortTitle();
    });

    let sortDate = document.createElement('button');
    sortDate.classList.add('sortDate');
    sortDate.innerText = 'Date';
    sortDate.addEventListener('click', () => {
        sortDate();
    });

    let sortDescription = document.createElement('button');
    sortDescription.classList.add('sortDescription');
    sortDescription.innerText = 'Description';
    sortDescription.addEventListener('click', () => {
        sortDescription();
    });

    sortBar.appendChild(sortTitle);
    sortBar.appendChild(sortDate);
    sortBar.appendChild(sortDescription);

    document.body.appendChild(sortBar);
    return;
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
    addNoteButton.innerText = 'Add Task';
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
    return;
}

function createNote(titleText, dateText, descriptionText){
    let container = document.getElementById('container');
    let note = document.createElement('div');
    note.id = titleText;
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

    let buttonHolder = document.createElement('div');
    buttonHolder.classList.add('buttonHolder');

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteNote');
    deleteButton.innerText = 'delete';
    deleteButton.addEventListener('click', () => {
        deleteNote(titleText);
    });

    let editButton = document.createElement('button');
    editButton.classList.add('editNote');
    editButton.innerText = 'edit';
    editButton.addEventListener('click', () => {
        editNote();
    });


    buttonHolder.appendChild(editButton);
    buttonHolder.appendChild(deleteButton);

    note.appendChild(title);
    note.appendChild(date);
    note.appendChild(description);
    note.appendChild(buttonHolder);

    container.appendChild(note);
    return;
}

function loadStoredNotes() {
    let notes = localStorage.getItem('notes');
    notes = JSON.parse(notes);

    for (let note in notes){
        createNote(
            notes[note].title,
            notes[note].date,
            notes[note].description
        );
    }
    return;
}

function addNote(){
    const titleText = document.getElementById('title').value;
    const dateText = document.getElementById('date').value;
    const descriptionText = document.getElementById('description').value;
    if (!titleText || !dateText) {
        alert('Please fill all the fields');
        return;
    } else {
        createNote(titleText, dateText, descriptionText);
        storeNote(titleText, dateText, descriptionText);
        document.body.removeChild(document.getElementById('newNote'));
        return;
    }
}

function storeNote(title, date, description){
    let notes = localStorage.getItem('notes');
    notes = JSON.parse(notes);
    notes[title] = {
        title: title,
        date: date,
        description: description
    }
    localStorage.setItem('notes', JSON.stringify(notes));
    return;
}

function deleteNote(noteId){
    let container = document.getElementById('container');
    let note = document.getElementById(noteId);
    container.removeChild(note);

    deleteStoredNote(noteId);
    return;
}

function deleteStoredNote(noteId){
    let notes = localStorage.getItem('notes');
    notes = JSON.parse(notes);

    if (noteId in notes) delete notes[noteId];

    localStorage.setItem('notes', JSON.stringify(notes));
    return;
}

function editNote(){
    return;
}

createHeader();
createContainer();
createFooter();
loadStoredNotes();