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

            const notesContainer = document.getElementById('notesContainer');
            notesContainer.appendChild(note);

            document.getElementById('noteHeader').value = '';
            document.getElementById('noteBody').value = '';

        }
const createNoteButton = document.getElementById('createNoteButton'); 
createNoteButton.addEventListener('click', createNote);