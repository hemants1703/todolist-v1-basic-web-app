// This is a custom made module for this web app project
/*  
    This module exports the things that might be required 
    in the other JavaScript files
*/

//  module.exports is a JavaScript Object (JSON) so we can add more to it
//  module exports getDate as a function (not what the function returns)
//  module exports a JSON where getDate (key): getDate (value)

// module.exports.getDate = getDate;
// module.exports.getDay = getDay;


exports.getDate = function() {
    const today = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    const today = new Date();
    const options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);
}