let avisSection = document.querySelector('.avis-section');
console.log(avisSection);

$(avisSection).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [{
        breakpoint: 1200,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,}}]

});
