import React, {Component} from 'react';
import ReactKonva from './ReactKonva';
import Intron from '../containers/intron';
import Polarons from '../components/Polarons';
import Plat from '../components/Plat';
import DD from '../components/DD';
import Hexy from '../components/Hexy';


let {Stage, Layer, Rect, Star, Circle,RegularPolygon,Line} = ReactKonva;

class IntronDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        divBackground : 'green',
        backy : 'https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg',
        refresh: true
    };
    this.polaronImage = "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg";
    this.renderCount = 0;
    this.imagy = "https://res.cloudinary.com/moondram832001/image/upload/v1459251557/sea-241665_1280_kde4ht.jpg";
    this.clickCount = 0;
    this.refreshIntronCount = 0;

    this.intronCropperObject = {};
    this.domIconProps = {};
   // this.handleClick = 

  }

  static defaultProps = {
      resetBoxButtonPath: "M1850 10010 l0 -6290 8160 0 8160 0 0 6290 0 6290 -8160 0 -8160 0 0 -6290z m15428 -2 l-3 -5603 -7265 0 -7265 0 -3 5603 -2 5602 7270 0 7270 0 -2 -5602z",
      resetHexButtonPath : "M5820 17314 l-4045 -2336 5 -4676 5 -4676 4040 -2333 4040 -2333 5 0 5 0 4040 2333 4040 2332 0 4679 0 4679 -4040 2333 -4040 2333 -5 0 -5 1 -4045 -2336z m7770 -571 l3705 -2140 0 -4298 0 -4298 -3713 -2144 -3713 -2144 -3719 2148 -3720 2147 0 4288 0 4288 27 17 27 18 3690 2132 3691 2132 10 -4 10 -3 3705 -2139z",
      //refreshPath: 'M4751 6804 l-94 -13 -5 -5 -5 -5 23 -117 23 -116 46 6 46 6 172 6 173 7 97 -13 98 -12 95 -25 95 -25 100 -41 100 -41 85 -49 85 -49 70 -51 70 -51 83 -81 84 -80 67 -85 67 -85 50 -85 50 -85 42 -97 43 -97 29 -103 29 -103 15 -113 16 -113 0 -103 0 -103 -15 -104 -14 -105 -26 -96 -25 -96 -39 -94 -38 -94 -56 -97 -56 -97 -59 -77 -60 -78 -88 -85 -89 -86 -65 -50 -65 -51 -85 -50 -85 -49 -110 -46 -110 -45 -100 -26 -100 -26 -108 -16 -108 -15 -82 0 -83 0 -114 15 -113 15 -100 26 -101 27 -94 38 -94 39 -82 46 -81 46 -75 56 -75 56 -78 70 -79 71 -70 89 -70 88 -54 89 -54 89 -41 97 -42 98 -32 115 -33 115 -12 92 -13 92 6 178 6 178 16 75 17 75 30 95 30 95 36 78 35 77 11 0 11 0 75 -44 75 -44 4 4 4 3 42 403 41 403 -2 4 -3 3 -328 -237 -328 -237 -3 -7 -2 -6 85 -50 85 -49 10 -6 10 -6 -43 -95 -44 -94 -32 -96 -32 -96 -25 -114 -25 -114 -6 -186 -6 -186 12 -99 13 -99 34 -135 34 -135 36 -90 35 -90 51 -95 51 -95 63 -90 62 -90 69 -78 68 -77 77 -69 77 -69 98 -70 98 -69 75 -41 75 -40 92 -40 92 -40 103 -31 103 -30 120 -22 120 -21 175 -1 175 -1 80 12 80 13 146 39 147 40 118 53 119 54 94 57 93 57 72 56 71 56 98 96 98 96 78 105 79 105 55 100 56 100 42 100 41 100 29 105 29 105 20 139 20 140 0 107 0 108 -20 136 -20 137 -34 121 -35 122 -49 111 -49 111 -62 103 -62 103 -61 76 -61 76 -81 83 -81 84 -100 76 -99 76 -110 64 -110 64 -121 48 -120 47 -100 26 -100 26 -109 16 -109 15 -156 -1 -156 -1 -94 -14z'
      refreshPath: "M9527 13615 l-228 -33 -6 -6 -6 -6 48 -232 48 -233 8 -9 7 -8 225 31 224 31 184 0 184 0 220 -30 220 -29 190 -51 190 -50 185 -76 185 -75 180 -102 180 -101 160 -119 160 -119 153 -152 154 -151 124 -157 125 -158 105 -176 105 -177 85 -200 86 -200 55 -196 55 -196 29 -204 29 -204 0 -246 1 -246 -26 -190 -25 -190 -54 -200 -54 -200 -76 -185 -77 -185 -96 -170 -96 -170 -121 -160 -120 -160 -145 -152 -146 -152 -160 -126 -160 -126 -180 -107 -180 -108 -205 -87 -205 -87 -200 -55 -200 -54 -219 -31 -219 -30 -201 0 -201 0 -200 25 -200 26 -210 56 -210 55 -185 76 -185 76 -175 100 -175 100 -175 132 -175 132 -151 154 -151 153 -110 140 -110 140 -106 178 -107 178 -84 197 -84 197 -55 201 -56 201 -20 114 -20 114 -12 110 -13 110 1 210 0 210 12 100 12 100 20 119 20 119 34 134 34 133 39 113 39 112 43 100 42 100 30 60 30 60 4 4 3 3 165 -96 166 -96 10 0 10 0 0 23 0 22 84 805 84 805 -2 2 -2 2 -664 -480 -665 -481 -12 -11 -12 -12 191 -109 190 -110 5 -12 4 -12 -39 -79 -40 -79 -52 -124 -52 -125 -49 -145 -48 -145 -30 -120 -30 -121 -25 -144 -25 -145 -13 -95 -12 -95 0 -295 0 -295 12 -95 13 -95 21 -125 20 -125 59 -220 59 -220 76 -190 76 -190 103 -192 104 -191 122 -174 123 -173 128 -145 129 -145 152 -138 152 -138 175 -127 175 -126 180 -100 180 -101 195 -82 195 -82 205 -60 205 -59 210 -35 210 -35 228 -12 228 -12 107 6 107 7 100 10 100 10 123 20 124 20 250 70 250 69 219 94 220 95 207 122 207 122 191 151 190 151 170 175 171 175 136 182 136 181 118 209 118 208 89 215 89 215 59 220 59 220 35 255 34 255 0 225 0 225 -36 260 -36 260 -65 235 -65 235 -96 225 -96 225 -125 210 -124 210 -152 190 -152 190 -169 166 -169 165 -190 141 -190 141 -200 113 -199 113 -216 89 -215 88 -220 60 -220 60 -255 35 -255 34 -250 -1 -250 -1 -228 -33z"

};

  componentWillMount() {
      this.domIconProps = {
        fontSize: '50px',
        width: '50px',
        position:'absolute',
        top: '0px',
        left: '0px',
        transform: 'translate(' + '120' + 'px,' + '20' + 'px) scale(1,1)',
        transformOrigin: "50% 50%",
        //left: 300 - 25 + 'px',
        //top: 200 - 25 + 'px',
        zIndex: -3,
        textAlign: 'center',
        opacity: 0
    };
  }
  
  componentDidMount() {
     console.log("demo was mounted");
  }

  componentDidUpdate() {
     console.log("demo was updated");
   //  this.refreshIntronImage();
  }

  componentWillReceiveProps(newProps) {
 
  }

  componentWillUnmount() {

    

 
  }
  
  handleClick() {
         console.log("clicked");
          this.setState({
 //         divBackground :  'url('+ this.polaronImage +')'  ,
 //         backy : ,
           refresh: true,
           refreshImage: true
          },function(){
            console.log("after effects", this.clickCount);
              if(!this.clickCount){
                this.setState({
                  refresh: true,
                  refreshImage: true
                });
              //  this.forceUpdate();
              }
              this.clickCount++;
          });
  }

  getCropperObject(cropperObject){
     this.cropperObject = cropperObject;
  //   console.log("image refresher",this.cropperObject.getCroppedCanvas());
  }

  refreshIntronImage(){
   //  console.log("image refresher",this.cropperObject.getCroppedCanvas());
   //   this.cropperObject.crop();
      //this.cropper.crop();
      this.setState({
 //         divBackground :  'url('+ this.polaronImage +')'  ,
 //         backy : ,
           refresh: false,
           preview: this.cropperObject.getCroppedCanvas(),
           refreshImage: false
          },function(){
                if(!this.refreshIntronCount){
                    this.setState({
                      refresh: false,
                      refreshImage: false,
                      preview: this.cropperObject.getCroppedCanvas()
                  });  
                }
                 this.refreshIntronCount++;
          });
  }

  handleClickIt() {
         console.log("clicked");
  }

  getPolaronImage(imageURL){
   //   this.polaronImage = imageURL;
      console.log("i was run");
      this.imagy = imageURL;
      this.setState({
   //       divBackground :  'url('+ this.polaronImage +')'  ,
          backy : imageURL,
          refresh: false,
          refreshImage: true
      });
  }

  render() {
      console.log(this.state , this.renderCount);
     
      let divStyle = {
           position: 'absolute',
           top: '600px',
           left: '0px',
           background: this.state.divBackground,
           width:'1300px',
           height: '1100px'
      };
   //   let platState = this.state.refresh;
    //let sampletag = this.renderCount === 0 ? <div>hello</div> : <Intron src={this.state.backy}></Intron>;
    let RenderComponent =  
              <div>      
               <div style={{ position: 'relative' , top: '0px',height: '100px', marginLeft: '0px' , marginTop: '0px' }}>
            </div>     
              <div style={{ position: 'absolute' , top: '0px' , display :'none'}}>
                <Polarons refresh={this.state.refresh} passToParent={this.getPolaronImage.bind(this)} ></Polarons>
              </div>
              <div style={{ position: 'absolute', top: '-5' + 'px' , left:  'calc(50% - 305px)' , zIndex: '-5' }}>
                <Plat refresh={!this.state.refresh} width={610} height={510} >
                  <Layer ref="fed">
                  <Line 
                  fill={'#fff'}
                  x={0}
                  y={0}
                  points={[5,55,55,5,555,5,605,55,605,455,555,505,55,505,5,455]}
                  closed={true}
                  shadowColor={'#999'}
                  shadowBlur={5} 
                  isListening={false}
                  ></Line>
                  </Layer>
                </Plat>   
            </div> 
              <div> 
              <div style={{ position: 'absolute', top: '400' + 'px' , left:  'calc(50% - 300px)' }} >
                <Plat refresh={!this.state.refresh} width={300} height={100} >
                  <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
                     transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
                     MouseOver={this.handleMouseOver}
                     MouseOut={this.handleMouseOut}
                     onClick={this.handleClick.bind(this)}
                     points={[0,0,300,0,300,100,50,100,0,50]}
                     activeColor="#999"
                     level="-3"
                     iconOpacity={1}
                     iconStyle={this.domIconProps}
                     pathDataArray={[this.props.resetBoxButtonPath,this.props.refreshPath]}
                     />
                </Plat>   
            </div>
            <div style={{ position: 'absolute', top: '400' + 'px' , left:  '50%' }} >
                <Plat refresh={!this.state.refresh} width={300} height={100} >
                  <DD xx={0} yy={0}  radius={50} rotation="0" offsetX="0" offsetY="0" 
                     transformOriginX="0" transformOriginY="0" shadow="0" fill="#ff0000" rot="10"
                     MouseOver={this.handleMouseOver}
                     MouseOut={this.handleMouseOut}
                     onClick={this.refreshIntronImage.bind(this)}
                     points={[0,0,300,0,300,50,250,100,0,100]}
                     activeColor="#999"
                     level="-3"
                     iconOpacity={1}
                     iconStyle={this.domIconProps}
                     pathDataArray={[this.props.resetHexButtonPath,this.props.refreshPath]}
                     /> 
                </Plat>  
              </div>  
              
            
            <div style={{ position: 'relative' , top: '0px',margin: '0px' }}>
                <Intron refresh={!this.state.refresh } refreshImage={this.state.refreshImage} src={this.state.backy}  
                preview={this.state.preview} passToParent={this.getCropperObject.bind(this)}></Intron>
            </div>
            </div>
            </div>
            ;

   // this.renderCount++;
    return ( 
        <div>
            {RenderComponent}
        </div>
    );
  }
}

export default IntronDemo;