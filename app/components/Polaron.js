import React, {Component} from 'react';
import math from 'mathjs';
import ReactKonva from 'konva-react' ;

let {Stage, Layer, Rect, Star, Group,Circle,Path,FastLayer} = ReactKonva;

class Polaron extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillReceiveProps(newProps) {
 
  }

  componentWillUnmount() {
 
  }
  
  getSin(angle){
    return Math.sin(angle * Math.PI/180);
  }
  
  getCos(angle){
    return Math.cos(angle * Math.PI/180);
  }
  
  getTan(angle){
    return Math.tan(angle * Math.PI/180);
  }
  
  getPolygonPath(pointArray){
     let pathData = "";
     
     for(var i=0; i < pointArray.length; i++) {
  
        let point = pointArray[i].valueOf();
        if(i === 0 ) {
          pathData += "M" + point[0] + " " + point[1];
        }
        else {
          pathData += " L" + point[0] + " " + point[1];
        }
     }
     pathData += " Z";
     return pathData;
  }
  
  getBezierPath(pointArray){
     let pathData = "";
     
     for(var i=0; i < pointArray.length - 2; i++) {
    
        let endPoint = pointArray[i].valueOf();
        let cPointOne = pointArray[i+1].valueOf();
        let cPointTwo = pointArray[i+2].valueOf();
    
        if(i === 0 ) {
          pathData += "M" + endPoint[0] + " " + endPoint[1];
        }
        else {
          pathData += " C" + cPointOne[0] + "," + cPointOne[1] + " "+ cPointTwo[0] + "," + cPointTwo[1] +" "+ endPoint[0] + "," + endPoint[1];
        }
     }
     pathData += " Z";
     return pathData;
  }
  
  
  polyRotate(polyArray,rotationAngle){
      let rotationMatrix = math.matrix([[this.getCos(rotationAngle), this.getSin(rotationAngle)], [-this.getSin(rotationAngle), this.getCos(rotationAngle)]]);   
      let polyRotated = [];
    
      for(var i=0; i < polyArray.length; i++) {
        polyRotated.push(math.multiply(polyArray[i], rotationMatrix).valueOf());
      }
      
      return polyRotated;
  }
  
   polyRotation(polyMatrix,rotationAngle){
      let rotationMatrix = math.matrix([[this.getCos(rotationAngle), this.getSin(rotationAngle)], [-this.getSin(rotationAngle), this.getCos(rotationAngle)]]);   
      let polyRotated = [];
    
      return math.multiply(polyMatrix,rotationMatrix).valueOf();
  }
  
  getTransformedPolyArray(baseMatrix,angle,offsetX,offsetY){
    let polyRotated = this.polyRotation(baseMatrix,angle);
    
    let offsetPoly = [];
  
    for(var i=0; i <polyRotated.length; i++) {
      offsetPoly.push(math.add([offsetX,offsetY],math.matrix(polyRotated[i])));
    }
    return offsetPoly;
  }
  
  
  render() {
    
    let array = [2, 2];                // Array
    let matrix = math.matrix([[-1, 0], [0, 1]]);
    let marray = math.multiply(array, matrix); 


    let rotationAngle = -90;
    let rotationMatrix = math.matrix([[this.getCos(rotationAngle), this.getSin(rotationAngle)], [-this.getSin(rotationAngle), this.getCos(rotationAngle)]]);   
    let polyPoints = [];
    
    polyPoints.push([0,0]);
    
    for(var i=0; i < 5; i++){
        polyPoints.push([10 + Math.floor(Math.random() * 50) , 10 + Math.floor(Math.random() * 50)]);
    }
    

    let lowPolyArray = math.matrix(polyPoints);
    let ff = [];
    
    for(var i=0; i < lowPolyArray._data.length; i++) {
      ff.push(math.multiply(lowPolyArray._data[i], rotationMatrix).valueOf());
    }
    
    let PolyArray = math.matrix(ff);
  
    let angle = 90;
    let slope = Math.tan(angle * Math.PI/180);
    let multiplier = 1 / (1 + (slope*slope));
    let first = 1 - (slope*slope);
    let secondthird = 2 * slope;
    let fourth = (slope * slope) - 1; 
    
    let matrixOne = math.matrix([[first, secondthird], [secondthird, fourth]]);
    let marrayOne = math.multiply(multiplier, matrixOne); 
    
    let tempOne = [];
    let tempTwo = [];
    let tempThree = [];
    let tempFour = [];
    
    
    for(var i=0; i < PolyArray._data.length; i++) {
        tempThree.push(math.multiply(PolyArray._data[i],marrayOne).valueOf());
        tempFour.push(PolyArray._data[i]);
    }
    
    let basePolyMatrix = math.matrix(tempThree);
    let basePolyReflectMatrix = math.matrix(tempFour);
    
    for(var i=0; i < tempThree.length; i++) {
      tempOne.push(math.add([300,300],math.matrix(tempThree[i])));
      tempTwo.push(math.add([300,300],math.matrix(tempFour[i])));
    }
  
    let pathDataArray = [];
    let pathDataMirrorArray = [];
    let pathDataList = [];
    let sideCount = 6;
    
    for(var i=0 ; i < sideCount ; i++) {
       pathDataArray[i] = this.getBezierPath(this.getTransformedPolyArray(basePolyMatrix,i * 360/sideCount,this.props.xPos,this.props.yPos));  
       pathDataMirrorArray[i] = this.getBezierPath(this.getTransformedPolyArray(basePolyReflectMatrix, i * 360/sideCount,this.props.xPos,this.props.yPos));
       pathDataList.push([pathDataArray[i],pathDataMirrorArray[i]]);
    }
    
    return ( 
       <Group>
            {pathDataList.map(function(pathData,i){
              return <Group key={i}>
                <Path  x="0" y="0" 
                data={pathData[0]}
                fill="black"
                scaleX="1"
                scaleY="1"
                rotation="0"
                offsetX="0"
                offsetY="0"
                opacity=".7"
                shadowColor= '#fff'
                shadowBlur= '0'
                shadowOffsetX= "0"
                shadowOffsetY= "0"
                shadowOpacity= '1'
                />
                <Path x="0" y="0" 
                data={pathData[1]}
                fill="black"
                scaleX="1"
                scaleY="1"
                rotation="0"
                offsetX="0"
                offsetY="0"
                opacity=".7"
                shadowColor= '#fff'
                shadowBlur= '0'
                shadowOffsetX= "0"
                shadowOffsetY= "0"
                shadowOpacity= '1'
                />
              </Group>
            })}
        </Group>
    );
  }
}

export default Polaron;
