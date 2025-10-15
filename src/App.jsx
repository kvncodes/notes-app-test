import { useState } from "react";

import { nanoid } from "nanoid";

import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "This is The first Note from Test-Notes Array",
			date: "10/10/2025",
		},
		{
			id: nanoid(),
			text: "This is The second Note from Test-Notes Array",
			date: "7/10/2025",
		},
		{
			id: nanoid(),
			text: "This is The third Note from Test-Notes Array",
			date: "9/10/2025",
		},
		{
			id: nanoid(),
			text: "This is The fourth Note from Test-Notes Array",
			date: "11/10/2025",
		},
	]);

	const [search, setSearch] = useState("");

	const [isDarkMode, setIsDarkMode] = useState(false);

	const addNote = (text) => {
		const date = new Date();

		const newNote = {
			id: nanoid(),
			text,
			date: date.toLocaleDateString(),
		};

		setNotes([...notes, newNote]);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const toggleDarkMode = () => {
		setIsDarkMode((prevState) => !prevState);
	};

	return (
		<main
			style={{
				backgroundColor: isDarkMode ? "#181818ff" : "white",
			}}
		>
			<section className="container">
				<Header
					toggleDarkMode={toggleDarkMode}
					isDarkMode={isDarkMode}
				/>

				<SearchBar handleSearchChange={setSearch} />

				<NoteList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(search)
					)}
					handleAddNote={addNote}
					handleDelete={deleteNote}
				/>
			</section>
		</main>
	);
}

export default App;
