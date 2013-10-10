gozer
=====

Easy Image diff using GhostDiff

Instructions
========

1. Clone this repo
2. Run `npm install`
3. Run `git submodule update --init`
4. Now you can use this as you would any node module.  Simply copy it into your node_modules directory for testing.

Example
=======

```
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
```
