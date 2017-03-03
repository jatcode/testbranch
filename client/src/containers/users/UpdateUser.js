import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { MyInput, MyTextarea, SimpleMap } from '../../components/MyComponents';
import MyUpload  from '../../components/MyUpload'

class UpdateUser extends Component {   
   
	 componentDidMount() {
		 console.log('Updating...',this.props.params.id);
    this.props.loadFormUser(this.props.params.id)
    console.log('after loadFormUser(), ',this.props);
	 }
	 
  static contexTypes = {
    router : PropTypes.object
  };
  
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerClick = this.handleMarkerClick.bind(this);
  
  handleMapClick(e) {
    // console.log('just local PROPS,',e);
  }
  
  handleMarkerClick(e) {
    const { lat, lng } =e.latLng.toJSON();
    this.props.change('geoLocation.latitude',lat);
    this.props.change('geoLocation.longitude',lng);
  }
  
  
  handleImage(data){
    console.log('this.props en padre',this.props);
    // console.log('What in e en padre',e);
    console.log('What in data en padre',data);
    this.props.change('picture',data.imagePreviewUrl);
  }

  handleMyUpload(data){
    console.log('data en MYUPLOAD',data);
    this.props.change('picture',data.preview);
  }
    
  submit(values){    
		try{
			this.props.updateUser(values);
		}catch(e){
			  if(e.validationErrors) {
	        throw new SubmissionError(e.validationErrors)
	      } else {
	        console.log(e);
	      }
		}
  }   
  render() {
    const { handleSubmit, pristine, reset, submitting }= this.props;
    const racisOptions=['R', 'A', 'C', 'I', 'S' ];
    return (      
      <div>
        <form  className="pure-form pure-form-stacked contenedor" onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="pure-u-1-5 pure-u-md-1-5 column left mycard">
            <span className="mheader">Profile Settings</span>
            {/* <Field name='picture'  component={ImageUpload} myFunc={this.handleImage.bind(this)} /> */}
            <Field name='picture' component={ MyUpload } reload={true} func={this.handleMyUpload.bind(this)}/>
            <Field name='roleName' component={MyInput} />
            <Field name='geoLocation.latitude' component={MyInput} />
            <Field name='geoLocation.longitude' component={MyInput} />
            <SimpleMap 
              containerElement={
                <div style={{ height: `300px` }} ></div>
              }
              mapElement={
                <div style={{ height: `100%` }} ></div>
              }
              onMapClick={this.handleMapClick}
              onMarkerClick={this.handleMarkerClick}
            />
            <Field name='racis' className='pure-input-1' component='select'  >
              <option value="">Select a racis...</option>
              {racisOptions.map(option=>
                <option value={option} key={option}>{option}</option>
              )}
            </Field>            
          <br/>
          <div>
            <button className='pure-button pure-button-primary' type='submit' disabled={submitting}>Submit</button>
            <button className='pure-button ' type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
          </div>
          <div className="pure-u-4-5 pure-u-md-4-5 column right mycard">
            <span className="mheader">Personal Details</span>
            <Field name='firstName' component={MyInput} />
            <Field name='lastName' component={MyInput} />
            <Field name='email' component={MyInput} />
            <Field name='password' component={MyInput} type='password' />
            <Field name='username' component={MyInput} />
            <Field name='description' component={MyTextarea} />              
          </div>
        </form>
      </div>
    );
  }
}

const validate = values=>{
  const {firstName, lastName, email, username } = values;
  const errors ={};
  if(!firstName || firstName.trim() ===''){errors.firstName= 'firstName is required'};
  if(!lastName || lastName.trim() ===''){errors.lastName= 'lastName is required'};
  if(!email || email.trim() ===''){errors.email= 'email is required'};
  if(!username || username.trim() ===''){errors.username= 'username is required'};
  return errors
}

UpdateUser = reduxForm({
  form: 'addTodo-form',
  validate,
	enableReinitialize:true
})(UpdateUser); //conecting it to reduxform

UpdateUser = connect( 
	state => ({
		initialValues: state.formLoader // pull initial values from account reducer
	}),null)(UpdateUser); //connecting it to the main store


export default UpdateUser;

