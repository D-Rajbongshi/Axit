 let openNav = document.querySelector('.open-nav');
 let closeNav = document.querySelector('.close-nav');
 let navBar = document.querySelector('#navBar');


 openNav.addEventListener('click', function(){
     navBar.style.visibility = 'visible';
     navBar.style.opacity = '1';
     openNav.style.display = 'none';
     closeNav.style.display = 'block';
 })
 closeNav.addEventListener('click', function(){
     navBar.style.visibility = 'hidden';
     navBar.style.opacity = '0';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
 })