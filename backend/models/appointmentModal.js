import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
   userId : {
    type : String,
    required : true,
   },
   docId : {
    type : String,
    required : true,
   },
   slotDate : {
    type : String,
    required : true,
   },
   slotTime : {
    type : String,
    required : true,
   },
   userData : {
    type : Object,
    required : true,
   },
   doctorData : {
    type : Object,
    required : true,
   },
   amount : {
    type : Number,
    required : true,
   },
   date : {
    type : Date,
    required : true,
   },
   cancelled : {
    type : Boolean,
    default : false,
   },
   payment : {
    type : Boolean,
    default : false,
   },
   isCompleted : {
    type : Boolean,
    default : false,
   },

})

const appointmentModal =  mongoose.models.appointment ||  mongoose.model("appointment" , appointmentSchema);

export default appointmentModal;
