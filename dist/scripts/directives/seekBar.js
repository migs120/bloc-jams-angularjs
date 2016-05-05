 
(function() {
    function seekBar($document) {
         
                    var calculatePercent = function(seekBar, event) {
                                                                     var offsetX = event.pageX - seekBar.offset().left;
                                                                     var seekBarWidth = seekBar.width();
                                                                     var offsetXPercent = offsetX / seekBarWidth;
                                                                     offsetXPercent = Math.max(0, offsetXPercent);
                                                                     offsetXPercent = Math.min(1, offsetXPercent);
                                                                     console.log(
                                                                                 "seekBar.offset().left =>",seekBar.offset().left
                                                                                 ,"\n event.pageX =>",event.pageX
                                                                                 ,"\n offsetX =>",offsetX
                                                                                 ,"\n seekBarWidth =>",seekBarWidth
                                                                                 ,"\n offsetXPercent =>",offsetXPercent
                                                                                
                                                                                )
                                                                     return offsetXPercent;
                                                                   
                                                                   };
                      return {
                             templateUrl: '/templates/directives/seek_bar.html',                                                                                                   
                             replace: true,
                             restrict: 'E',
                             scope: {
                                     onChange: '&'
                                    },
                             link: function(scope, element, attributes) {
                                                                         scope.value = 0;
                                                                         scope.max = 100;
                                                                         var seekBar = $(element);
                                 
                                                                          attributes.$observe(
                                                                                              'value', function(newValue) {
                                                                                                                           scope.value = newValue;
                                                                                                                          }
                                                                                             );

                                                                          attributes.$observe(
                                                                                              'max', function(newValue) {
                                                                                                                         scope.max = newValue;
                                                                                                                         }
                                                                                             );
                                                                         var percentString = function () {
                                                                                                          var value = scope.value;
                                                                                                          var max = scope.max;
                                                                                                          var percent = value / max * 100;
                                                                                                          return percent + "%";
                                                                                                         };
                                                                         scope.thumbStyle = function(){ 
                                                                                                       return {left: percentString()}
                                                                                                       
                                                                             
                                                                                                      }

                                                                         scope.fillStyle = function() {
                                                                                                       console.log(    
                                                                                                                    //"fillStyle \n ->width: percentString() \n"
                                                                                                                    //,"ng-style= 'width:" + percentString() +"'" 
                                                                                                                   )
                                                                                                       // \|/ this returns to ng-style as CSS changer
                                                                                                       return {width: percentString()};
                                                                                                     };
                                                                         scope.onClickSeekBar = function(event) {                            //  \|/ -> var seekBar = $(element)
                                                                                                                 var percent = calculatePercent(seekBar, event);
                                                                                                                 scope.value = percent * scope.max;
                                                                                                                 notifyOnChange(scope.value);
                                                                                                                 console.log(
                                                                                                                              "onClickSeekBar \n -> scope.value",scope.value
                                                                                                                             ,"\n onClickSeekBar \n -> argument(event)",event
                                                                                                                             //,"\n seekBar = $(element) ->",seekBar  // jqSelector forCurrent seekbarElement
                                                                                                                            
                                                                                                                            )
                                                                                                               };
                                 
                                                                         scope.trackThumb = function() { 
                                                                             //<div class="thumb" ng-mousedown="trackThumb()"></div>
                                                                                                         $document.bind(
                                                                                                                        'mousemove.thumb', function(event) {
                                                                                                                                                             var percent = calculatePercent(seekBar, event);
                                                                                                                                                             scope.$apply(function() {
                                                                                                                                                                                     scope.value = percent * scope.max;
                                                                                                                                                                                     notifyOnChange(scope.value);
                                                                                                                                                                                      
                                                                                                                                                                                     }
                                                                                                                                                                        );
                                                                                                                                                          }
                                                                                                                       );

                                                                                                         $document.bind(
                                                                                                                        'mouseup.thumb', function(){
                                                                                                                                                     $document.unbind('mousemove.thumb');
                                                                                                                                                     $document.unbind('mouseup.thumb');
                                                                                                                                                   }
                                                                                                                       ); 
                                                                                                     };
                                                                         var notifyOnChange = function(newValue) {
                                                                                                                 if (typeof scope.onChange === 'function') {
                                                                                                                                                             scope.onChange({value: newValue});
                                                                                                                                                           }
                                                                                                                };
                                 
                                                                        }
                            };
                        }
 
     angular
         .module('blocJams')
        .directive('seekBar', ['$document', seekBar]);
 })();
 


