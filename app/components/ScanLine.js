class Line {
	constructor(start,end){
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
	}
}

class ScanLine {
	constructor(options){
		this.vArray = options.vArray;
		this.lines = [];
		for (var i = 1; i < this.vArray.length; i++) {
		    this.lines.push(new Line(this.vArray[i - 1], this.vArray[i]));
		}

		this.minY = this.vArray[0].y;
		this.maxY = this.vArray[0].y;
		for (var i = 0; i < this.vArray.length; i++) {
		    var temp = this.vArray[i].y;
		    if (temp < this.minY)
		        this.minY = temp;
		    else if (temp > this.maxY)
		        this.maxY = temp;
		}

		for (var y = this.minY; y < this.maxY; y++) {
		    var meetPoint = this.getMeetPoint(y);
		    for (var i = 1; i < meetPoint.length; i += 2) {
		        // ctx.moveTo(meetPoint[i - 1], y);
		        // ctx.lineTo(meetPoint[i], y);
		        console.log(meetPoint[i],y);
		    }
		}

	}

	getMeetPoint(y) {
	    var meet = [];
	    for (var i = 0; i < this.lines.length; i++) {
	        var l = this.lines[i];
	        if (l.isValidY(y)) {
	            meet.push(l.getX(y));
	        }
	    }

	    //sort
	    for (var i = 0; i < meet.length; i++)
	        for (var j = i; j < meet.length; j++) {
	            if (meet[i]>meet[j]) {
	                var temp =meet[i];
	                meet[i]=meet[j];
	                meet[j]=temp;
	            }
	        }

	    return  meet;

	}

}



export default ScanLine
