import * as type from './constants'

export function loadAllusers(){
	return {type: type.GET_USERS}
}

export function getSingleUser(idUser){
 return {
   type: type.GET_SINGLE_USER,
   idUser: idUser   
 }
}
export function loadFormUser(idUser){
 return {
   type: 'LOAD_FORM',
   idUser: idUser   
 }
}

export function deleteUser(idUser){
  return {
    type: type.DELETE_USER,   
    idUser: idUser
  }
}

export function loadracis(){
	return {type: 'GET_RACIS'}
}
export function createUser(...formValues){
	//need to see what are the values that the form is returning
	// console.log('enActions,', ...formValues);
  return {
    type: type.CREATE_USER,   
    payload: formValues
  }
}
export function updateUser(...formValues){
	// console.log('enActions,', ...formValues);
  return {
    type: type.UPDATE_USER,   
    payload: formValues
  }
}

