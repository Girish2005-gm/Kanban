import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { DragDropContext } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import CardModal from "../componants/CardModal";
import ListColumn from "../componants/ListColumn";
import HeaderControls from "../componants/HeaderControls";
import toast from "react-hot-toast";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [tagFilter, setTagFilter] = useState("");
  const [lists, setLists] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [activeListId, setActiveListId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showListModal, setShowListModal] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");

  const boardRef = doc(db, "users", user.uid, "boards", "default");

  useEffect(() => {
    const fetchBoard = async () => {
      const docSnap = await getDoc(boardRef);
      if (docSnap.exists()) {
        const data = docSnap.data().lists || {};
        if (Object.keys(data).length === 0) {
          const defaultLists = ["Start", "Progress", "Complete"].reduce((acc, title) => {
            const id = uuidv4();
            acc[id] = { id, title, items: [] };
            return acc;
          }, {});
          setLists(defaultLists);
          await setDoc(boardRef, { lists: defaultLists });
        } else {
          setLists(data);
        }
      } else {
        const defaultLists = ["Start", "Progress", "Complete"].reduce((acc, title) => {
          const id = uuidv4();
          acc[id] = { id, title, items: [] };
          return acc;
        }, {});
        await setDoc(boardRef, { lists: defaultLists });
        setLists(defaultLists);
      }
      setLoading(false);
    };
    fetchBoard();
  }, []);

  const saveBoard = async (updatedLists) => {
    await setDoc(boardRef, { lists: updatedLists });
  };

  const logout = () => {
    auth.signOut();
    toast.success("Logged out");
    navigate("/login");
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceList = lists[source.droppableId];
    const destList = lists[destination.droppableId];
    if (!sourceList || !destList) return;

    const sourceItems = [...sourceList.items];
    const destItems = [...destList.items];
    const [movedItem] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, movedItem);
      const updated = {
        ...lists,
        [source.droppableId]: {
          ...sourceList,
          items: sourceItems,
        },
      };
      setLists(updated);
      saveBoard(updated);
    } else {
      destItems.splice(destination.index, 0, movedItem);
      const updated = {
        ...lists,
        [source.droppableId]: {
          ...sourceList,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destList,
          items: destItems,
        },
      };
      setLists(updated);
      saveBoard(updated);
    }
  };

  const handleCardClick = (listId, card) => {
    setActiveListId(listId);
    setActiveCard(card);
  };

  const handleSaveCard = (updatedCard) => {
    const updatedList = {
      ...lists[activeListId],
      items: lists[activeListId].items.map((item) =>
        item.id === updatedCard.id ? updatedCard : item
      ),
    };
    const updated = { ...lists, [activeListId]: updatedList };
    setLists(updated);
    saveBoard(updated);
    toast.success("Card updated");
  };

  const handleAddCard = (listId) => {
    const newCard = {
      id: uuidv4(),
      title: "New Card",
      description: "",
      dueDate: "",
      tags: [],
    };
    const updatedList = {
      ...lists[listId],
      items: [...lists[listId].items, newCard],
    };
    const updated = { ...lists, [listId]: updatedList };
    setLists(updated);
    saveBoard(updated);
    toast.success("Card added!");
  };

  const handleDeleteCard = (listId, cardId) => {
    const updatedList = {
      ...lists[listId],
      items: lists[listId].items.filter((item) => item.id !== cardId),
    };
    const updated = { ...lists, [listId]: updatedList };
    setLists(updated);
    saveBoard(updated);
    toast.success("Card deleted");
  };

  const handleDeleteList = (listId) => {
    const updated = { ...lists };
    delete updated[listId];
    setLists(updated);
    saveBoard(updated);
    toast.success("List deleted");
  };

  const handleAddList = () => {
    setShowListModal(true);
  };

  const handleConfirmAddList = () => {
    const id = uuidv4();
    const title = newListTitle.trim() || `List ${Object.keys(lists).length + 1}`;
    const newList = { id, title, items: [] };
    const updated = { ...lists, [id]: newList };
    setLists(updated);
    saveBoard(updated);
    toast.success("List added!");
    setNewListTitle("");
    setShowListModal(false);
  };

  const handleCancelAddList = () => {
    setNewListTitle("");
    setShowListModal(false);
  };

  const matchedCount = Object.values(lists).reduce((total, list) => {
    return (
      total +
      list.items.filter((card) => {
        const q = searchQuery.toLowerCase();
        const tagQ = tagFilter.toLowerCase();
        const matchesQuery =
          card.title?.toLowerCase().includes(q) ||
          card.description?.toLowerCase().includes(q) ||
          card.dueDate?.toLowerCase().includes(q);
        const matchesTag = !tagQ || card.tags?.some((tag) => tag.toLowerCase().includes(tagQ));
        return matchesQuery && matchesTag;
      }).length
    );
  }, 0);

  if (loading) return <div className="p-8 text-lg text-white">Loading board...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0032] to-[#3f0080] text-white p-6">
      <HeaderControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        tagFilter={tagFilter}
        setTagFilter={setTagFilter}
        onAddList={handleAddList}
        onLogout={logout}
        matchedCount={matchedCount}
      />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-wrap gap-6">

          {Object.entries(lists).map(([listId, list]) => (
            <div key={listId} className="w-full sm:w-[48%] lg:w-[32%]">
              <ListColumn
                listId={listId}
                list={list}
                onAddCard={handleAddCard}
                onDeleteList={handleDeleteList}
                onCardClick={handleCardClick}
                onDeleteCard={handleDeleteCard}
                searchQuery={searchQuery}
                tagFilter={tagFilter}
              />
            </div>
          ))}

        </div>
      </DragDropContext>

      {activeCard && (
        <CardModal
          card={activeCard}
          onClose={() => setActiveCard(null)}
          onSave={handleSaveCard}
        />
      )}

      {showListModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#2a004d] p-6 rounded-lg w-1/2 shadow-lg border border-purple-700">
            <h2 className="text-xl font-bold text-white mb-4">Add New List</h2>
            <input
              type="text"
              placeholder="Enter list name"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              className="w-full p-2 rounded bg-[#3f0070] text-white border border-purple-600 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancelAddList}
                className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAddList}
                className="px-4 py-2 rounded bg-white text-black"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
