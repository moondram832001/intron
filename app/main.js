import ReactDOM from 'react-dom'
import React from 'react'
import Intron from './containers/intron'
import BB from './components/BB'

import IntronDemo from './components/IntronDemo'
import Polaron from './components/Polaron'
import Polarons from './components/Polarons'

import ReactKonva from './components/ReactKonva'


let {Stage, Layer, Rect, Star, Circle,RegularPolygon,Path} = ReactKonva;



//  <Stage height={1100} width={1300}>
//         <Layer>
//         {rr.map(function(i){
//             let ff = parseInt((i-1) / 4) + 1 ;
//             let gg = (i % 4) + 1;
//             return <Polaron key={i} xPos={ff  * 120} yPos={gg * 130}/>;   
//         })}
//         </Layer>    
//     </Stage>
    
ReactDOM.render(
    <IntronDemo></IntronDemo>
,
  document.getElementById('root')
)
