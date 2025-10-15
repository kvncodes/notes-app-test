import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("");

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText("");
		}
	};

	const handleChange = (e) => {
		const val = e.target.value;

		if (val.length <= 200) {
			setNoteText(e.target.value);
		}
	};

	return (
		<article className="note new">
			<textarea
				name="newNote"
				id="newNote"
				placeholder="Type to add a note..."
				rows={5}
				onChange={handleChange}
				value={noteText}
			></textarea>

			<div className="note-footer">
				<small>{200 - noteText.length} Remaining</small>
				<button className="btn" onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</article>
	);
};

export default AddNote;
