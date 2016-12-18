$(document).ready(function() {
  $("#book_show").hide();
  jQuery("time.timeago").timeago();
  $.getJSON("book.json", function(obj) {
      $.each(obj, function(key, value) {
          $("#bookstore").append(
            "<div class='book mdl-cell mdl-cell--4-col  mdl-card mdl-shadow--2dp' id='" + value.id + "' data=" + key + ">"+
            "<div class='book_name mdl-card__title mdl-card--expand' style='background-image:url("+value.cover+ ")'>"+
            "<h2 class='mdl-card__title-text'>" +value.name + "</h2></div>" +
            "<div class='author_name'>By "+ value.author.name + "</div>" +
            '<div class="mdl-card__actions">' +
            '<span class="likes"><i class="material-icons">favorite_border</i>'+ value.likes + '</span>' +
            '<div class="mdl-layout-spacer"></div>' +
            '<span class="date">' + jQuery.timeago(value.published) + '</span></div>' +
            "</div>"
          );
      });

      $("#bookstore").on('click', '.book', function(event) {
        $("#book_show").show();
        $("#bookstore").hide();
        var id = $(this)[0].getAttribute("data")
        var book = obj[id]
        var content = ""
        for (var i=0; i < book.introduction.length; i ++) {
          content +="<p>" + book.introduction[i].content + "</p>"
        }
        $("#book_show").append(
          '<div class="book_show">' +
          "<h2 class='title'>" +book.name + "</h2></div>" +
          "<div class='author_name'>By "+ book.author.name + "</div>" +
          "<div class='author_name'>By "+ book.description + "</div>" +
          "<div class='genre'>Genre: "+ book.genre.category + ", "+book.genre.name+"</div>" +
          "<div class='intro'>Introduction"+
          content +
          "</div>" +
          '</div>'
        )
      });
      $("#book_show").on('click', function(event) {
        $("#book_show").hide();
        $("#bookstore").show();
        $("#book_show").empty();
      })
  });




});
