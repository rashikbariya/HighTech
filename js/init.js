(function($){
  $(function(){
    $('.materialboxed').materialbox();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.dropdown-trigger').dropdown();
     $('.sidebar').pushpin({
     	top:10,
     	bottom:250,
     	offset:0,
     });

  }); // end of document ready
})(jQuery); // end of jQuery name space
