import React, { Component } from 'react'


import Triangle from '../components/Burffee'
import BB from '../components/BB'

class Burf extends Component {

constructor(props) {
  super(props);
  this.state = {
       pos: 0
  };
  
  this.lastTime = 0;
  this.tick = this.tick.bind(this);
}

static propTypes = {
   vArray : React.PropTypes.array.isRequired,
   hArray : React.PropTypes.array,
   
//   strokeColor : React.PropTypes.string,
//   strokeWidth : React.PropTypes.string,
//   fillColor: React.PropTypes.string,
//   width: React.PropTypes.string,
//   height: React.PropTypes.string,
//   opacity : React.PropTypes.string
};

static defaultProps = {
   hArray : [],
   opacity:'1',
  
};
 
 
tick(currentTime){
    
     
   
    
    // if (currentTime >= this.lastTime + 50)  {
    //  // one second has passed, run some code here
    //     //let checker = this.state.pos > 0 ? 0 : 2;
    //     let checker = this.state.pos + 1.5;
    //     if(checker > 200) {
    //         checker = 0;
    //     }
    //     this.setState({
    //         pos: checker
    //     });
    //      this.lastTime = currentTime;
    // }
    let checker = this.state.pos + 1.1;
        if(checker > 1500) {
            checker = 0;
        }
        this.setState({
            pos: checker
        });
        
    //console.log("hello"); 
    window.requestAnimationFrame(this.tick);
} 

componentDidMount() {
    window.requestAnimationFrame(this.tick);
}
  
render() {
  const { opacity,shadow,color } = this.props;
 
  let styler = {
 //     transition : 'all .3s linear',
 //     transform: 'scaleX('+ this.state.pos +') scaleY('+ this.state.pos +') translateZ(0)',
      width:'200px',
      height: '200px'
 //     background: 'black'
  };
  
    return (
      <div >     
          <div style={ styler }>
            hello world
          </div>
        
      </div>
    )
  }
}

export default Burf