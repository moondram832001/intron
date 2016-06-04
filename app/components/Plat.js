import React, {Component} from 'react';
import ReactKonva from 'konva-react';

let {
    Stage, Layer, Rect, Star, Circle, RegularPolygon
} = ReactKonva;

class Plat extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {

    }

    componentWillUnmount() {

    }


    shouldComponentUpdate() {
        return this.props.refresh;
    }

    render() {
      let {
          width, height
      } = this.props;

      return (
        <Stage height={height} width={width}>
          {
             React.Children.map(this.props.children, function(child) {
                    return React.cloneElement(child, { 
                                            width: width,
                                            height : height
                                                })
             })
          }
        </Stage>
      );
    }
}

export default Plat;
