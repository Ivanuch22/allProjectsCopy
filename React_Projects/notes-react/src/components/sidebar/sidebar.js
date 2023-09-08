import React, { useState } from 'react';
import './style.css';
function Sidebar({ notes,
    addNewNote,
    onDeleteNote,
    activeNote,
    setActiveNote }) {
    const onClick = () => {
        setActiveNote(addNewNote().id)
    }
    function renderNotes() {
        const sortNotes = notes.sort((a, b) => b.lastModified - a.lastModified)
        return sortNotes.map(note => {
            return (
                <li
                    onClick={() => setActiveNote(note.id)}
                    className={`sidebar__note ${note.id === activeNote && "active"}`}
                    key={note.id}
                    id={note.id}>
                    <div className="sidebar__title">{note.title.substr(0, 30)}</div>
                    <div className="sidebar__description">{note.body.substr(0, 30) + "..."}</div>
                    <div className="sidebar__time">{new Date(note.lastModified).toLocaleDateString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })}</div>
                    <div onClick={() => onDeleteNote(note.id)} className='sidebar__delete'>Delete</div>
                </li >
            )
        })
    }

    return (
        <div className="sidebar">
            <button onClick={onClick} className="sidebar__button">Add Notes</button>
            <ul className='sidebar__block'>
                {renderNotes()}
            </ul>
        </div>
    )
}
export default Sidebar;