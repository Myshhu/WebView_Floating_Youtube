function a () {
  /*document.getElementById("hplogo").src = "https://android.com.pl/images/user-images/2017/03/android-developer2.png";
  document.bgColor = "#454343";
  document.getElementById("lst-ib").value = "Some random text";*/
  alert('im injected');
  var player;
if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      player = new YT.Player('youtubePlayerDOM', {
                            height: '150',
                               width: '300',
                       videoId: 'y9jDc7BJIL8',
                      });

  } else {

    player = new YT.Player('youtubePlayerDOM', {
                          height: '150',
                             width: '300',
                       videoId: 'y9jDc7BJIL8',
                    });

  }


  player.pauseVideo();
}
