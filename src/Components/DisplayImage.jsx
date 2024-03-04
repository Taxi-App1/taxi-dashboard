function DisplayImage({ image, isShow }) {
    const url = process.env.REACT_APP_URL

    return (<div className=" w-screen  h-screen flex items-center justify-center fixed top-0 left-0 z-10 bg-white ">
        <div className="w-[800px] h-[800px] relative ">
            <span className=" text-4xl font-bold cursor-pointer absolute -top-16 -right-16" onClick={() => isShow(false)}> X </span>
            <img src={url + image} alt="" className="w-full h-full " />
        </div>
    </div>);
}

export default DisplayImage;