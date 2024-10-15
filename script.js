const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider =>{
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--value', value + '%');
})
