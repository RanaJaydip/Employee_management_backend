import express from 'express';
import { getEmployee, createEmployee, updateEmployee, patchEmployee, deleteEmployee, manyDeleteEmployee } from "../controller/employee.controller.js";

const router = express.Router();

router.get("/employees", getEmployee);
router.post("/employees", createEmployee);
router.put('/employees/:id', updateEmployee);
router.patch('/employees/:id/attendance', patchEmployee)
router.delete('/employees/:id', deleteEmployee)
router.post('employees/bulk-delete', manyDeleteEmployee)
