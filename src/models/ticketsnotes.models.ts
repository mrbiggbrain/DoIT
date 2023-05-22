// ------------------------------
// Import Modules
// ------------------------------
import mongoose, {Document, Schema} from "mongoose";

// ------------------------------
// Export Generic Interface
// ------------------------------
export interface ITicketNote
{
    Ticket: String;
    Note: String;
}

// ------------------------------
// Export Document Interface
// ------------------------------
export interface ITicketNoteModel extends ITicketNote, Document {}

// ------------------------------
// Define Schema
// ------------------------------
const TicketNoteSchema: Schema = new Schema({
    Ticket: {type: Schema.Types.ObjectId, ref: 'Note'},
    Note: {type: Schema.Types.ObjectId, ref: 'Ticket'}
},
{
    versionKey: false
})

// ------------------------------
// Export Mongoose Model
// ------------------------------
export default mongoose.model<ITicketNoteModel>('TicketNote', TicketNoteSchema);