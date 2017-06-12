(function(exports){

  Transaction = function(type){
    this._type = type;
  }

  Transaction.prototype.getType = function(){
    return this._type;
  }
  
})(this);
