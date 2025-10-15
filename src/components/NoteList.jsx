import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, handleAddNote, handleDelete }) => {
	return (
		<div className="note-list">
			{notes.map((note) => (
				<Note note={note} key={note.id} handleDelete={handleDelete} />
			))}

			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NoteList;
