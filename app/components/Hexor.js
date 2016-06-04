import React, {Component} from 'react';
import ReactKonva from 'konva-react';

import Plat from './Plat';
import PolyButton from './PolyButton';
import Poly from './Poly';

import {rgbToHsl, getRadialCoords} from '../lib/Utils';
import {getPolygonCanvas} from '../lib/Utils';

let {
    Stage, Layer, Rect, Star, Circle, RegularPolygon, Path
} = ReactKonva;


class Hexor extends Component {

    constructor(props) {
        super(props);
        this.siblingsArray = [];
        this.clickFlag = 0;
        this.siblingsObject = {};
        this.regularPolyObject = {};
        this.polyPointsObject = {};
        this.iconStyleArray = [];
    }


    static propTypes = {
        radius: React.PropTypes.number,
        src: React.PropTypes.object
    };

    static defaultProps = {
        radius: 50,
        padding: 100,
        domPolyOffset: 0,
        src: null
    };


    componentDidMount() {
        this.siblingsArray.map(function(sibling) {
            let IconPos = getRadialCoords(parseInt(sibling.props.xx), parseInt(sibling.props.yy), parseInt(sibling.props.radius) + 55, parseInt(sibling.props.rotation) + 60);
            sibling.domIconExpandProps = {
                left: IconPos[0] - 25 + 'px',
                top: IconPos[1] - 25 + 'px',
            };

            IconPos = getRadialCoords(parseInt(sibling.props.xx), parseInt(sibling.props.yy), parseInt(sibling.props.radius), parseInt(sibling.props.rotation) + 60);
            sibling.domIconCollapseProps = {
                left: IconPos[0] - 25 + 'px',
                top: IconPos[1] - 25 + 'px',
            };

        });

        this.regularPolyObject['backShadowPoly'].refs.domParent.style.transition = 'transform 0s';
        this.regularPolyObject['backShadowPoly'].refs.domParent.style.transform = 'scale(.5,.5)';
    }

    componentWillReceiveProps(newProps) {

    }

    componentWillUnmount() {

    }

    shouldComponentUpdate() {
        return this.props.src ? true : false;
    }

    componentDidUpdate() {

    }

    componentWillMount() {

        this.canvasRef = document.createElement('canvas');
        this.canvasRef.id = "hexyCanvas";
        this.canvasRef.style.width = "100%";
        this.canvasRef.style.display = "none";

        let domPolyOffset = this.props.radius + this.props.padding;
        for (let i = 0; i < 3; i++) {
            let rotation = 120 * i + 90;
            let IconPos = getRadialCoords(parseInt(domPolyOffset), parseInt(domPolyOffset), parseInt(this.props.radius), rotation);
            this.iconStyleArray.push({
                fontSize: '50px',
                width: '50px',
                position: 'absolute',
                top: '0px',
                left: '0px',
                transform: 'translate(' + (IconPos[0] - 25) + 'px,' + (IconPos[1] - 25) + 'px) scale(.5,.5)',
                transformOrigin: "50% 50%",
                zIndex: '-3',
                textAlign: 'center',
                opacity: 1
            });

        }


    }

    handleMouseDown = () => {


    }

    handleMouseUp = () => {

    }




    handleMouseOverButton = () => {
        if (!this.clickFlag) {
            document.body.style.cursor = 'pointer';
        }
        else {
            document.body.style.cursor = 'default';
        }
    }

    handleMouseOutButton = () => {
        document.body.style.cursor = 'default';
    }


    handleStub = () => {
        console.log("stubber");
    }

