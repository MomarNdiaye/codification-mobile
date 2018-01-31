import axios from axios ; 


export USERREQUEST ='USER_REQUEST',
export USERRESPONSE='USER_RESPONSE'; 


export function userRequest(user){
	type : USER_RESQUEST , 
	user 

}


export function userResponse(user , json){
	type : USER_RESPONSE , 
	user , 
	post : json.data.children.map(child =>child.data); 
}





