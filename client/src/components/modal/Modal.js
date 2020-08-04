import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


class Modal extends React.Component {

	render() {
		return (
	ReactDOM.createPortal (
		<div onClick={this.props.onDismiss}className='modal-container'>
			<div onClick={(e)=>e.stopPropagation()}className='modal-box flex-column'>
				<div className='modal-header self-center courier f4 pl3 pr3 pt3 pb2 bb b--light-silver'>
					{this.props.title}

				</div>
				<div className='modal-action flex flex-row justify-end items-end w-100 h-100 mb3'>
					{this.props.actions}
				</div>
			</div>
		</div>
		,
		document.querySelector('#modal') 

		)
		)
	}

	
}


export default Modal;