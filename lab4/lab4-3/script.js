const createNoteButton = document.getElementById('createNoteButton'); 
const { Observable, fromEvent } = rxjs;
const click_create = fromEvent(createNoteButton, 'click');
click_create.subscribe(() => createNote());

function createNote() {
            const noteHeader = document.getElementById('noteHeader').value;
            const noteBody = document.getElementById('noteBody').value;
            const noteColor = document.getElementById('noteColor').value;

            const note = document.createElement('div');
            note.className = 'note';
            note.style.backgroundColor = noteColor;

            const header = document.createElement('h3');
            header.textContent = noteHeader;
            
            const body = document.createElement('p');
            body.textContent = noteBody;

            /*delete button observable stream*/
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            const { Observable, fromEvent } = rxjs;
            const click_delete = fromEvent(deleteButton, 'click');
            click_delete.subscribe(() => notesContainer.removeChild(note));

            /*adding related note button*/
            const relatedNote = document.createElement('button');
            relatedNote.textContent = 'Add Related Note';
            const click_related = fromEvent(relatedNote, 'click');
            click_related.subscribe(function() {

            });

            /*edit button observable stream*/
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            const click_edit = fromEvent(editButton, 'click');
            click_edit.subscribe(function() {
                const newHeader = prompt('Edit Note Header:', noteHeader);
                const newBody = prompt('Edit Note Body:', noteBody);
                if (newHeader !== null && newBody !== null) {
                    header.textContent = newHeader;
                    body.textContent = newBody;
                }
            });

            note.appendChild(header);
            note.appendChild(body);
            note.appendChild(deleteButton);
            note.appendChild(editButton);
            note.appendChild(relatedNote)

            const notesContainer = document.getElementById('notesContainer');
            notesContainer.appendChild(note);

            document.getElementById('noteHeader').value = '';
            document.getElementById('noteBody').value = '';

}

