
var lastFollowing = 0;

// get current number of following
// this information can be extracted from specail node defined by corresponding CSS class:
var x = document.getElementsByClassName('ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav');
// get the exact number of follwing from this node
var totalFollowingStr = x[1].childNodes[3].childNodes[0].textContent;
// we need proper number. So, instead 1,234 we need 1234. That's why this substitution takes place
var totalFollowing = parseInt(totalFollowingStr.replace(",",""));

// The idead is:
// it's not possible to unfollow all followings at once.
// The page is always reloading with new bunches of followings.
// So, I just unfollow folowings already represented on the page and then scroll page to load more and then unfollow them.
// Repeat this action untill there is no any followings whose number is known (totalFollowing)
setInterval(function(){
    // find the node with button "Follow"
    var buttons = document.getElementsByClassName('user-actions-follow-button js-follow-btn follow-button btn small small-follow-btn');

    // get the current number of "Following" buttons
    var allFollowing = buttons.length;
    
    // if there are still any followings
    if (allFollowing > 0 ) {
        var i = lastFollowing;
        while ( i < allFollowing ){
            // Action "Unfollow" is just clicking corresponding button
            buttons[i].click();
            i++;
        }
        lastFollowing = allFollowing;
      
        if(lastFollowing < totalFollowing){
            $('body, html').scrollTop($(document).height());
        }
    }
    //otherwise there is no any followings, so the job is done!
    else{
        alert("There are no any followings!");
    }
}, 5000);
