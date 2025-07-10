import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CardModal({ card, onClose, onSave }) {
  const [title, setTitle] = useState(card.title || "");
  const [description, setDescription] = useState(card.description || "");
  const [dueDate, setDueDate] = useState(card.dueDate || "");
  const [tags, setTags] = useState(card.tags || []);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    setTitle(card.title || "");
    setDescription(card.description || "");
    setDueDate(card.dueDate || "");
    setTags(card.tags || []);
    setNewTag("");
  }, [card]);

  const handleSave = () => {
    onSave({
      ...card,
      title: title.trim(),
      description: description.trim(),
      dueDate,
      tags,
    });
    onClose();
  };

  const handleAddTag = () => {
    const clean = newTag.trim();
    if (clean && !tags.includes(clean)) {
      setTags([...tags, clean]);
    }
    setNewTag("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-[#2a004d] rounded-2xl shadow-2xl w-full max-w-xl p-6 relative border border-purple-800">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-300 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold text-white mb-6">📝 Edit Card</h2>

        {/* Title */}
        <label className="block text-sm text-purple-200 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-md bg-[#3a006d] text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Enter card title"
        />

        {/* Description */}
        <label className="block text-sm text-purple-200 mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-md bg-[#3a006d] text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          rows={4}
          placeholder="Describe the task..."
        />

        {/* Due Date */}
        <label className="block text-sm text-purple-200 mb-1">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className=" text-white border bg-[#3a006d] border-purple-700 rounded-md px-4 mb-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none relative 
             [&::-webkit-calendar-picker-indicator]:invert 
             [&::-webkit-calendar-picker-indicator]:absolute 
             [&::-webkit-calendar-picker-indicator]:right-3 
             [&::-webkit-calendar-picker-indicator]:top-1/2 
             [&::-webkit-calendar-picker-indicator]:-translate-y-1/2"
        />


        {/* Tags */}
        <label className="block text-sm text-purple-200 mb-1">Tags</label>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-purple-700 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1"
            >
              #{tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="text-red-300 hover:text-red-500 ml-1"
              >
                ✕
              </button>
            </span>
          ))}
        </div>

        {/* Add Tag Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Add a tag..."
            className="flex-1 px-3 py-2 rounded-md bg-[#3a006d] text-white border border-purple-700"
          />
          <button
            onClick={handleAddTag}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm"
          >
            + Add
          </button>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-white  text-black font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
