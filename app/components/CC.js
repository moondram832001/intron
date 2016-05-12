import React, {Component} from 'react';
import ReactKonva from '../components/ReactKonva';


let {Stage, Layer, Rect, Star, Circle,RegularPolygon,Path} = ReactKonva;

class CC extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
 
  }

  componentWillReceiveProps(newProps) {
 
  }

  componentWillUnmount() {
 
  }
  
  shouldComponentUpdate(){
    console.log("rendered");
    return false;
  }

  render() {
    return (
    <Stage height={1000} width={800}>
        <Layer>
          <Star x="150" y="150"
                numPoints="5"
                innerRadius="20"
                outerRadius="50"
                fill="red"
                stroke="black" />
          <Circle x="300" y="100"
                  radius="50"
                  stroke="red" />
        </Layer>
    </Stage>
    )
  }
}

export default CC;