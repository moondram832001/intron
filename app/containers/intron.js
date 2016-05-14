import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Burffee from '../components/Burffee'
import CC from '../components/CC'
import Hexy from '../components/Hexy'
import Polaron from '../components/Polaron'
import Cropper from 'cropperjs';
import 'cropperjs';
import 'cropperjs/dist/cropper.css';

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
  src: React.PropTypes.string
};

static defaultProps = {
  src : "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg"
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

componentDidMount() {
     //console.log(this);
     var intronRef = this;

      var options = {
          aspectRatio: 1,
          guides: false,
          highlight: false,
          viewMode: 1,
          built: function () {
   //         croppable = true;
          },
          crop: function(){
   //         console.log(intronRef);
            let croppedCanvas = intronRef.cropper.getCroppedCanvas();
     //       let polygonCanvas = intronRef.getPolygonCanvas(croppedCanvas);
            intronRef.setState({
          //     preview: intronRef.cropper.getCroppedCanvas().toDataURL()
              preview: croppedCanvas,
              width: croppedCanvas.width
            });
          }
      };
      // for (var prop in this.props) {
      //    if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
      //       options[prop] = this.props[prop];
      //    }
      // }
      this.cropper = new Cropper(this.refs.img, options);
     
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

    return (
      <div >
        <div style={{  height: 300,   width: '70%'}}>
          <img
          ref="img"
          src={this.props.src}
          alt={this.props.alt === undefined ? 'picture' : this.props.alt}
          />
            <img style={{ width: '100%' }} />
        </div>
       
          <Burffee  src={this.state.preview} sides={6}  radius={100} rotation={-30} xPos="500" yPos="350" curveFactor="10" />
          <Hexy xPos={465} yPos={650} />
          <Polaron />
      </div>
    )
  }
}

export default Intron