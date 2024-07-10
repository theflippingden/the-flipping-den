var scroll = function() {

  $("body").mousewheel(function(event, delta) {

     this.scrollLeft -= (delta * 300);
     this.scrollRight += (delta * 300);
   
     event.preventDefault();

  });

};
