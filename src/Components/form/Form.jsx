import Input from "../textField/Inputs";
import { Cancel } from "@mui/icons-material"
import Button from "../button/Buttons";
import { useLocation } from "react-router-dom";



function Form({ title, inputsFiled, setFormVisible, formVisible, nameOfButton, onSubmit, typeOfButton, setDataPost, dataPost }) {


    const handelChage = (e) => {
        const { value } = e.target
        const { name } = e.target

        if (name === "image" || name === "picture_id") {
            setDataPost({
                ...dataPost, [name]: e.target.files[0]
            })
        } else {
            setDataPost({
                ...dataPost, [name]: value
            })
        }

    }
    const location = useLocation();
    const isDriverPage = location?.pathname?.includes("driver")

    // Check if the pathname includes a specific string
    // const isPathIncluded = location.pathname.includes('/example');
    return (<div className="w-screen h-screen z-10 bg-gray-300 bg-opacity-30 fixed top-0 left-0 flex justify-center items-center">
        <form className={` ${isDriverPage? "md:w-[650px] ":"md:w-[400px]"}  w-full mx-10 md:m-0 p-6 bg-gradient-to-r from-secondary to-primary rounded-lg shadow-[-2px_2px_0px_0px_#2482C5]`} onSubmit={onSubmit}>
            <div className="flex  items-center justify-between">
                <h2 className=" text-2xl font-bold text-white my-2 mb-4 " >{title}</h2>
                <div onClick={() => setFormVisible(!formVisible)} >
                    <Cancel className="text-white cursor-pointer" />
                </div>
            </div>
            
                       <div lassName={`mt-4  ${isDriverPage ? " flex flex-row":""}`}>
                {(inputsFiled || []).map((input, index) => (
             
                        <div key={index}  className="">
                        <Input label={input.label} selectedOption={input.selectedOption} type={input.type} name={input.name} placeholder={input.placeholder} renderOptionInSelect={input.renderOptionInSelect} required={input.required} onChange={handelChage} />
                        </div>
                   
                         ))}
                         </div>
            

            <div className="mt-4 w-full">
                <Button className='text-primary font-semibold mt-1  w-[50%] p-2 bg-white rounded-md hover:scale-95' nameOfButton={nameOfButton} type={typeOfButton} />
            </div>
        </form >
    </div>);
}

export default Form;