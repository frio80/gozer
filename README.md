gozer
=====

Easy Image diff using GhostDiff

Instructions
========

1. Clone this repo
2. Run `git submodule update --init`
3. Place it in your node_modules directory.

Example
=======
  var gozer = require('gozer');
  
  var onComplete = function(result) {
    if (result.pass) {
        console.log('Test Passed!');
    }
    else {
        console.log('Test Failed!');
    }
  };

  var baseline = __dirname + '/test.baseline.png';
  var local = __dirname + '/test.local.png';

  gozer.compare(local, baseline, onComplete);`

