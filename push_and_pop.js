Array.prototype.myPush = function(){
    this.splice.call(this, this.length, 0, ...arguments);
    return this.length;
}

Array.prototype.myPop = function() {
    return this.splice(this.length-1, 1)[0];
}