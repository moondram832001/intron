import React, {Component} from 'react';
import ReactKonva from 'konva-react';
import Polaron from '../components/Polaron'

let {
  Stage, Layer, Rect, Star, Circle, RegularPolygon
} = ReactKonva;

class Polarons extends Component {

  constructor(props) {
    super(props);
    this.refresh = true;
    this.renderCount = 0;
  }

  componentDidMount() {
    this.img = this.refs.polaronRef.node.toDataURL();
    this.refs.polaronRef.node.opacity(1);
    this.refs.polaronRef.node.draw();
    this.props.passToParent(this.img);
  }

  componentDidUpdate() {
    this.img = this.refs.polaronRef.node.toDataURL();
    this.refs.polaronRef.node.opacity(1);
    this.refs.polaronRef.node.draw();
    this.props.passToParent(this.img);
  }

  componentWillUpdate() {

  }

  componentWillReceiveProps(newProps) {

  }

  componentWillUnmount() {

  }

  componentWillMount() {

  }

  componentWillUpdate() {

  }


  componentWillReceiveProps(propy) {
    this.refresh = propy.refresh;
    if (this.renderCount === 1) {
      this.refresh = true;
    }
  }

  shouldComponentUpdate() {
    return this.refresh;
  }

  render() {

    this.renderCount++;
    let ff = Array.from(new Array(3), (val, index) => index + 1)
      .map(function(i) {
        return Array.from(new Array(7), (val, index) => [i, index + 1])
      });


    return (
      <Stage height={800} width={1600} opacity="1">
            <Layer ref="polaronRef">
                {ff.map(function(i,index){
                    return i.map(function(j,jindex){
                       return <Polaron key={index + "_" + jindex} xPos={j[1]  * 200 + 1} yPos={j[0] * 200}/>;
                    }) 
                })}
            </Layer>
        </Stage>
    );
  }
}

export default Polarons;
