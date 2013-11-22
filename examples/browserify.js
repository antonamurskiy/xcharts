var visutils = require('../lib/visutils');
var scales = require('../lib/scales');
var bar = require('../lib/vis/bar');
var cumulative = require('../lib/vis/cumulative');
var lineDotted = require('../lib/vis/line-dotted');
var line = require('../lib/vis/line');
var chart = require('../lib/chart');

var data = require('./browserify.json')

mychart = document.createElement('figure')
mychart.id = 'mychart'
mychart.style.height = '500px';
mychart.style.width = '500px';

document.body.appendChild(mychart);

stupidchart = new chart('bar', data, '#mychart');