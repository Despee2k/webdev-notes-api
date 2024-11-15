import { useState } from 'react';

const NoteCard = ({ note, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(note.id, { title, content });
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow text-white">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-gray-700 border-gray-600 text-white rounded"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 bg-gray-700 border-gray-600 text-white rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-600 text-gray-300 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-400 text-black rounded hover:bg-gray-300"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
          <p className="mt-2 text-gray-300">{content}</p>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-gray-600 text-gray-300 rounded hover:bg-gray-500"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteCard;