import React, { Component } from 'react'
import Konva from 'konva'

class BB extends Component {

constructor(props) {
  super(props);
  this.state = {
       pos: 0
  };
  this.stage= null;
  this.imgSrc = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
}

static propTypes = {
   vArray : React.PropTypes.array,
   hArray : React.PropTypes.array,
   
//   strokeColor : React.PropTypes.string,
//   strokeWidth : React.PropTypes.string,
//   fillColor: React.PropTypes.string,
//   width: React.PropTypes.string,
//   height: React.PropTypes.string,
//   opacity : React.PropTypes.string
};

static defaultProps = {
   hArray : [],
   opacity:'1',
   color : 0
};
 
shouldComponentUpdate(nextProps, nextState) {
 return true;
} 
 
// tick(currentTime){
    
     
   
    
//     if (currentTime >= this.lastTime + 2000)  {
//      // one second has passed, run some code here
//         let checker = this.state.pos > 0 ? 0 : 500;
//         this.setState({
//             pos: checker
//         });
//          this.lastTime = currentTime;
//     }
//     //console.log("hello"); 
//     window.requestAnimationFrame(this.tick);
// } 

componentDidMount() {
  console.log("BB was mounted" , this.refs.hello,Konva);
  this.stage =  new Konva.Stage({
      container: this.refs.hello,
      width: 300,
      height: 300
  });
  let layer = new Konva.Layer();
  
  var hexagon = new Konva.RegularPolygon({
        x: this.stage.getWidth() / 2,
        y: this.stage.getHeight() / 2,
        sides: 3,
        radius: 40,
        fill: '#ffffff',
        stroke: 'transparent',
        strokeWidth: 4,
        shadowColor: '#aaa',
        shadowBlur: 5,
        shadowOffset: {x : 0, y : 0},
        shadowOpacity: 1,
        offset: {
            x: 0,
            y: -40
        }
    });
    layer.add(hexagon);
    hexagon.rotate('330');
    
    var hexy = this;
    this.stage.add(layer);
    
    // var amplitude = 75;
    // var period = 4000;
    // // in ms
    // var centerX = this.stage.getWidth() / 2;
    // var counter = 0 ;
    // // var anim = new Konva.Animation(function(frame) {
    // //     if(counter++ % 2){
    // //       return false;
    // //     } else {
    // //       //hexagon.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);
    // //       //hexagon.setY(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);  
    // //       //hexagon.setX(amplitude * Math.sin(20 * counter * 2 * Math.PI / period) + centerX);
    // //       //hexagon.setY(amplitude * Math.sin(20 * counter * 2 * Math.PI / period) + centerX);  
          
    // //     }
    // // }, layer);

    // // anim.start();
    
   
   
    var dataURL = layer.getCanvas().toDataURL();
    hexagon.fill('transparent');
    hexagon.stroke('transparent');
    
    layer.draw();
    //layer.clear();
     //hexagon.stroke('transparent');
      // set canvasImg image src to dataURL
      // so it can be saved as an image
    //document.getElementById('canvasImg').src = dataURL;
    //this.refs.imgTag.src = dataURL;
    
   
    //this.refs.diver.style.display= 'none';
    
    var hexagon1 = new Konva.RegularPolygon({
        x: this.stage.getWidth() / 2,
        y: this.stage.getHeight() / 2,
        sides: 6,
        radius: 50,
        fill: '#00ff00',
        stroke: 'transparent',
        strokeWidth: 4,
        shadowColor: '#aaa',
        shadowBlur: 15,
        shadowOffset: {x : 0, y : 0},
        shadowOpacity: 1
    });
    layer.add(hexagon1);
    
    layer.draw();
    
    
    //var dataURL1 = layer.getCanvas().toDataURL();
    //layer.remove(hexagon1);
    hexagon1.fill('transparent');
    hexagon1.stroke('transparent');
    
     
    layer.draw();
    
    var hexagon2 = new Konva.RegularPolygon({
        x: this.stage.getWidth() / 2,
        y: this.stage.getHeight() / 2,
        sides: 3,
        radius: 40,
        fill: '#ffffff',
        stroke: 'transparent',
        strokeWidth: 4,
        shadowColor: '#aaa',
        shadowBlur: 5,
        shadowOffset: {x : 0, y : 0},
        shadowOpacity: 1,
        offset: {
            x: 0,
            y: -40
        }
    });
    
    layer.add(hexagon2);
    hexagon2.rotate('30');
    layer.draw();
    var dataURL2 = layer.getCanvas().toDataURL();
     //var dataURL2 = hexagon2.toDataURL();
    // //layer.remove(hexagon2);
    // hexagon2.fill('white');
    // hexagon2.stroke('white');
    // layer.draw();
    
    // var dataURL3 = layer.getCanvas().toDataURL();
    // //layer.remove(hexagon2);
    // hexagon2.fill('transparent');
    // hexagon2.stroke('transparent');
    
    // layer.draw();
    
    
    this.refs.diver.style.background='url('+dataURL+')';
    this.refs.diver.style.width="300px";
    this.refs.diver.style.height="300px"; 
    this.refs.diver.style.position="absolute"; 
    this.refs.diver.style.top="0px"; 
    this.refs.diver.style.left="0px"; 
    this.refs.diver.style.zIndex="-1"; 
    this.refs.diver.style.transition= 'all 1s';
    this.refs.diver.style.transform= 'scale(1,1)';
    this.refs.diver.style.transformOrigin= '50% 50%';
    this.refs.diver.style.WebkitFilter='brightness(0%) sepia(0) hue-rotate(0deg) saturate(0%) brightness(0%)';
    this.refs.diver.style.opacity= '1';
   // this.refs.diver.style.mixBlendMode= 'screen';
  
    this.refs.fiver.style.background='url('+dataURL2+')';
    this.refs.fiver.style.width="300px";
    this.refs.fiver.style.height="300px"; 
    this.refs.fiver.style.position="absolute"; 
    this.refs.fiver.style.top="0px"; 
    this.refs.fiver.style.left="0px"; 
    this.refs.fiver.style.zIndex="-2"; 
    this.refs.fiver.style.transition= 'all 1s';
    this.refs.fiver.style.transform= 'scale(1,1)';
    this.refs.fiver.style.transformOrigin= '50% 50%';
    this.refs.fiver.style.WebkitFilter='brightness(0%) sepia(0) hue-rotate(0deg) saturate(0%) brightness(0%)';
    this.refs.fiver.style.opacity= '1';
    //this.refs.fiver.style.mixBlendMode= 'screen';
    
    // this.refs.giver.style.background='url('+dataURL2+')';
    // this.refs.giver.style.width="300px";
    // this.refs.giver.style.height="300px"; 
    // this.refs.giver.style.position="absolute"; 
    // this.refs.giver.style.top="0px"; 
    // this.refs.giver.style.left="0px"; 
    // this.refs.giver.style.zIndex="-3"; 
    // this.refs.giver.style.transform= 'scale(1,1)';
    // this.refs.giver.style.transformOrigin= '50% 50%';
    // this.refs.giver.style.opacity='1';
    // this.refs.giver.style.mixBlendMode= 'screen';
    
    // this.refs.hiver.style.background='url('+dataURL3+')';
    // this.refs.hiver.style.width="300px";
    // this.refs.hiver.style.height="300px"; 
    // this.refs.hiver.style.position="absolute"; 
    // this.refs.hiver.style.top="0px"; 
    // this.refs.hiver.style.left="0px"; 
    // this.refs.hiver.style.zIndex="-3"; 
    // this.refs.hiver.style.transform= 'scale(1,1)';
    // this.refs.hiver.style.transformOrigin= '50% 50%';
    // this.refs.hiver.style.opacity='1';
    // this.refs.hiver.style.mixBlendMode= 'screen';
    
    hexagon.fill('transparent');
    hexagon.stroke('transparent');
    
    hexagon2.fill('transparent');
    hexagon2.stroke('transparent');
    hexagon1.listening(false);
    layer.draw();
    var ff = 0;
    var dd = 0;
    
    hexagon.on('mousedown', function() {
      console.log('sdgdf');
      if(!dd){
      hexy.refs.diver.style.transform= 'scale(2.87,2.87)';
  //    hexy.refs.diver.style.opacity= '1';
  //    hexy.refs.diver.style.WebkitFilter='brightness(50%) sepia(1) hue-rotate(132deg) saturate(103.2%) brightness(91.2%)';
      hexagon.scaleX(2.87);
      hexagon.scaleY(2.87);
      layer.draw(); 
      dd = 1;
      hexagon2.fire('mousedown');    
     }
    });
    
    hexagon.on('mouseup', function() {
      console.log('sdgdf');
       if(dd){
        hexy.refs.diver.style.transform= 'scale(1,1)';
        hexagon.scaleX(1);
        hexagon.scaleY(1);
        layer.draw();  
   //     hexy.refs.diver.style.WebkitFilter='brightness(50%) sepia(0) hue-rotate(0deg) saturate(0%) brightness(91.2%)';
        dd = 0;
        hexagon2.fire('mouseup');  
      }
    });
    
    hexagon2.on('mousedown', function() {
      console.log('sdgdf');
      if(!ff){
        hexy.refs.fiver.style.transform= 'scale(2.87,2.87)';
  //    hexy.refs.fiver.style.opacity= '1';
   //     hexy.refs.fiver.style.WebkitFilter='brightness(50%) sepia(1) hue-rotate(132deg) saturate(103.2%) brightness(91.2%)';
        hexagon2.scaleX(2.87);
        hexagon2.scaleY(2.87);
        layer.draw();  
        ff = 1;
        hexagon.fire('mousedown');  
      }
    });
    
    hexagon2.on('mouseup', function() {
      console.log('sdgdf');
       if(ff){
        hexy.refs.fiver.style.transform = 'scale(1,1)';
        hexagon2.scaleX(1);
        hexagon2.scaleY(1);
        layer.draw();  
   //     hexy.refs.fiver.style.WebkitFilter='brightness(50%) sepia(0) hue-rotate(0deg) saturate(0%) brightness(91.2%)';
        ff = 0;
        hexagon.fire('mouseup'); 
     }
    });
    
    hexagon.on('mouseover', function() {
      console.log('Mouseover hexagon',ff);
    
  //   if(!dd){
  //     hexy.refs.diver.style.transform= 'scale(2.87,2.87)';
  // //    hexy.refs.diver.style.opacity= '1';
  //     hexy.refs.diver.style.WebkitFilter='brightness(50%) sepia(1) hue-rotate(132deg) saturate(103.2%) brightness(91.2%)';
  //     hexagon.scaleX(2.87);
  //     hexagon.scaleY(2.87);
  //     layer.draw(); 
  //     dd = 1;
      
  //   }
      
      hexy.refs.diver.style.WebkitFilter='brightness(50%) sepia(1) hue-rotate(132deg) saturate(103.2%) brightness(91.2%)';
      hexagon.fire('mousedown');     
       
       
//      hexy.refs.diver.style.opacity= '1';
//      hexy.refs.diver.style.background= '#000';
    });
    
    hexagon.on('mouseout', function() {
      console.log('Mouseout hexagon',ff);
       
      // if(dd){
      //   hexy.refs.diver.style.transform= 'scale(1,1)';
      //   hexagon.scaleX(1);
      //   hexagon.scaleY(1);
      //   layer.draw();  
      //   hexy.refs.diver.style.WebkitFilter='brightness(50%) sepia(0) hue-rotate(0deg) saturate(0%) brightness(91.2%)';
      //   dd = 0;
      //   hexagon2.fire('mouseout');  
      // }
        
       
      hexy.refs.diver.style.WebkitFilter='brightness(50%) sepia(0) hue-rotate(0deg) saturate(0%) brightness(91.2%)';
      hexagon.fire('mouseup');        
  //    hexy.refs.diver.style.opacity= '1';
      
      
 //    hexy.refs.diver.style.opacity= '1';
//      hexy.refs.diver.style.background= '#fff';
    });
    
     hexagon2.on('mouseover', function() {
      console.log('Mouseover hexagon',ff);
     
       
     
  //     if(!ff){
  //       hexy.refs.fiver.style.transform= 'scale(2.87,2.87)';
  // //    hexy.refs.fiver.style.opacity= '1';
  //     hexy.refs.fiver.style.WebkitFilter='brightness(50%) sepia(1) hue-rotate(132deg) saturate(103.2%) brightness(91.2%)';
  //     hexagon2.scaleX(2.87);
  //     hexagon2.scaleY(2.87);
  //     layer.draw();  
  //     ff = 1;
  //     hexagon.fire('mouseover');  
  //     }
      
       hexy.refs.fiver.style.WebkitFilter='brightness(50%) sepia(1) hue-rotate(132deg) saturate(103.2%) brightness(91.2%)';
       hexagon2.fire('mousedown');  
    
      
//      hexy.refs.fiver.style.opacity= '1';
//      hexy.refs.fiver.style.background= '#000';
    });
    
    hexagon2.on('mouseout', function() {
      console.log('Mouseout hexagon',ff);
     
         
      
    // if(ff){
    //     hexy.refs.fiver.style.transform = 'scale(1,1)';
    //     hexagon2.scaleX(1);
    //     hexagon2.scaleY(1);
    //     layer.draw();  
    //     hexy.refs.fiver.style.WebkitFilter='brightness(50%) sepia(0) hue-rotate(0deg) saturate(0%) brightness(91.2%)';
    //     ff = 0;
    //     hexagon.fire('mouseout'); 
    // }
        
        hexy.refs.fiver.style.WebkitFilter='brightness(50%) sepia(0) hue-rotate(0deg) saturate(0%) brightness(91.2%)';
        hexagon2.fire('mouseup'); 
  //    hexy.refs.fiver.style.opacity= '1';
      
      
 //    hexy.refs.diver.style.opacity= '1';
//      hexy.refs.diver.style.background= '#fff';
    });
    
    
     hexagon1.on('mouseover', function() {
      console.log('Mouseover hexagon');
   //   ff = 1;
      hexy.refs.diver.style.transform= 'scale(2.87,2.87)';
//      hexy.refs.diver.style.opacity= '1';
//      hexy.refs.diver.style.WebkitFilter='brightness(50%) sepia(1) hue-rotate(132deg) saturate(103.2%) brightness(91.2%)';
      hexagon.scaleX(2.87);
      hexagon.scaleY(2.87);
      layer.draw();
      // hexagon1.scaleX(2.87);
      // hexagon1.scaleY(2.87);
      // layer.draw();
//      hexy.refs.diver.style.opacity= '1';
//      hexy.refs.diver.style.background= '#000';
    });
    
    hexagon1.on('mouseout', function() {
      console.log('Mouseout hexagon');
      ff = 0;
      hexy.refs.diver.style.transform= 'scale(1,1)';
      hexagon.scaleX(1);
      hexagon.scaleY(1);
      layer.draw();
 //    hexy.refs.diver.style.opacity= '1';
//      hexy.refs.diver.style.background= '#fff';
    });
    
    
    
    // this.refs.diver.style = {
    //   background:'url('+dataURL+')',
    //   width:"300px",
    //   height:"300px",
    //   position:"absolute",
    //   top:"0px",
    //   left:"0px",
    //   zIndex:"-1"
    // };
    
    //     background-size: 100px 100px;
    // background-repeat: no-repeat;
    // transform: scale(.5,.5);
    // transform-origin: 0% 0%;
    
}
  
render() {
  const { opacity,shadow,color } = this.props;
 
//  console.log(" BB was rendered" , new Date());
  let stylist = {
    position:'absolute',
    WebkitTransform: 'translateX('+ this.props.color + 'px)'
  };
  
    return (
    //   React.createElement('div', {
    //     ref: function(c)  {return this.domNode = c;}.bind(this)
    //   })
    <div>
      <div ref="hello" style={{ position: 'absolute', top: '0px' , left: '0px' }}>hello</div>
      <div ref="diver"></div>
      <div ref="fiver"></div>
      
    </div>
    );
  }
}

export default BB