import React, { Component } from 'react'
//import Konva from 'konva'

import {Layer, Rect, Stage, Group, Shape} from 'react-konva';

//let {Stage, Layer, Rect, Star, Circle, Shape} = ReactKonva;

class Burffee extends Component {

constructor(...args) {
  super(...args);
  this.getPolygonCanvas = this.getPolygonCanvas.bind(this);
  this.def = this.def.bind(this);
  this.abc = this.abc.bind(this);
  this.frontCanvasRef = null;
  this.handleClick = this.handleClick.bind(this);
  //this.sides = 7;
}

static propTypes = {
   vArray : React.PropTypes.array.isRequired,
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
   
    this.canvasRef = document.createElement('canvas');
    this.canvasRef.id="canvasy";
    this.canvasRef.style.width="100%";
    
    // this.frontCanvasRef = document.createElement('canvas');
    // this.frontCanvasRef.id="frontsy";
    // this.frontCanvasRef.style.width="400px";
    // this.frontCanvasRef.style.height="400px";
    // this.frontCanvasRef.style.position="absolute";
    // this.frontCanvasRef.style.top="300px";
    // this.frontCanvasRef.width = '400';
    // this.frontCanvasRef.height = '400';
    
    
    // document.body.appendChild(this.frontCanvasRef);
    // let stage = new Konva.Stage({
    //     container: 'container',
    //     width: 300,
    //     height: 300
    // });
    
    //let layer = new Konva.Layer();
   // stage.add(layer);
    //this.canvasRef = this.refs.canny;
}


def(x, y, points, radius1, radius2,initAngle){
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

 

 abc(cxt, x, y, points, radius1, radius2, initAngle,offset,alpha ,color){
  
  // hexagon
var numberOfSides = points,
    size = radius1,
    Xcenter = x,
    
    Ycenter = y;
initAngle = parseFloat(initAngle); 
  
  
  var angleDiv = points * 2;
  cxt.globalAlpha=alpha ? alpha : 1;
  
cxt.beginPath();
  var pointsArray = this.def(x, y, points, radius1, radius2,offset + (initAngle) * 2 * Math.PI/angleDiv);
  
  var pointsArray1 = this.def(x, y, points, radius1 - 60, radius2,offset + (initAngle - 1) * 2 * Math.PI/angleDiv);
   cxt.beginPath();
cxt.moveTo(pointsArray[0],pointsArray[1]);          
 console.log(pointsArray[0 ],pointsArray[ 1 ] );
for (var i = 1; i <= numberOfSides;i += 1) {
 //  cxt.lineTo (pointsArray[2 * i ] , pointsArray[2 * i + 1 ]);
 // console.log(pointsArray[2 * i ],pointsArray[2 * i + 1 ] );
  
      cxt.quadraticCurveTo(pointsArray1[2 * i ], pointsArray1[2 * i + 1 ], pointsArray[2 * i ], pointsArray[2 * i + 1 ]);
}
cxt.closePath();
cxt.strokeStyle = "#fff";
cxt.lineWidth = '15';

cxt.fillStyle = color ? color : '#000';
cxt.shadowBlur=10;
cxt.shadowColor="#777";
//cxt.fill();  
cxt.stroke();
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
 console.log(this.attrs.sidesCount);
  let angly = '1';
  
  var points = this.attrs.sidesCount;
  var radius1 = 175 , radius2 = 0 , offset = 0;
  var x = 200,y = 200;
  var initAngle = 0;
  
    var numberOfSides = points,
    size = radius1,
    Xcenter = x,
    
    Ycenter = y;
    initAngle = parseFloat(initAngle); 
  
  
  var angleDiv = points * 2;
  var pointsArray = def(x, y, points, radius1, radius2,offset + (initAngle) * 2 * Math.PI/angleDiv);
  var pointsArray1 = def(x, y, points, radius1 - 60, radius2,offset + (initAngle - 1) * 2 * Math.PI/angleDiv);
  
cxt.beginPath();
cxt.moveTo(pointsArray[0],pointsArray[1]);          
console.log(pointsArray[0 ],pointsArray[ 1 ] );
for (var i = 1; i <= numberOfSides;i += 1) {
 //  cxt.lineTo (pointsArray[2 * i ] , pointsArray[2 * i + 1 ]);
 // console.log(pointsArray[2 * i ],pointsArray[2 * i + 1 ] );
  
      cxt.quadraticCurveTo(pointsArray1[2 * i ], pointsArray1[2 * i + 1 ], pointsArray[2 * i ], pointsArray[2 * i + 1 ]);
}
cxt.closePath();
cxt.fillStrokeShape(this);
        

//  abc(cxt,200,200, count , 175, 0 , 0,0);
}



handleClick() {
    console.log("clicked");     
}

getPolygonCanvas(sourceCanvas) {
  var canvas = this.canvasRef;
  //canvas.id="canvasy";
  var context = canvas.getContext('2d');
  var width = sourceCanvas.width;
  var height = sourceCanvas.height;

  var sides = this.props.sides;
  var points = sides;
  //var radius = .4166 * width;
  //var radius =  175;
  var radius =  width * .45;
  var a = ((Math.PI * 2)/sides);
  //console.log(width,height,radius);
    var angleDiv = points * 2;
    var initAngle = 0;
    var offset= 0;
    
  canvas.width = width;
  canvas.height = height;
  var radiusPerc = radius * 40/100;
  var pointsArray = this.def(width / 2, height / 2, points, radius, 0,offset + (initAngle) * 2 * Math.PI/angleDiv);
  
  var pointsArray1 = this.def(width / 2, height / 2, points, radius - radiusPerc, 0,offset + (initAngle - 1) * 2 * Math.PI/angleDiv);


  context.beginPath();
  //context.moveTo(width / 2 + (radius*Math.cos(0)),height / 2 + (radius*Math.sin(0)));
  context.moveTo(pointsArray[0],pointsArray[1]);     
  //console.log(width / 2 + (radius*Math.cos(a*0)), height / 2 + (radius*Math.sin(a*0)));
  for (var i = 1; i <= sides; i++) {
    //width / 2 + (radius*Math.cos(a*i));
    //height / 2 + (radius*Math.sin(a*i));
    //context.lineTo(width / 2 + (radius*Math.cos(a*i )),height / 2 + (radius*Math.sin(a*i)));
    context.quadraticCurveTo(pointsArray1[2 * i ], pointsArray1[2 * i + 1 ], pointsArray[2 * i ], pointsArray[2 * i + 1 ]);
//    console.log(width / 2 + (radius*Math.cos(a*i)), height / 2 + (radius*Math.sin(a*i)));
  }
  
  //context.lineWidth = '17';
  context.closePath();
  
  context.strokeStyle = 'rgba(0,0,0,0)';
  context.stroke();
  context.clip();
  context.drawImage(sourceCanvas, 0, 0, width, height);
  

  //this.abc(context,300,300, count , 136, 0 , 2,0,1);
  // canvas.width = width;
  // canvas.height = height;
  // context.beginPath();
  // context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI);
  // context.strokeStyle = 'rgba(0,0,0,0)';
  // context.stroke();
  // context.clip();
  // context.drawImage(sourceCanvas, 0, 0, width, height);

  return canvas.toDataURL();
}


render() {
  const { opacity,shadow,color,src,sides } = this.props;
  let style = {
    burfee : {}
  };

  let ImageSrc = this.getPolygonCanvas(src);
 
 
 // let ctxt = this.frontCanvasRef.getContext('2d');
  //console.log(this.frontCanvasRef);
 // ctxt.clearRect(0, 0, this.frontCanvasRef.width, this.frontCanvasRef.height);
 
 // this.abc(ctxt,200,200, count , 185, 0 , 0,0,0,'#000');
 //  this.abc(ctxt,200,200, count , 175, 0 , 0,0,0,'#000');
 //  this.abc(ctxt,200,200, count , 165, 0 , 0,0,0,'#000');
//  this.abc(ctxt,75,75, count , 25, 0 , 3,0,1,'#000');


// <Shape
//                 fill="transparent" stroke="gray"  strokeWidth="10"  sceneFunc={ scenefunky }
//                 hitFunc={ scenefunky } shadowBlur={10} 
//                 onMouseEnter={ museenter } onMouseLeave={ museleave } 
//                 onClick={this.handleClick} />    
  
     //  this.shaperFunc;
//   let scenefunk = function(context) {
//         context.beginPath();
//         context.moveTo(20, 50);
//         context.lineTo(220, 80);
//         context.quadraticCurveTo(150, 100, 260, 170);
//         context.closePath();

//         // Konva specific method
//         context.fillStrokeShape(this);
//       };
      
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
       console.log("moused over");
       document.body.style.cursor = "pointer";
   };
   
   let museleave = function(){
       console.log("moused leaver");
       document.body.style.cursor = "default";
   };
      
    return (
      <div style={style.burfee}>
        <img style={{ width: '400px' , position:'absolute' , height : '400px', top: '307px'  , opacity : '1' , zIndex : -1}}  src={ ImageSrc }/>
        <Stage width={400} height={400}>
            <Layer>
                 <Shape
                    fill="transparent"  stroke="blue"  strokeWidth="4" sceneFunc={ this.scenefunk }
                    hitFunc={ this.scenefunk } shadowBlur={10} 
                    onMouseEnter={ museenter } onMouseLeave={ museleave } 
                    onClick={this.handleClick} sidesCount={sides} />
                    
                
            </Layer>
        </Stage>
      </div>
    )
  }
}

export default Burffee