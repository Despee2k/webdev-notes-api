import { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mt-1 bg-gray-700 text-white border-gray-600 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mt-1 bg-gray-700 text-white border-gray-600 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-gray-400 text-black rounded hover:bg-gray-300"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
