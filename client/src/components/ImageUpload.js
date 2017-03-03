/* eslint-disable */
import React, { Component } from 'react';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }
  
  componentDidMount(){
    console.log(this.props)
    console.log(this.props.input)
    console.log(this.props.input.name)
    console.log(this.props.input.value)
    const { input:{ name, value } } = this.props;
    console.log(name)
    console.log(value)
    
    if(value!=='default.jpg'){
      console.log('inputValue',value);
      console.log('inputName',name);
      // console.log('input',input);
    }else{
      console.log('negativoinput.value',value);
      console.log('negativoinput.name',name);
        
    }
  }
  
  habla(e, localState){
    e.preventDefault();
    console.log('e ',e);
    console.log('localState en hijo',localState)
    return this.props.myFunc(localState);
  }
  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{maxWidth: `calc(100% - 20px)`,maxHeight: `100px`}}/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div className="previewComponent">
          <input   type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button className="pure-button pure-button-primary" onClick={(e)=>this.habla(e,this.state)}>Habla Image</button>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  
export default ImageUpload;


// _handleSubmit(e) {
//   e.preventDefault();
//   // TODO: do something with -> this.state.file
//   console.log('handle uploading-', this.state.file);
//   console.log('handle uploading-', this.state);
// }















