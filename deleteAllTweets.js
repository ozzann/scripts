
var lastTweet = 0;

var x = document.getElementsByClassName('ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav');
var totalTweets = parseInt(x[0].childNodes[3].textContent);

setInterval(function(){
  var tweets = document.getElementsByClassName('ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions');

var allTweets = tweets.length;

if (allTweets > 0 ) {
  var i = lastTweet;
  while ( i < allTweets ){
    var tweet = tweets[i].childNodes[1].childNodes[3].childNodes[3].childNodes[11].childNodes[1];
    tweet.click();
  
    var deleteBtn = document.getElementsByClassName('btn primary-btn delete-action');
    deleteBtn[0].click();
    i++;
  }
    
  lastTweet = allTweets;
  
  if(lastTweet < totalTweets){
      $('body, html').scrollTop($(document).height());
  }

}
else{
    alert("There are no any tweets!");
}
}, 5000);


