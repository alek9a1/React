import React, { Component } from 'react';
import './App.css';
import Users from './Users/Users';
import UsersData from './Users/data/users.json'

class App extends Component {

	state = UsersData;

	ChangeMe = () => {
		
	}

	NameChanger = (event, id) => {

		const friendsIndex = this.state.friends.findIndex(p => {
			return p.id === id
		});

		const friend = {
			...this.state.friends[friendsIndex]
		};

		friend.name = event.target.value;

		const friends = [...this.state.friends];
		friends[friendsIndex] = friend;

		this.setState({friends: friends});
	}


  render() {

  	let persons = null;

	persons = (
		<div>
		{this.state.friends.map((person, index) => {
			return <Users 
			click = {this.ChangeMe}
			change = {(event) =>this.NameChanger(event, person.id)}
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
