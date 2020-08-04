import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';
import './css/StreamList.css';

class StreamList extends React.Component {

	componentDidMount () {
			this.props.fetchStreams();
	}

	renderCreateNewStream = (isSignedIn) => {
		if(isSignedIn){
			return(
			<div className="self-end mr6 mt4">
					<Link to="/streams/new"className="StreamList-button-edit mr3 bg-blue br3 pr3 pl3 pt1 pb1 pointer fw9" 
					style={{border:'2px solid',borderColor:'#0052CC',color:'#fff'}}>
					Create New Stream
					</Link>	
			</div>
				);
		}
	}

	renderButtons = (streamUserId,LoginUserId,id) => {
			if(streamUserId===LoginUserId)
			{
			return(
			<div>
				<Link to={`/streams/edit/${id}`} className="StreamList-button-edit mr3 bg-blue br3 pr3 pl3 pt1 pb1 pointer fw9"
				style={{border:'2px solid',borderColor: '#3d73fc',color:'#fff'}}>
					Edit
				</Link>
				<Link to={`/streams/delete/${id}`} className="StreamList-button-delete mr3 bg-red br3 pr3 pl3 pt1 pb1 pointer fw9" 
						style={{border:'2px solid',borderColor: '#fa7211',color:'#fff'}}>
						Delete
				</Link>
			</div>
			);
		}
		return(<div> </div>)
	}


	renderList = (streams,auth) => {
		console.log(streams);
		if(!streams.length){
			return 'NO STREAMS TO DISPLAY!';
		}
		const streamList= streams.map( stream => {
			return(
				<div className="bb b--black-10 h-100" key={stream.id}>
				<i className="fa fa-desktop fl w-10 f1 pt3 pb3" aria-hidden="true"></i>
					<p className="f4 pt1 fl w-70">

						<Link to={`/streams/${stream.id}`} className="i link black-40 b fw6">{stream.title}</Link>
						<span className="StreamList-description db f5 baskerville fw5">{stream.description.substring(0,150)}</span>
					</p>
					<div className="fl w-15 mt5">
						
							{this.renderButtons(stream.userId,auth.userId,stream.id)}
						
					</div>
					<div className="cl"> </div>
				</div>
				);
		})
		return streamList;
	}
	render() {

		return( 
			<div className="flex flex-column">
			<div className="self-center	code f2 mt4">
				Current Streams
			</div>
			<div className="self-center bb bw1 w-10 b--light-silver">
			</div>	
			<div className="self-center w-70"> 
			{this.renderList(this.props.streams,this.props.auth)} 
			</div>
			{this.renderCreateNewStream(this.props.auth.isSignedIn)}		
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		auth: state.auth
	}
}
export default connect(mapStateToProps,{fetchStreams})(StreamList);