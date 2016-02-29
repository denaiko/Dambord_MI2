/*jslint browser: true, eqeq: true, plusplus: true, vars: true*/
/*global $*/
(function () {
    "use strict";
    var verticaal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    $(document).ready(function () {
        var i, j;
        for (i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                for (j = 0; j < 5; j++) {
                    $("body").append("<div class='brown'>" + verticaal[i] + (j * 2 + 1) + "</div>");
                    $("body").append("<div class='yellow'>" + verticaal[i] + (j * 2 + 2) + "</div>");
                }
            } else {
                for (j = 0; j < 5; j++) {
                    $("body").append("<div class='yellow'>" + verticaal[i] + (j * 2 + 1) + "</div>");
                    $("body").append("<div class='brown'>" + verticaal[i] + (j * 2 + 2) + "</div>");
                }
            }
        }
        for (i = 0; i < 5; i++) {
            $("body").append("<div class='black' style='left: " + (100 * i) + "px;'></div>");
        }
        for (i = 0; i < 5; i++) {
            $("body").append("<div class='black' style='left: " + (100 * i + 50) + "px;top: 50px;'></div>");
        }
        for (i = 0; i < 5; i++) {
            $("body").append("<div class='white' style='left: " + (100 * i) + "px;top: 400px;'></div>");
        }
        for (i = 0; i < 5; i++) {
            $("body").append("<div class='white' style='left: " + (100 * i + 50) + "px;top: 450px;'></div>");
        }
    });
}());