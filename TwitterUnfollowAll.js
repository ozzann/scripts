
var lastFollowing = 0;

var x = document.getElementsByClassName('ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav');
var totalFollowingStr = x[1].childNodes[3].childNodes[0].textContent;
var totalFollowing = parseInt(totalFollowingStr.replace(",",""));

setInterval(function(){
  var buttons = document.getElementsByClassName('user-actions-follow-button js-follow-btn follow-button btn small small-follow-btn');

var allFollowing = buttons.length;

if (allFollowing > 0 ) {
    var i = lastFollowing;
    while ( i < allFollowing ){
        buttons[i].click();
        i++;
    }
  lastFollowing = allFollowing;
  
  if(lastFollowing < totalFollowing){
      $('body, html').scrollTop($(document).height());
  }

}
else{
    alert("There are no any followings!");
}
}, 5000);
