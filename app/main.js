import ReactDOM from 'react-dom'
import React from 'react'
import Intron from './containers/intron'
import BB from './components/BB'
import IntronDemo from './components/IntronDemo'
import Polaron from './components/Polaron'
import Polarons from './components/Polarons'

import ReactKonva from './components/ReactKonva'


let {Stage, Layer, Rect, Star, Circle,RegularPolygon,Path} = ReactKonva;

ReactDOM.render(
    <IntronDemo></IntronDemo>
,
  document.getElementById('root')
)
