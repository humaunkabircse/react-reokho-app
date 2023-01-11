function addSwitcher() { var demoPanel = '

'; if($("#dzSwitcher").length == 0) { jQuery('body').append(demoPanel); //const ps = new PerfectScrollbar('.sidebar-right-inner'); //console.log(ps.reach.x); //ps.isRtl = false; $('.sidebar-right-trigger').on('click', function() {
$('.sidebar-right').toggleClass('show'); }); $('.sidebar-close-trigger,.bg-overlay').on('click', function() { $('.sidebar-right').removeClass('show'); }); } } (function($) { "use strict" addSwitcher(); })(jQuery);
