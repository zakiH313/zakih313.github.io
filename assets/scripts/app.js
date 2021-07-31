const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "Mathematics",
        weight: 1,
      },
      {
        text: "CSS",
        weight: 1,
      },
      {
        text: "JavaScript",
        weight: 1,
      },
      {
        text: "HTML",
        weight: 1,
      },
      {
        text: "Python",
        weight: 1,
      },
      {
        text: "SQL",
        weight: 1,
      },
      {
        text: "Machine Learning",
        weight: 1,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 2700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am an InfoSec Team Lead.",
        "teach programming and Maths.",
        "am a programming ninja.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "#00FFEB",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
