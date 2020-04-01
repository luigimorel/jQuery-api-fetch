$(document).ready(function() {
  function getNewQuote() {
    var quote, author;

    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",

      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.author;

        $("#quote").text(quote);

        if (author) {
          $("#author").text("-" + author);
        } else {
          $("#author").text("- Unknown");
        }
      }
    });
  }
});
