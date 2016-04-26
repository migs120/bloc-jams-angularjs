 (function() {
    // function SongPlayer() {
      function SongPlayer(Fixtures) {
          var SongPlayer = {};
          
          var getSongIndex = function(song) {
                                             return currentAlbum.songs.indexOf(song);
                                            };
         // var currentSong = null;
        
          
          // @desc Buzz object audio file
          // @type {Object}
          
          var currentBuzzObject = null;
         
         var currentAlbum = Fixtures.getAlbum();
           
         SongPlayer.currentSong = null;
         // @function setSong
         // @desc Stops currently playing song and loads new audio file as currentBuzzObject
         // @param {Object} song
         
          var setSong = function(song) {
                                        if (currentBuzzObject) {
                                                                currentBuzzObject.stop();
                                                                SongPlayer.currentSong.playing = null;
                                                               }

                                        currentBuzzObject = new buzz.sound(
                                                                            song.audioUrl, {
                                                                                            formats: ['mp3'],
                                                                                            preload: true
                                                                                          }
                                                                          );

                                       // currentSong = song;
                                        SongPlayer.currentSong = song;
                                     };

         
         var playSong = function(){
                                   currentBuzzObject.play()
                                   SongPlayer.currentSong.playing = true;
             
                                  }
         
         
         
         
         
         
          SongPlayer.play = function(song) {
              
                                               song = song || SongPlayer.currentSong;
              
              
                                               if (SongPlayer.currentSong !== song) {
                                                                          setSong(song);

                                                                         // currentBuzzObject.play();
                                                                          playSong();
                                                                         }
              
              
                                            else if (SongPlayer.currentSong === song) {
                                                                             if (currentBuzzObject.isPaused()) {
                                                                                                                 playSong();
                                                                                                                 //currentBuzzObject.play();
                                                                                                                 //song.playing = true;
                                                                                                               }
                                                                           }  
                                         };
         
         SongPlayer.pause = function(song) {
             
                                             song = song || SongPlayer.currentSong;
                                             currentBuzzObject.pause();
                                             song.playing = false;
                                           };
          
          
           SongPlayer.previous = function() {
                                             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                                             currentSongIndex--;
                                             if (currentSongIndex < 0) {
                                                                         currentBuzzObject.stop();
                                                                         SongPlayer.currentSong.playing = null;
                                                                       }
                                             else {
                                                     var song = currentAlbum.songs[currentSongIndex];
                                                     setSong(song);
                                                     playSong(song);
                                                 }
                                            };
         
         
         
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();






