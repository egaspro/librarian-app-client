import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Home, Leave, NotFound, Recognition, Take, NotRecognized } from 'react/screens';
import logo from './logo.svg';
import './App.css';

/**
 This is a root component of an app
*/
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/recognition" component={Recognition} />
						<Route path="/takeBook" component={Take} />
            <Route path="/leaveBook" component={Leave} />
            <Route path="/notRecognized" component={NotRecognized} />
            <Route path="/:smth" component={NotFound} />
						<Redirect to="/404" component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
