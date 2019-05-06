function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var text = whichpic.getAttribute("title");
  if (!document.getElementById("placeholder")) return false;
  if (!document.getElementById("description")) return false;
  var placeholder = document.getElementById("placeholder");
  var description = document.getElementById("description");
  placeholder.setAttribute("src", source);
  description.firstChild.nodeValue = text;
  return true;
}

function countBodyChildren() { 
  var body_element = document.getElementsByTagName("body")[0];
  var childArray = body_element.childNodes;
  alert(childArray.length);
  //alert(childArray[1].firstChild.nodeValue);
}

function prepareGallery() { 
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) { 
    links[i].onclick = function () { 
      showPic(this);
      return !showPic(this);//不写成return false的原因是，为了在html里没有placeholder的时候仍然能够去访问各个图片，而不是无法访问，为的是退化。
    }
  }
}
window.onload = prepareGallery;

//window.onload = countBodyChildren;
