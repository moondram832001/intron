import React, {Component} from 'react';
import ReactKonva from './ReactKonva';
import Intron from '../containers/intron';
import Polarons from '../components/Polarons';
import Plat from '../components/Plat';
import DD from '../components/DD';
import Hexy from '../components/Hexy';

let {Stage, Layer, Rect, Star, Circle,RegularPolygon} = ReactKonva;

class IntronDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        divBackground : 'green',
        backy : 'https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg',
        refresh: true
    };
    this.polaronImage = "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg";
    this.renderCount = 0;
    this.imagy = "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg";
    this.clickCount = 0;
    this.refreshIntronCount = 0;

    this.intronCropperObject = {};
   // this.handleClick = 

  }

  componentDidMount() {
 
  }
  
  componentDidMount() {
     console.log("demo was mounted");
  }

  componentDidUpdate() {
     console.log("demo was updated");
   //  this.refreshIntronImage();
  }

  componentWillReceiveProps(newProps) {
 
  }

  componentWillUnmount() {
 
  }
  
  handleClick() {
         console.log("clicked");
          this.setState({
 //         divBackground :  'url('+ this.polaronImage +')'  ,
 //         backy : ,
           refresh: true,
           refreshImage: true
          },function(){
            console.log("after effects", this.clickCount);
              if(!this.clickCount){
                this.setState({
                  refresh: true,
                  refreshImage: true
                });
              //  this.forceUpdate();
              }
              this.clickCount++;
          });
  }

  getCropperObject(cropperObject){
     this.cropperObject = cropperObject;
  //   console.log("image refresher",this.cropperObject.getCroppedCanvas());
  }

  refreshIntronImage(){
   //  console.log("image refresher",this.cropperObject.getCroppedCanvas());
   //   this.cropperObject.crop();
      //this.cropper.crop();
      this.setState({
 //         divBackground :  'url('+ this.polaronImage +')'  ,
 //         backy : ,
           refresh: false,
           preview: this.cropperObject.getCroppedCanvas(),
           refreshImage: false
          },function(){
                if(!this.refreshIntronCount){
                    this.setState({
                      refresh: false,
                      refreshImage: false,
                      preview: this.cropperObject.getCroppedCanvas()
                  });  
                }
                 this.refreshIntronCount++;
          });
  }

  handleClickIt() {
         console.log("clicked");
  }

  getPolaronImage(imageURL){
   //   this.polaronImage = imageURL;
      console.log("i was run");
      this.imagy = imageURL;
      this.setState({
   //       divBackground :  'url('+ this.polaronImage +')'  ,
          backy : imageURL,
          refresh: false,
          refreshImage: true
      });
  }

// <div style={{ position: 'absolute', top: '300' + 'px' , left:  '500' + 'px' }} >
//                 <Plat width={300} height={200} >
//                   <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
//                      transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
//                      MouseOver={this.handleMouseOver}
//                      MouseOut={this.handleMouseOut}
//                      onClick={this.handleClick}
//                      points={[0,0,100,0,100,200]}
//                      activeColor="#ff7777"
//                      icon="fa fa-times"
//                      level="-3"
//                      />
//                 </Plat>   
//             </div>
//             <div style={{ position: 'absolute', top: '300' + 'px' , left:  '800' + 'px' }} >
//                 <Plat width={300} height={200} >
//                   <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
//                      transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
//                      MouseOver={this.handleMouseOver}
//                      MouseOut={this.handleMouseOut}
//                      onClick={this.handleClick}
//                      points={[0,0,100,0,100,200]}
//                      activeColor="#ff7777"
//                      icon="fa fa-times"
//                      level="-3"
//                      /> 
//                 </Plat>   
//             </div>


 // <div style={{ position: 'absolute', top: '300' + 'px' , left:  '500' + 'px' }} >
 //                <Plat refresh={this.state.refresh} width={300} height={200} >
 //                  <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
 //                     transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
 //                     MouseOver={this.handleMouseOver}
 //                     MouseOut={this.handleMouseOut}
 //                     onClick={this.handleClick.bind(this)}
 //                     points={[0,0,100,0,100,200]}
 //                     activeColor="#ff7777"
 //                     icon="fa fa-times"
 //                     level="-3"
 //                     />
 //                </Plat>   
 //            </div>
 //            <div style={{ position: 'absolute', top: '300' + 'px' , left:  '800' + 'px' }} >
 //                <Plat refresh={this.state.refresh} width={300} height={200} >
 //                  <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
 //                     transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
 //                     MouseOver={this.handleMouseOver}
 //                     MouseOut={this.handleMouseOut}
 //                     onClick={this.handleClick.bind(this)}
 //                     points={[0,0,100,0,100,200]}
 //                     activeColor="#ff7777"
 //                     icon="fa fa-times"
 //                     level="-3"
 //                     /> 
 //                </Plat>   
 //            </div>

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
      let platState = this.state.refresh;
    //let sampletag = this.renderCount === 0 ? <div>hello</div> : <Intron src={this.state.backy}></Intron>;
    let RenderComponent =  
              <div>           
              <div style={{ position: 'absolute' , top: '0px' , display :'none'}}>
                <Polarons refresh={this.state.refresh} passToParent={this.getPolaronImage.bind(this)} ></Polarons>
              </div>
              
              <div> 
              <div style={{ position: 'absolute', top: '300' + 'px' , left:  '500' + 'px' }} >
                <Plat refresh={!platState} width={300} height={200} >
                  <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
                     transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
                     MouseOver={this.handleMouseOver}
                     MouseOut={this.handleMouseOut}
                     onClick={this.handleClick.bind(this)}
                     points={[0,0,100,0,100,200]}
                     activeColor="#ff7777"
                     icon="fa fa-times"
                     level="-3"
                     />
                </Plat>   
            </div>
            <div style={{ position: 'absolute', top: '300' + 'px' , left:  '800' + 'px' }} >
                <Plat refresh={!platState} width={300} height={200} >
                  <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
                     transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
                     MouseOver={this.handleMouseOver}
                     MouseOut={this.handleMouseOut}
                     onClick={this.refreshIntronImage.bind(this)}
                     points={[0,0,100,0,100,200]}
                     activeColor="#ff7777"
                     icon="fa fa-times"
                     level="-3"
                     /> 
                </Plat>   
            </div>
                <Intron refresh={!this.state.refresh } refreshImage={this.state.refreshImage} src={this.state.backy}  
                preview={this.state.preview} passToParent={this.getCropperObject.bind(this)}  ></Intron>

            </div>
            </div>
            ;

   // this.renderCount++;
    return ( 
        <div>
            {RenderComponent}
        </div>
    );
  }
}

export default IntronDemo;