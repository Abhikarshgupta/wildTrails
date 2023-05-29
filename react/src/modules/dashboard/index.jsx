const Index = () => {
	const handleLogout = () => {
		window.localStorage.clear();
		window.location.reload();
	};
	return (
		<div>
			Index <button onClick={handleLogout}>logout</button>
		</div>
	);
};

export default Index;
