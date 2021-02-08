const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

const navAnimation = (dir1, dir2) => {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`);
  });
};

const toggleNav = () => {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');

  if (overlay.classList.contains('overlay-active')) {
    // tengo que agregar esta primera clase por defecto porque no puede reemplazar algo que no esta
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // animate in - nav items
    navAnimation('out', 'in');
  } else {
    // remove: primero el que saco, despues el que agrego
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // animate in - nav items
    navAnimation('in', 'out');
  }
};

// event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => nav.addEventListener('click', toggleNav));
