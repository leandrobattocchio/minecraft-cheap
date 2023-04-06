const Home = ({ handleStart }) => {
	return (
		<div className='start'>
			<h1>Welcome to Minecraft (clon)</h1>
			<h3>CONTROLS</h3>
			<ul>
				<li>HOLD ALT to delete blocks</li>
				<li>HOLD SHIFT to run</li>
				<li>TAB to view the menu</li>
				<li>A, W, S, D to walk</li>
				<li>ESC to view the cursor</li>
			</ul>
			<h2 onClick={handleStart}>START</h2>
		</div>
	)
}

export default Home
