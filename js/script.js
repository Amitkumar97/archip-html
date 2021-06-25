// Password toggle function
function togglePsw(type, iconClass) {
  var container = document.querySelector('.archip-psw');
  var input = container.querySelector(".archip-input");
  var pswToggleIcon = container.querySelector('.psw-visibility');
  
  input.type = type;
  pswToggleIcon.className = 'psw-visibility fas ' + iconClass;
}

// function preventClick (event) {
//     event.preventDefault();
//     event.stopImmediatePropagation();
// }

// function flagged () {
//     this.isScrolled = true;
// }

var pswShowBtn = document.querySelector(".psw-visibility");
var mouseDownCheck = false;
if(pswShowBtn){
  pswShowBtn.addEventListener('pointerdown', function(e) {
    // if (this.isScrolled) {
    //     e.target.addEventListener('click', preventClick);
    // } else {
    //     e.target.removeEventListener('click', preventClick);
    // }
    // this.isScrolled = false;
    // element.removeEventListener('mousemove', flagged);
    //pswToggle.removeEventListener('mousemove', flagged);
    //pswToggle.data('clicked', true);
    togglePsw('text', 'fa-eye');
    mouseDownCheck = true;
  });
  pswShowBtn.addEventListener('pointerup', function(e) {
    // if (this.isScrolled) {
    //     e.target.addEventListener('click', preventClick);
    // } else {
    //     e.target.removeEventListener('click', preventClick);
    // }
    // this.isScrolled = false;
    // element.removeEventListener('mousemove', flagged);
    //pswToggle.removeEventListener('mousemove', flagged);
    //pswToggle.data('clicked', false);
    togglePsw('password', 'fa-eye-slash');
    mouseDownCheck = false;
  });



// if (pswToggle.is('.ui-draggable-dragging')) {
//     alert('w');
// }
// pswToggle.addEventListener('mouselenter', function() {
//   if (pswToggle.data('clicked') == true) {
//     togglePsw('text', 'fa-eye');
//   }
// });
// pswToggle.addEventListener('mouseleave', function() {
//   togglePsw('password', 'fa-eye-slash');
// });
// pswToggle.ondragstart = function () { return false; };

pswShowBtn.addEventListener('mouseleave', e => {
  if (mouseDownCheck == true) {
    togglePsw('password', 'fa-eye-slash');
  }
});
}


/**--START-- Ripple effect on button */
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
      ripple.remove();
  }
  button.appendChild(circle);
}
const buttons = document.getElementsByClassName("ripple-btn");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
/**--END-- Ripple effect on button */


