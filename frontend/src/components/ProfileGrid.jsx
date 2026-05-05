import { useEffect } from "react"
import API from "../api/api"
import { useState } from "react"
import Profile from "./Profile"

export default function ProfileGrid() {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                setLoading(true)
                const response = await API.get('/employee')
                setLoading(false)
                console.log(response.data.data)
                setEmployees(response.data.data)
            } catch (error) {
                console.error(error)
                setErrors(error.message)
            }
        }

        fetchEmployee()
    }, [])

    if (loading) <p>Loading ...</p>
    if (error) <p>{error.message}</p>
    return (
        <>
            <h2>Employees Details</h2>
            {employees.map(employee => (


                <div key={employee.id} className="flex ">
                    <Profile profile={employee} />
                </div>



            ))}
        </>

    )
}