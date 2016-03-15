!function(e,t,r,a,s,l,n){e.GoogleAnalyticsObject=s,e[s]=e[s]||function(){(e[s].q=e[s].q||[]).push(arguments)},e[s].l=1*new Date,l=t.createElement(r),n=t.getElementsByTagName(r)[0],l.async=1,l.src=a,n.parentNode.insertBefore(l,n)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-41744442-1","dkellycollins.github.io"),ga("send","pageview"),angular.module("app.config",[]),angular.module("app.filters",["ui.router"]),angular.module("app.components",["ngMaterial","ui.router"]),angular.module("app.views",["ngMaterial","ngMdIcons","app.components","app.filters"]),angular.module("app.routes",["ui.router","app.views"]).config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/about/resume"),e.state("app",{"abstract":!0,url:"/",templateUrl:"scripts/app/views/main.html"}).state("app.games",{"abstract":!0,url:"games/",template:'<div ui-view style="height:100%;"></div>',data:{group:"Games"}}).state("app.games.stf",{url:"stf",templateUrl:"scripts/app/views/frame/frame.html",controller:"FrameCtrl",resolve:{src:function(){return"https://dkellycollins.github.io/STF/"}},data:{title:"Secure the Future",linkText:"Secure the Future"}}).state("app.games.castle-crossing",{url:"castlecrossing",templateUrl:"scripts/app/views/unity/unityWebPlayer.html",controller:"UnityWebPlayerCtrl",resolve:{src:function(){return"https://dkellycollins.github.io/CastleCrossing/Web.unity3d"}},data:{title:"Castle Crossing",linkText:"Castle Crossing"}}).state("app.about",{"abstract":!0,template:"<div ui-view></div>",url:"about/",data:{group:"About"}}).state("app.about.resume",{url:"resume",templateUrl:"scripts/app/views/resume/resume.html",controller:"ResumeCtrl",data:{title:"Resume",linkText:"Resume"}})}]),angular.module("app",["ngUnity","ui.router","app.routes"]),angular.module("app.components").directive("toggleSidenav",["$mdSidenav",function(e){return{restrict:"A",link:function(t,r,a){var s=a.toggleSidenav;r.on("click",function(){e(s).toggle()})}}}]),angular.module("app.filters").filter("stateData",["$state",function(e){return function(t,r){var a=e.current;return _.get(a,"data."+t)||r}}]),angular.module("app.components").controller("SitemapCtrl",["$scope","$state",function(e,t){var r=t.get();e.groups=_.chain(r).filter(function(e){var t=_.result(e,"data.siteMapHidden");return!t&&!e["abstract"]}).groupBy(function(e){var t=_.result(e,"data.group");return t}).value()}]).directive("sitemap",[function(){return{restrict:"E",templateUrl:"scripts/app/components/sitemap/sitemap.html",controller:"SitemapCtrl"}}]),angular.module("app.views").controller("FrameCtrl",["$scope","$sce","src",function(e,t,r){e.src=t.trustAsResourceUrl(r)}]),angular.module("app.views").controller("UnityWebPlayerCtrl",["$scope","$sce","src",function(e,t,r){e.src=t.trustAsResourceUrl(r)}]);var ResumeCtrl=function(){function e(e,t){this.$scope=e,this.$http=t,t.get("assets/resumeData.json").success(function(t){e.resumeData=t})}return e.$inject=["$scope","$http"],e}();angular.module("app.views").controller("ResumeCtrl",ResumeCtrl);