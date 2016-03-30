import React, { Component } from 'react'
import earcut from 'earcut'

import Triangle from '../components/Triangle'


class Burfee extends Component {

constructor(props) {
  super(props);
}

static propTypes = {
   vArray : React.PropTypes.array.isRequired,
   hArray : React.PropTypes.array,
   strokeColor : React.PropTypes.string,
   strokeWidth : React.PropTypes.string,
   fillColor: React.PropTypes.string,
   width: React.PropTypes.string,
   height: React.PropTypes.string,
   opacity : React.PropTypes.string
};

static defaultProps = {
   hArray : [],
   opacity:'1'
};
   
render() {
  const { opacity,shadow,color } = this.props;
 //const { defaultValue }  = this.props;
 // const { skewX, skewY , scaleX, scaleY , rotate } = this.props;
 // const transformStyle = {
 //      transform: 'scale('+ scaleX +','+ scaleY +') skewX('+ skewX + ') skewY('+ skewY + ') rotate('+rotate+')' 
 // };
    //const vertices = [0,0, 100,0, 100,100, 0,100,  20,20, 80,20, 80,80, 20,80];

  // let sides = 6;
  // let radius = 200;
  // let cradius = 225;

  // let a = ((Math.PI * 2)/sides);
  // let arry = [];
  // let carry = [];

  // for (var i = 0; i < sides; i++) {
  //   arry.push(300 + (radius*Math.cos(a*i)));
  //   arry.push(300 + (radius*Math.sin(a*i)));
  // }

  // for (var i = 0; i < sides; i++) {
  //   carry.push(300 + (cradius*Math.cos(a*i)));
  //   carry.push(300 + (cradius*Math.sin(a*i)));
  // }

  //arry.push(200);arry.push(200);
  //console.log(arry);

    let vertices = [];
    let earres = [];    
    vertices = vertices.concat(this.props.vArray);
    
    if(this.props.hArray.length > 0)
    {
       let sides = vertices.length/2;
       vertices = vertices.concat(this.props.hArray);  
       earres = earcut(vertices,[sides]);
    }
    else {
       earres = earcut(vertices); 
    }
    

    //arry.push(300);
    //arry.push(300);
    //const vertices = arry;

    //earres = earcut(vertices,[sides]);
    //const earres = earcut(vertices);
    //console.log(earres);
    let pointery = [];
    // pointery = [{
    //     pointOne : {x : 0, y : 200},
    //     pointTwo : {x : 200, y : 200},
    //     pointThree : {x : 100, y : 0}
    // }
    // ];
    // earres.forEach((indexer,index) => {
    //     //console.log(index);
    //     const tempObject = {};
    //     //pointery
    // });

    for (let i=0; i < earres.length - 2; i=i+3 ) {
        const tempObject = {};
        tempObject['pointOne'] = {x : vertices[2 * earres[i]] , y : vertices[2 * earres[i] + 1]};
        tempObject['pointTwo'] = {x : vertices[2 * earres[i + 1]] , y : vertices[2 * earres[i + 1] + 1]};
        tempObject['pointThree'] = {x : vertices[2 * earres[i + 2]] , y : vertices[2 * earres[i + 2] + 1]};
        pointery.push(tempObject);
    }
  //  pointery.splice(1,1);

    console.log(vertices , pointery);
   // pointery.pop(); pointery.pop();
  
 //   console.log("pointery:", pointery);

  let style = {
    burfee : {}
  };



    return (
      <div style={style.burfee}>
         {pointery.map(function(obj){
            return <Triangle {...obj} opacity={ opacity } shadow={ shadow } color={ color } />;
          })}
      </div>
    )
  }
}

export default Burfee