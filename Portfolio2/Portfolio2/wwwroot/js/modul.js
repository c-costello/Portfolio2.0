console.log("running");
$(".img-one").on("click", () => {
    $(".modal-one").addClass("is-active");
})

$(".modal-close").on("click", () => {
    $(".modal-one").removeClass("is-active");
})