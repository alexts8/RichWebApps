import React, { useState } from 'react';

const NoteApp = () => {
  const [noteHeader, setNoteHeader] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [noteColor, setNoteColor] = useState('#ffcccc');
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');


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
      timestamp: new Date().toLocaleString(),
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

  // new function that takes a searchterm and returns the notes that contain this term
  const searchNotes = () => {
    const filteredNotes = notes.filter(
      (note) =>
        note.header.toLowerCase().includes(search.toLowerCase()) ||
        note.body.toLowerCase().includes(search.toLowerCase())
    );
    setNotes(filteredNotes);
  };

  //function to handle words being clicked
  const handleWordClick = (word) => {
    // Encode the word properly
    console.log(word)

    // define the url for the dictionary api, passing the selected word
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    // checking the api url 
    console.log('Before API call');
    console.log(apiUrl);

    // make the api request
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          alert("Definition couldn't be found!"); 
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

      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchNotes}>Search</button>

      <br></br>
      <br></br>

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
              {note.header.split(' ').map((word, index) => (
                <span
                  key={index}
                  style={{ cursor: 'pointer', marginRight: '5px', fontWeight: 'bold' }}
                  onClick={() => handleWordClick(word)}
                >
                  {word}
                </span>
              ))}
            </div>
            <div>
              {note.body.split(' ').map((word, index) => (
                <span
                  key={index}
                  style={{ cursor: 'pointer', marginRight: '5px' }}
                  onClick={() => handleWordClick(word)}
                >
                  {word}
                </span>
              ))}
            </div>
            <div>
              <small>Created: {note.timestamp}</small>
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
