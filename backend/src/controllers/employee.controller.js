import Employee from "../models/employee.models.js";

// Create Employee
export const createEmployee = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, phone, age, department } = req.body;
        // const photo = req.file?.filename;
        // console.log(req.protocol)
        // const protocol = req.protocol || "http";
        // const imageUrl = `${protocol}://${req.get("host")}/uploads/${photo}`

        const photo = req.file.path;

        console.log(req.file)
        if (!name || !email || !phone || !age || !department) {
            return res.status(400).json({ message: "All fields are required!" })
        }
        if (!photo) {
            return res.status(400).json({ message: "Photo is required" })
        }
        const checkEmployeeExist = await Employee.findOne({ email })
        if (checkEmployeeExist) {
            return res.status(409).json({ message: "Employee already registered" })
        }

        const newEmployee = await Employee.create({ name, email, phone, age, department, photo  })
        res.status(201).json({ success: true, message: "Employee  created Successfully" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Server Error, Employee not created" })
    }
}
// Get All Employee

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({})
        if (!employees) {
            return res.status(404).json({ message: "No employee found" })
        }
        res.status(200).json({ success: true, data: employees })
    } catch (error) {

    }
}

// Update Employee

// Delete Employee