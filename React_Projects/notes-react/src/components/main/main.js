import React from 'react';
import './style.css';
function Main({ activeNote, onUpdatedNote, setActiveNote }) {
    const onChange = (type, value) => {
        onUpdatedNote({
            ...activeNote,
            [type]: value,
            lastModified: Date.now()
        })
    }
    if (!activeNote) return <main className="main"></main>
    return (
        <main className="main active">
            <div onClick={() => setActiveNote(false)} className='main__close'>✕</div>
            <input
                type="text"
                className="main__input"
                placeholder="Title"
                autoFocus
                value={activeNote.title}
                onChange={(e) => onChange('title', e.target.value)}
            />
            <textarea
                onChange={(e) => onChange('body', e.target.value)}
                className="main__textarea"
                value={activeNote.body}
                placeholder="Description"></textarea>
        </main>
    )
}
export default Main