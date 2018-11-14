import React, { Component } from 'react';
import './App.css';
import Users from './Users/Users';
import UsersData from './Users/data/users.json'

class App extends Component {

	state = UsersData;

	changeMe= () => {
		
	}

	NameChanger = (event) => {
		console.log('as');
	}


  render() {

  	let persons = null;

	persons = (
		<div>
		{this.state.friends.map(person => {
			return <Users 
			click = {this.changeMe}
			change = {this.NameChanger}
			name={person.name}
			plec={person.plec}
			key={person.id} />;
		})}
		</div>
	);


    return (
      <div className="App">
        {persons}      
       </div>
    );
  }
}

export default App;
