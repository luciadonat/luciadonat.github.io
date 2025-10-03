document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector('.cursor');
  const galleries = document.querySelectorAll('.gallery'); 

  // -------------------------
  // 1️⃣ Duplicar thumbs dentro de cada fila .gallery
  galleries.forEach(gallery => {
    gallery.innerHTML += gallery.innerHTML; 
  });

  // -------------------------
  // 2️⃣ Cursor sigue al ratón centrado
  document.addEventListener('mousemove', e => {
    if (!cursor) return;
    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;
    cursor.style.left = (e.clientX - cursorWidth / 2) + 'px';
    cursor.style.top = (e.clientY - cursorHeight / 2) + 'px';
  });

  // -------------------------
  // 3️⃣ Hover sobre thumbnails
  galleries.forEach(gallery => {
    const thumbs = gallery.querySelectorAll('.thumb');

    thumbs.forEach(thumb => {
      thumb.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        thumb.classList.add('hovered');
        thumb.style.zIndex = 10;             
        gallery.style.animationPlayState = 'paused'; 
      });

      thumb.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        thumb.classList.remove('hovered');
        thumb.style.zIndex = 1;             
        gallery.style.animationPlayState = 'running';
      });
    });
  });
});
