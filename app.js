const div = document.getElementsByTagName("iframe");
const list = Array.prototype.slice.call(div);
list.forEach(function(a){a.parentNode.removeChild(a);});
