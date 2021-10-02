//Tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//Cambiando color de nav

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");

    $nav.toggleClass("scrolled", $(this).scrollTop() > 320);
  });
});
