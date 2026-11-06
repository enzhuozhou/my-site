// The useless machine switches itself OFF shortly after a visitor switches it ON.
const toggle = document.getElementById('machine-switch');
const box = document.getElementById('machine-box');
const text = document.getElementById('machine-message');
const counter = document.getElementById('switch-count');
const reset = document.getElementById('reset-count');
let total = 0;
let busy = false;
if(toggle && box && text && counter && reset){
  toggle.addEventListener('click',()=>{
    if(busy) return;
    busy = true;
    total++;
    counter.textContent = String(total);
    toggle.setAttribute('aria-checked','true');
    toggle.setAttribute('aria-label','Machine switch on');
    text.textContent = 'You turned me on. Why?';
    setTimeout(()=>{
      box.classList.add('activated');
      text.textContent = 'Nope. Turning myself off...';
    },500);
    setTimeout(()=>{
      toggle.setAttribute('aria-checked','false');
      toggle.setAttribute('aria-label','Machine switch off');
      text.textContent = ['Mission accomplished: nothing.','Back to doing absolutely nothing.','Nice try!','I prefer being off.'][total % 4];
      box.classList.remove('activated');
      busy = false;
    },1550);
  });
  reset.addEventListener('click',()=>{
    if(busy) return;
    total=0;
    counter.textContent='0';
    text.textContent='Ready to do nothing.';
  });
}
