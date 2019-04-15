/* global $ */


// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$(document).ready(function () {
  console.log("boop");
  // $('#btnHide').click(function () {
    //   $('td:nth-child(2)').hide();
    // if your table has header(th), use this
    //$('td:nth-child(2),th:nth-child(2)').hide();
    // });
  });