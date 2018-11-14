import React from 'react';
import './Users.css';


const Users = (props) => {
	return (
		<div onChange={props.change} className="single_user">{props.name} {props.nazwisko}</div>
		)
}

export default Users;