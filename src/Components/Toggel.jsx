function Toggel({ checked, onClick , onChange }) {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" onClick={onClick} onChange={onChange} checked={checked} readOnly className="sr-only peer" />
            <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
    );
}

export default Toggel;