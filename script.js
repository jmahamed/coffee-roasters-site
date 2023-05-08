const accordion = document.getElementsByClassName('accordion-item');
const box_1 = document.getElementsByClassName('boxes1');
const box_2 = document.getElementsByClassName('boxes2');
const box_3 = document.getElementsByClassName('boxes3');
const box_4 = document.getElementsByClassName('boxes4');
const box_5 = document.getElementsByClassName('boxes5');
const box = document.getElementsByClassName('box');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(event) {
      this.classList.toggle('active');
      event.stopPropagation();
    });
    
    for (let j = 0; j < box.length; j++) {
      box[j].addEventListener('click', function(event) {
        event.stopPropagation();
      });
    }
  }


for (let i = 0; i < box_1.length; i++) {
    box_1[i].addEventListener('click', function() {
      for (let j = 0; j < box_1.length; j++) {
        box_1[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }
  
  for (let i = 0; i < box_2.length; i++) {
    box_2[i].addEventListener('click', function() {
      for (let j = 0; j < box_2.length; j++) {
        box_2[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }

  for (let i = 0; i < box_3.length; i++) {
    box_3[i].addEventListener('click', function() {
      for (let j = 0; j < box_3.length; j++) {
        box_3[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }

  for (let i = 0; i < box_4.length; i++) {
    box_4[i].addEventListener('click', function() {
      for (let j = 0; j < box_4.length; j++) {
        box_4[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }

  for (let i = 0; i < box_5.length; i++) {
    box_5[i].addEventListener('click', function() {
      for (let j = 0; j < box_5.length; j++) {
        box_5[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }


  
  // const boxes = document.querySelectorAll('.box');
  // const summary = document.querySelector('#summary');
  
  // boxes.forEach((box) => {
  //   box.addEventListener('click', () => {
  //     selectBox(box);
  //     updateSummary();
  //   });
  // });
  
  // function selectBox(box) {
  //   const selected = box.querySelector('.selected');
  //   if (selected) {
  //     selected.classList.remove('selected');
  //   }
  //   box.classList.add('selected');
  // }
  
  // function getSelectedValue(box) {
  //   const selected = box.querySelector('.selected');
  //   if (selected) {
  //     return selected.previousElementSibling.textContent.trim();
  //   }
  //   return '';
  // }
  
  // function updateSummary() {
  //   let drinkType = '';
  //   let beanType = '';
  //   let quantity = '';
  //   let delivery = '';
  
  //   for (let i = 0; i < boxes.length; i++) {
  //     const box = boxes[i];
  //     const selectedValue = getSelectedValue(box);
  //     const boxId = box.getAttribute('id');
  
  //     if (boxId === 'box-1' || boxId === 'box-2' || boxId === 'box-3') {
  //       if (selectedValue) {
  //         drinkType += selectedValue + ' ';
  //       }
  //     } else if (boxId === 'box-4' || boxId === 'box-5' || boxId === 'box-6') {
  //       if (selectedValue) {
  //         beanType += selectedValue + ' ';
  //       }
  //     } else if (boxId === 'box-7' || boxId === 'box-8' || boxId === 'box-9') {
  //       if (selectedValue) {
  //         quantity += selectedValue + ' ';
  //       }
  //     } else if (boxId === 'box-10' || boxId === 'box-11' || boxId === 'box-12') {
  //       if (selectedValue) {
  //         delivery += selectedValue + ' ';
  //       }
  //     }
  //   }
  
  //   summary.textContent = `I drink my coffee using ${drinkType}, with a ${beanType}type of bean. ${quantity}, sent to me ${delivery}.`;
  // }

