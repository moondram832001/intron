import React, {Component} from 'react';
import ReactKonva from 'konva-react';
import Plat from './Plat';

let {
  Stage, Layer, Rect, Star, Circle, RegularPolygon
} = ReactKonva;

class Poly extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sample: 0
    };
    this.counter = 0;
    this.imgSrc = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
    this.domPolyProps = {};
    this.domScalerProps = {};
    this.canPolyProps = {};
    this.domParentProps = {};
    this.canBounds = {};
    this.scaleFactor = 2;
  }

  static defaultProps = {
    transformOriginX: "50",
    transformOriginY: "50",
    scaleX: "1",
    scaleY: "1",
    strokeColor: 'transparent',
    strokeWidth: '0',
    onMouseOver: function() {},
    onMouseOut: function() {}
  };


  handleClick = () => {

    this.refs.domParent.style.transition = 'all .3s';

    let translateString = 'translate(' + this.canBounds.x + 'px,' + this.canBounds.y + 'px) ';
    let rotateString = 'rotate(' + this.canPolyProps.roty + 'deg) ';
    let scaleString = 'scale(' + (2 * this.props.scaleX) + ',' + (2 * this.props.scaleY) + ')';
    let transformString = translateString + rotateString + scaleString;

    this.refs.domParent.style.transform = transformString;
  }

  componentDidUpdate() {

  }

  handleMouseOver = () => {
    document.body.style.cursor = 'pointer';
  }

  handleMouseOut = () => {

  }


  componentDidMount() {

    let divBounds = this.refs.def.node.children[0].getClientRect();
    let dataURL = this.refs.def.node.toDataURL(divBounds);


    let radShad = parseInt(this.props.radius) + parseInt(this.props.shadow);


    this.canPolyProps = {
      sides: this.props.sides,
      opacityValue: 0,
      rady: this.props.radius,
      filler: "#fafafa",
      xPos: this.props.xx,
      yPos: this.props.yy - (parseInt(this.props.radius) + parseInt(this.props.shadow)),
      roty: this.props.rotation,
      offX: ((this.props.transformOriginX / 100) * 2 * radShad) - radShad,
      offY: ((this.props.transformOriginY / 100) * 2 * radShad) - radShad,
      shadow: this.props.shadow,
      shadowColor: '#999',
      stroke: this.props.strokeColor,
      strokeWidth: parseInt(this.props.strokeWidth)
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


    this.domPolyProps = {

      width: divBounds.width + 'px',
      height: divBounds.height + 'px',
      position: 'absolute',
      background: 'url(' + dataURL + ')',
      zIndex: '-1',
      transformOrigin: '0% 0%',
      transform: 'scale(' + 1 / this.scaleFactor + ',' + 1 / this.scaleFactor + ')'
    };

    let scalingShadowFactor = this.props.scaleParent ? this.props.scaleParent : 1;

    let translateString = "translate(0px,0px)";
    let rotateString = 'rotate(' + '0' + 'deg) ';
    let scaleString = 'scale(' + scalingShadowFactor + ',' + scalingShadowFactor + ')';
    let transformString = translateString + rotateString + scaleString;
    let transformOriginString;

    this.domParentProps = {
      position: 'absolute',
      zIndex: '-1',
      width: divBounds.width / this.scaleFactor + 'px',
      height: divBounds.height / this.scaleFactor + 'px',
      top: '0px',
      left: '0px',
      transform: transformString,
      transformOrigin: "50% 50%"
    };


    let transOrgX = 50 / 100 * divBounds.width / this.scaleFactor;
    let transOrgY = 0 / 100 * divBounds.width / this.scaleFactor - (((scalingShadowFactor - 1) * divBounds.width / this.scaleFactor) / 10);
    let scaleScalerString = 'scale(' + this.props.scaleX + ',' + this.props.scaleY + ')';
    let translateScalerString = 'translate(' + this.canBounds.x + 'px,' + this.canBounds.y + 'px) ';
    let rotateScalerString = 'rotate(' + this.canPolyProps.roty + 'deg) ';
    let transformScalerString = translateScalerString + rotateScalerString + scaleScalerString;
    let scalerTransformOrigin = transOrgX + "px " + transOrgY + "px";

    this.domScalerProps = {
      position: 'absolute',
      zIndex: this.props.level,
      width: divBounds.width / this.scaleFactor + 'px',
      height: divBounds.height / this.scaleFactor + 'px',
      top: '0px',
      left: '0px',
      transform: transformScalerString,
      transformOrigin: "50% 0%"
    };

    this.refs.def.node.listening(this.props.listen);


    if (this.props.parentRef !== undefined) {
      this.props.parentRef[this.props.name] = this;
    }

    let polyRef = this;
    this.setState({
      sample: 1
    }, function() {
      polyRef.refs.domScaler.style.transition = 'all .3s';
      polyRef.refs.domParent.style.transitionDelay = '.5s';
    });

  }

  componentWillMount() {
    this.canPolyProps = {
      sides: this.props.sides,
      opacityValue: 1,
      rady: this.props.radius * this.scaleFactor,
      filler: this.props.fillColor,
      xPos: this.props.width / 2,
      yPos: this.props.height / 2,
      roty: 0,
      offX: 0,
      offY: 0,
      shadow: this.props.shadow * this.scaleFactor,
      shadowColor: '#999',
      strokeColor: this.props.strokeColor,
      strokeWidth: parseInt(this.props.strokeWidth)
    };
  }

  render() {

    return (
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
                    onMouseOver={this.props.onMouseOver}
                    onMouseOut={this.props.onMouseOut}
                    rotation={this.canPolyProps.roty}
                    offsetX={this.canPolyProps.offX}
                    offsetY={this.canPolyProps.offY} 
                    shadowColor={this.canPolyProps.shadowColor} 
                    shadowBlur={this.canPolyProps.shadow}
                    shadowOffsetX="0"
                    shadowOffsetY="0"
                    shadowOpacity="1"
                    stroke={this.canPolyProps.strokeColor}
                    strokeWidth={this.canPolyProps.strokeWidth}
                />
            </Layer>
        </div>
    );
  }

}

export default Poly;