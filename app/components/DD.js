import React, {Component} from 'react';
//import ReactDOM from 'react-dom'
import ReactKonva from './ReactKonva';
import Plat from './Plat';
import FontAwesome from 'react-fontawesome';
import {getRadialCoords} from './Utils';

import fa from 'font-awesome/css/font-awesome.css';

let {Stage, Layer, FastLayer,Rect, Star, RegularPolygon,Path , Line,Text} = ReactKonva;

class DD extends Component {

constructor(props) {
  super(props);
  this.state = {
    sample : 0
  };
  
  this.counter = 0;
  this.imgSrc = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
  this.domPolyProps = {};
  this.domScalerProps = {};
  this.canPolyProps = {};
  this.domParentProps={};
  this.canBounds = {};
  this.scaleFactor = 2;
  this.layerProps = {};
  this.bufferCanvas = "";
  this.domIconExpandProps = {};
  this.domIconCollapseProps = {};
  
 // console.log(this.props);
}

// static propTypes = {

// };

static defaultProps = {
    transformOriginX : "50",
    transformOriginY : "50",
    scaleX: "1",
    scaleY: "1"
};


// handleMouseOver = () => {
//     console.log("over");
    
//     // let translateString = 'translate(' +  this.canBounds.x + 'px,' +  this.canBounds.y + 'px) ';
//     // let rotateString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
//     // let scaleString = 'scale(' + ( 2 * this.props.scaleX) + ',' + ( 2 * this.props.scaleY) + ')';
    
//      let translateString = "translate(" + '0' +"px,"+ '0' +"px)"; 
//     let rotateString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
//     let scaleString = 'scale('+ ( 2 * this.props.scaleX) + ',' + ( 2 * this.props.scaleY) + ')';
    
//     let transformString =  rotateString + translateString + scaleString;
    
//   // this.refs.domParent.style.transformOrigin = "18.624% 16.7063%";
//   // this.refs.domParent.style.transformOrigin = "25.624% 25.7063%";
//     this.refs.domParent.style.transformOrigin = "50px 0px";
//     this.refs.domParent.style.transform = transformString;
//     this.refs.def.node.children[0].scaleX(2);
//     this.refs.def.node.children[0].scaleY(2);
//     this.refs.def.node.draw();
// }

// handleMouseOut = () => {
//     console.log("out");
    
//     //this.refs.domParent.style.transition= 'all .3s'; 
    
//     // let translateString = 'translate(' +  this.canBounds.x + 'px,' +  this.canBounds.y + 'px) ';
//     // let rotateString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
//     // //let rotateString = 'rotate('+ '0' + 'deg) ';
//     // let scaleString = 'scale(' + ( this.props.scaleX) + ',' + (this.props.scaleY) + ')';
//     // let transformString =  scaleString;
//      let translateString = "translate(" + '0' +"px,"+ '0' +"px)";
//     let rotateString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
//     let scaleString = 'scale('+ (  this.props.scaleX) + ',' + (  this.props.scaleY) + ')';
    
//     let transformString =  rotateString + translateString + scaleString;
    
//     this.refs.domParent.style.transform = transformString;
// }


handleMouseOver = () => {
    this.refs.domPolyOne.style.opacity = 1;
  //  this.refs.domIcon.style.textShadow = "0px 0px 10px #fff";
  //  this.refs.domIcon.style.color = "#fff";
}

handleMouseOut = () => {
    this.refs.domPolyOne.style.opacity = 0;
//    this.refs.domIcon.style.textShadow = "0px 0px 0px #fff";
//    this.refs.domIcon.style.color = "#000";
}

componentDidMount(){
  let divBounds = this.refs.def.node.children[0].getClientRect();
  //console.log(this.refs.def.node.children[0].getCanvas());
  let dataURL = this.refs.def.node.toDataURL(divBounds);
  let dataURLOne = this.refs.fed.node.toDataURL(divBounds);
  let radShad = parseInt(this.props.radius) + parseInt(this.props.shadow);
 // console.log(radShad);
    
    this.canPolyProps = {
        sides : this.props.sides,
        opacityValue : 0,
        rady : this.props.radius,
        filler: "#0000ff",
        scale: 1,
        xPos: this.props.xx,
        yPos: this.props.yy,
        roty : this.props.rotation,
        offX : ((this.props.transformOriginX/100) *  2 * radShad) - radShad,
        offY : ((this.props.transformOriginY/100) *  2 * radShad) - radShad,
        shadow: this.props.shadow
    };
    
    this.refs.def.node.children[0].opacity(this.canPolyProps.opacityValue);
    this.refs.def.node.children[0].fill(this.canPolyProps.filler);
    this.refs.def.node.children[0].x(this.canPolyProps.xPos);
    this.refs.def.node.children[0].y(this.canPolyProps.yPos);
    this.refs.def.node.children[0].scale(this.canPolyProps.scale);
   //this.refs.def.node.children[0].radius(this.canPolyProps.rady);
//    this.refs.def.node.children[0].sides(this.canPolyProps.sides);
//    this.refs.def.node.children[0].offsetX(this.canPolyProps.offX);
//    this.refs.def.node.children[0].offsetY(this.canPolyProps.offY);
    this.refs.def.node.children[0].rotation(this.canPolyProps.roty);
    
    this.refs.fed.node.children[0].opacity(0);
    this.refs.fed.node.children[0].fill(this.canPolyProps.filler);
    this.refs.fed.node.children[0].x(this.canPolyProps.xPos);
    this.refs.fed.node.children[0].y(this.canPolyProps.yPos);
    this.refs.fed.node.children[0].scale(this.canPolyProps.scale);
   //this.refs.fed.node.children[0].radius(this.canPolyProps.rady);
//    this.refs.fed.node.children[0].sides(this.canPolyProps.sides);
//    this.refs.fed.node.children[0].offsetX(this.canPolyProps.offX);
//    this.refs.fed.node.children[0].offsetY(this.canPolyProps.offY);
    this.refs.fed.node.children[0].rotation(this.canPolyProps.roty);
    
 //   this.refs.def.node.children[0].shadowBlur(this.canPolyProps.shadow);
    this.refs.def.node.draw();
    this.refs.fed.node.draw();
    
    
    this.canBounds = this.refs.def.node.children[0].getClientRect();
  //  console.log(this.canBounds , divBounds);
   // this.refs.domScaler.style.transition = 'all .3s';
   this.refs.domParent.style.transition = 'all 1s';
   this.refs.domPoly.style.transition = 'all 1s';
   this.refs.domPolyOne.style.transition = 'all .2s';
   this.refs.domIcon.style.transition = 'all 1s';
   this.refs.domParentOne.style.transition = 'all 1s';
 //  this.refs.domParentOne.style.transitionDelay = '.5s';
 //  this.refs.domPoly.style.transitionDelay = '.5s';
 //  this.refs.domParent.style.transitionDelay = '.5s';
 //  this.refs.domIcon.style.transitionDelay = '.5s';
 //  this.refs.domPolyOne.style.transitionDelay = '.5s';
    
   // this.refs.def.node.children[0].rotate(this.canPolyProps.roty);

    this.domPolyProps = {
        width: divBounds.width + 'px',
        height: divBounds.height + 'px',
        position: 'absolute',
        //   top:  (this.props.yy - this.props.height/(2 * this.scaleFactor)) +  'px',
        //   left: (this.props.xx - this.props.width/(2 * this.scaleFactor)) + 'px',
        top: '0px',
        left: '0px',
        background:'url('+ dataURL +')',
        zIndex: this.props.level,
        transformOrigin: '0% 0%',
        transform: 'scale(' + 1/this.scaleFactor + ',' + 1/this.scaleFactor + ')'
      //transform: 'scale(1,1)'
    };
    
    this.domPolyPropsOne = {
        width: divBounds.width + 'px',
        height: divBounds.height + 'px',
        position: 'absolute',
        //   top:  (this.props.yy - this.props.height/(2 * this.scaleFactor)) +  'px',
        //   left: (this.props.xx - this.props.width/(2 * this.scaleFactor)) + 'px',
        top: '0px',
        left: '0px',
        background:'url('+ dataURLOne +')',
        zIndex: this.props.level,
        transformOrigin: '0% 0%',
        transform: 'scale(' + 1/this.scaleFactor + ',' + 1/this.scaleFactor + ')',
        opacity: 0
      //transform: 'scale(1,1)'
    };
    
    
    let scalingShadowFactor = 1;
    
    let translateString = "translateZ(0) translate(" + "0" +"px,"+ "0" +"px)"; 
    let rotateString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
    let scaleString = 'scale('+ scalingShadowFactor + ',' + scalingShadowFactor + ')';
    let transformString = translateString + rotateString + scaleString;
    let transformOriginString;
    
    let transformFactor  = 50;
    
    this.domParentProps={
        WebkitBackfaceVisibility: 'hidden',
        position: 'absolute',
        zIndex: this.props.level,
        width:divBounds.width/this.scaleFactor + 'px',
        height: divBounds.height/this.scaleFactor + 'px',
        top:  this.canPolyProps.yPos + 'px',
        left: (this.canPolyProps.xPos - this.props.transformOriginX) + 'px',
        transform: transformString,
        transformOrigin: this.props.transformOriginX + "px  " + this.props.transformOriginY + "px"
        //transformOrigin: "105px 91px",
        //transformOrigin: transformFactor + "px 0px"
    };
    
    
    let transOrgX = 50/100 * divBounds.width/this.scaleFactor;
    let transOrgY = 0/100 * divBounds.width/this.scaleFactor - (((scalingShadowFactor - 1) * divBounds.width/this.scaleFactor)/10);
    let scaleScalerString = 'scale(' + this.props.scaleX + ',' + this.props.scaleY + ')';
    let translateScalerString = 'translate(' +  this.canBounds.x + 'px,' +  this.canBounds.y + 'px) ';
    let rotateScalerString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
    let transformScalerString = translateScalerString + rotateScalerString + scaleScalerString;
    let scalerTransformOrigin = transOrgX + "px " + transOrgY + "px";
    
   
    
      
    //ff.style.background='url('+dataURL+')';
   // var polyNode = this.refs.canPoly.node;
    let BBB = this;
    this.setState({
        sample: 1
    },function(){
     //   console.log(BBB.refs.def.node.children[0].getClientRect());
     //   console.log(BBB.refs.domPoly.getBoundingClientRect());
   //     console.log(BBB.refs.domIcon.offsetWidth , BBB.refs.domIcon.offsetHeight);
        // BBB.refs.def.node.children[0].rotate(20);
        // BBB.refs.def.node.draw();
        // console.log(BBB.refs.def.node.children[0].getClientRect());
    });
    
}

componentWillMount(){
 //   console.log("will mount" , this.props.width);
    this.canPolyProps = {
        sides : this.props.sides,
        opacityValue : 1,
        rady : "100",
        filler: "#fff",
        piller: this.props.activeColor,
        xPos: this.props.width/2,
        yPos: this.props.height/2,
        roty : 0,
        offX : 0,
        offY : 0,
        scale: "2",
        shadow: this.props.shadow * this.scaleFactor
    };
    
    let IconPos = getRadialCoords(parseInt(this.props.xx),parseInt(this.props.yy),parseInt(this.props.radius),parseInt(this.props.rotation) + 60);
    this.domIconProps = {
        fontSize: '50px',
        width: '50px',
        position:'absolute',
        top: '0px',
        left: '0px',
        transform: 'translate(' + (IconPos[0] - 25) + 'px,' + (IconPos[1] - 25) + 'px) scale(.5,.5)',
        transformOrigin: "50% 50%",
        //left: 300 - 25 + 'px',
        //top: 200 - 25 + 'px',
        zIndex: this.props.level,
        textAlign: 'center',
        opacity: 0
    };
    
    //TBD : need top remove this
    if(this.props.siblings){
        this.props.siblings.push(this);    
    }
    
    if(this.props.siblingsObject){
        this.props.siblingsObject[this.props.key] = this;    
    }
    

}

render() {
  
    //  <div ref="domScaler" style={this.domScalerProps}>
    //             <div ref="domParent" style={this.domParentProps}>
    //                 <div ref="domPoly" style={this.domPolyProps}></div>
    //             </div>
    //         </div>
    
    //  <Path fill={this.canPolyProps.filler} x={this.canPolyProps.xPos}
    //                 y={this.canPolyProps.yPos}
    //                 data="m186.24301,167.0634 l105.25744,0 l-52.54658,91.01334 l-105.25744,0 l52.54658,-91.01334 z" 
    //                 scaleX={2}
    //                 scaleY={2}
    //             />
                
 //           console.log(this.layerProps);
    return(
        <div>
             <div ref="domParent" style={this.domParentProps}>
                <div ref="domPoly" style={this.domPolyProps}></div>
             </div>
             <div ref="domParentOne" style={this.domParentProps}>
                <div ref="domPolyOne" style={this.domPolyPropsOne}></div>
             </div>
             <div ref="domIcon" style={this.domIconProps}>
                 <i className={this.props.icon}></i>
             </div>
             <div ref="ref" style={{position: 'absolute' , top: '290px' , left: '290px' , width: '20px' , height: '20px' , background: 'red' , borderRadius:"50% 50%", display:"none" }}></div>
             <Layer ref="def">
                <Line 
                    fill={this.canPolyProps.filler}
                    x={this.canPolyProps.xPos} 
                    y={this.canPolyProps.yPos} 
                    points={this.props.points}
                    closed={true} 
                    scaleX={this.canPolyProps.scale} scaleY={this.canPolyProps.scale} 
                    rotation={this.canPolyProps.roty} 
                    offsetX="0" offsetY="0" 
                    stroke={this.canPolyProps.filler}
                    strokeWidth={0}
                    />
               
             </Layer>
             <Layer ref="fed">
                <Line 
                    fill={this.canPolyProps.piller}
                    x={this.canPolyProps.xPos} 
                    y={this.canPolyProps.yPos} 
                    points={this.props.points}
                    closed={true} 
                    scaleX={this.canPolyProps.scale} 
                    scaleY={this.canPolyProps.scale} 
                    rotation={this.canPolyProps.roty} 
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onMouseDown={this.props.MouseDown}
                    onMouseUp={this.props.MouseUp}
                    onClick={this.props.onClick}
                    offsetX="0" offsetY="0" attry={this.props.key}
                    stroke={this.canPolyProps.filler}
                    strokeWidth={0}
                    />
             </Layer>
        </div>
    );
}

}

export default DD;