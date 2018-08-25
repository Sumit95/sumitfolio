// Animate Bars
var animateBars = function() {

    setTimeout(function start() {
  
      $('.bar').each(function() {
  
        var bar = $(this),
          percent = bar.attr('data-percent');
  
        bar.css('width', percent);
        bar.append('<span class="percent"></span>')
  
        $({
          countNum: 0
        }).animate({
          countNum: percent
        }, {
  
          duration: 3000,
          easing: 'linear',
          step: function() {
            bar.children('.percent').text(Math.floor(this.countNum + 1) + '%');
          }
  
        });
  
      });
  
    }, 500);
  
  };
  
  animateBars();