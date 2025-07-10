import { Droppable, Draggable } from "@hello-pangea/dnd";
import { highlightMatch } from "../utils/highlightMatch";
import { Calendar, Trash2 } from "lucide-react";
import { format } from "date-fns";

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
        const matchesTag =
            !tagQ || card.tags?.some((tag) => tag.toLowerCase().includes(tagQ));
        return matchesQuery && matchesTag;
    };

    return (
        <Droppable droppableId={listId.toString()}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-[#250045] rounded-2xl p-4 w-full shadow-md border border-purple-800"
                >
                    {/* List Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-white truncate">
                            {list.title}
                        </h2>
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
                        <Draggable
                            key={card.id}
                            draggableId={card.id.toString()}
                            index={index}
                        >
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="relative bg-gradient-to-br from-[#3f007a] to-[#2c005a] transition-colors text-white rounded-xl p-4 mb-4 shadow-lg border border-purple-900"
                                >
                                    <button
                                        onClick={() => onCardClick(listId, card)}
                                        className="text-left w-full space-y-2"
                                    >
                                        {/* Title Row */}
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-[20px] leading-snug text-white">
                                                {highlightMatch(card.title, searchQuery)}
                                            </h3>

                                            {/* Delete if no date */}
                                            {!card.dueDate && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onDeleteCard(listId, card.id);
                                                    }}
                                                    className="text-red-400 hover:text-red-500 text-sm"
                                                    title="Delete Card"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>

                                        {/* Date + Delete if date exists */}
                                        {card.dueDate && (
                                            <div className="flex justify-between items-center py-1">
                                                <div className="flex items-center gap-1 text-xs font-semibold text-blue-300">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>
                                                        {format(new Date(card.dueDate), "d MMM yyyy")}
                                                    </span>
                                                </div>

                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onDeleteCard(listId, card.id);
                                                    }}
                                                    className="text-red-400 hover:text-red-500 text-sm"
                                                    title="Delete Card"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}

                                        {/* Description */}
                                        {card.description && (
                                            <p className="text-[15px] text-gray-200 leading-snug">
                                                {highlightMatch(card.description, searchQuery)}
                                            </p>
                                        )}

                                        {/* Tags */}
                                        {card.tags?.length > 0 && (
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {card.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[11px] bg-purple-800 text-white px-2 py-0.5 rounded-full font-medium"
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
