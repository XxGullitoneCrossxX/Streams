import React from 'react';
import {createStream} from '../../actions';
import {connect} from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {


onSubmit = (formValues) => {

	this.props.createStream(formValues);

}

	render() {

		return( 
				<div>
				<h3 className="flex flex-column justify-center items-center">
					StreamEdit
				</h3>
					<StreamForm onSubmit={this.onSubmit}/>
				</div>
			)
	}
}


const mapStateToProps = (state) => {
	return {value:state.streams};
}

export default connect(mapStateToProps,{createStream})(StreamCreate);