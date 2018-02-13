import React from 'react';
class Welcome extends React.Component {
   constructor(props) {
        super(props);
       
  }
  render(){
    return <h4> {this.props.name}</h4>; 
  }
}

export default Welcome;
