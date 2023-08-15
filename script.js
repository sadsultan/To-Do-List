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
        createsideBar();
    });

    header.classList.add('header');
    header.innerText = 'Tasks';

    header.appendChild(editButton);
    header.appendChild(addButton);
    document.body.appendChild(header);
    return;
};


function createsideBar() {
    let SORT = '';
    let FILTER = '';
    let notes;

    let sideBar = document.createElement('div');
    sideBar.classList.add('sideBar');
    sideBar.id = 'sideBar';

    let closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(sideBar);
    });
    sideBar.appendChild(closeButton);

    let sortMenu = document.createElement('div');
    sortMenu.classList.add('sideBarMenu');

    let sortTitle = document.createElement('p');
    sortTitle.innerText = 'Sort by:';
    sortTitle.classList.add('sideBarTitle');

    let sortDateButton = document.createElement('button');
    sortDateButton.classList.add('sideBarButton');
    sortDateButton.innerText = 'Date';
    sortDateButton.addEventListener('click', () => {
        loadStoredNotes();
        sortNotes('date');
    });

    let sortImportanceButton = document.createElement('button');
    sortImportanceButton.classList.add('sideBarButton');
    sortImportanceButton.innerText = 'Importance';
    sortImportanceButton.addEventListener('click', () => {
        loadStoredNotes();
        sortNotes('importance');
    });

    sortMenu.appendChild(sortTitle);
    sortMenu.appendChild(sortDateButton);
    sortMenu.appendChild(sortImportanceButton);

    let filterMenu = document.createElement('div');
    filterMenu.classList.add('sideBarMenu');

    let filterTitle = document.createElement('p');
    filterTitle.innerText = 'Filter by:';
    filterTitle.classList.add('sideBarTitle');

    let filterDateLabel = document.createElement('label');
    filterDateLabel.classList.add('sideBarLabel');
    filterDateLabel.innerText = 'Date:';
    filterDateLabel.for = 'date';

    let filterDateInput = document.createElement('input');
    filterDateInput.id = 'filterDate';
    filterDateInput.classList.add('sideBarInput');
    filterDateInput.type = 'date';
    filterDateInput.placeholder = 'Date';

    let filterImportanceLabel = document.createElement('label');
    filterImportanceLabel.classList.add('sideBarLabel');
    filterImportanceLabel.innerText = 'Urgency:';
    filterImportanceLabel.for = 'importance';

    let filterImportanceInput = document.createElement('input');
    filterImportanceInput.id = 'filterImportance';
    filterImportanceInput.classList.add('sideBarInput');
    filterImportanceInput.type = 'range';
    filterImportanceInput.min = 1;
    filterImportanceInput.max = 5;
    filterImportanceInput.name = 'importance';

    let filterButton = document.createElement('button');
    filterButton.classList.add('sideBarButton');
    filterButton.innerText = 'Filter';
    filterButton.addEventListener('click', () => {
        loadStoredNotes();
        filterNotes();
    });

    filterMenu.appendChild(filterTitle);
    filterMenu.appendChild(filterDateLabel);
    filterMenu.appendChild(filterDateInput);
    filterMenu.appendChild(filterImportanceLabel);
    filterMenu.appendChild(filterImportanceInput);
    filterMenu.appendChild(filterButton);

    sideBar.appendChild(sortMenu);
    sideBar.appendChild(filterMenu);

    let miscButtons = document.createElement('div');
    miscButtons.classList.add('sideBarMenu');

    let applyBothButton = document.createElement('button');
    applyBothButton.classList.add('sideBarButton');
    applyBothButton.innerText = 'Apply Both';
    applyBothButton.addEventListener('click', () => {
        loadStoredNotes();
        applyBoth(SORT, FILTER);
    });

    let reverseButton = document.createElement('button');
    reverseButton.classList.add('sideBarButton');
    reverseButton.innerText = 'Reverse';
    reverseButton.addEventListener('click', () => {
        reverse();
    });

    let clearButton = document.createElement('button');
    clearButton.classList.add('sideBarButton');
    clearButton.innerText = 'Clear';
    clearButton.addEventListener('click', () => {
        let container = document.getElementById('container');
        container.innerHTML = '';
        loadStoredNotes();
    });

    miscButtons.appendChild(applyBothButton);
    miscButtons.appendChild(reverseButton);
    miscButtons.appendChild(clearButton);

    sideBar.appendChild(miscButtons);

    document.body.appendChild(sideBar);
    return;
}

