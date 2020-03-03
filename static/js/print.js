window.addEventListener('beforeprint', (event) => {
    [...acc].forEach(function(elem) {
        elem.classList.toggle("active", true);
        elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
    });    
  });