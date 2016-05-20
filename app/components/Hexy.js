import React, {Component} from 'react';
import ReactKonva from './ReactKonva';
import Plat from './Plat';
import DD from './DD';
import Poly from './Poly';

import {rgbToHsl,getRadialCoords} from './Utils';

let {Stage, Layer, Rect, Star, Circle,RegularPolygon,Path} = ReactKonva;


class Hexy extends Component {

  constructor(props) {
    super(props);
    this.siblingsArray = [];
    this.clickFlag = 0;
    this.siblingsObject = {};
    this.regularPolyObject = {};
  }
  
  
static propTypes = {
  radius: React.PropTypes.number
};

static defaultProps = {
  radius : 50,
  padding: 100,
  domPolyOffset:0
};


  componentDidMount() {
    this.siblingsArray.map(function(sibling){
     let IconPos = getRadialCoords(parseInt(sibling.props.xx),parseInt(sibling.props.yy),parseInt(sibling.props.radius) + 55,parseInt(sibling.props.rotation) + 60);
     sibling.domIconExpandProps = {
         left: IconPos[0] - 25 + 'px',
         top: IconPos[1] - 25 + 'px',
      };
      
     IconPos = getRadialCoords(parseInt(sibling.props.xx),parseInt(sibling.props.yy),parseInt(sibling.props.radius) ,parseInt(sibling.props.rotation) + 60);
     sibling.domIconCollapseProps = {
         left: IconPos[0] - 25 + 'px',
         top: IconPos[1] - 25 + 'px',
      };
   //   console.log("initing" , sibling);
    });

    this.regularPolyObject['backShadowPoly'].refs.domParent.style.transition = 'transform 0s';
    this.regularPolyObject['backShadowPoly'].refs.domParent.style.transform = 'scale(.5,.5)';
  }

  componentWillReceiveProps(newProps) {
 
  }

  componentWillUnmount() {
 
  }
  
  componentWillMount() {
  //   this.props.domPolyOffset = this.props.radius + this.props.padding;
  }
  
  handleMouseDown = () => {
      
//       if(!this.clickFlag){
//         this.siblingsArray.map(function(sibling){
//       // console.log(sibling);    
//         let translateString = "translate(" + '0' +"px,"+ '0' +"px)"; 
//         let rotateString = 'rotate('+ sibling.canPolyProps.roty + 'deg) ';
//         let scaleString = 'scale('+ ( 2 * sibling.props.scaleX) + ',' + ( 2 * sibling.props.scaleY) + ')';
        
//         let transformString =  rotateString + translateString + scaleString;
        
//       // sibling.refs.domParent.style.transformOrigin = "18.624% 16.7063%";
//       // sibling.refs.domParent.style.transformOrigin = "25.624% 25.7063%";
//         sibling.refs.domParent.style.transformOrigin = "50px 0px";
//   //     sibling.refs.domParent.style.transform = transformString;
//         sibling.refs.def.node.children[0].scaleX(2 * sibling.canPolyProps.scale);
//         sibling.refs.def.node.children[0].scaleY(2 * sibling.canPolyProps.scale);
//         sibling.refs.fed.node.children[0].scaleX(2 * sibling.canPolyProps.scale);
//         sibling.refs.fed.node.children[0].scaleY(2 * sibling.canPolyProps.scale);
//         sibling.refs.def.node.draw();
//         sibling.refs.fed.node.draw();
//       });  
//       this.clickFlag = 1;
//       }
      
      console.log("down down");
  }
  
  handleMouseUp = () => {
      console.log("out out");
    // if(this.clickFlag){
    //     this.siblingsArray.map(function(sibling){
    //     let translateString = "translate(" + '0' +"px,"+ '0' +"px)";
    //     let rotateString = 'rotate('+ sibling.canPolyProps.roty + 'deg) ';
    //     let scaleString = 'scale('+ (  sibling.props.scaleX) + ',' + (  sibling.props.scaleY) + ')';
        
    //     let transformString =  rotateString + translateString + scaleString;
        
    //     sibling.refs.domParent.style.transform = transformString;
    //     sibling.refs.def.node.children[0].scaleX(sibling.canPolyProps.scale);
    //     sibling.refs.def.node.children[0].scaleY(sibling.canPolyProps.scale);
    //     sibling.refs.fed.node.children[0].scaleX(sibling.canPolyProps.scale);
    //     sibling.refs.fed.node.children[0].scaleY(sibling.canPolyProps.scale);
    //     sibling.refs.def.node.draw();
    //     sibling.refs.fed.node.draw();
    //   });
    //   this.clickFlag = 0;
    // }
      
  }
  
  
  handleMouseOver = (e) => {
      let hslArray = rgbToHsl(255,0,0);
      console.log("over",0);
//      this.siblingsArray[0].refs.domPoly.style.WebkitFilter = "brightness(50%) sepia(1) hue-rotate("+ hslArray[0] +"deg) saturate(" + hslArray[1] + "%) brightness(" + hslArray[2] + "%)";
   //   this.siblingsArray[0].refs.domPoly.style.WebkitFilter = "brightness(50%) sepia(1) hue-rotate(0deg) saturate(100%) brightness(90%)";
       // this.siblingsArray[0].refs.domPolyOne.style.opacity = 1;
      //  this.siblingsObject[this.props.key].refs.domPolyOne.style.opacity = 1;
      
  }
  
