import Logo from "../utils/Logo";
export default function HeaderControls({
    searchQuery,
    tagFilter,
    setSearchQuery,
    setTagFilter,
    onAddList,
    onLogout,
    matchedCount,
}) {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <div>
                <h1 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-purple-300"><Logo /> </span> KanbanFlow
                </h1>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
                <input
                    type="text"
                    placeholder="Search cards..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-3 py-2 bg-[#2a004d] text-white rounded-md border border-purple-800"
                />
                <input
                    type="text"
                    placeholder="Filter by tag"
                    value={tagFilter}
                    onChange={(e) => setTagFilter(e.target.value)}
                    className="px-3 py-2 bg-[#2a004d] text-white rounded-md border border-purple-800"
                />
                <button
                    onClick={onAddList}
                    className="bg-purple-700 hover:bg-purple-500  text-white px-4 py-2 rounded-md font-medium"
                >
                    + Add List
                </button>
                <button
                    onClick={onLogout}
                    className="border border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white transition-colors px-4 py-2 rounded-md font-medium"
                >
                    Logout
                </button>

            </div>
        </div>
    );
}
