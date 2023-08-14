function createHeader () {
    let header = document.createElement("div");

    let addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.innerText = "+";
    addButton.addEventListener("click", () => {
        addNote();
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

function createSidebar() {
    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.id = 'sidebar';
    document.body.appendChild(sidebar);
}

function addNote(){
}

function deleteNote(noteId){
    
}

function editNote(noteId, sectionId){

}

createHeader();
createContainer();
createFooter();