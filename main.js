// Initialize collapse button
$(document).ready(function() {
  $(".button-collapse").sideNav({
    menuWidth: 350
  });

  $('select').material_select();
});
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  $('.menu-header').on('click', ()=>{
    $('.button-collapse').sideNav('hide')
  });