  handleMouseOut = (e) => {
      console.log("out",e);
     // this.siblingsArray[0].refs.domPolyOne.style.opacity = 0;
     // this.siblingsObject[this.props.key].refs.domPolyOne.style.opacity = 0;
  }
  
  
  handleStub = () => {
      console.log("stubber");
  }
  
  handleCloseClick = () => {
       if(this.clickFlag){
        this.siblingsArray.map(function(sibling){
       // console.log(sibling);    
        let translateString = "translate(" + '0' +"px,"+ '0' +"px)"; 
        let rotateString = 'rotate('+ sibling.canPolyProps.roty + 'deg) ';
        let scaleString = 'scale('+ (  sibling.props.scaleX) + ',' + (  sibling.props.scaleY) + ')';
        
        let transformString =  rotateString + translateString + scaleString;
        
       // sibling.refs.domParent.style.transformOrigin = "18.624% 16.7063%";
       // sibling.refs.domParent.style.transformOrigin = "25.624% 25.7063%";
      //  sibling.refs.domParent.style.transformOrigin = "50px 0px";
        sibling.refs.domParent.style.transform = transformString;
      //  sibling.refs.domParentOne.style.transformOrigin = "50px 0px";
        sibling.refs.domParentOne.style.transform = transformString;
        sibling.refs.def.node.children[0].scaleX( sibling.canPolyProps.scale);
        sibling.refs.def.node.children[0].scaleY( sibling.canPolyProps.scale);
        sibling.refs.fed.node.children[0].scaleX( sibling.canPolyProps.scale);
        sibling.refs.fed.node.children[0].scaleY( sibling.canPolyProps.scale);
        sibling.refs.domIcon.style.opacity = 1;
        sibling.refs.domIcon.style.transform =  'translate(' + sibling.domIconCollapseProps.left + ',' + sibling.domIconCollapseProps.top + ') scale(.5,.5)'  ;
   //     sibling.refs.domIcon.style.left = sibling.domIconCollapseProps.left ;
        sibling.refs.def.node.draw();
        sibling.refs.fed.node.draw();
      });  
      this.clickFlag = 0;
      }

      this.regularPolyObject['backShadowPoly'].refs.domParent.style.transition = 'all 1s ';
      this.regularPolyObject['backShadowPoly'].refs.domParent.style.transform = 'scale(.5,.5)';
      this.regularPolyObject['backShadowPoly'].refs.domParent.style.opacity = 0;

      this.regularPolyObject['frontButton'].refs.domParent.style.transition = 'all 1s ';
      this.regularPolyObject['frontButton'].refs.domParent.style.transform = 'scale(1,1)';

      this.regularPolyObject['frontButton'].refs.def.node.children[0].radius("100");
      this.regularPolyObject['frontButton'].refs.def.node.draw();

  }
  
