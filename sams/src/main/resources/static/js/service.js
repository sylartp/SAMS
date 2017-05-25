indexApp.value("stuValue", {
    queryStuInfo: function (http, q, username) {
        var deferred = q.defer();
        http({
            method: 'get',
            url: 'userInfo',
            params: {
                username: username
            }
        }).then(function success(result) {
            deferred.resolve(result);
        }, function error(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    },
   editStuInfo : function (http,q,user) {
      var deferred = q.defer();
      http({
          method:'post',
          url:'editStuInfo',
          data:user
      }).then(function success(result) {
          deferred.resolve(result);
      },function error(err) {
          deferred.reject(err);
      });
      return deferred.promise;
   },
    findClubInfo : function (http,q) {
        var deferred = q.defer();
        http({
            method:'get',
            url:'clubInfo'
        }).then(function success(result) {
            deferred.resolve(result);
        },function error(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }

});

indexApp.factory("stuService",function () {
   var service={};
   service.dealPath= function (path) {
       var arr = path.split("/");
       console.log(arr);
       return arr[2];
   };

   service.checkGender = function (gender) {
       var genderValue ;
       switch(gender) {
           case 1:
               genderValue = "1";
               break;
           case 0:
               genderValue = "0";
               break;
           default :
               genderValue = "1";
       }
       return genderValue;
   };

   return service;
});