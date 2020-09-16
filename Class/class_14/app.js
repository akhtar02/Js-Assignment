function signIn(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log("user===>", user.displayName)
      }).catch(function(error) {
       console.log(error.message)
      });
}
