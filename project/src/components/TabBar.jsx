function TabBar({ openTabs, closeTab }) {
    return (
        <div className="flex space-x-4 bg-tab p-2 border-b border-border">
            {openTabs.map((tab) => (
                <button key={tab} className="px-4 py-1 bg-highlight rounded text-white">Experiencia
                    {/* Más pestañas se añadirán dinámicamente */}
                    {tab}
                    < span onClick={() => closeTab(tab)} className="ml-2 text-sm cursor-pointer text-red-500">x</span>
                </button>
            ))}
        </div >
    )
}

export default TabBar