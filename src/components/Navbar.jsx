import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
const [open, setOpen] = useState(false);

return(
	
<nav className="navbar">
	<div >
	<Link to="/">Raunak Rauniyar</Link>
	</div>

	<div
	className="dropdown"
	onMouseEnter={() => setOpen(true)}
	onMouseLeave={() => setOpen(false)}
	>
	<button className="dropdown">Menu▾</button>

	{open && (
		<ul className="dropdown-menu">
		<li><Link to="/webpages/projects">Projects</Link></li>
		<li><Link to="/webpages/about">About Me</Link></li>
		<li><Link to="/webpages/skills">Skills</Link></li>
		<li><Link to="/webpages/contact">Contact</Link></li>
		</ul>
	)}
	</div>
</nav>
);
}

export default Navbar;
