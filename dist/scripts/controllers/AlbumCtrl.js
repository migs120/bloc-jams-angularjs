     (function () {
  
     function AlbumCtrl(Fixtures, SongPlayer) {   
         this.albumData = Fixtures.getAlbum();
      
         this.albumSongs = Fixtures.albumPicasso.songs;
        this.songPlayer = SongPlayer;
        
     }

     angular
         .module('blocJams')
     
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
       
 })();