    handleCloseClick = () => {
        if (this.clickFlag) {
            this.siblingsArray.map(function(sibling) {

                let translateString = "translate(" + '0' + "px," + '0' + "px)";
                let rotateString = 'rotate(' + sibling.canPolyProps.roty + 'deg) ';
                let scaleString = 'scale(' + (sibling.props.scaleX) + ',' + (sibling.props.scaleY) + ')';

                let transformString = rotateString + translateString + scaleString;

                sibling.refs.domParent.style.transform = transformString;

                sibling.refs.domParentOne.style.transform = transformString;
                sibling.refs.def.node.children[0].scaleX(sibling.canPolyProps.scale);
                sibling.refs.def.node.children[0].scaleY(sibling.canPolyProps.scale);
                sibling.refs.fed.node.children[0].scaleX(sibling.canPolyProps.scale);
                sibling.refs.fed.node.children[0].scaleY(sibling.canPolyProps.scale);
                sibling.refs.domIcon.style.opacity = 1;
                sibling.refs.domIcon.style.transform = 'translate(' + sibling.domIconCollapseProps.left + ',' + sibling.domIconCollapseProps.top + ') scale(.5,.5)';
                sibling.refs.def.node.draw();
                sibling.refs.fed.node.draw();
            });
            this.clickFlag = 0;
        }

        this.regularPolyObject['backShadowPoly'].refs.domParent.style.transition = 'all 1s ';
        this.regularPolyObject['backShadowPoly'].refs.domParent.style.transform = 'scale(.5,.5)';
        this.regularPolyObject['backShadowPoly'].refs.domParent.style.opacity = 0;

        this.regularPolyObject['frontButtonBackground'].refs.domParent.style.transition = 'all 1s ';
        this.regularPolyObject['frontButtonBackground'].refs.domParent.style.transform = 'scale(1,1)';

        this.regularPolyObject['frontButtonBackground'].refs.def.node.children[0].radius("100");
        this.regularPolyObject['frontButtonBackground'].refs.def.node.draw();

        this.refs.imagy.style.transition = 'all 1s';
        this.refs.imagy.style.transform = 'scale(.8,.8)';
    }

    handleClick = () => {
        if (!this.clickFlag) {
            this.siblingsArray.map(function(sibling) {

                let translateString = "translate(" + '0' + "px," + '0' + "px)";
                let rotateString = 'rotate(' + sibling.canPolyProps.roty + 'deg) ';
                let scaleString = 'scale(' + (1.5 * sibling.props.scaleX) + ',' + (1.5 * sibling.props.scaleY) + ')';

                let transformString = rotateString + translateString + scaleString;


                sibling.refs.domParent.style.transformOrigin = "50px 0px";
                sibling.refs.domParent.style.transform = transformString;
                sibling.refs.domParentOne.style.transformOrigin = "50px 0px";
                sibling.refs.domParentOne.style.transform = transformString;
                sibling.refs.def.node.children[0].scaleX(1.5 * sibling.canPolyProps.scale);
                sibling.refs.def.node.children[0].scaleY(1.5 * sibling.canPolyProps.scale);
                sibling.refs.fed.node.children[0].scaleX(1.5 * sibling.canPolyProps.scale);
                sibling.refs.fed.node.children[0].scaleY(1.5 * sibling.canPolyProps.scale);

                sibling.refs.domIcon.style.opacity = 1;
                sibling.refs.domIcon.style.transform = 'translate(' + sibling.domIconExpandProps.left + ',' + sibling.domIconExpandProps.top + ') scale(1,1)';

                sibling.refs.def.node.draw();
                sibling.refs.fed.node.draw();
            });
            this.clickFlag = 1;
        }


        this.regularPolyObject['backShadowPoly'].refs.domParent.style.transition = 'all 1s';
        this.regularPolyObject['backShadowPoly'].refs.domParent.style.transform = 'scale(.75,.75)';
        this.regularPolyObject['backShadowPoly'].refs.domParent.style.opacity = 1;

        this.regularPolyObject['frontButtonBackground'].refs.domParent.style.transition = 'all 1s';
        this.regularPolyObject['frontButtonBackground'].refs.domParent.style.transform = 'scale(.75,.75)';


        this.regularPolyObject['frontButtonBackground'].refs.def.node.children[0].radius("75");
        this.regularPolyObject['frontButtonBackground'].refs.def.node.draw();

        this.refs.imagy.style.transition = 'all 1s';
        this.refs.imagy.style.transform = 'scale(.55,.55)';

    }

    handleTwitterClick = () => {
        var win = window.open('https://twitter.com/', '_blank');
        if (win) {
            win.focus();
        }
        else {
            alert('Please allow popups for this site');
        }
    }

    handleGithubClick = () => {
        var win = window.open('https://github.com/', '_blank');
        if (win) {
            win.focus();
        }
        else {
            alert('Please allow popups for this site');
        }
    }


