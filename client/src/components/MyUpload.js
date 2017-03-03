 import React ,{ Component } from 'react';
 import Dropzone from 'react-dropzone';
 
export default class Upload extends Component {
   
   constructor(props){
     super(props)
     this.state={file:'', imagePreviewUrl:'./default.jpg','reload':false};
   }
	 handleReload= this.handleReload.bind(this);
   
   
   onDrop(acceptedFiles, rejectedFiles){
     if(acceptedFiles){
      //  console.log('AcceptedFiles', acceptedFiles);
       const [ File ]=  acceptedFiles;
       this.setState({file:File,imagePreviewUrl:File.preview});
      //  console.log('theFile', File);
      //  console.log('File.preview', File.preview);
      //  console.log('imagePreviewUrl', this.state.imagePreviewUrl);
      this.props.func(File);
     }else if(rejectedFiles){
       console.log('RejectedFiles', rejectedFiles);
     }
  }
  handleReload(){
    if(this.props.reload){
      this.setState({imagePreviewUrl:this.props.input.value});
      
      return this.state.imagePreviewUrl; 
    }else {
    return this.state.imagePreviewUrl; 
    }
  } 
   render(){
    //  const { input:{ value, onChange }, func }= this.props;
     console.log(this.props);
     console.log(this.props.reload);
     const imagePreviewUrl = this.props.reload?this.props.input.value:this.state.imagePreviewUrl;
    //  console.log(imagePreviewUrl);
     return(
       <div className='uploader'>
         <Dropzone multiple={false} onDrop={this.onDrop.bind(this)}>
           <img src={imagePreviewUrl} className="img" role="presentation"/>
           <div className="img"></div>
         </Dropzone>
         {/* <span>The current value is { value }</span>
         <br></br>
         <button type="button" onClick={()=>onChange(value+1)}>Incremento</button>
         <button type="button" onClick={()=>onChange(value-1)}>Decremento</button>
         <button type="button" onClick={()=>func(value)}>FUNCTION</button>
         <h1>Hola</h1> */}
         
       </div>
     );
   }
	 
 }
 