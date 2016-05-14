import React, {Component} from 'react';
//import ReactDOM from 'react-dom'
import ReactKonva from './ReactKonva';
import Plat from './Plat';

let {Stage, Layer, Rect, Star, Circle,RegularPolygon} = ReactKonva;

class Poly extends Component {

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


handleClick = () => {
    console.log("clicked");
    
    this.refs.domParent.style.transition= 'all .3s'; 
    
    let translateString = 'translate(' +  this.canBounds.x + 'px,' +  this.canBounds.y + 'px) ';
    let rotateString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
    let scaleString = 'scale(' + (2 * this.props.scaleX) + ',' + (2 * this.props.scaleY) + ')';
    let transformString = translateString + rotateString + scaleString;
    
    this.refs.domParent.style.transform = transformString;
}

handleMouseOver = () => {
    console.log("over");
    
    let translateString = 'translate(' +  this.canBounds.x + 'px,' +  this.canBounds.y + 'px) ';
    let rotateString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
    let scaleString = 'scale(' + (2 * this.props.scaleX) + ',' + (2 * this.props.scaleY) + ')';
    let transformString = translateString + rotateString + scaleString;
    
    this.refs.domScaler.style.transform = transformString;
}

handleMouseOut = () => {
    console.log("out");
    
    //this.refs.domParent.style.transition= 'all .3s'; 
    
    let translateString = 'translate(' +  this.canBounds.x + 'px,' +  this.canBounds.y + 'px) ';
    let rotateString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
    let scaleString = 'scale(' + ( this.props.scaleX) + ',' + (this.props.scaleY) + ')';
    let transformString = translateString + rotateString + scaleString;
    
    this.refs.domScaler.style.transform = transformString;
}


// handleMouseDown = () => {
//     this.refs.domPoly.style.transform= 'scale(2.87,2.87)';
// }this.refs.domParent.style.transition= 'all .3s';

// handleMouseDown = () => {
//     this.refs.domPoly.style.transform= 'scale(1,1)';
// }

// shouldComponentUpdate(){
//     return true;
// }

componentDidUpdate(){
    // if(this.counter === 2){
    //     let bounds = this.refs.def.node.children[0].getClientRect();
    //     this.setState({
    //         sample: 2
    //     });
    // }
    
    // console.log("updated");
}

componentDidMount() {
 //   console.log(this.refs.def);
    //var gg = React.findDOMNode(this.refs.def);
 //   console.log(this.refs.def.node.getCanvas());
   // var ff = this.refs.domPoly.node.
//    console.log("triggered" , this.refs.def.node.children[0].getClientRect());
    console.log("trans" , this.refs.def.node.children[0].getTransform());
    let divBounds = this.refs.def.node.children[0].getClientRect();
    let dataURL = this.refs.def.node.toDataURL(divBounds);
    //dataURL = this.refs.canPoly.node.getLayer().getCanvas().toDataURL();
   // console.log(this.refs.def.node.getCanvas().toDataURL());
   // this.scaleFactor = 2;
    
    let radShad = parseInt(this.props.radius) + parseInt(this.props.shadow);
    console.log(radShad);
    
    this.canPolyProps = {
        sides : this.props.sides,
        opacityValue : 0,
        rady : this.props.radius,
        filler: "#fafafa",
        xPos: this.props.xx,
        yPos: this.props.yy - (parseInt(this.props.radius) + parseInt(this.props.shadow)),
        roty : this.props.rotation,
        offX : ((this.props.transformOriginX/100) *  2 * radShad) - radShad,
        offY : ((this.props.transformOriginY/100) *  2 * radShad) - radShad,
        shadow: this.props.shadow,
        shadowColor: '#999'
    };
    
    this.refs.def.node.children[0].opacity(this.canPolyProps.opacityValue);
    this.refs.def.node.children[0].fill(this.canPolyProps.filler);
    this.refs.def.node.children[0].x(this.canPolyProps.xPos);
    this.refs.def.node.children[0].y(this.canPolyProps.yPos);
    this.refs.def.node.children[0].radius(this.canPolyProps.rady);
    this.refs.def.node.children[0].sides(this.canPolyProps.sides);
    this.refs.def.node.children[0].offsetX(this.canPolyProps.offX);
    this.refs.def.node.children[0].offsetY(this.canPolyProps.offY);
    this.refs.def.node.children[0].shadowBlur(this.canPolyProps.shadow);
    this.refs.def.node.children[0].shadowColor(this.canPolyProps.shadowColor);
    this.refs.def.node.draw();
    this.canBounds = this.refs.def.node.children[0].getClientRect();
    console.log(this.canBounds , divBounds);
    this.refs.domScaler.style.transition = 'all .3s';
    this.refs.domParent.style.transitionDelay = '.5s';
   // this.refs.def.node.children[0].rotate(this.canPolyProps.roty);

    this.domPolyProps = {
//        display:'none',
        width: divBounds.width + 'px',
        height: divBounds.height + 'px',
        position: 'absolute',
        //   top:  (this.props.yy - this.props.height/(2 * this.scaleFactor)) +  'px',
        //   left: (this.props.xx - this.props.width/(2 * this.scaleFactor)) + 'px',
       
        background:'url('+ dataURL +')',
        zIndex: '-1',
        transformOrigin: '0% 0%',
        transform: 'scale(' + 1/this.scaleFactor + ',' + 1/this.scaleFactor + ')'
      //transform: 'scale(1,1)'
    };
    
    let scalingShadowFactor = this.props.scaleParent ? this.props.scaleParent : 1;
    
    let translateString = "translate(0px,0px)"; 
    let rotateString = 'rotate('+ '0' + 'deg) ';
    let scaleString = 'scale('+ scalingShadowFactor + ',' + scalingShadowFactor + ')';
    let transformString = translateString + rotateString + scaleString;
    let transformOriginString;
    
    this.domParentProps={
        position: 'absolute',
        zIndex: '-1',
        width: divBounds.width/this.scaleFactor + 'px',
        height: divBounds.height/this.scaleFactor + 'px',
        top: '0px',
        left: '0px',
        transform: transformString,
        //transformOrigin: this.props.transformOriginX + "%  " + this.props.transformOriginY + "%"
        transformOrigin: "50% 50%"
    };
    
    
    let transOrgX = 50/100 * divBounds.width/this.scaleFactor;
    let transOrgY = 0/100 * divBounds.width/this.scaleFactor - (((scalingShadowFactor - 1) * divBounds.width/this.scaleFactor)/10);
    let scaleScalerString = 'scale(' + this.props.scaleX + ',' + this.props.scaleY + ')';
    let translateScalerString = 'translate(' +  this.canBounds.x + 'px,' +  this.canBounds.y + 'px) ';
    let rotateScalerString = 'rotate('+ this.canPolyProps.roty + 'deg) ';
    let transformScalerString = translateScalerString + rotateScalerString + scaleScalerString;
    let scalerTransformOrigin = transOrgX + "px " + transOrgY + "px";
    
    this.domScalerProps={
        position: 'absolute',
        zIndex: this.props.level,
        width: divBounds.width/this.scaleFactor + 'px',
        height: divBounds.height/this.scaleFactor + 'px',
        top: '0px',
        left: '0px',
        transform: transformScalerString,
        transformOrigin: "50% 0%"
        //transformOrigin: scalerTransformOrigin
    };
    
    this.refs.def.node.listening(this.props.listen) ;
    

    if(this.props.parentRef !== undefined){
       this.props.parentRef[this.props.name] = this;
       console.log("parent set");
    }
    //ff.style.background='url('+dataURL+')';
   // var polyNode = this.refs.canPoly.node;
    let BBB = this;
    this.setState({
        sample: 1
    },function(){
        console.log(BBB.refs.def.node.children[0].getClientRect());
        console.log(BBB.refs.domPoly.getBoundingClientRect());
        // BBB.refs.def.node.children[0].rotate(20);
        // BBB.refs.def.node.draw();
        // console.log(BBB.refs.def.node.children[0].getClientRect());
    });

}

componentWillMount(){
    console.log("will mount");
    this.canPolyProps = {
        sides : this.props.sides,
        opacityValue : 1,
        rady : this.props.radius * this.scaleFactor,
        filler: "#fff",
        xPos: this.props.width/2,
        yPos: this.props.height/2,
        roty : 0,
        offX : 0,
        offY : 0,
        shadow: this.props.shadow * this.scaleFactor,
        shadowColor: '#999'
    };
}

render() {
    
    //var dataURL = "transparent";
    //let domPolyProps = {};
    //let canWidth = this.props.width;
    //let canHeight = this.props.height;
   // canWidth = ;
//    canHeight = ;
    //  const sides = !this.counter ? "5":"5";
    //  const opacityValue = !this.counter ? .4:1;
    //  const rady = !this.counter ? "250":this.props.radius;
    //  const filler = !this.counter ? "#00ff00":"#ff0000";
    //  const xwidth = !this.counter ? canWidth/2:this.props.xx;
    //  const ywidth = !this.counter ? canHeight/2:this.props.yy;
    //  const roty = !this.counter ? 0:this.props.rotation;
    //  const offX = !this.counter ? 0:this.props.offsetX;
    //  const offY = !this.counter ? 0:this.props.offsetY;
     
    //if(this.refs.def){
    
//        dataURL = "url(" + this.refs.canPoly.node.getLayer().getCanvas().toDataURL() + ')';
//        console.log(this.refs.canPoly.node.getLayer().getCanvas().toDataURL());
    
    //  console.log(this.refs);
    //}
    // const visibility = !this.counter ? 1:0;
    // const filler = !this.counter ? "#ff0000":"transparent";
    
    
    // console.log("render counter" , filler);
    
    
  //  this.counter++;
    //<div ref="domParent" style={this.domParentProps}>
    //</div>
    return(
        <div>
            <div ref="domScaler" style={this.domScalerProps}>
                <div ref="domParent" style={this.domParentProps}>
                    <div ref="domPoly" style={this.domPolyProps}></div>
                </div>
            </div>
             <Layer ref="def">
                <RegularPolygon 
                    sides={this.props.sides} radius={this.canPolyProps.rady} 
                    fill={this.canPolyProps.filler} x={this.canPolyProps.xPos} y={this.canPolyProps.yPos} opacity={this.canPolyProps.opacityValue}
                    onClick={this.props.onClick}
                    rotation={this.canPolyProps.roty}
                    offsetX={this.canPolyProps.offX}
                    offsetY={this.canPolyProps.offY} 
                    shadowColor={this.canPolyProps.shadowColor} 
                    shadowBlur={this.canPolyProps.shadow}
                    shadowOffsetX="0"
                    shadowOffsetY="0"
                    shadowOpacity="1"
                />
            </Layer>
        </div>
    );
}

}

export default Poly;