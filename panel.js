$(function() {                                                                                //---HERE---
const box = document.querySelectorAll('.box');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    box.forEach(box => box.addEventListener('click', toggleOpen));
    box.forEach(box => box.addEventListener('transitionend', toggleActive));
 
 });	
