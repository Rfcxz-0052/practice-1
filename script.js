const images = document.querySelectorAll('.skill-image img, .site img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');

let scale = 1;

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    scale = 1;
    lightboxImg.style.transform = `scale(${scale})`;
  });
});

zoomInBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  scale += 0.2;
  if (scale > 3) scale = 3;
  lightboxImg.style.transform = `scale(${scale})`;
});

zoomOutBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  scale -= 0.2;
  if (scale < 0.5) scale = 0.5;
  lightboxImg.style.transform = `scale(${scale})`;
});

lightboxImg.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    scale += 0.1;
  } else {
    scale -= 0.1;
  }
  if (scale > 3) scale = 3;
  if (scale < 0.5) scale = 0.5;
  lightboxImg.style.transform = `scale(${scale})`;
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});