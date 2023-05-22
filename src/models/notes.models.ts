// ------------------------------
// Import Modules
// ------------------------------
import mongoose, {Document, Schema} from "mongoose";

// ------------------------------
// Export Generic Interface
// ------------------------------
export interface INote
{
    Subject: String;
    SubmitDate: Date;
    Content: String;
}

// ------------------------------
// Export Document Interface
// ------------------------------
export interface INoteModel extends INote, Document {}

// ------------------------------
// Define Schema
// ------------------------------
const NoteSchema: Schema = new Schema({
    Subject: {type: String, required: true},
    SubmitDate: {type: Date, default: Date.now},
    Content: {type: String, required: true}
},
{
    versionKey: false
})

// ------------------------------
// Export Mongoose Model
// ------------------------------
export default mongoose.model<INoteModel>('Note', NoteSchema);