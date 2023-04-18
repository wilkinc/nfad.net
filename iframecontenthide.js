      // masthead, colophon
      if ( window.location !== window.parent.location ) {
            // The page is in an iframe, hide specified element
            document.getElementById("masthead").style.cssText += "display: none;";
            document.getElementById("colophon").style.cssText += "display: none;";    
      }
