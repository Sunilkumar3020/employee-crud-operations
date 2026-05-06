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

        const newEmployee = await Employee.create({ name, email, phone, age, department, photo })
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
        console.error(error)
        res.status(500).json({ success: false, message: "Server Error, Employee not created" })
    }
}

// Update Employee

export const updateEmployee = async (req, res) => {

    const { id } = req.params;
    try {
        const findEmployee = await Employee.findById(id);
        if (!findEmployee) {
            return res.status(404).json({ success: false, message: "Employee not found" })
        }

        //prepare update data
        console.log({ ...req.body })
        console.log(req.body )
        const updateData = { ...req.body };
        //if new photo uploaded (cloudinary or multer)

        if (req.file) {
            updateData.photo = req.file.path; // Cloudinary URL

        }

        const updatedEmployee = await Employee.findByIdAndUpdate(id, updateData, { returnDocument: "after", runValidators: true })
        res.status(200).json({ success: true, message: "Employee data updated", data: updatedEmployee })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Server Error, Employee not created" })
    }
}

// Delete Employee