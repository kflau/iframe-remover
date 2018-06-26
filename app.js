var div = document.getElementsByTagName("iframe");
var list = Array.prototype.slice.call(div);
list.forEach(function(a){a.parentNode.removeChild(a);});
