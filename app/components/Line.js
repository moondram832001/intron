import React, { Component } from 'react'


class Line extends Component {

constructor(props) {
  super(props);
  this.newLine = this.newLine.bind(this);
}


newLine(start, end) {
    this.x0 = start.x;
    this.x1 = end.x;
    this.y0 = start.y;
    this.y1 = end.y;
    this.m = (this.y1 - this.y0) / (this.x1 - this.x0);

    this.getX = function (y) {
        if (!this.isValidY(y))
            throw new RangeError();

        return 1 / this.m * (y - this.y0) + this.x0;
    }

    this.isValidY = function (y) {
        if (y >= this.y0 && y < this.y1) {
            return true;
        }
        if (y >= this.y1 && y < this.y0) {
            return true;
        }

        return false;
    }
    console.log('hi there');
}


static propTypes = {
   opacity : React.PropTypes.string
};

static defaultProps = {
   hArray : [],
   opacity: '1'
};
   
render() {
  const { opacity,shadow,color } = this.props;
 

    return (
      <div >
         hello world!!
      </div>
    )
  }
}

export default Line