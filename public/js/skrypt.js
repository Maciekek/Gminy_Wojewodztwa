/*jshint browser: true */
$(function() {
    // poniższa tblica obiektów może przydać się do ustalania, na które
    // województwo „kliknął” użytkownik…
    var wojewodztwa = [{
        woj: 'pomorskie',
        left: 173,
        top: 1,
        width: 152,
        height: 125
    }, {
        woj: 'warmińsko-mazurskie',
        left: 327,
        top: 44,
        width: 168,
        height: 102
    }, {
        woj: 'zachodnio-pomorskie',
        left: 16,
        top: 54,
        width: 143,
        height: 124
    }, {
        woj: 'podlaskie',
        left: 501,
        top: 79,
        width: 115,
        height: 171
    }, {
        woj: 'lubuskie',
        left: 26,
        top: 193,
        width: 89,
        height: 141
    }, {
        woj: 'wielkopolskie',
        left: 123,
        top: 215,
        width: 130,
        height: 123
    }, {
        woj: 'mazowieckie',
        left: 387,
        top: 167,
        width: 106,
        height: 205
    }, {
        woj: 'kujawsko-pomorskie',
        left: 206,
        top: 147,
        width: 138,
        height: 64
    }, {
        woj: 'łódzkie',
        left: 277,
        top: 285,
        width: 104,
        height: 101
    }, {
        woj: 'dolnośląskie',
        left: 56,
        top: 345,
        width: 140,
        height: 70
    }, {
        woj: 'lubelskie',
        left: 499,
        top: 289,
        width: 121,
        height: 151
    }, {
        woj: 'opolskie',
        left: 203,
        top: 395,
        width: 59,
        height: 81
    }, {
        woj: 'śląskie',
        left: 268,
        top: 399,
        width: 62,
        height: 156
    }, {
        woj: 'świętokrzyskie',
        left: 354,
        top: 389,
        width: 133,
        height: 69
    }, {
        woj: 'małopolskie',
        left: 332,
        top: 462,
        width: 121,
        height: 111
    }, {
        woj: 'podkarpackie',
        left: 458,
        top: 459,
        width: 109,
        height: 113
    }];
    /*
        Dostępne usługi REST-owe serwera:

        – /<województwo>
          zwraca obiekt JSON zawierający wszystkie gminy danego <województwa>

        – /<województwo>/<wyrażenie_regularne>
          zwraca obiekt JSON zawierający wszystkie gminy danego <województwa>,
          których nazwy pasują do napisu definiującego <wyrażenie_regularne>.
    */
    console.log("test");

    $('#czysc').click(function(argument) {
        console.log("czyszcze");
        var table = "<div id='lista'><ul></ul></div>";
        $("#lista").replaceWith(table);

    })

    $('#mapa').click(function(e) {
        var offset_t = $(this).offset().top - $(window).scrollTop();
        var offset_l = $(this).offset().left - $(window).scrollLeft();

        var left = Math.round((e.clientX - offset_l));
        var top = Math.round((e.clientY - offset_t));
        test(left, top);
        //   alert("Left: " + left + " Top: " + top);


    });
    var test = function(left, top) {

        console.log($("#regexp").val());
        if ($("#regexp").val().length > 0) {
           
            for (var i = 0; i < wojewodztwa.length; i++) {
                if (left < wojewodztwa[i].left + wojewodztwa[i].width && left > wojewodztwa[i].left && top < wojewodztwa[i].top + wojewodztwa[i].height && top > wojewodztwa[i].top) {
                     var woj = wojewodztwa[i];
                    $.ajax({
                        url: "/" + woj.woj + "/" + $("#regexp").val(),
                        type: 'get',
                        success: function(data) {
                            displayData(data, woj.woj);
                        },
                        fail: function(data) {
                            console.log("fail Ajax");
                        },
                    });
                };
            };
        } else {
            for (var i = 0; i < wojewodztwa.length; i++) {
                if (left < wojewodztwa[i].left + wojewodztwa[i].width && left > wojewodztwa[i].left && top < wojewodztwa[i].top + wojewodztwa[i].height && top > wojewodztwa[i].top) {
                    var woj = wojewodztwa[i];
                    $.ajax({

                        url: "/" + woj.woj,
                        type: 'get',
                        success: function(data) {
                            displayData(data, woj.woj);
                        },
                        fail: function(data) {
                            console.log("fail Ajax");
                        },
                    });

                }
            }
        }

    }

    var displayData = function(data, woj) {
        var woj = "<p>" + woj + "</p>";
        var table = "<div id='lista'><ul></ul></div>";
        $("#lista").replaceWith(table);
        var wojewodztwo = "<p><h3>" + woj + "<h3></p>";
        var table = " <tbody>";
        var miasta = [];
        

        for (var i = 0; i < data.length; i++) {
            console.log(data[i].gmina);
            miasta.push(data[i].gmina);

        }
        miasta = miasta.sort();
        for (var i = 0; i < miasta.length; i++) {
            table += "<tr><td>" + miasta[i] + "</td></tr>";
        }
        table += "</tbody>";


        $("#lista").append(wojewodztwo);
        $("#lista").append(table);


    }

});