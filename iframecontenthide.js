      // masthead, colophon
      if ( window.location !== window.parent.location ) {
  // The page is in an iframe, hide specified element
        //document.write("in iframe");
        //document.getElementById("mycontent").classList.add('notinframe');
      document.getElementById("mycontent").style.cssText += "display: none;";
