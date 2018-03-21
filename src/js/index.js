import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AddView from './add';
import ReducerView from './reduce'
ReactDOM.render((
	<Router>
		<div>
			<ul>
				<li><Link to="/add">加</Link></li>
				<li><Link to="/reducer">减</Link></li>
			</ul>
			<Route path="/add" component={AddView}/>
			<Route path="/reducer" component={ReducerView}/>
		</div>
	</Router>
), document.getElementById('content'));