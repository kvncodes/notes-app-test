import { MdDeleteForever } from "react-icons/md";

const Note = ({ note, handleDelete }) => {
	return (
		<article className="note">
			<p>{note.text}</p>

			<div className="note-footer">
				<small>{note.date}</small>
				<button
					onClick={() => handleDelete(note.id)}
					className="delete-btn"
				>
					<MdDeleteForever className="delete-icon" size={"1.2rem"} />
				</button>
			</div>
		</article>
	);
};
export default Note;
