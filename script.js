const btn = document.querySelector('#clicky');
const heading = document.querySelector('h1');
btn.addEventListener('click', function(){
  heading.innerText += "clicked!";
});