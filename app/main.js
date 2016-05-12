import ReactDOM from 'react-dom'
import React from 'react'
import Intron from './containers/intron'
import BB from './components/BB'

import ReactKonva from './components/ReactKonva'


let {Stage, Layer, Rect, Star, Circle,RegularPolygon,Path} = ReactKonva;


ReactDOM.render(
   <Intron />
,
  document.getElementById('root')
)
