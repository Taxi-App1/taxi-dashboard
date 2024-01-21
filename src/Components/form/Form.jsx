import Input from "../textField/Inputs";
import { Cancel } from "@mui/icons-material"
import Button from "../button/Buttons";


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

    return (<div className="w-full h-full z-10 bg-white bg-opacity-30 fixed top-0 left-0 flex justify-center items-center">
        <form className="w-[600px] p-4 bg-white rounded-lg shadow-[-2px_2px_0px_0px_#ffd403]" onSubmit={onSubmit}>
            <div className="flex  items-center justify-between">
                <h2 className=" text-2xl font-bold text-primary my-2 mb-4 " >{title}</h2>
                <div onClick={() => setFormVisible(!formVisible)} >
                    <Cancel className="text-white cursor-pointer" />
                </div>
            </div>
            {
                (inputsFiled || []).map((input, index) => (
                    <div key={index} className="mt-4">
                        <Input label={input.label} selectedOption={input.selectedOption} type={input.type} name={input.name} placeholder={input.placeholder} renderOptionInSelect={input.renderOptionInSelect} required={input.required} onChange={handelChage} />
                    </div>
                ))
            }
            <div className="mt-4 w-full">
                <Button nameOfButton={nameOfButton} type={typeOfButton} />
            </div>
        </form >
    </div>);
}

export default Form;