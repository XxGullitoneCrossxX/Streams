import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import history from '../history'
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import UserHeader from './userheader/UserHeader';
class App extends React.Component {
	
	render(){
		return(

			<Router history={history}>
				<div>
				
				<Route path='/' component={UserHeader} />
				<Switch>
				<Route path='/' exact component={StreamList} />
				<Route path='/streams/new' exact component={StreamCreate} />
				<Route path='/streams/edit/:id' exact component={StreamEdit} />
				<Route path='/streams/delete/:id' exact component={StreamDelete} />
				<Route path='/streams/:id' exact component={StreamShow} />
				</Switch>
				</div>
			
			</Router> 
			)
	}
}

export default App;