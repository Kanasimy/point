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