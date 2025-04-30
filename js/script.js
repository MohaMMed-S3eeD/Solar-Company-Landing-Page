document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.icon-mobile');
  const mobileMenu = document.querySelector('.container-list-mobile');

  menuIcon.addEventListener('click', function () {
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }
  });
});