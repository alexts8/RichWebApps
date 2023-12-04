import React, { useState } from 'react';

const NoteApp = () => {
  const [noteHeader, setNoteHeader] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [noteColor, setNoteColor] = useState('#ffcccc');
  const [notes, setNotes] = useState([]);

  const handleNoteHeaderChange = (event) => {
    setNoteHeader(event.target.value);
  };

  const handleNoteBodyChange = (event) => {
    setNoteBody(event.target.value);
  };

  const handleNoteColorChange = (event) => {
    setNoteColor(event.target.value);
  };

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      header: noteHeader,
      body: noteBody,
      color: noteColor,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);

    setNoteHeader('');
    setNoteBody('');
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const editNote = (id) => {
    const editedNotes = notes.map((note) => {
      if (note.id === id) {
        const newHeader = prompt('Edit Note Header:', note.header);
        const newBody = prompt('Edit Note Body:', note.body);
        if (newHeader !== null && newBody !== null) {
          note.header = newHeader;
          note.body = newBody;
        }
      }
      return note;
    });

    setNotes(editedNotes);
  };

  const handleWordClick = (word) => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    console.log('Before API call');

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const entry = data[0];

        // retrieve the definition from the json api response
        const def = entry.meanings[0]?.definitions[0]?.definition;

        // check we got the right definition
        console.log(def);

        // display the definition of the selected word
        alert(`Definition for ${word}: ${def}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Note Taker</h1>

      <label htmlFor="noteHeader">Header:</label>
      <input
        type="text"
        id="noteHeader"
        value={noteHeader}
        onChange={handleNoteHeaderChange}
      />

      <br />

      <label htmlFor="noteBody">Body:</label>
      <textarea
        id="noteBody"
        value={noteBody}
        onChange={handleNoteBodyChange}
      ></textarea>

      <br />

      <label htmlFor="noteColor">Note Color:</label>
      <select
        id="noteColor"
        value={noteColor}
        onChange={handleNoteColorChange}
      >
        <option value="#ffcccc">Red</option>
        <option value="#ccffcc">Green</option>
        <option value="#ccccff">Blue</option>
      </select>

      <br />

      <button onClick={createNote}>Create Note</button>

      <div id="notesContainer">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note"
            style={{ backgroundColor: note.color }}
          >
            <div>
              <span
                style={{ cursor: 'pointer', marginRight: '5px' }}
                onClick={() => handleWordClick(note.header)}
              >
                {note.header}
              </span>
              {note.body}
            </div>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
            <button onClick={() => editNote(note.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteApp;
