// ELEMENTS NEEDED FOR IE OLDER VERSIONS
document.createElement("header");
document.createElement("nav");
document.createElement("section");
document.createElement("article");
document.createElement("footer");
document.createElement("aside");
document.createElement("figure");
document.createElement("figcaption");

// FUNCTION ALERT FOR USERS USING IE 8
  var updateBrowser = function(){
    var sBrowser;
    var sUsrAg = navigator.userAgent;
     if (sUsrAg.indexOf("MSIE 8.0") > -1) {
        sBrowser = "Microsoft Internet Explorer";
        alert("You are using an outdated " + sBrowser + " version. Please update to the latest version for a better web experience.");
      }
  };
  updateBrowser();
