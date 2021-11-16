function toggleTextDisplay() {
  var classStr = "with-text"
  var bodyEl = document.getElementsByTagName("body")[0];
  let toggleLink = document.getElementsByClassName("toggle-link")[0];
  if (bodyEl.className.includes(classStr)) {
	bodyEl.className = bodyEl.className.replace(/\s?with-text\s?/, "");
	toggleLink.innerHTML = "Display Text";
  }
  else {
	bodyEl.className = bodyEl.className.concat(` ${classStr}`);
	toggleLink.innerHTML = "Display Heatmap";
  }
}


function setListener() {
	var toggleLink = document.getElementsByClassName("toggle-link")[0];
	toggleLink.addEventListener('click', toggleTextDisplay);
}

window.addEventListener('load', setListener);
