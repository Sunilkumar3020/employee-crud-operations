import { useEffect } from "react"
import API from "../api/api"
import { useState } from "react"
import Profile from "./Profile"

export default function ProfileGrid() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await API.get('/employee')
                console.log(response.data.data)
                setEmployees(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchEmployee()
    }, [])
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