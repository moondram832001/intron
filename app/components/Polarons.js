import React, {Component} from 'react';
import ReactKonva from './ReactKonva';
import Polaron from '../components/Polaron'

let {Stage, Layer, Rect, Star, Circle,RegularPolygon} = ReactKonva;

class Polarons extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.refs.polaronRef.node.getCanvas());
    this.img = this.refs.polaronRef.node.toDataURL();
    this.refs.polaronRef.node.opacity(1) ;
    this.refs.polaronRef.node.draw();
    this.props.passToParent(this.img);
  }

  componentWillReceiveProps(newProps) {
 
  }

  componentWillUnmount() {
 
  }

  componentWillMount(){
      
  }
  
  shouldComponentUpdate(){
      return false;
  }
  
  render() {
      let ff = Array.from(new Array(3),(val,index) => index+1)
                    .map(function(i){
                        return Array.from(new Array(7),(val,index) => [i,index+1])
                    });    
      //map(function(i){return Array.from(new Array(10),(val,index)=> [i,index+1])});    
      //console.log(ff );
     
      
    return ( 
        <Stage height={800} width={1600} opacity="1">
            <Layer ref="polaronRef">
                {ff.map(function(i,index){
                    return i.map(function(j,jindex){
                       return <Polaron key={index + "_" + jindex} xPos={j[1]  * 200} yPos={j[0] * 200}/>;
                    }) 
                })}
            </Layer>
        </Stage>
    );
  }
}

export default Polarons;
