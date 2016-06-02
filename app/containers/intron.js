import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import DD from '../components/DD';
import Burffee from '../components/Burffee'
import Plat from '../components/Plat';
import CC from '../components/CC'
import Hexy from '../components/Hexy'
import Cropper from 'cropperjs';
import 'cropperjs';
import '../styles/cropper.css';

class Intron extends Component {

constructor(props) {
  super(props);
  this.state = {
       preview: null,
       width: '200px'
  };
//  this.getPolygonCanvas = this.getPolygonCanvas.bind(this);
//  this.canvasRef = null;
}

static propTypes = {
  src: React.PropTypes.string,
  imageWidth: React.PropTypes.string,
  imageHeight: React.PropTypes.string,
  preview: React.PropTypes.object
};

static defaultProps = {
  src : "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg",
  imageWidth: '600',
  imageHeight : '300',
  preview:null
};


// getPolygonCanvas(sourceCanvas) {
//   var canvas = document.createElement('canvas');
//   canvas.id="canvasy";
//   var context = canvas.getContext('2d');
//   var width = sourceCanvas.width;
//   var height = sourceCanvas.height;

//   var sides = 6;
//   var radius = .4166 * width;
//   var a = ((Math.PI * 2)/sides);
//   //console.log(width,height);

//   canvas.width = width;
//   canvas.height = height;
//   context.beginPath();
//   context.moveTo(width / 2 + (radius*Math.cos(0)),height / 2 + (radius*Math.sin(0)));
//   //console.log(width / 2 + (radius*Math.cos(a*0)), height / 2 + (radius*Math.sin(a*0)));
//   for (var i = 1; i < sides; i++) {
//     //width / 2 + (radius*Math.cos(a*i));
//     //height / 2 + (radius*Math.sin(a*i));
//     context.lineTo(width / 2 + (radius*Math.cos(a*i )),height / 2 + (radius*Math.sin(a*i)));
// //    console.log(width / 2 + (radius*Math.cos(a*i)), height / 2 + (radius*Math.sin(a*i)));
//   }
//   context.strokeStyle = 'rgba(0,0,0,0)';
//   context.stroke();
//   context.clip();
//   context.closePath();
//   context.drawImage(sourceCanvas, 0, 0, width, height);

//   // canvas.width = width;
//   // canvas.height = height;
//   // context.beginPath();
//   // context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI);
//   // context.strokeStyle = 'rgba(0,0,0,0)';
//   // context.stroke();
//   // context.clip();
//   // context.drawImage(sourceCanvas, 0, 0, width, height);

//   return canvas;
// }

handleMouseOut = (e) => {
      console.log("out",e);
}

handleMouseOver = (e) => {
         console.log("over",0);
}



componentDidMount() {
     //console.log(this);
     var intronRef = this;

      var options = {
          aspectRatio: 1,
          guides: false,
          highlight: false,
          viewMode: 1,
          dragMode: 'none',
          minCropBoxWidth: 40,
          minCropBoxHeight: 40,
          cropBoxResizable: false,
          autoCropArea: .25,
  //        background: false,
          built: function () {
   //         croppable = true;
   //           console.log(" i was buile afetr  mount");
              let spinner  = document.getElementById("spinnerOne");
              spinner.style.display = 'none';
            //this.cropper.crop();
            
          },
          crop: function(){
          //  console.log("cropped");
          //  let croppedCanvas = intronRef.cropper.getCroppedCanvas();
            intronRef.props.passToParent(intronRef.cropper);
     //       let polygonCanvas = intronRef.getPolygonCanvas(croppedCanvas);
            // intronRef.setState({
            //   preview: croppedCanvas,
            //   width: croppedCanvas.width
            // });
          }
      };
      // for (var prop in this.props) {
      //    if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
      //       options[prop] = this.props[prop];
      //    }
      // }
      this.cropper = new Cropper(this.refs.img, options);
    //  console.log(this.cropper.getCropBoxData());
      // let cropRadius = 30;
      // this.cropper.setCropBoxData({
      //   left: this.props.imageWidth/2 - cropRadius, 
      //   top: this.props.imageHeight/2 - cropRadius, 
      //   width: 2 * cropRadius,
      //   height: 2 * cropRadius
      // });

      this.props.passToParent(this.cropper);
     
}

// {
//   <div style= {{ position: 'relative' , top: '360px' , left: '-40px' }} >
//           <Burfee vArray={ carry } hArray={ arry } opacity="1" color="#f5f5f5" />
//         </div>
//         <div style= {{ position: 'relative' , top: '360px' , left: '-40px' , zIndex: '-10' }} >
//           <Burfee vArray={ carry } opacity="1"  color="white" />
//         </div>
//         <div style={{  height: 400,   width: '70%'}}>
//           <img
//           ref="img"
//           src={this.props.src}
//           alt={this.props.alt === undefined ? 'picture' : this.props.alt}
//           />
//            <img style={{ width: '100%' }} src={this.state.preview} />
//         </div>
// }

// shouldComponentUpdate(){
//   return false;
// }
 
