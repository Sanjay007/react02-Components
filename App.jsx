import React from 'react';
import Welcome from './Welcome.jsx'
class App extends React.Component {
   constructor(props) {
        super(props);
       
  }
  render(){
    return <div>
      <Welcome name="Welcome" /> 
      <Welcome name="Frugalis" /> 
      <Welcome name="Minds" />
    
        </div>
  }
}

export default App;
