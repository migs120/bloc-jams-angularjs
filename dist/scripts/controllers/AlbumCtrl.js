 (function () {
     function AlbumCtrl() {
         this.albumData = albumPicasso;
         this.albumSongs = albumPicasso.songs;
        
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();



