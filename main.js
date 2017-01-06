// Initialize collapse button
  $(".button-collapse").sideNav({
    menuWidth: 500
  });

  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  $('.menu-header').on('click', ()=>{
    $('.button-collapse').sideNav('hide')
  });
