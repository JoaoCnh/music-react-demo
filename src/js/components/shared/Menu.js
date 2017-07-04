import React from 'react';
import FaMicrophone from 'react-icons/lib/fa/microphone';
import FaMusic from 'react-icons/lib/fa/music';

const Menu = (props) => {
  const { routes } = props;
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
	  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	  <a className="navbar-brand" href="#">
	  	Music React Demo
	  </a>
	  <div className="collapse navbar-collapse" id="navbarNav">
	    <ul className="navbar-nav">
	      <li className="nav-item active">
	        <a className="nav-link" href="#">
	        	<FaMicrophone />
	        	Artists
	        </a> 
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" href="#">
	        	<FaMusic />
	        	Albums
	        </a>
	      </li>
	    </ul>
	  </div>
	</nav>
  );
};

export default Menu;