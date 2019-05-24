let acc = Array.from(document.getElementsByClassName("accordion"));
let allPanels = Array.from(document.getElementsByClassName("panel"));

[...acc].forEach(function(elem) {
  if (elem.classList.contains("active")) {
    setActivePanelHeight(elem);
  }
});

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    [...acc].forEach(elem => elem.classList.toggle("active", false));
    [...allPanels].forEach(function(elem) {
      elem.style.maxHeight = null;
    });
    this.classList.toggle("active", true);
    setActivePanelHeight(this);
  });
};

function setActivePanelHeight(elem) {
  let activePanel = elem.nextElementSibling;
  activePanel.style.maxHeight = activePanel.scrollHeight + "px";
};
