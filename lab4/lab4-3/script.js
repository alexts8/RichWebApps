const { Observable, fromEvent } = rxjs;

class Note {
    constructor() {
        this.parentNote = null;
        this.relatedNotes = [];
        this.noteElement = null; 
    }

    createNote() {
        const noteHeader = document.getElementById('noteHeader').value;
        const noteBody = document.getElementById('noteBody').value;
        const noteColor = document.getElementById('noteColor').value;

        const note = document.createElement('div');
        note.className = 'note';
        note.style.backgroundColor = noteColor;
        this.noteElement = note;

        const header = document.createElement('h3');
        header.textContent = noteHeader;

        const body = document.createElement('p');
        body.textContent = noteBody;

        /*delete button observable stream*/
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        const click_delete = fromEvent(deleteButton, 'click');
        click_delete.subscribe(() => this.deleteAll());

        /*adding related note button and stream*/
        const relatedNote = document.createElement('button');
        relatedNote.textContent = 'Add Related Note';
        const click_related = fromEvent(relatedNote, 'click');
        click_related.subscribe(() => this.addRelatedNote(this));

        /*edit button observable stream*/
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        const click_edit = fromEvent(editButton, 'click');
        click_edit.subscribe(() => this.editNoteHeaderAndBody(header, body));

        note.appendChild(header);
        note.appendChild(body);
        note.appendChild(deleteButton);
        note.appendChild(editButton);
        note.appendChild(relatedNote);
        

        const notesContainer = document.getElementById('notesContainer');
        notesContainer.appendChild(note);

        document.getElementById('noteHeader').value = '';
        document.getElementById('noteBody').value = '';

    }

    deleteAll() {

        const notesContainer = document.getElementById('notesContainer');
        notesContainer.removeChild(this.noteElement);

        for (const relatedNote of this.relatedNotes) {
            console.log(relatedNote)
            relatedNote.deleteAll();
        }

    }


    addRelatedNote(parentNote) {
        const relatedNote = new Note();
        relatedNote.parentNote = parentNote;
        parentNote.relatedNotes.push(relatedNote);
        relatedNote.createNote();
    }

    editNoteHeaderAndBody(headerElement, bodyElement) {
        const newHeader = prompt('Edit Note Header:', headerElement.textContent);
        const newBody = prompt('Edit Note Body:', bodyElement.textContent);
        if (newHeader !== null && newBody !== null) {
            headerElement.textContent = newHeader;
            bodyElement.textContent = newBody;
        }
    }
    
}



const createNoteButton = document.getElementById('createNoteButton');
const click_create = fromEvent(createNoteButton, 'click');


const notesInstance = new Note();

click_create.subscribe(() => notesInstance.createNote());