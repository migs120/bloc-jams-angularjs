

(function() {
    // function SongPlayer() {
      function SongPlayer(Fixtures) {
          var SongPlayer = {};
          var currentAlbum = Fixtures.getAlbum();
          
          var getSongIndex = function(song) {
                                             return currentAlbum.songs.indexOf(song);
                                            };
          
          SongPlayer.getSongIndex = getSongIndex;
         // var currentSong = null;
        
          
          // @desc Buzz object audio file
          // @type {Object}
          
          var currentBuzzObject = null;
         
         
           
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
         
         
         var stopSong = function(song){
             
                                         currentBuzzObject.stop();
                                         SongPlayer.currentSong.playing = null;
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
                                                                         //currentBuzzObject.stop();
                                                                         //SongPlayer.currentSong.playing = null;
                                                                        stopSong();
                                                                       }
                                             else {
                                                     var song = currentAlbum.songs[currentSongIndex];
                                                     setSong(song);
                                                     playSong(song);
                                                 }
                                            };
          
          
          
          
           SongPlayer.next = function(song) {  
               
                                           //  /*
                                             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                                             currentSongIndex++;
                                             if (currentSongIndex > currentAlbum.songs.length-1) {
                                                                        // currentBuzzObject.stop();
                                                                         //SongPlayer.currentSong.playing = null;
                                                                        stopSong();
                                                                       }
                                             else {
                                                     var song = currentAlbum.songs[currentSongIndex];
                                                     setSong(song);
                                                     playSong(song);
                                                 }
                                           //  */
               
                                            };
          
          
          
              SongPlayer.peakhole = function(){
                             peakhole.push(SongPlayer, currentAlbum.songs.length, getSongIndex())
                                        }
        
          
          
          peakhole.push(SongPlayer, currentAlbum.songs.length)
          
         
         
        
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
    
    
     
 })();






