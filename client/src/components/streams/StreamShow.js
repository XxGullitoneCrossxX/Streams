import React from 'react';
import {fetchStream} from '../../actions';
import {connect} from 'react-redux';
import flv from 'flv.js';

class StreamShow extends React.Component {

	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
		
	}
	componentDidMount() {
		
		this.props.fetchStream(this.props.match.params.id);
		this.buildPlayer();
	}

	componentWillUnmount() {
		this.flvPlayer.destroy()
	}

	componentDidUpdate() {
		console.log(this.videoRef)
		this.buildPlayer();
	}

	buildPlayer () {
		const id = this.props.match.params.id;
		if(this.flvPlayer || !this.props.stream){
			return
		}

		if (flv.isSupported()) {
        this.videoElement = document.getElementById('videoElement');
        this.flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        console.log(id)
        this.flvPlayer.attachMediaElement(this.videoRef.current);
        this.flvPlayer.load();
        return console.log('Build Player Was Successful')
    }
	}

	renderList = () => {
		if(!this.props.stream)
		{
			return (
			<div>
				<h4> Loading Content..... </h4>
			</div>
			);
		}

		return(
				<div className='flex flex-column w-100 justify-start'>
				<div className='StreamShow-info-box flex flex-column justify-center vh-100 '>

					<video className='self-center br5'ref={this.videoRef} controls style={{width:'50%'}}/>

					<div className='courier f2 w-50 ml5 mt3 mb3'>
						{this.props.stream.title}
						<div className='bb w-40 b--black-20'> </div>
					</div>
					<div className='serif f5 w-50 ba b--black-10 shadow-3 ml5 pa3'>
						{this.props.stream.description}
					</div>
				</div>
				</div>
			)

	}
	render() {

		return(
		<React.Fragment> 
			{this.renderList()}
		</React.Fragment>

			)
			}
}
const mapStateToProps = (state,ownProps) => {
	return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream})(StreamShow);