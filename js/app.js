function animateLogo() {
    TweenMax.fromTo("#react-logo",2,{
        css: {
            y: "-40px",
        }
    }, {
        css: {
            y: "40px",
        },
        repeat: -1,

        yoyo: true,
        ease: Power2.easeInOut,
    });
}

function animateRobot() {
    var RobotS = new TimelineMax({yoyo: true, repeat: -1});
    RobotS.to("#android-robot",1,{rotation: "-30deg"})
      .to("#android-robot",1,{rotation: "-50deg"});
}

function updateSliderControl() {
    var links = document.querySelectorAll("#slider-control a");

    for(var i=0; i < links.length; i++) {
        var link = links[i];

        var section = document.querySelector(link.getAttribute("href"));
        var sectionTop = section.offsetTop;
        var sectionBottom = section.offsetTop + section.offsetHeight - 1;

        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
             link.className = "active";
        } else {
            link.className = "";
        }
    }
}

function scrollToElement(element) {
    var topOfElement = element.offsetTop;

    TweenMax.to(window, 1, {
        scrollTo: {
           y: topOfElement,
        },

        ease: Power2.easeInOut,
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for(var i=0; i < links.length; i++) {
        var link = links[i];

        link.addEventListener("click", function(event) {
            event.preventDefault();
            var href = document.querySelector(this.getAttribute("href"));

            console.log(href);
            scrollToElement(href);
        });
    }
}
window.onscroll = function() {
    updateSliderControl();
}

window.onload = function() {
    animateLogo();
    animateRobot();
    updateSliderControl();
    addSmoothScrolling();
}
