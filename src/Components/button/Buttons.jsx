function Button({onClick ,nameOfButton ,type , onSubmit}) {
    return ( 
    <button onClick={onClick} type={type} onSubmit={onSubmit} className='text-white mt-1  w-full p-2 bg-secondary rounded-md active:scale-95'> {nameOfButton} </button>
    );
}

export default Button;