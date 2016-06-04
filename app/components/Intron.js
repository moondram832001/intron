import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Hexor from '../components/Hexor';
import Cropper from 'cropperjs';
import 'cropperjs';
import '../styles/cropper.css';

class Intron extends Component {

  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      width: '200px'
    };

  }

  static propTypes = {
    src: React.PropTypes.string,
    imageWidth: React.PropTypes.string,
    imageHeight: React.PropTypes.string,
    preview: React.PropTypes.object
  };

  static defaultProps = {
    src: "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg",
    imageWidth: '600',
    imageHeight: '300',
    preview: null
  };


  handleMouseOut = (e) => {

  }

  handleMouseOver = (e) => {

  }

  componentDidMount() {

    var intronRef = this;

    var options = {
      aspectRatio: 1,
      guides: false,
      highlight: false,
      viewMode: 1,
      dragMode: 'none',
      minCropBoxWidth: 40,
      minCropBoxHeight: 40,
      cropBoxResizable: false,
      autoCropArea: .25,

      built: function() {
        let spinner = document.getElementById("spinnerOne");
        spinner.style.display = 'none';
      },
      crop: function() {
        intronRef.props.passToParent(intronRef.cropper);
      }
    };

    this.cropper = new Cropper(this.refs.img, options);
    this.props.passToParent(this.cropper);

  }


  shouldComponentUpdate() {
    return (this.props.refresh);
  }

  componentDidUpdate() {

    if (this.props.refreshImage) {
      this.cropper.replace(this.props.src);

    }

  }

  render() {
    return (
      <div >
        <div style={{  height: this.props.imageHeight + 'px',   width: this.props.imageWidth + 'px' , marginLeft:'auto' , marginRight: 'auto'}}>
          <img
          ref="img"
          src={this.props.src}
          alt={this.props.alt === undefined ? 'picture' : this.props.alt}
          />
            <img style={{ width: '100%' }} />
        </div>
       <Hexor src={this.props.preview} xPos={465} yPos={500} rotation={-30} curveFactor="10" />
      </div>
    )
  }
}

export default Intron