import React from 'react';
import './Users.css';


const Users = (props) => {
	return (
		<div className="single_user">{props.name} {props.nazwisko} 
		<div className="inpucik"><input type="text" value={props.name} onChange={props.change}/></div>
		</div>
		)
}

export default Users;