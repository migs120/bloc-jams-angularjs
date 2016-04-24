     (function () {
  
     function AlbumCtrl(Fixtures) {    
         this.albumData = Fixtures.getAlbum();
      
         this.albumSongs = Fixtures.albumPicasso.songs;
   
        
     }

     angular
         .module('blocJams')
     
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
       
 })();




