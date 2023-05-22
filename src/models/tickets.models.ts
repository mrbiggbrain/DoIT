// ------------------------------
// Import Modules
// ------------------------------
import mongoose, {Document, Schema} from "mongoose";

// ------------------------------
// Export Generic Interface
// ------------------------------
export interface ITicket
{
    Subject: String;
    SubmitDate: Date;
}

// ------------------------------
// Export Document Interface
// ------------------------------
export interface ITicketModel extends ITicket, Document {}

// ------------------------------
// Define Schema
// ------------------------------
const TicketSchema: Schema = new Schema({
    Subject: {type: String, required: true},
    SubmitDate: {type: Date, default: Date.now},
},
{
    versionKey: false
})

// ------------------------------
// Export Mongoose Model
// ------------------------------
export default mongoose.model<ITicketModel>('Ticket', TicketSchema);