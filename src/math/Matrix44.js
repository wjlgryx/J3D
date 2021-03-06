var m44 = function(){
	this.array = new Float32Array(16);
	this.identity();
}

m44.prototype.identity = function(){
    this.n11 = 1;
    this.n12 = 0;
    this.n13 = 0;
    this.n14 = 0;
	
    this.n21 = 0;
    this.n22 = 1;
    this.n23 = 0;
    this.n24 = 0;
	
    this.n31 = 0;
    this.n32 = 0;
    this.n33 = 1;
    this.n34 = 0;
	
    this.n41 = 0;
    this.n42 = 0;
    this.n43 = 0;
    this.n44 = 1;
}

m44.prototype.perspective = function(fov, aspect, near, far){
    var t = near * Math.tan(fov * Math.PI / 360);
	var n = far - near;

	this.n11 = near / (t * aspect);
	this.n22 = near / t;
	this.n33 = -(far + near) / n; 
	this.n34 = -(2 * far * near) / n;
	this.n43 = -1;
	this.n44 = 0;
};

m44.prototype.toArray = function(){
    this.array[0] = this.n11;
	this.array[1] = this.n21;
	this.array[2] = this.n31;
	this.array[3] = this.n41;
	
	this.array[4] = this.n12;
	this.array[5] = this.n22;
	this.array[6] = this.n32;
	this.array[7] = this.n42;
	
	this.array[8] = this.n13;
	this.array[9] = this.n23;
	this.array[10] = this.n33;
	this.array[11] = this.n43;
	
	this.array[12] = this.n14;
	this.array[13] = this.n24;
	this.array[14] = this.n34;
	this.array[15] = this.n44;
	
	return this.array;
}
