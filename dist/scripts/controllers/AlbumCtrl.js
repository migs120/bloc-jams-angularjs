 (function () {
     function AlbumCtrl(Fixtures) {
          this.albumData = Fixtures.getAlbum();
         this.albumSongs = albumPicasso.songs;
        
     }

     angular
         .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();



