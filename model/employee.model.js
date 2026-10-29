import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {type: String, trim: true, required: true},
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    department: {
        type: String,
        department: [Engineering, hr, sales, marketing],
        required: true,
    },
    position:{type: String},
    salary:{type: Number, min:[0,"Enter positive values"], required: true},
    dateOfJoining:{type: Date, required: true},
    isRemote: {type: Boolean},
    skill: {type: String, min:[1,"add minimum 1 skill"], max:[10,"add maximum 10 skill"], required: true},
    address: {
        city:{type:String, required: true},
        pincode:{type:Number, required: true, min:[6,"min 6 digit"], max:[6,"max 6 digit"]}
    },
    attendance:{type: Enumerator, default:"present"}
})

export default employee = mongoose.model("Employee", employeeSchema);