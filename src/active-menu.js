// Add active class to the current item (highlight it)

let menu = document.getElementById('myMenu');
let lis = menu.getElementsByClassName('item');
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    this.className += 'active';
  });
}
