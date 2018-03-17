/**интенсивность от 1 до 10**/
function paralax(selector, intensive) {
    if(typeof paralaxcontainer === "undefined") return false;
    var paralax = paralaxcontainer.querySelectorAll(selector),
        fluidparalax = window.matchMedia("(min-width: 726px)"),
        x = intensive;

    function getMousePos(xRef, yRef) {
        var panelRect = paralaxcontainer.getBoundingClientRect();
        return {
            x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*paralaxcontainer.offsetWidth,
            y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * paralaxcontainer.offsetHeight
        };
    }

    document.body.addEventListener("mousemove", function(e) {
        var mousePos = getMousePos(e.clientX, e.clientY);
        var lParalax=paralax.length;
        var paralaxCenterX=[],paralaxCenterY=[];

        for(var i=0;i<lParalax;i++){
            paralaxCenterX[i] = paralax[i].offsetLeft + (paralax[i].offsetWidth / 2);
            paralaxCenterY[i] = paralax[i].offsetTop + (paralax[i].offsetHeight / 2);
            if(!paralaxCenterX[i]&&!paralaxCenterY[i]){
                paralaxCenterX[i] = paralax[i].getBoundingClientRect().x + (paralax[i].getBoundingClientRect().width / 2);
                paralaxCenterY[i] = paralax[i].getBoundingClientRect().y + (paralax[i].getBoundingClientRect().height  / 2);
            }
            console.log(paralax[i].getBoundingClientRect());
            var distX = mousePos.x - paralaxCenterX[i];
            var distY = mousePos.y - paralaxCenterY[i];
            if (fluidparalax.matches) {
                paralax[i].style.transform = "translate("+(-1*distX)*x/40+"px,"+(-1*distY)*x/40+"px)";
            }

        }
    })

}

paralax('.js-paralax',3);
paralax('.js-paralax-low',1);
