function Button({onClick ,nameOfButton ,className ,type , onSubmit}) {
    return ( 
    <button onClick={onClick} className={className} type={type} onSubmit={onSubmit} > {nameOfButton} </button>
    );
}

export default Button;