  shouldComponentUpdate(){
      //return true;
      return (this.props.refresh);
  }

  componentDidUpdate() {
  //  console.log(this.refs.polaronRef.node.getCanvas());
   // console.log("intron updated");
  //     var intronRef = this;

  //     var options = {
  //         aspectRatio: 1,
  //         guides: false,
  //         highlight: false,
  //         viewMode: 1,
  //         dragMode: 'none',
  //         minCropBoxWidth: 40,
  //         minCropBoxHeight: 40,
  //         cropBoxResizable: false,
  // //        background: false,
  //         built: function () {
  //           croppable = true;
  //           console.log(" i was buile afetr  update");
  //         },
  //         crop: function(){
  //  //         console.log(intronRef);
  //   //        let croppedCanvas = intronRef.cropper.getCroppedCanvas();
  //    //       let polygonCanvas = intronRef.getPolygonCanvas(croppedCanvas);
  //           // intronRef.setState({
  //           //   preview: croppedCanvas,
  //           //   width: croppedCanvas.width
  //           // });
  //         }
  //     };
      // for (var prop in this.props) {
      //    if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
      //       options[prop] = this.props[prop];
      //    }
      // }
      if(this.props.refreshImage){
         this.cropper.replace(this.props.src);  
         
      }
        // let cropRadius = 30;
        // this.cropper.setCropBoxData({
        //     left: 600/2 - cropRadius, 
        //     top: 300/2 - cropRadius, 
        //     width: 2 * cropRadius,
        //     height: 2 * cropRadius
        // });
      
    //  console.log(this.cropper.getCropBoxData());
     

  }

  render() {

    
    let sides = 3;

    let radius = 189;
    let cradius = 175;

    let a = ((Math.PI * 2)/sides);
    let arry = [];
    let carry = [];

    for (var i = 0; i < sides; i++) {
      arry.push(300 + (radius*Math.cos(a*i)));
      arry.push(300 + (radius*Math.sin(a*i)));
    }

    for (var i = 0; i < sides; i++) {
      carry.push(250 + (cradius*Math.cos(a*i)));
      carry.push(250 + (cradius*Math.sin(a*i)));
    }
  //<Burffee  src={this.state.preview} sides={6}  radius={100} rotation={-30} xPos="500" yPos="350" curveFactor="10" />
  //<Hexy src={this.state.preview} xPos={465} yPos={650} curveFactor="10" rotation={-30} radius={100} sides={6} />
  
  //  <Burffee  src={this.state.preview} sides={6}  radius={100} rotation={-30} xPos="500" yPos="350" curveFactor="10" />
  // <Hexy src={this.state.preview} xPos={465} yPos={500} rotation={-30} curveFactor="10" sides={6} />
    return (
      <div >
        <div style={{  height: this.props.imageHeight + 'px',   width: this.props.imageWidth + 'px' , marginLeft:'auto' , marginRight: 'auto'}}>
          <img
          ref="img"
          src={this.props.src}
          alt={this.props.alt === undefined ? 'picture' : this.props.alt}
          />
            <img style={{ width: '100%' }} />
        </div>
       <Hexy src={this.props.preview} xPos={465} yPos={500} rotation={-30} curveFactor="10" sides={6} />
      </div>
    )
  }
}

export default Intron