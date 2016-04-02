import React, { Component } from 'react'
import "babel-polyfill";


let style = {

baseProps : {

  background:   '-webkit-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 90%,rgba(0,0,255,1) 98% , rgba(0,0,255,0) 100%) ',
 background:   '-moz-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 90%,rgba(0,0,255,1) 98% , rgba(0,0,255,0) 100%) ',
// -webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 90%,rgba(0,0,255,1) 98% , rgba(0,0,255,0) 100%)   ,
//  background: 'black',
  opacity:'1',
  position: 'absolute',
  top:'0px',
  left:'0px',
  opacity:'1',
  cursor: 'pointer',
  boxShadow:'0px 0px 0px #000',
  border:'0px solid black',
  borderRadius: '2px'
},

divOne : {
  width:'100px',
  height:'100px',
  top:'0px',
  left:'0px',
  position:'absolute',

  WebkitTransformOrigin:'0% 0%',
  MozTransformOrigin:'0% 0%',
  OTransformOrigin:'0% 0%',
  transformOrigin:'0% 0%',
},

divTwo : {
  width:'100px',
  height:'100px',
  position:'absolute',
  top:'100px',
  left:'0px',

  WebkitTransformOrigin:'0% 0%',
  MozTransformOrigin:'0% 0%',
  OTransformOrigin:'0% 0%',
  transformOrigin: '0% 0%',

  WebkitTransform: 'skewY(-45deg)',
  MozTransform: 'skewY(-45deg)',
  OTransform: 'skewY(-45deg)',
  transform: 'skewY(-45deg)',
},

divThree : {
  width:'100px',
  height:'100px',
  position:'absolute',
  top:'0px',
  left:'100px',

  WebkitTransformOrigin:'0% 0%',
  MozTransformOrigin:'0% 0%',
  OTransformOrigin:'0% 0%',
  transformOrigin: '0% 0%',

  WebkitTransform:'skewX(-45deg)',
  MozTransform:'skewX(-45deg)',
  OTransform:'skewX(-45deg)',
  transform:'skewX(-45deg)',

},

wrapOne : {
  position:'absolute',
  top:'0px',
  left:'0px',

  WebkitTransform: 'skewX(45deg) skewY(0deg) rotate(-0deg) scaleX(1) scaleY(1)',
  MozTransform: 'skewX(45deg) skewY(0deg) rotate(-0deg) scaleX(1) scaleY(1)',
  OTransform: 'skewX(45deg) skewY(0deg) rotate(-0deg) scaleX(1) scaleY(1)',
  transform: 'skewX(45deg) skewY(0deg) rotate(-0deg) scaleX(1) scaleY(1)',


  WebkitTransformOrigin:'0% 0%',
  MozTransformOrigin:'0% 0%',
  OTransformOrigin:'0% 0%',
  transformOrigin: '0% 0%'
},

wrapTwo : {

  WebkitTransform: 'scaleX(1) scaleY(1) skewY(45deg) rotate(45deg)',
  MozTransform: 'scaleX(1) scaleY(1) skewY(45deg) rotate(45deg)',
  OTransform: 'scaleX(1) scaleY(1) skewY(45deg) rotate(45deg)',
  transform: 'scaleX(1) scaleY(1) skewY(45deg) rotate(45deg)',


  WebkitTransformOrigin:'0% 0%',
  MozTransformOrigin:'0% 0%',
  OTransformOrigin:'0% 0%',
  transformOrigin: '0% 0%'
},

wrapThree : {
  transform: 'skewX(0deg) rotate(0deg) scaleX(1) scaleY(1)' ,
  transformOrigin: '0% 0%',
  position:'absolute',
  top:'400px',
  left:'0px'
}

};

