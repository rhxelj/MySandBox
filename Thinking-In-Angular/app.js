function MainFn(){
    console.log("controller executed");
};

var myModule = angular.module("myModule",[]);

myModule.controller("MainCtrl",MainFn);