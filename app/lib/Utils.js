export function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
}

export function getRadialCoords(centreX,centreY,radius,angle){
    let radianAngle = angle * Math.PI/180;
    let coordY = centreY + radius * Math.sin(radianAngle) ;
    let coordX = centreX + radius * Math.cos(radianAngle) ;
    return [coordX,coordY];
}

export function getPolyPoints(x, y, points, radius1, radius2,initAngle){
  var ff = [];
  var numberOfSides = points,
    size = radius1,
    Xcenter = x,
    Ycenter = y;
  
  //initAngle = parseFloat(initAngle); 
    var a = ((Math.PI * 2)/points);
  
  for (var i = 0; i <= numberOfSides;i += 1) {
    // ff.push(Xcenter + size * Math.cos(initAngle + i * 2 * Math.PI / numberOfSides));
    // ff.push(Ycenter + size * Math.sin(initAngle + i * 2 * Math.PI / numberOfSides));
    ff.push(Xcenter + size * Math.cos(initAngle + i * a ));
    ff.push(Ycenter + size * Math.sin(initAngle + i * a ));
}
 
  return ff;
}

export function getPolygonCanvas(sourceCanvas,bufferCanvas,sideCount,initialAngle,curveFactor,polyPointsObject) {
  var canvas = bufferCanvas;
  //canvas.id="canvasy";
  var context = canvas.getContext('2d');
  var width = sourceCanvas.width;
  var height = sourceCanvas.height;

  var sides = sideCount;
  var points = sides;
  //var radius = .4166 * width;
  //var radius =  175;
  var radius =  width * .5;
  //var radius =  this.props.radius;
  
  var a = ((Math.PI * 2)/sides);
  //console.log(width,height,radius);
    var angleDiv = points * 2;
    var initAngle =  initialAngle ? initialAngle * Math.PI/180 : 0 ;
    var offset= 0;
    
  canvas.width = width;
  canvas.height = height;
  var radiusPerc = radius * curveFactor/100;
  
  polyPointsObject.endPoints = [];
  polyPointsObject.controlPoints = [];
  
  polyPointsObject.endPoints = getPolyPoints(width / 2, height / 2, points, radius, 0,(initAngle) );
  polyPointsObject.controlPoints = getPolyPoints(width / 2, height / 2, points, radius - radiusPerc, 0, initAngle - 2 * Math.PI/angleDiv);
  
 // console.log(this.endPoints);

  context.beginPath();
  //context.moveTo(width / 2 + (radius*Math.cos(0)),height / 2 + (radius*Math.sin(0)));
  context.moveTo(polyPointsObject.endPoints[0],polyPointsObject.endPoints[1]);     
  //console.log(width / 2 + (radius*Math.cos(a*0)), height / 2 + (radius*Math.sin(a*0)));
  for (var i = 1; i <= sides; i++) {
    //width / 2 + (radius*Math.cos(a*i));
    //height / 2 + (radius*Math.sin(a*i));
    //context.lineTo(width / 2 + (radius*Math.cos(a*i )),height / 2 + (radius*Math.sin(a*i)));
    //context.lineTo (endPoints1[2 * i ] , endPoints1[2 * i + 1 ]);
    //context.lineTo (endPoints[2 * i ] , endPoints[2 * i + 1 ]);
    context.quadraticCurveTo(polyPointsObject.controlPoints[2 * i ], polyPointsObject.controlPoints[2 * i + 1 ], polyPointsObject.endPoints[2 * i ], polyPointsObject.endPoints[2 * i + 1 ]);
//    console.log(width / 2 + (radius*Math.cos(a*i)), height / 2 + (radius*Math.sin(a*i)));
  }
  
  //context.lineWidth = '17';
  context.closePath();
  
  context.strokeStyle = 'rgba(0,0,0,0)';
  context.stroke();
  context.clip();
  context.drawImage(sourceCanvas, 0, 0, width, height);
  

  //this.abc(context,300,300, count , 136, 0 , 2,0,1);
  // canvas.width = width;
  // canvas.height = height;
  // context.beginPath();
  // context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI);
  // context.strokeStyle = 'rgba(0,0,0,0)';
  // context.stroke();
  // context.clip();
  // context.drawImage(sourceCanvas, 0, 0, width, height);

  return canvas.toDataURL();
}