requirejs.config({
  baseUrl: '../',
  paths: {
    'underscore':                'bower_components/underscore/underscore',
    'jquery':                    'bower_components/jquery/dist/jquery',
    'handlebars':                'bower_components/handlebars/handlebars.runtime',
    'jquery.boiler':             'bower_components/jquery-boiler/jquery.boiler',
    'gemini.support':            'bower_components/gemini-support/gemini.support',
    'gemini':                    'bower_components/gemini-loader/gemini',
    'fastclick':                 'bower_components/fastclick/lib/fastclick',
    'hammerjs':                  'bower_components/hammerjs/hammer',
    'jquery.hammer':             'bower_components/jquery-hammerjs/jquery.hammer'
  }
});

require(['gemini', 'gemini.touch'], function(G){

});
