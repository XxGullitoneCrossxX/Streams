import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamForm extends React.Component {

renderError = ({error,touched}) => {
		if(error && touched){
		return <div> {error} </div>
	}
	
}

renderInput = ({input,label,meta}) => {


	return (
		<div className='flex flex-column w-25 mb3'>
		<label> {label} </label>
		<input {...input} className="ba b--black-10 br1" autoComplete="off"/>
		{this.renderError(meta)}
		</div>
		);
}

onSubmit = (formValues) => {

	this.props.onSubmit(formValues);

}

	render() {

		return( 
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}className='flex w-100 flex-column justify-center items-center mt5'>
				<Field name="title" component={this.renderInput} label="Title" />
				<Field name="description" component={this.renderInput} label="Description" />
				<button className='br2 pl3 pt1 pb1 pr3 mr7 nl1 pointer'> Submit </button>
			</form>
			)
	}
}

const validate = (formValues) => {

	const error = {};

	if(!formValues.title) {
		error.title = 'Enter the title of your stream';
	}
	if(!formValues.description){
		error.description= 'Enter the description of your stream';
	}

	return error
}


export default reduxForm({
	form: 'StreamForm',
	validate: validate
})(StreamForm);