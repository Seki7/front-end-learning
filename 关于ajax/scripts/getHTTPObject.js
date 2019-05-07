function getHTTPObject() { 
  // 通过对象检测技术检测XMLHTTPRequest,最终返回false或者是一个新的XMLHttpRequest对象
  if (typeof XMLHttpRequest == "undefined")
    XMLHttpRequest = function () { 
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      } catch (error) {

      }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (error) {
        
      }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (error) {
        
      }
      return false;
    }
  return new XMLHttpRequest();
}