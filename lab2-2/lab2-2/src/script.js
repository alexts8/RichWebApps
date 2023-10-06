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

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                notesContainer.removeChild(note);
            };

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = function() {
                const newHeader = prompt('Edit Note Header:', noteHeader);
                const newBody = prompt('Edit Note Body:', noteBody);
                if (newHeader !== null && newBody !== null) {
                    header.textContent = newHeader;
                    body.textContent = newBody;
                }
            };

            note.appendChild(header);
            note.appendChild(body);
            note.appendChild(deleteButton);
            note.appendChild(editButton);

            const notesContainer = document.getElementById('notesContainer');
            notesContainer.appendChild(note);

            document.getElementById('noteHeader').value = '';
            document.getElementById('noteBody').value = '';
        }