function sortNotes(sortBy) {
    let container = document.getElementById('container');
    let notesArray = Array.from(container.childNodes);
    let sortedNotesArray;

    if (sortBy === 'date') {
        sortedNotesArray = notesArray.sort((a, b) => {
            let aDate = a.childNodes[1].childNodes[0].innerText;
            let bDate = b.childNodes[1].childNodes[0].innerText;
            return new Date(aDate) - new Date(bDate);
        });
    } else if (sortBy === 'importance') {
        const regex = /\d+$/;

        sortedNotesArray = notesArray.sort((a, b) => {
        let aImportance = a.childNodes[1].childNodes[1].innerText;
        let bImportance = b.childNodes[1].childNodes[1].innerText;
        return parseInt(aImportance.match(regex), 10) - parseInt(bImportance.match(regex), 10);
        });
        
        sortedNotesArray = sortedNotesArray.reverse();
    } else return;

    container.innerHTML = '';
    sortedNotesArray.forEach(note => {
        container.appendChild(note);
    });

    return;
}

function filterNotes(changedNotes=false, filterBy) {
    
    return;
}

function applyBoth(sortBy, filterBy) {
    if (sortBy !== '') {

    }
    return;
}

function reverse() {
    let container = document.getElementById('container');
    let reversedNotesArray = Array.from(container.childNodes).reverse();

    container.innerHTML = '';
    reversedNotesArray.forEach(note => {
        container.appendChild(note);
    });

    return;
}

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

function createInput(isEdit = false) {
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
    addNoteButton.innerText = 'Save Task';
    addNoteButton.addEventListener('click', () => {
        if(isEdit) updateNote(isEdit);
        else addNote();
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

    let importanceLabel = document.createElement('label');
    importanceLabel.innerText = 'Urgency Level:';
    importanceLabel.for = 'importance';

    let importance = document.createElement('input');
    importance.id = 'importance';
    importance.type = 'range';
    importance.name = 'importance';
    importance.min = 1;
    importance.max = 5;

    if (isEdit) {
        let titleText = document.getElementById(isEdit).childNodes[0].innerText;
        let dateText = document.getElementById(isEdit).childNodes[1].innerText;
        let descriptionText = document.getElementById(isEdit).childNodes[2].innerText;
        let importanceText = document.getElementById(isEdit).childNodes[3].innerText;

        title.value = titleText;
        date.value = dateText;
        description.innerText = descriptionText;
        importance.value = importanceText;
    }
    
    form.appendChild(title);
    form.appendChild(date);
    form.appendChild(description);
    form.appendChild(importanceLabel);
    form.appendChild(importance);
    form.appendChild(addNoteButton);
    
    newNote.appendChild(form);
    newNote.appendChild(closeButton);
    
    document.body.appendChild(newNote);    
    return;
}

function createNote(titleText, dateText, descriptionText, importanceText = 1){
    let container = document.getElementById('container');
    let note = document.createElement('div');
    note.id = titleText;
    note.classList.add('note');
    
    let title = document.createElement('h2');
    title.innerText = titleText;
    title.classList.add('title');


    let details = document.createElement('div');
    details.classList.add('details');

    let date = document.createElement('p');
    date.innerText = dateText;
    date.classList.add('date');

    let importance = document.createElement('p');
    importance.innerText = "Urgency: " + importanceText;
    importance.classList.add('importance');

    details.appendChild(date);
    details.appendChild(importance);

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
        createInput(titleText);
    });

    buttonHolder.appendChild(editButton);
    buttonHolder.appendChild(deleteButton);

    note.appendChild(title);
    note.appendChild(details);
    note.appendChild(description);
    note.appendChild(buttonHolder);

    container.appendChild(note);
    return;
}

function loadStoredNotes() {
    let container = document.getElementById('container');
    container.innerHTML = '';

    let notes = localStorage.getItem('notes');
    notes = JSON.parse(notes);

    for (let note in notes){
        createNote(
            notes[note].title,
            notes[note].date,
            notes[note].description,
            notes[note].importance
        );
    }
    return;
}

function addNote() {
    const titleText = document.getElementById('title').value;
    const dateText = document.getElementById('date').value;
    const descriptionText = document.getElementById('description').value;
    const importanceText = document.getElementById('importance').value;

    if (!titleText || !dateText || !importanceText) {
        alert('Please fill all the fields');
        return;
    } else {
        createNote(titleText, dateText, descriptionText, importanceText);
        storeNote(titleText, dateText, descriptionText, importanceText);
        document.body.removeChild(document.getElementById('newNote'));
        return;
    }
}

function storeNote(title, date, description, importance){
    let notes = localStorage.getItem('notes');
    notes = JSON.parse(notes);
    notes[title] = {
        title: title,
        date: date,
        description: description,
        importance: importance
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

function updateNote(noteId) {
    const titleText = document.getElementById('title').value;
    const dateText = document.getElementById('date').value;
    const descriptionText = document.getElementById('description').value;
    const importanceText = document.getElementById('importance').value;
    if (!titleText || !dateText || !importanceText) {
        alert('Please fill all the fields');
    } else {
        deleteNote(noteId);
        createNote(titleText, dateText, descriptionText, importanceText);
        document.body.removeChild(document.getElementById('newNote'));
    }
    return;
}

if (!localStorage.getItem('notes')) 
    localStorage.setItem('notes', JSON.stringify({}));
createHeader();
createContainer();
createFooter();
loadStoredNotes();