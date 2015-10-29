// FUNCTION TO MAKE THE ALERT
var alertCreate = function(){
  var notice = document.createElement('div');
  notice.setAttribute('id', 'alert601');
  notice.style.padding = "20px 20px 20px 20px";
  notice.style.backgroundColor = '#EC4411';
  notice.style.textAlign = "center";
  notice.style.fontFamily = "Arial, sans-serif";

  var message = document.createElement('h3');
  message.style.margin = "5px 15px 5px 15px";
  message.style.color = '#171827';
  message.innerHTML = 'No big deal, but you are using an outdated browser. Please update to enjoy a better web experience.';
  notice.appendChild(message);

  var x = document.createElement('span');
  x.innerHTML = 'X';
  x.style.position = "absolute";
  x.style.right = "10px";
  x.style.top = "10px";
  x.style.padding = "5px";
  x.style.zIndex = "2000";
  x.style.cursor = "pointer";
  x.style.fontSize = "22px";
  notice.appendChild(x);

  x.addEventListener("click", function(){
    notice.parentNode.removeChild(notice);
  });

  var body = document.body;
  parentEl = body.parentNode;
  parentEl.insertBefore(notice, body);
};

// FUNCTION ALERT FOR USERS USING OlDER BROWSERS
  var updateBrowser = function(){
    var sUsrAg = navigator.userAgent;
     if (sUsrAg.indexOf("Firefox/41.0") > -1) { return true; }
     else if (sUsrAg.indexOf("Chrome/46.0") > -1){ return true; }
     else if (sUsrAg.indexOf("Version/9.0 Safari") > -1){ return true; }
     else if (sUsrAg.indexOf("OPR/32.0") > -1){ return true; }
     else if (sUsrAg.indexOf("rv:11.0") > -1){ return true; }
     else{ alertCreate(); return false; }
  };
// FUNCTION TO DISPLAY THE ALERT
  var displayAlert = function(){
    var is_mobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/ig) || false;
      if (is_mobile === false){ updateBrowser(); }
  };

  document.addEventListener("DOMContentLoaded", function(event) {
    // CALL ALERT ON DOM
    displayAlert();
  });
