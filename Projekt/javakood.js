var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}

showPanel(0, '#000000');

// ANCHOR SCROLL
document.addEventListener("DOMContentLoaded", function() {
  var supportScrollIntoView = 'scrollBehavior' in document.documentElement.style;
  var tabContent = document.getElementById("tabContent");
  var tabScroll = document.getElementById("tabScroll");

  tabScroll.onclick = function () {
    if (supportScrollIntoView) {
      event.preventDefault();
      tabContent.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };
});
