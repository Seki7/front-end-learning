function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var text = whichpic.getAttribute("title");
  var placeholder = document.getElementById("placeholder");
  var description = document.getElementById("description");
  placeholder.setAttribute("src", source);
  description.firstChild.nodeValue = text;
}

function countBodyChildren() { 
  var body_element = document.getElementsByTagName("body")[0];
  var childArray = body_element.childNodes;
  alert(childArray.length);
  //alert(childArray[1].firstChild.nodeValue);
}

//window.onload = countBodyChildren;
