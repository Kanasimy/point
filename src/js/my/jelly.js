(function () {
    var current,
        options =[],
        init=true;

    var baseOptions ={
        svg: 'images/svg/jelly.svg',
        pointsNumber: 15,
        maxDistance: 70,
        intensity:.85,
        mouseIncidence:50,
        x: 40,
        y: 10,
        debug: 0//,
        //centroid: '.centroid-text'
    };

    var optionsItem0 =  extend({}, baseOptions, {paths: '#animated-path-0',color: '#00c2e1'}),
        optionsItem1 = extend({}, baseOptions, {paths: '#animated-path-1',color: 'red'}),
        optionsItem2 = extend({}, baseOptions, {paths: '#animated-path-2',color: 'green'});

    /* Initializing jelly */
    options.push(optionsItem0);
    options.push(optionsItem1);
    options.push(optionsItem2);

    var jelly = new Jelly('.jelly-canvas', options);

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
    function rand(min, max) {
        var result = [],
        rand = Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
        if(current==undefined){ current = Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));}
        while (rand==current) {
            rand = Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
        }

        result[0] = current;
        result[1] = rand;
        current = result[1];
        return result;
    }
    // function morph(init) {
    //     var i=rand(0,2);
    //
    //     if(init){
    //         init=false;
    //         jelly.show({i: i[0], maxDelay:0, animate: false});
    //         setTimeout(function () {
    //             console.log('ghfgh');
    //         },1000)
    //     }
    //     console.log('Индекс:');
    //     console.log(i[0]+' и '+i[1]);
    //     console.log(options);
    //
    //     jelly.morph(extend({i: i[0],maxDelay: 300,animate: true}, 'optionsItem'+i[1]));
    // }





     jelly.hide({i: 1, maxDelay:0, animate: false});
     jelly.hide({i: 2, maxDelay:0, animate: false});




   // morph();
     setInterval(function (active, current) {
        // morph()
         jelly.morph(extend({i: 0,maxDelay: 200,animate: true}, optionsItem2));
         jelly.morph(extend({i: 0,maxDelay: 200,animate: true}, optionsItem1));
         jelly.morph(extend({i: 0,maxDelay: 200,animate: true}, optionsItem0));
     },600)

})();