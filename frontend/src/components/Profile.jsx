import { useState } from "react"

export default function Profile({ profile }) {
    const [] = useState()

    return (
        <>
            <div className="border border-gray-300  p-4">


                <div className="flex justify-between relative">  <div className="w-28 h-28 rounded-full overflow-hidden object-cover border border-gray-200">
                    <img src={profile.photo} alt="" />

                </div>
                    <button className="absolute top-0 right-0 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    </button></div>
                <h3 className="border-b border-gray-200 p-2">Employee Name: {profile.name}</h3>
                <p className="border-b border-gray-200 p-2">Age: {profile.age}</p>
                <p className="border-b border-gray-200 p-2">Email: {profile.email}</p>
                <p className="border-b border-gray-200 p-2">Phone: {profile.phone}</p>
                <p className="  p-2">Department: {profile.department}</p>


            </div>
        </>
    )
}