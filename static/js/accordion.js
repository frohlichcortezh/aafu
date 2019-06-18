let acc = Array.from(document.getElementsByClassName("accordion"));
let allPanels = Array.from(document.getElementsByClassName("panel"));

[...acc].forEach(function(elem) {
    setActivePanelHeight(elem);
});

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var s = this.classList.contains("active");
    [...acc].forEach(elem => elem.classList.toggle("active", false));
    [...allPanels].forEach(function(elem) {
      elem.style.maxHeight = null;
    });
    this.classList.toggle("active", !s);
      setActivePanelHeight(this);
  });
};

function setActivePanelHeight(elem) {
  if (elem.classList.contains("active")) { 
    elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
  }
};