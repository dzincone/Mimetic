module.exports = function (input) {
  var o = {};
  input = input.replace("?","");
  var s = input.split("&");
  for(var i = 0; i < s.length; i++) {
      o[s[i].split("=")[0]] = s[i].split("=")[1]
    }
  return(o);
  }
  // write your fancy code here, return the result
