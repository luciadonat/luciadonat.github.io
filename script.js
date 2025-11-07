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

  // -------------------------
  // 4️⃣ Slider del menú
  const nav = document.querySelector("header nav ul");
  const links = document.querySelectorAll("header nav a");

  if(nav && links.length > 0) {
    // Crear slider
    const slider = document.createElement("div");
    slider.style.position = "absolute";
    slider.style.bottom = "0";
    slider.style.height = "2px";
    slider.style.backgroundColor = "#e67e22";
    slider.style.transition = "all 0.3s ease";
    slider.style.zIndex = "5";
    nav.appendChild(slider);

    // Función para mover slider
    function moveSlider(link) {
      slider.style.width = `${link.offsetWidth}px`;
      slider.style.left = `${link.offsetLeft}px`;
    }

    // Posición inicial en el enlace actual
    const current = document.querySelector("header nav a.current");
    if(current) moveSlider(current);

    // Mover slider al pasar el mouse
    links.forEach(link => {
      link.addEventListener("mouseenter", () => moveSlider(link));
      link.addEventListener("mouseleave", () => moveSlider(current));
    });
  }

});