class Triangle extends Component {

constructor(props) {
  super(props);
}

static propTypes = {
    skewX: React.PropTypes.string,
    skewY: React.PropTypes.string,
    scaleX: React.PropTypes.string,
    scaleY: React.PropTypes.string,
    rotate: React.PropTypes.string,
    posX: React.PropTypes.string,
    posY: React.PropTypes.string,
    pointOne : React.PropTypes.object,
    pointTwo : React.PropTypes.object,
    pointThree : React.PropTypes.object,
    opacity: React.PropTypes.string,
    shadow: React.PropTypes.string,
    color: React.PropTypes.string
};

static defaultProps = {
    skewX: '0deg',
    skewY: '0deg',
    scaleX: '1',
    scaleY: '1',
    rotate : '0deg',
    posX : '0px',
    posY : '0px',
    pointOne : { x : 0, y : 0 },
    pointTwo : { x : 0 , y : 200 },
    pointThree : { x : 200 , y : 200 },
    opacity : '.5',
    shadow : '0px 0px 0000px #fff',
    color: 'gray'
  };

  epsEqu = (x, y) => {
    return Math.abs(x - y) < Number.EPSILON;
  }

render() {
 //const { defaultValue }  = this.props;
 let { posX , posY , skewX , skewY , scaleX, scaleY , rotate , pointOne , pointTwo , pointThree } = this.props;


// pointOne.x = Math.round(pointOne.x) ;
// pointOne.y = Math.round(pointOne.y) ;
// pointTwo.x = Math.round(pointTwo.x) ;
// pointTwo.y = Math.round(pointTwo.y) ;
// pointThree.x = Math.round(pointThree.x) ;
// pointThree.y = Math.round(pointThree.y) ;

//console.log(pointTwo);

 let trianglePos = {
    left: posX,
    top: posY,
    position: 'absolute',
    transform: 'translateX(0px)'
 };

 const lineOneTwo  = {
  pointOne: pointOne,
  pointTwo: pointTwo,
  pointAlt: pointThree
 };

 const lineOneThree  = {
  pointOne: pointOne,
  pointTwo: pointThree,
  pointAlt: pointTwo
 };

 const lineTwoThree  = {
  pointOne: pointTwo,
  pointTwo: pointThree,
  pointAlt: pointOne
 };

 lineOneTwo.length =  Math.pow((Math.pow((lineOneTwo.pointOne.x - lineOneTwo.pointTwo.x) , 2) + Math.pow((lineOneTwo.pointOne.y - lineOneTwo.pointTwo.y) , 2)),.5);
 lineOneThree.length =  Math.pow((Math.pow((lineOneThree.pointOne.x - lineOneThree.pointTwo.x) , 2) + Math.pow((lineOneThree.pointOne.y - lineOneThree.pointTwo.y) , 2)),.5);
 lineTwoThree.length =  Math.pow((Math.pow((lineTwoThree.pointOne.x - lineTwoThree.pointTwo.x) , 2) + Math.pow((lineTwoThree.pointOne.y - lineTwoThree.pointTwo.y) , 2)),.5);

 lineOneTwo.altLength = lineOneThree.length;
 lineTwoThree.altLength = lineOneTwo.length;
 lineOneThree.altLength = lineOneTwo.length;

 //const triangleSides =
 const maxLength = Math.max( lineOneTwo.length,lineOneThree.length,lineTwoThree.length);
 //let longestLineSegment = [lineOneTwo,lineOneThree,lineTwoThree].find(lineSegment => this.epsEqu(lineSegment.length,maxLength));
 let longestLineSegment = {};

  const lineArray = [lineOneTwo,lineOneThree,lineTwoThree];
  for(let i = 0 ; i < lineArray.length ; i++){
    if(Number(lineArray[i].length) === Number(maxLength) ){
      longestLineSegment = lineArray[i];
    }
  }

let checkSign =  function (x){
    if( +x === x ) { // check if a number was given
        return (x >= 0) ? 1 : -1;
    }
    return NaN;
}

// const longestLineSegment = [lineOneTwo,lineOneThree,lineTwoThree].find(lineSegment =>  (lineSegment.length == maxLength));

 // ( b.X - a.X ) * ( p.Y - a.Y ) - ( b.Y - a.Y ) * ( p.X - a.X );
 const pointPos  = checkSign((longestLineSegment.pointTwo.x - longestLineSegment.pointOne.x) *
                   (longestLineSegment.pointAlt.y - longestLineSegment.pointOne.y) -
                   (longestLineSegment.pointTwo.y - longestLineSegment.pointOne.y)  *
                   (longestLineSegment.pointAlt.x - longestLineSegment.pointOne.x) );

 const halfPerimeter =  (lineOneTwo.length + lineOneThree.length + lineTwoThree.length)/2;
 const area  = Math.pow((halfPerimeter * (halfPerimeter - lineOneTwo.length) * (halfPerimeter  - lineOneThree.length ) * (halfPerimeter -lineTwoThree.length )),.5);
 const height = (2 * area)/longestLineSegment.length;
 const delta_x = longestLineSegment.pointTwo.x - longestLineSegment.pointOne.x;
 const delta_y = longestLineSegment.pointTwo.y - longestLineSegment.pointOne.y;

 const ang = Math.atan2(delta_y,delta_x) * 180/Math.PI;
 const adjLength  = Math.abs(Math.pow(((Math.pow(longestLineSegment.altLength,2)) - (Math.pow(height,2))),.5));

 let a = Math.pow(longestLineSegment.pointOne.x-longestLineSegment.pointAlt.x,2) + Math.pow(longestLineSegment.pointOne.y-longestLineSegment.pointAlt.y,2);
 let b = Math.pow(longestLineSegment.pointOne.x-longestLineSegment.pointTwo.x,2) + Math.pow(longestLineSegment.pointOne.y-longestLineSegment.pointTwo.y,2);
 let c = Math.pow(longestLineSegment.pointTwo.x-longestLineSegment.pointAlt.x,2) + Math.pow(longestLineSegment.pointTwo.y-longestLineSegment.pointAlt.y,2);
 let vecAngle = Math.acos( (a+b-c) / Math.sqrt(4*a*b) ) * (180/Math.PI);
 let adjRatio = (a+b-c) / Math.sqrt(4*a*b);
 let adjacentLength = longestLineSegment.altLength * Math.cos(vecAngle * Math.PI/180);
 //const skewAngle = 45 - 90 * (adjLength/longestLineSegment.length);
 let sAngle = Math.atan2(height,adjLength) * 180/Math.PI;
 let sRatio = 90 / (90 - sAngle);

 const secAdjLength  = Math.abs(Math.pow(((Math.pow(50,2)) - (Math.pow(height,2))),.5));
 const secskewAngle = 45 +  90 * (secAdjLength/longestLineSegment.length);
 //const skewAngle = 45 - (((90 - sAngle) * (adjLength/longestLineSegment.length)) * sRatio);
 //let sAngle = Math.atan2(100,.01) * 180/Math.PI;

 //const skewAngle = (vecAngle * sRatio) - 45;
 //let newx  = height * tan();
 let sRti =  vecAngle - 45;
 //const skewAngle = -45;
 //const skewAngle = 155;
 let lenRatio = height/(longestLineSegment.length/2);
 let scaledLen = (adjLength - (longestLineSegment.length/2)) * lenRatio ;
 const skewAngle =  -1 * Math.atan2(scaledLen,height) * 180/Math.PI;
 skewX = Number(skewAngle).toFixed(10) + 'deg';
 console.log(skewX , adjLength , longestLineSegment );




 scaleX = '1';
 scaleY= '1';
 scaleX = longestLineSegment.length/282.843;
 scaleY = -pointPos * height/244.942 * Math.sqrt(3);
 //scaleX = longestLineSegment.length/281.043;
 //scaleY = -pointPos * height/242.042  * Math.sqrt(3);
 // //rotate = '0deg';
 rotate = ang + 'deg';


 style.wrapTwo.WebkitTransform = 'skewX('+ skewX + ') skewY('+ skewY + ') rotate(-45deg)' ;
 style.wrapTwo.MozTransform = 'skewX('+ skewX + ') skewY('+ skewY + ') rotate(-45deg)' ;
 style.wrapTwo.OTransform = 'skewX('+ skewX + ') skewY('+ skewY + ') rotate(-45deg)' ;
 style.wrapTwo.transform = 'skewX('+ skewX + ') skewY('+ skewY + ') rotate(-45deg)' ;

 //console.log(style.wrapTwo , ang , skewX , adjLength , longestLineSegment.length,vecAngle , adjRatio , adjacentLength , sAngle + 'dege');

 trianglePos.left = (longestLineSegment.pointOne.x) + 'px';
 trianglePos.top = (longestLineSegment.pointOne.y) + 'px';
 let translateX = (longestLineSegment.pointOne.x)  + 'px';
 let translateY = (longestLineSegment.pointOne.y) + 'px';

 // trianglePos.transformOrigin = ' ' + translateX + ' '+ translateY + ' ';
 //trianglePos.transform = 'rotate('+ rotate +') scale('+ scaleX +','+ scaleY +') translateY('+ translateY +') translateX('+ translateX +')' ;

 trianglePos.WebkitTransform = 'rotate('+ rotate +') scale('+ scaleX +','+ scaleY +') ' ;
 trianglePos.MozTransform = 'rotate('+ rotate +') scale('+ scaleX +','+ scaleY +') ' ;
 trianglePos.OTransform = 'rotate('+ rotate +') scale('+ scaleX +','+ scaleY +') ' ;
 trianglePos.transform = 'rotate('+ rotate +') scale('+ scaleX +','+ scaleY +') ' ;

  console.log(trianglePos);
 let divOneProps = {};
 let divTwoProps = {};
 let divThreeProps = {};

 style.baseProps.opacity = this.props.opacity;
 //style.baseProps.boxShadow = this.props.shadow;
 //style.baseProps.background = this.props.color;

 Object.assign(divOneProps,style.baseProps,style.divOne);
 Object.assign(divTwoProps,style.baseProps,style.divTwo);
 Object.assign(divThreeProps,style.baseProps,style.divThree);

 // let barStyle = {

 //  position: 'absolute',
 //  top: longestLineSegment.pointOne.y  + 'px',
 //  left: longestLineSegment.pointOne.x + 'px',
 //  background: 'black',
 //  height: '0px',
 //  width: '280.843px',
 //  transform: ' rotate('+ rotate +') scaleX('+ scaleX +')',
 //  transformOrigin: '0% 50%',
 //  zIndex:'10',
 //  borderTop: '5px solid black',
 //  borderBottom: '5px solid black',
 //  borderLeft: '5px solid black',
 //  borderRight: '5px solid black',
 //  outline: '0px solid black',
 //  borderRadius: '50px 50px'
 // };

 let barStyle = {


 };

 style.helper = {
    width: trianglePos.left ,
    height: '120px',
    position: 'absolute',
    top: '0px',
    left:'0px',
    background: 'green'
 };

 style.helper1 = {
    width: '400px' ,
    height: '120px',
    position: 'absolute',
    top: '350px',
    left:'0px',
    background: 'blue'
 };

//console.log("longest line segmetn",longestLineSegment, height ,skewX, adjLength , secAdjLength , secskewAngle , sAngle);

    return (
      <div>
       <div style={ trianglePos }>
         <div style={ style.wrapTwo }>
           <div style={ style.wrapOne }>
             <div style={ divOneProps }></div>
             <div style={ divTwoProps }></div>
             <div style={ divThreeProps }></div>
           </div>
         </div>
       </div>
      </div>
    )
  }
}

export default Triangle