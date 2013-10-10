// Mostly ported from PhantomCSS
// For a better implementation, use that:
// https://github.com/Huddle/PhantomCSS
//
// Reworked here to work with provided image paths

var fs = require('fs');
var _tolerance = 64;
var _root = '.';
var _count = 0;
var exitStatus;
var platform = require('os').platform();
var _processRoot = process.cwd();

exports.compare = compare;

// Create two image objects using the reference file and 
// current test render then use imagediff to compare them
function compare(basefile, filename, callback) {
    if (!fs.existsSync(basefile)) {
        return callback(new Error(basefile + " does not exist"));
    } 
    else if (!fs.existsSync(filename)) {
        return callback(new Error(filename + " does not exist"));
    } 

    // But instead, we have to spawn the global imagediff because the node one is acting weird
    var spawn = require('child_process').spawn;
    var imgdf = spawn(__dirname + '/GhostDiff/ghostdiff', [filename, basefile]);

    imgdf.on('exit', function(code) {
        if (code === 0) {
            callback({pass : true});
        } else {
            console.log('Image comparison failed for: ' + basefile + ' - ' + filename);
            callback({pass : false});
        }
    });
}

module.exports = exports;
