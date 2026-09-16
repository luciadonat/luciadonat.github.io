document.addEventListener("DOMContentLoaded", () => {

  // -------------------------
  // 1. Cursor personalizado: bolita negra que sigue al ratón
  const cursor = document.querySelector('.cursor');

  if (cursor) {
    document.addEventListener('mousemove', e => {
      cursor.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    // Ocultarlo cuando el ratón sale de la ventana
    document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
  }

  // -------------------------
  // 2. Hover sobre las miniaturas
  // Delegación de eventos: Splide clona los slides después de montarse,
  // así que añadir listeners uno a uno dejaría los clones sin efecto.
  document.addEventListener('mouseover', e => {
    const thumb = e.target.closest('.thumb, .project-item');
    if (!thumb) return;

    if (cursor) cursor.classList.add('active');
    thumb.classList.add('hovered');
  });

  document.addEventListener('mouseout', e => {
    const thumb = e.target.closest('.thumb, .project-item');
    if (!thumb) return;

    if (cursor) cursor.classList.remove('active');
    thumb.classList.remove('hovered');
  });

  // -------------------------
  // 3. Slider del menú
  const nav = document.querySelector("header nav");
  const links = document.querySelectorAll("header nav a");

  if (nav && links.length > 0) {
    // El slider se posiciona respecto al <nav>, no al <ul>,
    // porque "Contact" y la marca están fuera de la lista.
    nav.style.position = "relative";

    
    function moveSlider(link) {
      if (!link) {
        slider.style.opacity = "0";
        return;
      }
      const navRect = nav.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();

      slider.style.opacity = "1";
      slider.style.width = `${linkRect.width}px`;
      slider.style.left = `${linkRect.left - navRect.left}px`;
    }

    // Posición inicial en el enlace actual (si lo hay)
    const current = document.querySelector("header nav a.current");
    moveSlider(current);

    links.forEach(link => {
      link.addEventListener("mouseenter", () => moveSlider(link));
      link.addEventListener("mouseleave", () => moveSlider(current));
    });

    // Recalcular si cambia el tamaño de la ventana
    window.addEventListener("resize", () => moveSlider(current));
  }

});