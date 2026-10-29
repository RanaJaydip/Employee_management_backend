import employee from "../model/employee.model.js"

export const getEmployee = async () => {
    try {
        const employees = await employee.find();
        if (!employees) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Employee find successfully",
            data: employees
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const createEmployee = async () => {
    try {
        const employees = await employee.create(req.body)
        res.status(201).json({
            success: true,
            message: "Employee created successfull",
            data: employee
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateEmployee = async () => {
    try {
        const employees = await employee.findByIDAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!employees) {
            return res.status(404).json({
                success: false,
                message: "Employee Not Found"
            })
        }

        res.stauts(200).json({
            success: true,
            message: "Employee updated successfull",
            data: employees
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const patchEmployee = async () => {
    try {
        const employees = await employee.findByIDAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true })
        if (!employees) {
            return res.status(404).json({
                success: false,
                message: "Employee Not Found"
            })
        }

        res.stauts(200).json({
            success: true,
            message: "Employee updated successfull",
            data: employees
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteEmployee = async () => {
    try {
        const employees = await employee.findByIdAndDelete(req.params.id);
        if (!employees) {
            return res.status(404).json({
                success: false,
                message: "Employee Not Found"
            })
        }

        res.stauts(200).json({
            success: true,
            message: "Employee deleted successfull",
            data: employees
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const manyDeleteEmployee = async () => {
    try {
        const employees = await employee.deleteMany({})
        if (!employees) {
            return res.status(404).json({
                success: false,
                message: "Employee Not Found"
            })
        }

        res.stauts(200).json({
            success: true,
            message: "Employee deleted successfull",
            data: employees
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}