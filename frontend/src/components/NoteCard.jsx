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
    <div className="p-4 bg-white rounded-lg shadow">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600">{content}</p>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-blue-600 bg-blue-100 rounded hover:bg-blue-200"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="px-4 py-2 text-red-600 bg-red-100 rounded hover:bg-red-200"
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