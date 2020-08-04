import {SIGN_IN,SIGN_OUT} from '../actions/ActionConstants';

const INIT_AUTH_REDUCER = {
	isSignedIn:null,
	userId:null
}

const authReducer = (state=INIT_AUTH_REDUCER,action) => {

	switch(action.type){
		case SIGN_IN:

		return {...state,isSignedIn:true,userId:action.payload}

		case SIGN_OUT:

		return {...state,isSignedIn:false,userId:null}

		default :

		return state;
	}

}

export default authReducer;