const Header = ({ toggleDarkMode, isDarkMode }) => {
	return (
		<div className="header">
			<h1
				style={{
					color: isDarkMode ? "white" : "black",
				}}
			>
				Notes
			</h1>
			<button onClick={toggleDarkMode} className="btn toggle">
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
