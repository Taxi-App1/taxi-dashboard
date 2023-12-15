
import { MaterialReactTable } from 'material-react-table';
import { useEffect, useState } from 'react';
import request from "../utils/Api"
import Toggel from '../Components/Toggel';
import Button from '../Components/button/Buttons';
import { Edit } from "@mui/icons-material"
import { Delete } from "@mui/icons-material"
import Form from '../Components/form/Form';


function DriverPage() {
    const url = process.env.REACT_APP_URL

    const [data, setdata] = useState([])
    const [formVisible, setFormVisible] = useState(false)
    const [formVisibleEdit, setFormVisibleEdite] = useState(false)
    const [dataPost, setDataPost] = useState({})
    const [dataEdit, setDataEdit] = useState({})
    const [idEdit, setIdEdit] = useState(null)
    const [driverByid, setDriverByid] = useState({})


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setdata(await request.getDriver())
    }

    useEffect(() => {
        const getDriverById = async () => {
            if (idEdit) {
                setDriverByid(await request.getDriverById(idEdit))
            }
            if (!formVisibleEdit) {
                setDriverByid({})
            }
        }
        getDriverById()
    }, [idEdit, formVisibleEdit])


    const postData = async (e) => {
        e.preventDefault()
        await request.createDriver(dataPost).then(() => {
            getData()
            setFormVisible(false)
        })
    }

    const deleteDriver = async (id) => {
        await request.deleteDriver(id).then(() => {
            getData()
        })
    }

    const editDriver = async (e) => {
        e.preventDefault()
        await request.editDriver(idEdit, dataEdit).then((res) => {
            console.log(res)
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
                Cell: (row) => (<img src={`${url}${row.row.original.image}`} className=' w-10 h-10 rounded-full' alt={row.row.original.image} />)
            },
            {
                accessorKey: 'picture_id', //normal accessorKey
                header: 'Picture Id',
                size: 70,
                Cell: (row) => (<img src={`${url}${row.row.original.picture_id}`} className=' w-10 h-10 rounded-full' alt={row.row.original.picture_id} />)
            },
            {
                accessorKey: 'car_type',
                header: 'Car Type',
                size: 100,
            },
            {
                accessorKey: 'car_color',
                header: 'Car Color',
                size: 100,
            },
            {
                accessorKey: 'isAccess',
                header: 'Access',
                size: 100,
                Cell: (row) => (<Toggel checked={row.row.original.isAccess} onChange={async () => {
                    await request.editDriver(row.row.original._id, { isAccess: !row.row.original.isAccess })
                        .then(() => { getData(); });
                }} />)
            },
            {
                accessorKey: 'createdAt',
                header: 'Join At',
                size: 150,
                Cell: (row) => (<span>{row.row.original.createdAt.replace("T", " ").slice(0, 16)}</span>)
            },
            {
                header: 'actions',
                Cell: ({ row, table }) => (
                    <div className='flex gap-2'>
                        <div className='px-1 py-1 text-primary cursor-pointer' onClick={() => { setFormVisibleEdite(true); setIdEdit(row.original._id) }}><Edit /> </div>
                        <div className='px-1 py-1 text-primary cursor-pointer' onClick={() => deleteDriver(row.original._id)}> <Delete /> </div>
                    </div>
                )
            }
        ]

    const inputsFiled = [{
        label: 'First Name',
        type: 'text',
        name: 'first_name',
        placeholder: driverByid.first_name
    },
    {
        label: 'Last Name',
        type: 'text',
        name: 'last_name',
        placeholder: driverByid.last_name
    },
    {
        label: 'Mobile',
        type: 'text',
        name: 'phone_number',
        placeholder: driverByid.phone_number
    },
    {
        label: 'password',
        type: 'password',
        name: 'password',
        placeholder: driverByid.password && '*****'
    }, {
        label: 'Image',
        type: 'file',
        name: 'image',
        placeholder: driverByid.image
    },
    {
        label: 'Picture_id',
        type: 'file',
        name: 'picture_id',
        placeholder: driverByid.picture_id
    },
    {
        label: 'Car Type',
        type: 'select',
        name: 'car_type',
        selectedOption: driverByid.car_type,
        renderOptionInSelect: () => (<>
            <option > Choose Type</option>
            <option value="Car" >Car</option>
            <option value="Motorcycle" >Motorcycle</option>
            <option value="Bicycle" >Bicycle</option>
            <option value="Bus" >Bus</option>
            <option value="2x Bus" >2x Bus</option>
            <option value="3x Bus" >3x Bus</option>
        </>)
    },
    {
        label: 'Car Color',
        type: 'text',
        name: 'car_color',
        placeholder: driverByid.car_color
    },
    ]




    return (
        <>
            {formVisible && <Form title="Add Driver" inputsFiled={inputsFiled} setFormVisible={setFormVisible} formVisible={formVisible} nameOfButton="Add Driver" setDataPost={setDataPost} dataPost={dataPost} onSubmit={postData} />}
            {formVisibleEdit && <Form title="Edit Driver" inputsFiled={inputsFiled} setFormVisible={setFormVisibleEdite} formVisible={formVisibleEdit} nameOfButton="Edit Driver" setDataPost={setDataEdit} dataPost={dataEdit} onSubmit={editDriver} />}
            <MaterialReactTable
                renderTopToolbarCustomActions={() => (<div className=" w-max"> <Button nameOfButton="Add New Driver" onClick={() => setFormVisible(true)} /> </div>)}
                columns={columns}
                data={data} />
        </>
    )
};

export default DriverPage;