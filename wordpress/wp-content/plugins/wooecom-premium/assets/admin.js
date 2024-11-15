$ = jQuery;

$(document).ready(function () {
  $(".wooecom_tab_title > li").click(function () {
    const title = $(this).data("title");
    console.log(title);
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(`.wooecom_tab_content > li[data-content="${title}"]`).addClass("active");
    $(`.wooecom_tab_content > li[data-content="${title}"]`)
      .siblings()
      .removeClass("active");
  });
  $('.wooecom_tab_title > li[data-title="title"]').click();

  document.querySelectorAll('.wooecom_form_group').forEach(item => {
    $(item).find('input[type="text"]').on('input', function(){
      $(item).find('input[type="color"]').val($(this).val()).change() ;
    })
  })

});
