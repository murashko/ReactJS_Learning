import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends React.Component {
	state = {
		ninjas: [
			{ name: 'Ryu', age: 30, belt: 'black', id: 1 },
			{ name: 'Yoshi', age: 20, belt: 'green', id: 2 },
			{ name: 'Crystal', age: 25, belt: 'pink', id: 3 }
		]
	}

	addNinja = (ninja) => {
		ninja.id = Math.random();
		const ninjas = [...this.state.ninjas, ninja];
		this.setState({
			ninjas: ninjas
		});
	}

	render() {
		return (
			<div className="App">
				<h1>My React app!</h1>
				<p>Wellcome :)</p>
				<Ninjas ninjas={ this.state.ninjas } />
				<AddNinja addNinja={ this.addNinja }/>
			</div>
		);
	}
}

export default App;