    render() {
        let {
            width, height, src
        } = this.props;
        let domPolyOffset = this.props.radius + this.props.padding;
        let domPolyAbsPosY = domPolyOffset + this.props.yPos;
        let domPolyAbsPosX = domPolyOffset + this.props.xPos;
        let ImageSrc = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

        if (src) {
            ImageSrc = getPolygonCanvas(src, this.canvasRef, 6, this.props.rotation, this.props.curveFactor, this.polyPointsObject);
        }

        let styleImg = {
            width: (4 * this.props.radius) + 'px',
            position: 'absolute',
            height: (4 * this.props.radius) + 'px',
            zIndex: -1,
            opacity: '1',
            top: domPolyOffset - (2 * this.props.radius) + "px",
            left: domPolyOffset - (2 * this.props.radius) + "px",
            transform: 'scale(.80,.80)'
        };


        let canvasSize = 6 * this.props.radius;


    return (
    <div style={{ position: 'absolute', top: this.props.yPos + 'px' , left:  'calc(50% - ' + canvasSize/2 + 'px)' }} >  
        
      <Plat refresh={true} width={canvasSize } height={canvasSize} >
        
        <PolyButton xx={domPolyOffset} yy={domPolyOffset}  radius={this.props.radius} rotation="30" offsetX="0" offsetY="0" 
         transformOriginX="50" transformOriginY="0" shadow="0" fill="#ff0000" rot="10" MouseOver={this.handleMouseOver}
         MouseOut={this.handleMouseOut}
         MouseDown={this.handleMouseDown}
         MouseUp={this.handleMouseUp}
         siblings={this.siblingsArray}
         onClick={this.handleCloseClick}
         siblingsObject={this.siblingsObject}
         points={[0,0,100,0,50,86.6,-50,86.6]}
         activeColor="#ccc"
         icon="fa fa-times"
         key="1" 
         level="-3"
         iconStyle = {this.iconStyleArray[0]}
         />
        
        <PolyButton xx={domPolyOffset} yy={domPolyOffset}  radius={this.props.radius} rotation="150" offsetX="0" offsetY="0" 
         transformOriginX="50" transformOriginY="0" shadow="0" fill="#ff0000" rot="10" MouseOver={this.handleMouseOver}
         MouseOut={this.handleMouseOut}
         MouseDown={this.handleMouseDown}
         MouseUp={this.handleMouseUp}
         siblings={this.siblingsArray}
         onClick={this.handleTwitterClick}
         siblingsObject={this.siblingsObject}
         points={[0,0,100,0,50,86.6,-50,86.6]}
         activeColor="#ccc"
         icon="fa fa-twitter"
         key="2"
         level="-3"
         iconStyle = {this.iconStyleArray[1]}
        />
        
        <PolyButton xx={domPolyOffset} yy={domPolyOffset}  radius={this.props.radius} rotation="270" offsetX="0" offsetY="0" 
         transformOriginX="50" transformOriginY="0" shadow="0" fill="#ff0000" rot="10" MouseOver={this.handleMouseOver}
         MouseOut={this.handleMouseOut}
         MouseDown={this.handleMouseDown}
         MouseUp={this.handleMouseUp}
         onClick={this.handleGithubClick}
         siblings={this.siblingsArray}
         siblingsObject={this.siblingsObject}
         points={[0,0,100,0,50,86.6,-50,86.6]}
         activeColor="#ccc"
         icon="fa fa-github"
         key="3"
         level="-3"
         iconStyle = {this.iconStyleArray[2]}
        />
        <Poly xx={domPolyOffset} yy={domPolyOffset} sides="6" radius={4 * this.props.radius} rotation="0" offsetX="0" offsetY="0" scaleParent=".5"
         transformOriginX="50" transformOriginY="0" shadow="5" level="-5" listen={false} parentRef={this.regularPolyObject} name="backShadowPoly"
         fillColor="white" strokeColor="white" strokeWidth="0"
        />
         <img ref="imagy" style={ styleImg }  src={ ImageSrc }/>
         <Poly xx={domPolyOffset} yy={domPolyOffset} sides="6" radius={2 * this.props.radius} rotation="0" offsetX="0" offsetY="0" parentRef={this.regularPolyObject}
         transformOriginX="50" transformOriginY="0" shadow="5" level="-2"  listen={true} name="frontButtonBackground" onClick={this.handleClick}
         onMouseOver={this.handleMouseOverButton} onMouseOut={this.handleMouseOutButton}            
         fillColor="white" strokeColor="white" strokeWidth="0"
        />
      </Plat>
    </div>
        );
    }
}

export default Hexor;
