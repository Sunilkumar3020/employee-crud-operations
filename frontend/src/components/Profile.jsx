import { useState } from "react"
import API from "../api/api"
export default function Profile({ profile, setEmployees }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editingFields, setEditingFields] = useState({
        name: profile.name,
        age: profile.age,
        email: profile.email,
        phone: profile.phone,
        department: profile.department
    })

    const handleEdit = (e) => {
        setIsEditing(true)
    }
    const handleSave = async () => {
        try {
            const response = await API.put(`/employee/${profile._id}`, editingFields)
            console.log("updated Data", response)

            const updatedDate = response.data.data;


            setEmployees(prevData =>
                prevData.map(emp => emp._id === updatedDate._id ? updatedDate : emp)

            )
            setIsEditing(false)
        } catch (error) {
            console.error(error)
        }
    }
    const handleInputChange = (e) => {
        console.log(e)
        setEditingFields(previousValue => (
            {
                ...previousValue,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleCancel = e => {
        setEditingFields({
            name: profile.name,
            age: profile.age,
            email: profile.email,
            phone: profile.phone,
            department: profile.department
        })
        setIsEditing(false)
    }
    return (
        <>
            <div className="border border-gray-300  p-4">


                <div className="flex justify-between relative">  <div className="w-28 h-28 rounded-full overflow-hidden object-cover border border-gray-200">
                    <img src={profile.photo} alt="" />

                </div>
                    {isEditing ? (<div className="flex gap-10"> <button onClick={handleCancel} className="absolute top-0 right-0 cursor-pointer"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.707 5.293l5.293 5.292l5.293 -5.292a1 1 0 0 1 1.414 1.414l-5.292 5.293l5.292 5.293a1 1 0 0 1 -1.414 1.414l-5.293 -5.292l-5.293 5.292a1 1 0 1 1 -1.414 -1.414l5.292 -5.293l-5.292 -5.293a1 1 0 0 1 1.414 -1.414" />
                    </svg></button>  <button onClick={handleSave} className="absolute top-0 right-10 cursor-pointer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-device-floppy">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 3a1 1 0 0 1 .707 .293l4 4a1 1 0 0 1 .293 .707v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h1v4a1 1 0 0 0 .883 .993l.117 .007h6a1 1 0 0 0 1 -1v-4zm-4 8a2.995 2.995 0 0 0 -2.995 2.898a1 1 0 0 0 -.005 .102a3 3 0 1 0 3 -3m1 -8v3h-4v-3z" />
                    </svg>
                        </button>  </div>) : (

                        <button onClick={handleEdit} className="absolute top-0 right-0 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        </button>
                    )
                    }


                </div>
                {isEditing ? (<>
                    <form className="flex flex-col">
                        <input type="text" className="border-b border-gray-200 p-2" value={editingFields.name} name="name" onChange={(e) => handleInputChange(e)} placeholder="Enter your name" />
                        <input type="text" className="border-b border-gray-200 p-2" value={editingFields.age} name="age" onChange={(e) => handleInputChange(e)} placeholder="Enter your age" />
                        <input type="email" className="border-b border-gray-200 p-2" value={editingFields.email} name="email" onChange={(e) => handleInputChange(e)} placeholder="Enter your email" />
                        <input type="text" className="border-b border-gray-200 p-2" value={editingFields.phone} name="phone" onChange={(e) => handleInputChange(e)} placeholder="Enter your phone number" />
                        <input type="text" className="border-b border-gray-200 p-2" value={editingFields.department} name="department" onChange={(e) => handleInputChange(e)} placeholder="Enter your department" />
                    </form>

                </>) : (<>
                    <h3 className="border-b border-gray-200 p-2">Employee Name : {profile.name}</h3>
                    <p className="border-b border-gray-200 p-2">Age: {profile.age}</p>
                    <p className="border-b border-gray-200 p-2">Email: {profile.email}</p>
                    <p className="border-b border-gray-200 p-2">Phone: {profile.phone}</p>
                    <p className="  p-2">Department: {profile.department}</p>
                </>)}


            </div >
        </>
    )
}