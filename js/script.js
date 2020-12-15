const faqHeader = document.querySelectorAll('.card-header');
for (let i = 0; i < faqHeader.length; i++) {
    faqHeader[i].addEventListener('click', function() {
        const rotateIcon = this.querySelector('.rotate-icon');
        if(this.classList.contains('collapsed') != true) {
            console.log('Hello');
            rotateIcon.classList.add('rotate-icon-active');
        } else {
            rotateIcon.classList.remove('rotate-icon-active');
            console.log('Hi');
        }
    });
}

let button = document.querySelectorAll(".primary-button");
let item = document.querySelectorAll(".primary-button .round");

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener("mouseenter", function(event) {
      this.classList += " animate";

      let buttonX = event.offsetX;
      let buttonY = event.offsetY;

      if (buttonY < 24) {
        item[i].style.top = 0 + "px";
      } else if (buttonY > 30) {
        item[i].style.top = 48 + "px";
      }

      item[i].style.left = buttonX + "px";
      item[i].style.width = "1px";
      item[i].style.height = "1px";
    });

    button[i].addEventListener("mouseleave", function() {
      this.classList.remove("animate");

      let buttonX = event.offsetX;
      let buttonY = event.offsetY;

      if (buttonY < 24) {
        item[i].style.top = 0 + "px";
      } else if (buttonY > 30) {
        item[i].style.top = 48 + "px";
      }
      item[i].style.left = buttonX + "px";
    });
}