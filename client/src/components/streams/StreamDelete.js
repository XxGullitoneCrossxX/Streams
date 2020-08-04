import React from 'react';
import Modal from '../modal/Modal.js'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteStream,fetchStream} from '../../actions'
import history from '../../history'
 class StreamDelete extends React.Component {
 	componentDidMount () {
 		this.props.fetchStream(this.props.match.params.id);
 	}
 	actions = (
 		<React.Fragment>
 			<Link to='/'className="StreamList-button-edit mr3 bg-blue br3 pr3 pl3 pt1 pb1 pointer fw9" 
					style={{border:'2px solid',borderColor:'#0052CC',color:'#fff'}}>
					Cancel
			</Link>
			<button onClick={()=>this.props.deleteStream(this.props.match.params.id)}className="StreamList-button-delete mr3 bg-red br3 pr3 pl3 pt1 pb1 pointer fw9" 
						style={{border:'2px solid',borderColor: '#fa7211',color:'#fff'}}>
						Delete
			</button>
		</React.Fragment>
 	 );

 	renderList = () => {
 		const id_url = this.props.match.params.id;
 		const stream = this.props.stream[id_url];
 		if(!stream)
 		{
 			return(
 				<div>
 					LOADING ....................
 				</div>
 				)
 		}
 		return(
 			<div> 

				<Modal 
				onDismiss={()=>history.push('/')}
				title={`Are you sure you want to delete '${this.props.stream[id_url].title}' ?`}
				actions={this.actions}
				/> 

			</div>
			);
 	}

	render() {
		
		return( 
				this.renderList()
			)
	}
}

const mapStateToProps = (state) => {

	return {stream:state.streams}
}

export default connect(mapStateToProps,{deleteStream,fetchStream})(StreamDelete);