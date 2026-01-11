$(document).ready(function () {
  // Fade-in on scroll
  function revealOnScroll() {
    $(".fade-in").each(function () {
      var elementTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 50) {
        $(this).addClass("show");
      }
    });
  }
  revealOnScroll();
  $(window).on("scroll", revealOnScroll);

  // Typing effect
  let text = "Γεια σας, είμαι η Κλέιντα Μούτσα";
  let i = 0;
  function typing() {
    if (i < text.length) {
      $(".typing-text").append(text.charAt(i));
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();

  // Modal logic
  $(".open-modal").on("click", function () {
    let file = $(this).data("file");
    $("#pdfFrame").attr("src", file);
    $("#pdfModal").fadeIn();
  });

  $(".close").on("click", function () {
    $("#pdfModal").fadeOut();
    $("#pdfFrame").attr("src", ""); // καθαρίζει το PDF όταν κλείνει
  });

  // Κλείσιμο modal με κλικ έξω από το box
  $(window).on("click", function (e) {
    if ($(e.target).is("#pdfModal")) {
      $("#pdfModal").fadeOut();
      $("#pdfFrame").attr("src", "");
    }
  });
});
