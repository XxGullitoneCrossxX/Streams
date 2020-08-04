import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionSignIn,actionSignOut} from '../../actions';
class UserHeader extends React.Component {

	componentDidMount () {

		window.gapi.load('auth2', () => {
    
			window.gapi.auth2.init({
			
			client_id: '576252171259-jl1dsdh1v2v89af2h9lng91mv1qhjb6i.apps.googleusercontent.com',
  			scope: 'email'
  			})
  			this.Auth = window.gapi.auth2.getAuthInstance();
  			this.Auth.isSignedIn.listen(this.onAuthChange);
  			
  		});

	}

	/* HELPER FUNCTIONS */

	onAuthChange = (isSignedIn) => {
		if(isSignedIn){
			this.props.actionSignIn(this.Auth);
			console.log('Signed In');
		}
		else{
			this.props.actionSignOut();
			console.log('Signed Out');
		}
	}


	onLogOutClick = () => {
		this.Auth.signOut();
	}

	onLogInClick = () => {
		this.Auth.signIn();
	}

	buttonRendering (isSignedIn) {

			if(isSignedIn){
				return(
					<button onClick = {this.onLogOutClick} className="link pointer w-75-l w-100-m w-100-ns pa1 br-pill b--light-red hover-bg-light-red hover-white-90 bg-transparent bg-animate">
								 <i className="fa fa-google pr1" aria-hidden="true"></i>
								 LogOut 
					</button> 
					)
			}
			else if(!isSignedIn){
				return(
					<button onClick = {this.onLogInClick}className="link pointer w-75-l w-100-m w-100-ns pa1 br-pill b--light-red hover-bg-light-red hover-white-90 bg-transparent bg-animate">
								 <i className="fa fa-google pr1" aria-hidden="true"></i>
								 LogIn
					</button> 
					)
			}
	}

	/* ============ END OF HELPER FUNCTIONS ==================== */

	render() {

		return( 
			<div className="main-header pt1-ns h3 bb b--black-05" >

			<div className="flex justify-between">

				<div className="pt3 pl5">
					<Link className="link" to='/'> Streamy </Link>
					
				</div>

				<div className="pt3 pr5 pr1 pr1-ns w-25 w-30-l w-40-m w-100-ns">
					<div className="list ul flex justify-around items-center ">
						<li> <Link className="link" to='/' >All Streams </Link> </li>
						<li className='w-40 w-40-l w-50-m w-10-ns'>
							{this.buttonRendering(this.props.isSignedIn)}
						 </li>
					</div>
				</div>


			</div>
		
			

			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn
	}
}

export default connect(mapStateToProps, {actionSignOut,actionSignIn})(UserHeader);