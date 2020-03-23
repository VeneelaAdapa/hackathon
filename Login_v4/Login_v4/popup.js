/*function getCookies(domain, name, callback) {
  chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
      if(callback) {
          callback(cookie.value);
      }
  });
}

//usage:
window.onload=function(){
getCookies("http://127.0.0.1", "email", function(email) {
  alert(email);
});
}
*/
var ID='abcd';
/*setTimeout(function(){
  window.location.reload(1);
}, 1000);*/

window.onload=function(){
  getCookies("http://127.0.0.1", "login");
}
    function getCookies(domain, name) 
    {
        chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
            ID = cookie.value;
            console.log(cookie.value)
            
           
            checkId();
        });
    }

    function checkId() {
      //alert(ID)
      if (ID == 'true') {
        //console.log("hai");
        document.getElementById('login').style.visibility = 'hidden';
        document.getElementById('register').style.visibility = 'hidden';
    } else if(ID=='false'){
      document.getElementById('logout').style.visibility = 'hidden';
      document.getElementById('register').style.visibility = 'hidden';
    }
    else if(ID=='abcd'){
      document.getElementById('logout').style.visibility = 'hidden';
    }
    }
    

     
