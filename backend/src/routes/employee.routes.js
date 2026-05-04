import express from "express"
import upload from "../middleware/upload.js";
import { createEmployee, getEmployees } from "../controllers/employee.controller.js";



const router = express.Router();

//Create employee
router.post('/', upload.single("photo"), createEmployee)

//get employee
router.get('/', getEmployees)

export default router;