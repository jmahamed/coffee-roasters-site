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
  const summary = document.getElementById('summary');
  const boxes = document.querySelectorAll('.box');
  
  let brewMethod = '';
  let beanType = '';
  let grindType = '';
  let deliveryFrequency = '';
  let quantity = '';
  
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      const heading = box.querySelector('h4').textContent;
      const parentId = box.parentElement.parentElement.id;
      if (parentId === 'accordion-1') {
        beanType = heading;
      } else if (parentId === 'accordion-2') {
        grindType = heading;
      } else if (parentId === 'accordion-3') {
        quantity = heading;
      } else if (parentId === 'accordion-4'){
        brewMethod = heading;
      } else if (parentId === 'accordion-5') {
        deliveryFrequency = heading;
      }
    summary.innerHTML = `“I drink my coffee using <span>${beanType}</span>, with a <span>${grindType}</span> type of bean. <span>${quantity}</span> ground ala <span>${brewMethod}</span>, sent to me <span>${deliveryFrequency}</span>.”`;
const createPlanBtn = document.querySelector('.create-plan-btn');
      createPlanBtn.classList.remove('disabled');
      
      // Disable accordion item if 'capsule' box is selected

    });
  });
  
  
  const createPlanBtn = document.querySelector('.create-plan-btn');

  createPlanBtn.addEventListener('click', () => {
    const summaryOrder = document.querySelector('.summary-order');
    const popup = document.querySelector('.popup');
    popup.classList.add('active');
    summaryOrder.textContent = summary.textContent;
  });

  const popup = document.querySelector('.popup');
  popup.addEventListener('click', () => {
    popup.classList.remove('active');
  });