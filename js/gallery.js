$("body").on('mouseenter', '#gallery .imageSmall', function() {
    const image = $(this).attr("src");
    const imageBig = $(".imageBig").attr("src");

    $(".imageBig").attr("src", function(){return image;});
    $(this).attr("src", function(){return imageBig;})
});
