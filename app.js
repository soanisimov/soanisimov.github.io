const carouselElements = document.querySelectorAll(".splide");

  carouselElements.forEach((carouselElement) => {
    const splide = new Splide(carouselElement, {
      type: "loop",
      drag: true,
      autoWidth: true,
      centeredSlides: true,
      gap: 30,
      pagination: false,
      arrows: false,
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
      },
    });
    splide.mount(window.splide.Extensions);
  });
