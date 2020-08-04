import React from 'react';
import {editStream,fetchStream} from '../../actions';
import {connect} from 'react-redux';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

componentDidMount () {
	this.props.fetchStream(this.props.match.params.id);
}


onSubmit = (formValues) => {

	this.props.editStream(this.props.match.params.id,formValues);

}

	renderList () {
		   if(this.props.stream[this.props.match.params.id])
		   {
			const {title,description} = this.props.stream[this.props.match.params.id];
			return(
				<div>
					<StreamForm onSubmit={this.onSubmit} initialValues={{title,description}}/>
				</div>
				)
		  }
		  return (
		  		<div>
					<StreamForm onSubmit={this.onSubmit}/>
				</div>
		  	)
	}
	render() {

		return( 
			<div>
				<h3 className="flex flex-column justify-center items-center">
					StreamEdit
				</h3>
				<div>
					{this.renderList()}
				</div>
			</div>
			)
	}
}


const mapStateToProps = (state,ownProps) => {
	
	return {stream:state.streams};
}

export default connect(mapStateToProps,{editStream,fetchStream})(StreamEdit);