  handleClick = () => {
       if(!this.clickFlag){
        this.siblingsArray.map(function(sibling){
       // console.log(sibling);    
        let translateString = "translate(" + '0' +"px,"+ '0' +"px)"; 
        let rotateString = 'rotate('+ sibling.canPolyProps.roty + 'deg) ';
        let scaleString = 'scale('+ ( 1.5 * sibling.props.scaleX) + ',' + ( 1.5 * sibling.props.scaleY) + ')';
        
        let transformString =  rotateString + translateString + scaleString;
        
       // sibling.refs.domParent.style.transformOrigin = "18.61.54% 16.7063%";
       // sibling.refs.domParent.style.transformOrigin = "1.55.61.54% 1.55.7063%";
        sibling.refs.domParent.style.transformOrigin = "50px 0px";
        sibling.refs.domParent.style.transform = transformString;
        sibling.refs.domParentOne.style.transformOrigin = "50px 0px";
        sibling.refs.domParentOne.style.transform = transformString;
        sibling.refs.def.node.children[0].scaleX(1.5 * sibling.canPolyProps.scale);
        sibling.refs.def.node.children[0].scaleY(1.5 * sibling.canPolyProps.scale);
        sibling.refs.fed.node.children[0].scaleX(1.5 * sibling.canPolyProps.scale);
        sibling.refs.fed.node.children[0].scaleY(1.5 * sibling.canPolyProps.scale);
     //   sibling.refs.domIcon.style.top = sibling.domIconExpandProps.top ;
     //   sibling.refs.domIcon.style.left = sibling.domIconExpandProps.left;
        sibling.refs.domIcon.style.opacity = 1;
        sibling.refs.domIcon.style.transform =  'translate(' + sibling.domIconExpandProps.left + ',' + sibling.domIconExpandProps.top + ') scale(1,1)'  ;
        //this.refs.domIcon.style.
        sibling.refs.def.node.draw();
        sibling.refs.fed.node.draw();
      });  
      this.clickFlag = 1;
      }

     // console.log(this.backShadowPoly);
      this.regularPolyObject['backShadowPoly'].refs.domParent.style.transition = 'all 1s';
      this.regularPolyObject['backShadowPoly'].refs.domParent.style.transform = 'scale(.75,.75)';
      this.regularPolyObject['backShadowPoly'].refs.domParent.style.opacity = 1;

      this.regularPolyObject['frontButton'].refs.domParent.style.transition = 'all 1s';
      this.regularPolyObject['frontButton'].refs.domParent.style.transform = 'scale(.75,.75)';

    //  this.regularPolyObject['frontButton'].refs.def.node.children[0].scaleY(.75);
      this.regularPolyObject['frontButton'].refs.def.node.children[0].radius("75");
      this.regularPolyObject['frontButton'].refs.def.node.draw();
  }

  render() {
     let {width,height} = this.props;
     let domPolyOffset = this.props.radius + this.props.padding; 
     let domPolyAbsPosY = domPolyOffset + this.props.yPos;
     let domPolyAbsPosX = domPolyOffset + this.props.xPos;
     
    return ( 
       <div style={{ position: 'absolute', top: this.props.yPos + 'px' , left: this.props.xPos + 'px' }} >  
        <Plat width={6 * this.props.radius + 50} height={6 * this.props.radius + 50} >
        
         <DD xx={domPolyOffset} yy={domPolyOffset}  radius={this.props.radius} rotation="30" offsetX="0" offsetY="0" 
           transformOriginX="50" transformOriginY="0" shadow="0" fill="#ff0000" rot="10" MouseOver={this.handleMouseOver}
           MouseOut={this.handleMouseOut}
           MouseDown={this.handleMouseDown}
           MouseUp={this.handleMouseUp}
           siblings={this.siblingsArray}
           onClick={this.handleCloseClick}
           siblingsObject={this.siblingsObject}
           activeColor="#ff7777"
           icon="fa fa-times"
           key="1" 
         />
         
         <DD xx={domPolyOffset} yy={domPolyOffset}  radius={this.props.radius} rotation="150" offsetX="0" offsetY="0" 
           transformOriginX="50" transformOriginY="0" shadow="0" fill="#ff0000" rot="10" MouseOver={this.handleMouseOver}
           MouseOut={this.handleMouseOut}
           MouseDown={this.handleMouseDown}
           MouseUp={this.handleMouseUp}
           siblings={this.siblingsArray}
           onClick={this.handleStub}
           siblingsObject={this.siblingsObject}
           activeColor="#777"
           icon="fa fa-twitter"
           key="2"
         />
         
         <DD xx={domPolyOffset} yy={domPolyOffset}  radius={this.props.radius} rotation="270" offsetX="0" offsetY="0" 
           transformOriginX="50" transformOriginY="0" shadow="0" fill="#ff0000" rot="10" MouseOver={this.handleMouseOver}
           MouseOut={this.handleMouseOut}
           MouseDown={this.handleMouseDown}
           MouseUp={this.handleMouseUp}
           onClick={this.handleStub}
           siblings={this.siblingsArray}
           siblingsObject={this.siblingsObject}
           activeColor="#777"
           icon="fa fa-github"
           key="3"
         />
         
          <Poly xx={domPolyOffset} yy={domPolyOffset} sides="6" radius="100" rotation="0" offsetX="0" offsetY="0" parentRef={this.regularPolyObject}
           transformOriginX="50" transformOriginY="0" shadow="5" onClick={this.handleClick} level="-1"  listen={true} name="frontButton"
          />
           <Poly xx={domPolyOffset} yy={domPolyOffset} sides="6" radius="200" rotation="0" offsetX="0" offsetY="0" scaleParent=".5"
           transformOriginX="50" transformOriginY="0" shadow="5" level="-2" listen={false} parentRef={this.regularPolyObject} name="backShadowPoly"
          />
        
      </Plat>
      </div>
    );
  }
}

export default Hexy;
