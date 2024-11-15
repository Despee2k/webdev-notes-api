import { useState, useEffect } from 'react';
import { getNotes, createNote, updateNote, deleteNote } from '../services/api';
import NoteCard from '../components/NoteCard';
import NoteForm from '../components/NoteForm';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error('Failed to load notes:', error);
    }
  };

  const handleCreateNote = async (note) => {
    try {
      await createNote(note);
      loadNotes();
    } catch (error) {
      console.error('Failed to create note:', error);
    }
  };

  const handleUpdateNote = async (id, note) => {
    try {
      await updateNote(id, note);
      loadNotes();
    } catch (error) {
      console.error('Failed to update note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      loadNotes();
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Notes</h1>
          <div className="mt-4">
            <NoteForm onSubmit={handleCreateNote} />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onUpdate={handleUpdateNote}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;