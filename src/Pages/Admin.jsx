
import { MaterialReactTable } from 'material-react-table';
import { useContext, useEffect, useState } from 'react';
import request from "../utils/Api"
import Toggel from '../Components/Toggel';
import Button from '../Components/button/Buttons';
import { Edit } from "@mui/icons-material"
import { Delete } from "@mui/icons-material"
import Form from '../Components/form/Form';
import adminContext from '../context/adminContext';
import { toast } from 'react-toastify';


function AdminPage(props) {


    const [data, setdata] = useState([])
    const [formVisible, setFormVisible] = useState(false)
    const [formVisibleEdit, setFormVisibleEdite] = useState(false)
    const [dataPost, setDataPost] = useState({})
    const [dataEdit, setDataEdit] = useState({})
    const [idEdit, setIdEdit] = useState(null)
    const [adminByid, setAdminByid] = useState({})
    const {role}=useContext(adminContext)

 

    const getData = async () => {
        setdata(await request.getAdmin())
    }
    useEffect(() => {
        getData()
    }, [])
    // async function getData() {
    //     try {
    //       const data = await request.getAdmin();
    //       setdata(data)
    //     } catch (error) {
    //       console.error("Error fetching admin data:", error);
    //     }
    //   }

    useEffect(() => {
        const getAdminById = async () => {
            if (idEdit) {
                const resposne= await request.getAdminById(idEdit)
                setAdminByid( resposne)
             
            }
            if (!formVisibleEdit) {
                setAdminByid({})
            }
        }
        getAdminById()
    }, [idEdit, formVisibleEdit])


// console.log(getData())
    const postData = async (e) => {
        e.preventDefault()
        await request.createAdmin(dataPost).then(() => {
            getData()
            setFormVisible(false)
        })
    }

    const deleteAdmin = async (id) => {
        await request.deleteAdmin(id).then(() => {
            getData()
        })
    }

    const editAdmin = async (e) => {
        e.preventDefault()
        await request.editAdmin(idEdit, dataEdit).then((res) => {
            getData()
            setFormVisibleEdite(false)
        })
    }

    const columns =
        [
            {
                accessorKey: 'username', //access nested data with dot notation
                header: 'Username',
                size: 120,
            },
            {
                accessorKey: 'full_name',
                header: 'Full Name',
                size: 120,
            },
            {
                accessorKey: 'email', //normal accessorKey
                header: 'Email',
                size: 120,
            },





            {
                accessorKey: 'role',
                header: 'isSuperAdmin',
                size: 100,
                Cell: (row) => (  <Toggel checked={row.row.original.role === "isSuperAdmin"} onChange={async () => {
                    if (   role =="isSuperAdmin"){
                    let role 
                    row.row.original.role === "isSuperAdmin" ? role="isAdmin" :role="isSuperAdmin"
                    await request.upgradeRole(row.row.original._id,role )
                        .then(() => { getData(); });
                    }
                        else{
                            toast.error("Sorry you are not a super admin")
                        }
                }} />)
            },


            {
                header: 'Actions',
                Cell: ({ row, table }) => (
                    <div className='flex gap-2'>
                        <div className='px-1 py-1 text-primary cursor-pointer' onClick={() => { setFormVisibleEdite(true); setIdEdit(row.original._id) }}><Edit /> </div>
                        <div className='px-1 py-1 text-primary cursor-pointer' onClick={() => deleteAdmin(row.original._id)}> <Delete /> </div>
                    </div>
                )
            }
        ]

    const inputsFiled = [{
        label: 'full_name',
        type: 'text',
        name: 'full_name',
        placeholder: adminByid?.full_name
    },
    {
        label: 'username',
        type: 'text',
        name: 'username',
        placeholder: adminByid?.username
    },
    {
        label: 'email',
        type: 'email',
        name: 'email',
        placeholder: adminByid?.email
    },
    {
        label: 'password',
        type: 'password',
        name: 'password',
        placeholder: adminByid?.password && '*****'
    }
    ]




    return (
        <div className={props.className}>
            {formVisible && <Form title="Add Admin" inputsFiled={inputsFiled} setFormVisible={setFormVisible} formVisible={formVisible} nameOfButton="Add Admin" setDataPost={setDataPost} dataPost={dataPost} onSubmit={postData} />}
            {formVisibleEdit && <Form title="Edit Admin" inputsFiled={inputsFiled} setFormVisible={setFormVisibleEdite} formVisible={formVisibleEdit} nameOfButton="Edit Admin" setDataPost={setDataEdit} dataPost={dataEdit} onSubmit={editAdmin} />}
            <MaterialReactTable
                renderTopToolbarCustomActions={() => (<div className=" w-max"> <Button nameOfButton="Add New Admin" className='text-white font-semibold mt-1  w-full p-2 bg-gradient-to-r from-secondary to-primary rounded-md hover:scale-95' onClick={() => setFormVisible(true)} /> </div>)}
                columns={columns}
                data={data} />
        </div>
    )
};

export default AdminPage;