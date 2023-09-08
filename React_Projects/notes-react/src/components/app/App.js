import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import './index.css';
import Sidebar from '../sidebar';
import Main from '../main';


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('note')) || []);
  const [activeNote, setActiveNote] = useState(false)
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  const addNewNote = () => {
    const newNote = {
      id: uuid(),
      title: '',
      body: "",
      lastModified: Date.now(),
    }
    setNotes([newNote, ...notes]);
    return newNote;
  }
  const onUpdatedNote = (updatedNote) => {
    const updatedNotesArray = notes.map(note => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    })
    setNotes(updatedNotesArray)
  }
  const onDeleteNote = (idToDelete) => {
    const deleteNote = notes.filter(note => note.id !== idToDelete)
    setNotes(deleteNote);
  }
  const getActiveNotes = () => {
    return notes.find((note) => note.id === activeNote);
  }

  return (
    <div className="app">
      <Sidebar
        onDeleteNote={onDeleteNote}
        notes={notes}
        addNewNote={addNewNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote} />
      <Main
        activeNote={getActiveNotes()}
        setActiveNote={setActiveNote}
        onUpdatedNote={onUpdatedNote} />
    </div>
  );
}
export default App;