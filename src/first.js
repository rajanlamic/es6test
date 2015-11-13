/**
 * Created by Rajan on 10/11/2015.
 */

"use strict";

class GetMe {

    alert() {
        alert('changed now');
    }

    log() {
        var sa = (() => {
            alert('sa m');
        })();

        console.log('log ed');
    }
}

module.exports = GetMe;