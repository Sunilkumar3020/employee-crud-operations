import { useState } from "react"
import API from "../api/api"

export default function EmployeeAdd() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        phone: "",
        department: "",
        email: "",
        photo: ''
    })
    // const [photo, setPhoto] = useState(null)

    const handleFormSubmit = async e => {
        e.preventDefault()
        console.log(formData)

        try {
            const data = new FormData()
            data.append("name", formData.name)
            data.append("age", formData.age)
            data.append("phone", formData.phone)
            data.append('email', formData.email)
            data.append("department", formData.department)
            data.append("photo", formData.photo)


            const response = await API.post('/employee', data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            const newEmployee = response.data.data

        } catch (error) {
            console.error(error.message)
        }
    }

    const handleInputChange = e => {

        const { name, value, files } = e.target;

        setFormData((prevData) => (
            {
                ...prevData,
                [name]: files ? files[0] : value
            }
        ))
    }
    // const handlePhotoChange = e => {
    //     console.log(e.target.files[0])
    // }
    return (
        <>
            <h2 className="text-2xl mb-4 text-center">Add Employee</h2>

            <form onSubmit={handleFormSubmit} className="flex flex-col w-1/5 m-auto">

                <input type="text" className="border border-gray-300 p-3 mb-3" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                <input type="text" className="border border-gray-300 p-3 mb-3" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} />
                <input type="text" className="border border-gray-300 p-3 mb-3" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                <input type="email" className="border border-gray-300 p-3 mb-3" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                <input type="text" className="border border-gray-300 p-3 mb-3" name="department" placeholder="Department" value={formData.department} onChange={handleInputChange} />
                <input type="file" className="border border-gray-300 p-3 mb-3" name="photo" onChange={handleInputChange} />
                <button className="bg-green-600 p-3 cursor-pointer"> Add Employee</button>


            </form>
        </>
    )
}