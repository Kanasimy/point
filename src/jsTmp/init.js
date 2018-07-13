var Jelly = require('jelly.js');
(function () {
    var i=0,y=0,
        jellyOption = [];
        options = [],
        jelly = [],
        selector = '.jelly-center',
        init = true;

    if (!document.querySelectorAll(selector).length > 0) return false;

    var baseOption = [
         {
            option: {
                svg: 'images/svg/jelly-center.svg',
                pointsNumber: 15,
                maxDistance: 70,
                intensity: .83,
                mouseIncidence: 50,
                x: 40,
                y: 10,
                debug: 0
            },
            path: [
                '#animated-path-0',
                '#animated-path-1',
                '#animated-path-2'
            ],
             selector: '.jelly-center',
             color: '#00c2e1'
        },
        {
            option: {
                svg: 'images/svg/jelly-percent.svg',
                pointsNumber: 15,
                maxDistance: 70,
                intensity: .84,
                mouseIncidence: 50,
                x: 40,
                y: 10,
                debug: 0
            },
            path: [
                '#percent1',
                '#percent2',
                '#percent3'
            ],
            selector: '.jelly-percent',
            color: '#2ddfff'
        },
        {
            option: {
                svg: 'images/svg/jelly-arrow.svg',
                pointsNumber: 15,
                maxDistance: 70,
                intensity: .80,
                mouseIncidence: 50,
                x: 40,
                y: 10,
                debug: 0//,
                //fixme ошибка при включении параметра
                //centroid: '.centroid-arrow'
            },
            path: [
                '#arrow',
                '#arrow_1',
                '#arrow_2'
            ],
            selector: '.jelly-arrow',
            color: '#f6e527'
        },
        {
            option: {
                svg: 'images/svg/jelly-babl.svg',
                pointsNumber: 10,
                maxDistance: 70,
                intensity: .5,
                mouseIncidence: 50,
                x: 40,
                y: 10,
                debug: 0
            },
            path: [
                '#babl1',
                '#babl2',
                '#babl3'
            ],
            selector: '.jelly-babl',
            color: '#f5e000'
        },

        {
            option: {
                svg: 'images/svg/jelly-percent_.svg',
                pointsNumber: 10,
                maxDistance: 40,
                intensity: .5,
                mouseIncidence: 50,
                x: 40,
                y: 10,
                debug: 0
            },
            path: [
                '#percent_1',
                '#percent_2',
                '#percent_3'
            ],
            selector: '.jelly-percent_',
            color: '#fff140'
        }
    ];

    /* Initializing jelly */
    function extendSingle(target, source) {
        for (var key in source)
            target[key] = Array.isArray(source[key]) ? source[key].slice(0) : source[key];
        return target;
    }

    function extend(target, source) {
        if (!target) target = {};
        for (var i = 1; i < arguments.length; i++)
            extendSingle(target, arguments[i]);
        return target;
    }

    function jellyBorn(baseOption) {
        for(i; baseOption.length > i; i++){
            jellyOption[i]=[];
            jelly[i]=[];
            y=0;
            for(y; baseOption[i].path.length > y; y++ ){
                jellyOption[i].push(extend({}, baseOption[i].option, {paths: baseOption[i].path[y], color: baseOption[i].color}));
            }
            jelly[i] = new Jelly(baseOption[i].selector, jellyOption[i]);
        }

        for(var j=0;jelly.length> j;j++){
            var countOptions = jellyOption[j].length;
            for(var y=0;countOptions > y;y++){
                if(y){
                   jelly[j].hide({i: y, maxDelay: 0, animate: false});
                }
            }
        }

        setInterval(
            function () {
                for(var j=0;jelly.length> j;j++){
                    for(var y=0;countOptions > y;y++){
                        if(jelly[j]!==undefined){
                           jelly[j].morph(extend({i: 0, maxDelay: 200, animate: true}, jellyOption[j][countOptions-y]))
                          }
                    }
                }
            }, 600);


    }
   jellyBorn(baseOption);
    if(document.body.classList.contains('prelader')){
        setTimeout(function(){
            location.href = '/new/izbrannoe.html';
        }, 10000);
    }
})();
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