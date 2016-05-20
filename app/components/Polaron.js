import React, {Component} from 'react';
import math from 'mathjs';
import ReactKonva from './ReactKonva';

let {Stage, Layer, Rect, Star, Group,Circle,Path,FastLayer} = ReactKonva;

class Polaron extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
     console.log(math.sqrt(4));
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
        //console.log(pointArray[i].valueOf(),i);
        let point = pointArray[i].valueOf();
        //pathData += 
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
        //console.log(pointArray[i].valueOf(),i);
        let endPoint = pointArray[i].valueOf();
        let cPointOne = pointArray[i+1].valueOf();
        let cPointTwo = pointArray[i+2].valueOf();
        //pathData += 
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
  
  
// x: 240,
//   y: 40,
//   data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
//   fill: 'green',
//   scale: 2

// tt.forEach(function(elem,index) {
    //     console.log(elem.valueOf(),index);
    //     let point = elem.valueOf();
    //     //mirrorPathData += 
    //     if(index === 0 ) {
    //       mirrorPathData += "M" + point[0] + " " + point[1]
    //     }
    //     else if(index === )
    // });
    
    // for(var i=0; i < tt.length; i++) {
    //     console.log(tt[i].valueOf(),i);
    //     let point = tt[i].valueOf();
    //     //mirrorPathData += 
    //     if(i === 0 ) {
    //       mirrorPathData += "M" + point[0] + " " + point[1];
    //     }
    //     else {
    //       mirrorPathData += " L" + point[0] + " " + point[1];
    //     }
    // }
    // mirrorPathData += " Z";
    
      // let pathData = "";
    // for(var i=0; i < dd.length; i++) {
    //     //console.log(dd[i].valueOf(),i);
    //     let point = dd[i].valueOf();
    //     //pathData += 
    //     if(i === 0 ) {
    //       pathData += "M" + point[0] + " " + point[1];
    //     }
    //     else {
    //       pathData += " L" + point[0] + " " + point[1];
    //     }
    // }
    // pathData += " Z";
    // console.log(pathData);
    
  render() {
    
    let array = [2, 2];                // Array
    let matrix = math.matrix([[-1, 0], [0, 1]]);
    let marray = math.multiply(array, matrix); 
  //  console.log(array,matrix,marray);

    let rotationAngle = -90;
    let rotationMatrix = math.matrix([[this.getCos(rotationAngle), this.getSin(rotationAngle)], [-this.getSin(rotationAngle), this.getCos(rotationAngle)]]);   
    let polyPoints = [];
    
    polyPoints.push([0,0]);
    
    for(var i=0; i < 5; i++){
        polyPoints.push([10 + Math.floor(Math.random() * 50) , 10 + Math.floor(Math.random() * 50)]);
    }
    
    //let lowPolyArray = math.matrix([[0, 0] , [0, 200] , [200, 200] , [250, 100] , [20, 100]]);
    let lowPolyArray = math.matrix(polyPoints);
    let ff = [];
    
    for(var i=0; i < lowPolyArray._data.length; i++) {
      ff.push(math.multiply(lowPolyArray._data[i], rotationMatrix).valueOf());
    }
    
    let PolyArray = math.matrix(ff);
    
 
    //console.log(math.multiply(array, rotationMatrix).valueOf());
    
    let angle = 90;
    let slope = Math.tan(angle * Math.PI/180);
    let multiplier = 1 / (1 + (slope*slope));
    let first = 1 - (slope*slope);
    let secondthird = 2 * slope;
    let fourth = (slope * slope) - 1; 
    
    let matrixOne = math.matrix([[first, secondthird], [secondthird, fourth]]);
    let marrayOne = math.multiply(multiplier, matrixOne); 
    
    //console.log(marrayOne._data[0]);
    
    
    // PolyArray.forEach(function (value, index, matrix) {
    //   console.log('value:', value, 'index:', index ,matrix);
    // });
    let tt = [];
    let dd = [];
    let ak = [];
    let bk = [];
    
    
    for(var i=0; i < PolyArray._data.length; i++) {
        ak.push(math.multiply(PolyArray._data[i],marrayOne).valueOf());
        bk.push(PolyArray._data[i]);
        //tt.push(math.add([300,300],math.multiply(PolyArray._data[i],marrayOne)));
        //dd.push([PolyArray._data[i][0] + 300, PolyArray._data[i][1] + 300]);
    }
    
    let basePolyMatrix = math.matrix(ak);
    let basePolyReflectMatrix = math.matrix(bk);
    
    for(var i=0; i < ak.length; i++) {
      tt.push(math.add([300,300],math.matrix(ak[i])));
      dd.push(math.add([300,300],math.matrix(bk[i])));
    }
    
  //  console.log(ak,bk);
    
  //  console.log(this.polyRotation(basePolyMatrix,"10"));
    
  //  let yy = this.polyRotation(basePolyMatrix,"180");
  //  let zz = this.polyRotation(basePolyReflectMatrix,"180");
    
    // let offsetPoly = [];
    // let offsetReflectPoly = [];
    
    // for(var i=0; i < yy.length; i++) {
    //   offsetPoly.push(math.add([300,300],math.matrix(yy[i])));
    //   offsetReflectPoly.push(math.add([300,300],math.matrix(zz[i])));
    // }
    
//    let offsetPoly = math.add([300,300],yy.valueOf()).valueOf();
 //   let offsetReflectPoly = math.add([300,300],zz.valueOf()).valueOf();
    
  //  let mirrorPathData = "";
    
  //  let pathDataOne = this.getPolygonPath(tt);
  //  let pathaDataOneMirror = this.getPolygonPath(dd);
    //console.log(pathDataOne);
  //  console.log(pathaDataOneMirror);
    
   // let tt2 = this.polyRotate(tt,"10");
  //  let dd2 = this.polyRotate(dd,"10");
    
  // let pathDataTwo = this.getPolygonPath(offsetPoly);
  // let pathDataTwoMirror = this.getPolygonPath(offsetReflectPoly);
    
//    let pathDataThree = this.getPolygonPath(this.getTransformedPolyArray(basePolyMatrix,"60",300));  
//    let pathDataThreeMirror = this.getPolygonPath(this.getTransformedPolyArray(basePolyReflectMatrix,"60",300));
    
   // let pathDataFour = this.getPolygonPath(this.getTransformedPolyArray(basePolyMatrix,"120",300));  
  //  let pathDataFourMirror = this.getPolygonPath(this.getTransformedPolyArray(basePolyReflectMatrix,"120",300));
    
    let pathDataArray = [];
    let pathDataMirrorArray = [];
    let pathDataList = [];
    let sideCount = 6;
    
    for(var i=0 ; i < sideCount ; i++) {
       pathDataArray[i] = this.getBezierPath(this.getTransformedPolyArray(basePolyMatrix,i * 360/sideCount,this.props.xPos,this.props.yPos));  
       pathDataMirrorArray[i] = this.getBezierPath(this.getTransformedPolyArray(basePolyReflectMatrix, i * 360/sideCount,this.props.xPos,this.props.yPos));
       pathDataList.push([pathDataArray[i],pathDataMirrorArray[i]]);
    }
    
    
    
    //console.log(pathDataTwo);
    
    
    
    
    
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
