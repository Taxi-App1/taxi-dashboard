
import { MaterialReactTable } from 'material-react-table';
import { useEffect, useState } from 'react';
import request from "../utils/Api"
import Button from '../Components/button/Buttons';
import { Edit } from "@mui/icons-material"
import { Delete } from "@mui/icons-material"
import Form from '../Components/form/Form';
import DisplayImage from '../Components/DisplayImage';

function UserPage() {
    const url = process.env.REACT_APP_URL
    const [data, setdata] = useState([])
    const [formVisible, setFormVisible] = useState(false)
    const [formVisibleEdit, setFormVisibleEdite] = useState(false)
    const [dataPost, setDataPost] = useState({})
    const [dataEdit, setDataEdit] = useState({})
    const [idEdit, setIdEdit] = useState(null)
    const [userByid, setUserByid] = useState({})
    const [isShow, setIsShow] = useState(false)
    const [theImage, setImage] = useState('')






    const getData = async () => {
        setdata(await request.getUser())
    }
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const getDriverById = async () => {
            if (idEdit) {
                setUserByid(await request.getUserById(idEdit))
            }
            if (!formVisibleEdit) {
                setUserByid({})
            }
        }
        getDriverById()
    }, [idEdit, formVisibleEdit])

    const postData = async (e) => {
        e.preventDefault()
        await request.createUser(dataPost).then(() => {
            getData()
            setFormVisible(false)
        })
    }

    const deleteUser = async (id) => {
        await request.deleteUser(id).then(() => {
            getData()
        })
    }

    const editUser = async (e) => {
        e.preventDefault()
        await request.editUser(idEdit, dataEdit).then(() => {
            getData()
            setFormVisibleEdite(false)
        })
    }


    const columns =
        [
            {
                accessorKey: 'first_name', //access nested data with dot notation
                header: 'First Name',
                size: 120,
            },
            {
                accessorKey: 'last_name',
                header: 'Last Name',
                size: 120,
            },
            {
                accessorKey: 'phone_number', //normal accessorKey
                header: 'Mobile',
                size: 120,
            },
            {
                accessorKey: 'password', //normal accessorKey
                header: 'Password',
                size: 200,
                Cell: (row) => (<div className='text-lg'>******</div>)
            },
            {
                accessorKey: 'image', //normal accessorKey
                header: 'Image',
                size: 70,
                Cell: (row) => (<img src={`${url}${row.row.original.image}`} onClick={() => { setIsShow(true); setImage(row.row.original.image) }} className=' w-10 h-10 rounded-full' alt={row.row.original.image} />)
            },
            {
                accessorKey: 'createdAt',
                header: 'Join At',
                size: 150,
                Cell: (row) => (<span>{row.row.original.createdAt.replace("T", " ").slice(0, 16)}</span>)
            },
            {
                header: 'Actions',
                Cell: ({ row, table }) => (
                    <div className='flex gap-2'>
                        <div className='px-1 py-1 text-primary cursor-pointer' onClick={() => { setFormVisibleEdite(true); setIdEdit(row.original._id) }}><Edit /> </div>
                        <div className='px-1 py-1 text-primary cursor-pointer' onClick={() => deleteUser(row.original._id)}> <Delete /> </div>
                    </div>
                )
            }
        ]

    const inputsFiled = [{
        label: 'First Name',
        type: 'text',
        name: 'first_name',
        placeholder: userByid.first_name

    },
    {
        label: 'Last Name',
        type: 'text',
        name: 'last_name',
        placeholder: userByid.last_name

    },
    {
        label: 'Mobile',
        type: 'text',
        name: 'phone_number',
        placeholder: userByid.phone_number

    },
    {
        label: 'password',
        type: 'password',
        name: 'password',
        placeholder: userByid.password && "*****"
    }, {
        label: 'Image',
        type: 'file',
        name: 'image',
    },
    ]




    return (
        <>
            {formVisible && <Form title="Add User" inputsFiled={inputsFiled} setFormVisible={setFormVisible} formVisible={formVisible} nameOfButton="Add User" setDataPost={setDataPost} dataPost={dataPost} onSubmit={postData} />}
            {formVisibleEdit && <Form title="Edit User" inputsFiled={inputsFiled} setFormVisible={setFormVisibleEdite} formVisible={formVisibleEdit} nameOfButton="Edit User" setDataPost={setDataEdit} dataPost={dataEdit} onSubmit={editUser} />}
            <MaterialReactTable
                renderTopToolbarCustomActions={() => (<div className=" w-max"> <Button className='text-white font-semibold mt-1  w-full p-2 bg-gradient-to-r from-secondary to-primary rounded-md hover:scale-95' nameOfButton="Add New User" onClick={() => setFormVisible(true)} /> </div>)}
                columns={columns}
                data={data} />
            {isShow && <DisplayImage image={theImage} isShow={setIsShow} />}

        </>
    )

}

export default UserPage;