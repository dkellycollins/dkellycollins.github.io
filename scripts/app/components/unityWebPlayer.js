var unityObjectUrl = "http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject2.js";
if (document.location.protocol == 'https:')
   unityObjectUrl = unityObjectUrl.replace("http://", "https://ssl-");
document.write('<script type="text\/javascript" src="' + unityObjectUrl + '"><\/script>');

angular.module('app.components')
    .directive('unityWebPlayer', [function () {
       var config = {
          width: 960,
          height: 600,
          params: {
             enableDebugging: '1',
             disableContextMenu: true
          }
       };

       function init(src, $element) {
          var $missingScreen = $element.find('.missing');
          var $brokenScreen = $element.find('.broken');
          $missingScreen.hide();
          $brokenScreen.hide();

          var u = new UnityObject2(config);
          u.observeProgress(function (progress) {
             switch (progress.pluginStatus) {
                case "broken":
                {
                   $brokenScreen.find("a").click(function (e) {
                      e.stopPropagation();
                      e.preventDefault();
                      u.installPlugin();

                      return false;
                   });
                   $brokenScreen.show();
                }
                   break;
                case "missing":
                {
                   $missingScreen.find("a").click(function (e) {
                      e.stopPropagation();
                      e.preventDefault();
                      u.installPlugin();
                      return false;
                   });
                   $missingScreen.show();
                }
                   break;
                case "installed":
                {
                   $missingScreen.remove();
                }
                   break;
                case "first":
                {

                }
                   break;
             }
          });

          u.initPlugin($element, src);
       }

       return {
          restrict: 'EA',
          link: function ($scope, $element, $attr) {
             $scope.$watch($attr.unityWebPlayer, function(src) {
                if(!src) {
                   return;
                }

                init(src, $element);
             });
          }
       }
    }]);