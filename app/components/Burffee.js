import React, { Component } from 'react'
//import Konva from 'konva'

//import {Layer, Rect, Stage, Group, Shape,Transform} from 'react-konva';
//import ReactKonva from './ReactKonva';
import ReactKonva from 'konva-react' ;
import {getPolygonCanvas} from './Utils';

let {Stage, Layer, Rect, Shape, Group,Circle,Path,FastLayer} = ReactKonva;

//let {Stage, Layer, Rect, Star, Circle, Shape} = ReactKonva;

class Burffee extends Component {

constructor(props) {
  super(props);
//  this.getPolygonCanvas = this.getPolygonCanvas.bind(this);
 // this.def = this.def.bind(this);
//  this.abc = this.abc.bind(this);
  this.frontCanvasRef = null;
//  this.handleClick = this.handleClick.bind(this);
  //this.sides = 7;
  this.pointsArray = [];
  this.pointsArray1 = [];
  this.polyPointsObject = {};
  
}

static propTypes = {
   vArray : React.PropTypes.array,
//   hArray : React.PropTypes.array,
//   strokeColor : React.PropTypes.string,
//   strokeWidth : React.PropTypes.string,
//   fillColor: React.PropTypes.string,
//   width: React.PropTypes.string,
//   height: React.PropTypes.string,
//   opacity : React.PropTypes.string
};

static defaultProps = {
   hArray : [],
  
};

componentDidMount() {
    //let canvas = document.createElement('canvas');
   
    // this.canvasRef = document.createElement('canvas');
    // this.canvasRef.id="canvasy";
    // this.canvasRef.style.width="100%";
    // this.canvasRef.style.display="none";
    
    
}

componentWillMount() {
  //   this.props.domPolyOffset = this.props.radius + this.props.padding;
    this.canvasRef = document.createElement('canvas');
    this.canvasRef.id="canvasy";
    this.canvasRef.style.width="100%";
    this.canvasRef.style.display="none";
  }




scenefunk(cxt){
  
function def(x, y, points, radius1, radius2,initAngle){
  var ff = [];
  var numberOfSides = points,
    size = radius1,
    Xcenter = x,
    Ycenter = y;
  
  //initAngle = parseFloat(initAngle); 
    var a = ((Math.PI * 2)/points);
  
  for (var i = 0; i <= numberOfSides;i += 1) {
    // ff.push(Xcenter + size * Math.cos(initAngle + i * 2 * Math.PI / numberOfSides));
    // ff.push(Ycenter + size * Math.sin(initAngle + i * 2 * Math.PI / numberOfSides));
    ff.push(Xcenter + size * Math.cos(initAngle + i * a ));
    ff.push(Ycenter + size * Math.sin(initAngle + i * a ));
}
 
  return ff;
}

  function abc( cxtx,x, y, points, radius1, radius2, initAngle,offset){
//     var numberOfSides = points,
//     size = radius1,
//     Xcenter = x,
    
//     Ycenter = y;
//     initAngle = parseFloat(initAngle); 
  
  
//   var angleDiv = points * 2;
//   var pointsArray = def(x, y, points, radius1, radius2,offset + (initAngle) * 2 * Math.PI/angleDiv);
//   var pointsArray1 = def(x, y, points, radius1 - 60, radius2,offset + (initAngle - 1) * 2 * Math.PI/angleDiv);
  
// cxtx.beginPath();
// cxtx.moveTo(pointsArray[0],pointsArray[1]);          
// console.log(pointsArray[0 ],pointsArray[ 1 ] );
// for (var i = 1; i <= numberOfSides;i += 1) {
//  //  cxtx.lineTo (pointsArray[2 * i ] , pointsArray[2 * i + 1 ]);
//  // console.log(pointsArray[2 * i ],pointsArray[2 * i + 1 ] );
  
//       cxtx.quadraticCurveTo(pointsArray1[2 * i ], pointsArray1[2 * i + 1 ], pointsArray[2 * i ], pointsArray[2 * i + 1 ]);
// }
// cxtx.closePath();
// cxtx.fillStrokeShape(this);

        cxtx.beginPath();
        cxtx.moveTo(20, 50);
        cxtx.lineTo(220, 80);
        cxtx.quadraticCurveTo(150, 100, 260, 170);
        cxtx.closePath();

        //Konva specific method
        cxtx.fillStrokeShape(this);

  }
  // hexagon
  let count = this.sides;
 // let angleDiv = count * 2;
// console.log(this.attrs.sidesCount);
  let angly = '1';
  
  var points = this.attrs.sidesCount;
  var radius1 = this.attrs.radius , radius2 = 0 , offset = 0;
  var x = this.attrs.radius,y = this.attrs.radius;
  var initAngle =   this.attrs.rotate ? this.attrs.rotate * Math.PI/180 : 0 ;
  
    var numberOfSides = points,
    size = radius1,
    Xcenter = x,
    
    Ycenter = y;
    initAngle = parseFloat(initAngle); 
  
  var angleDiv = points * 2;
  //radius1 = radius1 - (radius1 * 15/100);
  var radiusPerc = radius1 * this.attrs.curveFactor/100;
  // var pointsArray = def(x, y, points, radius1, radius2,offset + (initAngle) * 2 * Math.PI/angleDiv);
  // var pointsArray1 = def(x, y, points, radius1 - radiusPerc, radius2,offset + (initAngle - 1) * 2 * Math.PI/angleDiv);
  var pointsArray = def(x + parseInt(radius1*15/100), y + parseInt(radius1*15/100), points, radius1, 0, initAngle );
  //var pointsArray = this.attrs.pointsArray;
  var pointsArray1 = def(x + parseInt(radius1*15/100), y + parseInt(radius1*15/100), points, radius1 - radiusPerc,0, initAngle - 2 * Math.PI/angleDiv);
  //var pointsArray1 = this.attrs.pointsArray1;
 // console.log(pointsArray);
  
cxt.beginPath();
cxt.moveTo(pointsArray[0],pointsArray[1]);          
//console.log(pointsArray[0 ],pointsArray[ 1 ] );
for (var i = 1; i <= numberOfSides;i += 1) {
   //cxt.lineTo (pointsArray1[2 * i ] , pointsArray1[2 * i + 1 ]);
   //cxt.lineTo (pointsArray[2 * i ] , pointsArray[2 * i + 1 ]);
   
 // console.log(pointsArray[2 * i ],pointsArray[2 * i + 1 ] );
  
      cxt.quadraticCurveTo(pointsArray1[2 * i ], pointsArray1[2 * i + 1 ], pointsArray[2 * i ], pointsArray[2 * i + 1 ]);
}
cxt.closePath();
cxt.fillStrokeShape(this);
        

//  abc(cxt,200,200, count , 175, 0 , 0,0);
}



handleClick() {
 //   console.log("clicked");     
}




render() {
  const { opacity,shadow,color,src,sides,radius,rotation,curveFactor } = this.props;
  let style = {
    burfee : {}
  };
  
  let ImageSrc = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  
  if(src){
       ImageSrc = getPolygonCanvas(src,this.canvasRef,this.props.sides,this.props.rotation,this.props.curveFactor,this.polyPointsObject);    
  }
 
 
      
      let scenefunky = function(context) {
        context.beginPath();
        context.moveTo(0, 100);
        context.lineTo(220, 80);
        context.quadraticCurveTo(150, 100, 360, 170);
        context.closePath();

        // Konva specific method
        context.fillStrokeShape(this);
      }; 
      
   let museenter = function(){
    //   console.log("moused over");
       document.body.style.cursor = "pointer";
   };
   
   let museleave = function(){
  //     console.log("moused leaver");
       document.body.style.cursor = "default";
   };
      
    let styleImg = {
      width: (2 * radius) + 'px',
      position:'absolute',
      height : (2 * radius) + 'px',
      zIndex : -1 ,
      opacity : '1' ,
      top: parseInt(this.props.yPos + "px") + parseInt(radius*15/100) + "px",
      left: parseInt(this.props.xPos) + parseInt(radius*15/100) + "px"
    };
    
    let styleDivImg = {
      width: (2 * radius) + 'px',
      position:'absolute',
      height : (2 * radius) + 'px',
      transformOrigin : radius + 'px ' + radius + 'px',
      transform: 'rotate('+rotation+'deg)'
    };
    
    let StageStyle = {
      transformOrigin : radius + 'px ' + radius + 'px',
      transform: 'rotate('+rotation+'deg)',
      position:'absolute'
    };
    
    
    if(this.refs.layery) {
    //  console.log(this.refs.layery);
//      this.refs.layery.canvas._canvas.style.transform = 'rotate('+ rotation+'deg)';  
//      this.refs.imagy.style.transform = 'rotate('+ rotation+'deg)'; 
    }
    
      
    return (
      <div style={style.burfee}>
        <img ref="imagy" style={ styleImg }  src={ ImageSrc }/>
        <div style={{ position: 'absolute' , top:this.props.yPos + "px" , left: this.props.xPos + 'px' }}>
          <Stage width={2 * radius + 50} height={ 2 * radius + 50}  >
              
              <Layer ref="layery" listening={false}>
                  
                   <Path
                      fill="transparent"  opacity="1" stroke="white"  strokeWidth={ parseInt(radius*15/100) } lineJoin='round' sceneFunc={ this.scenefunk }
                      hitFunc={ this.scenefunk } shadowBlur={3} shadowColor="#999"
                      onMouseEnter={ museenter } onMouseLeave={ museleave } 
                      onClick={this.handleClick} sidesCount={sides} radius={radius}  rotate={rotation} offsetX={0} offsetY={0} 
                      pointsArray={ this.polyPointsObject.endPoints } pointsArray1={ this.polyPointsObject.controlPoints } 
                      curveFactor={curveFactor}
                      />
                  
              </Layer>
              
          </Stage>
        </div>
        
      </div>
    )
  }
}

export default Burffee