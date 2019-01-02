window.addEventListener('load', evt => {
const iconAnchors = Array.from(document.getElementsByClassName('icon-anchor'));
  iconAnchors.forEach(icon => {
    icon.style.visibility = 'visible';
    icon.classList.add('icon-anchor-anim');
  })
})
