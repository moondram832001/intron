import React, {Component} from 'react';
import ReactKonva from './ReactKonva';
import Intron from '../containers/intron';
import Polarons from '../components/Polarons';
import Plat from '../components/Plat';
import DD from '../components/DD';

let {Stage, Layer, Rect, Star, Circle,RegularPolygon} = ReactKonva;

class IntronDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        divBackground : 'green',
        backy : 'https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg'
    };
    this.polaronImage = "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg";
    this.renderCount = 0;
    this.imagy = "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg";
  }

  componentDidMount() {
 
  }
  
  componentDidMount() {
 
  }

  componentWillReceiveProps(newProps) {
 
  }

  componentWillUnmount() {
 
  }
  
  getPolaronImage(imageURL){
      this.polaronImage = imageURL;
      console.log("i was run");
      this.imagy = imageURL;
      this.setState({
          divBackground :  'url('+ this.polaronImage +')'  ,
          backy : imageURL
      });
  }

  render() {
      console.log(this.state , this.renderCount);
     
      
      let divStyle = {
           position: 'absolute',
           top: '600px',
           left: '0px',
           background: this.state.divBackground,
           width:'1300px',
           height: '1100px'
      };
    let sampletag = this.renderCount === 0 ? <div>hello</div> : <Intron src={this.state.backy}></Intron>;
    this.renderCount++;
    return ( 
        <div>
            {sampletag}
            <div style={{ position: 'absolute', top: 400 + 'px' , left:  500 + 'px)' }} >
                <Plat width={300} height={300} >
                  <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
                     transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
                     MouseOver={this.handleMouseOver}
                     MouseOut={this.handleMouseOut}
                     points={[0,0,100,0,100,100]}
                     activeColor="#ff7777"
                     icon="fa fa-times"
                     level="-3"
                     />
                </Plat>   
            </div>
            <div style={{ position: 'absolute' , top: '0px' , display :'none'}}>
                <Polarons passToParent={this.getPolaronImage.bind(this)} ></Polarons>
            </div>
        </div>
    );
  }
}

export default IntronDemo;