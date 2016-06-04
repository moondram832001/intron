import ReactDOM from 'react-dom'
import React from 'react'
import IntronDemo from './containers/IntronDemo'
import KonvaReact from 'konva-react'

let {Stage, Layer, Rect, Star, Circle,RegularPolygon,Path} = KonvaReact;

ReactDOM.render(
    <IntronDemo></IntronDemo>
,
  document.getElementById('root')
)
