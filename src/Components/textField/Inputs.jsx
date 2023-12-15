function Input({ required, placeholder, onChange, label, name, type, renderOptionInSelect ,selectedOption }) {
    if (type === "select") {
        return (
            <>
                <label className="block mb-2 text-sm font-medium text-white dark:text-white" >{label}</label>
                <select name={name} onChange={onChange} value={selectedOption} required={required} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-1.5" >
                    {renderOptionInSelect()}
                </select>
            </>
        )
    }
    if (type === "file") {
        return (<>
            <label className="block mb-2 text-sm font-medium text-white dark:text-white" >{label}</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type={type} name={name} onChange={onChange} placeholder={placeholder} required={required} />
        </>)
    } else {
        return (<>
            <div>
                <label className="block mb-2 text-sm font-medium text-white dark:text-white"> {label}</label>
                <input type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-1.5" name={name} onChange={onChange} placeholder={placeholder} required={required} />
            </div>
        </>
        )
    };
}

export default Input;