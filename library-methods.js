var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


  printPlaylists: function () {
    for(var x in this.playlists){
      var current = this.playlists[x];
      console.log( current.id + ": " + current.name + " - " + current.tracks.length + " tracks");
    }
  },

  printTrack: function(track){
    console.log(track.id + " " + track.name + " by " + track.artist + " (" + track.album + ")")
  },


  printTracks: function () {
    for(var x in this.tracks){
      var current = this.tracks[x];
      this.printTrack(current);
    }
  },


  printPlaylist: function (playlistId) {
    var currentPlaylist = this.playlists[playlistId];
    console.log( currentPlaylist.id + ": " + currentPlaylist.name + " - " + currentPlaylist.tracks.length + " tracks");
    for(var i = 0; i < currentPlaylist.tracks.length; i++){
      this.printTrack(this.tracks[currentPlaylist.tracks[i]]);
    }
  },


  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },


  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  addTrack: function (name, artist, album) {
    var trackId = this.uid();
    this.tracks[trackId] = {id: trackId, name: name, artist: artist, album: album};

  },


  addPlaylist: function (name) {
    var playlistId = this.uid();
    this.playlists[playlistId] = {id: playlistId, name: name, tracks: []};
  },


  printSearchResults: function(query) {
    query = query.toLowerCase();
    for(var x in this.tracks){
      var test = false;
      for(var y in this.tracks[x]){
        if(this.tracks[x][y].toLowerCase().search(query) >= 0){
          test = true;
        }

      }
      if(test){
      this.printTrack(this.tracks[x]);
      }
    }
  }
}
library.printTracks();
// library.addTrack('Pigeon', 'Roy Roger', 'Blue Bird');
// console.log(library.tracks);
// library.addPlaylist('cool music');
// console.log(library.playlists);
// library.printSearchResults('th');
// library.printPlaylists()
