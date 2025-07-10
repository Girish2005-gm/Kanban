import { Droppable, Draggable } from "@hello-pangea/dnd";
import { highlightMatch } from "../utils/highlightMatch";
import { Trash2 } from "lucide-react";

export default function ListColumn({
    listId,
    list,
    onAddCard,
    onDeleteList,
    onCardClick,
    onDeleteCard,
    searchQuery,
    tagFilter,
}) {
    const cards = Array.isArray(list?.items) ? list.items : [];

    const matchesSearch = (card) => {
        const q = searchQuery.toLowerCase();
        const tagQ = tagFilter.toLowerCase();
        const matchesQuery =
            card.title?.toLowerCase().includes(q) ||
            card.description?.toLowerCase().includes(q) ||
            card.dueDate?.toLowerCase().includes(q);
        const matchesTag = !tagQ || card.tags?.some((tag) => tag.toLowerCase().includes(tagQ));
        return matchesQuery && matchesTag;
    };

    return (
        <Droppable droppableId={listId.toString()}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-[#250045] rounded-2xl p-4 w-80 flex-shrink-0 shadow-md border border-purple-800"
                >
                    {/* List Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-white truncate">{list.title}</h2>
                        <button
                            onClick={() => onDeleteList(listId)}
                            className="text-red-400 hover:text-red-500 text-sm"
                            title="Delete List"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Add Card */}
                    <button
                        onClick={() => onAddCard(listId)}
                        className="w-full text-sm text-purple-300 hover:text-purple-100 mb-4 px-3 py-1.5 rounded-md bg-[#31005c] hover:bg-[#3f007a] transition"
                    >
                        + Add Card
                    </button>

                    {/* Cards */}
                    {cards.filter(matchesSearch).map((card, index) => (
                        <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="relative bg-[#3c006d] transition-colors text-white rounded-xl p-4 mb-4 shadow-lg border border-purple-900"
                                >
                                    {/* Delete Button - outside the clickable area */}
                                    <button
                                        onClick={() => onDeleteCard(listId, card.id)}
                                        className="absolute top-5 right-2 text-red-400 hover:text-red-500 text-sm z-10"
                                        title="Delete Card"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>

                                    {/* Card Content Button */}
                                    <button
                                        onClick={() => onCardClick(listId, card)}
                                        className="text-left w-full space-y-3"
                                    >
                                        {/* Title */}
                                        <h3 className="font-semibold text-lg leading-snug text-white pr-6">
                                            {highlightMatch(card.title, searchQuery)}
                                        </h3>

                                        {/* Description */}
                                        {card.description && (
                                            <p className="text-sm text-gray-200 line-clamp-3 leading-snug font-light pt-2">
                                                {highlightMatch(card.description, searchQuery)}
                                            </p>
                                        )}

                                        {/* Due Date */}
                                        {card.dueDate && (
                                            <div className="text-xs text-purple-200 bg-[#250045] inline-block px-3 py-1 rounded-md font-medium">
                                                Due by <span className="font-medium">{card.dueDate}</span>
                                            </div>
                                        )}

                                        {/* Tags */}
                                        {card.tags?.length > 0 && (
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {card.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs bg-purple-600/80 text-white px-2 py-0.5 rounded-full font-medium"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </button>
                                </div>
                            )}
                        </Draggable>


                    ))}

                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}
