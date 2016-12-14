//DATES
var dates = [{
  "name" : "Twitterbeat",
  "date" : "2013-04-19 12:35:36",
  "venue" : "Hegmann, Abshire and Kiehn",
  "city" : "Novyye Kuz’minki",
  "artist" : "Lotlux"
}, {
  "name" : "Skyvu",
  "date" : "2013-11-01 22:18:00",
  "venue" : "Metz LLC",
  "city" : "Hidalgo",
  "artist" : "Tampflex"
}, {
  "name" : "Skyvu",
  "date" : "2014-02-22 04:14:55",
  "venue" : "Predovic and Sons",
  "city" : "Anwen",
  "artist" : "Voltsillam"
}, {
  "name" : "Thoughtsphere",
  "date" : "2013-02-13 03:13:22",
  "venue" : "Rau, Kuhn and Kuhlman",
  "city" : "Dodu Dua",
  "artist" : "Solarbreeze"
}, {
  "name" : "Brainsphere",
  "date" : "2016-11-16 18:31:52",
  "venue" : "Kessler, Stracke and McKenzie",
  "city" : "Karakul’",
  "artist" : "Span"
}, {
  "name" : "Abata",
  "date" : "2016-05-31 20:06:25",
  "venue" : "Ledner, Lakin and Lowe",
  "city" : "Kalývia",
  "artist" : "Flowdesk"
}, {
  "name" : "Gabcube",
  "date" : "2016-10-12 08:05:12",
  "venue" : "Hudson, Windler and Toy",
  "city" : "Timon",
  "artist" : "Domainer"
}, {
  "name" : "Fivespan",
  "date" : "2013-02-25 02:18:20",
  "venue" : "Schmitt Group",
  "city" : "As Samawah",
  "artist" : "Daltfresh"
}, {
  "name" : "Ntags",
  "date" : "2015-09-09 13:45:11",
  "venue" : "Keebler-Lockman",
  "city" : "Takub",
  "artist" : "Vagram"
}];

var dates1 = [{
  "name" : "Youfeed",
  "date" : "2015-11-03 23:47:56",
  "venue" : "Runte and Sons",
  "city" : "Nelson",
  "artist" : "Viva"
}, {
  "name" : "Youopia",
  "date" : "2016-02-17 14:03:57",
  "venue" : "Romaguera-Cummings",
  "city" : "Teeli",
  "artist" : "Y-Solowarm"
}, {
  "name" : "Twitterworks",
  "date" : "2016-12-23 00:16:11",
  "venue" : "Murazik LLC",
  "city" : "Fier",
  "artist" : "Daltfresh"
}, {
  "name" : "Fivespan",
  "date" : "2015-06-19 00:33:17",
  "venue" : "Smitham, Hirthe and Hilpert",
  "city" : "Gainesville",
  "artist" : "Alphazap"
}, {
  "name" : "Camido",
  "date" : "2015-05-26 06:49:35",
  "venue" : "Lynch, Heathcote and King",
  "city" : "Ágios Týchon",
  "artist" : "Sonair"
}, {
  "name" : "Realblab",
  "date" : "2015-01-13 17:54:45",
  "venue" : "Hodkiewicz LLC",
  "city" : "Tapes",
  "artist" : "Span"
}, {
  "name" : "Linklinks",
  "date" : "2013-04-22 10:44:48",
  "venue" : "King LLC",
  "city" : "Itanhandu",
  "artist" : "Sonair"
}, {
  "name" : "Flashdog",
  "date" : "2016-02-28 02:49:26",
  "venue" : "Lueilwitz, Schmidt and Bruen",
  "city" : "Dijon",
  "artist" : "Y-find"
}, {
  "name" : "Edgeclub",
  "date" : "2015-02-26 14:11:13",
  "venue" : "Sipes, Klocko and Daniel",
  "city" : "Tours",
  "artist" : "Bamity"
}];

var dates2 = [{
  "name" : "Wordify",
  "date" : "2016-12-26 13:04:32",
  "venue" : "Connelly and Sons",
  "city" : "Touba",
  "artist" : "Vagram"
}, {
  "name" : "Zoomcast",
  "date" : "2013-10-30 01:36:46",
  "venue" : "Hickle, Orn and Green",
  "city" : "Socorro",
  "artist" : "It"
}, {
  "name" : "Tazz",
  "date" : "2016-01-21 23:18:43",
  "venue" : "Moen-Windler",
  "city" : "Drammen",
  "artist" : "Redhold"
}, {
  "name" : "Meemm",
  "date" : "2016-09-12 11:03:18",
  "venue" : "Green, Hansen and Cassin",
  "city" : "Nagiba",
  "artist" : "Aerified"
}, {
  "name" : "Trudoo",
  "date" : "2014-11-29 20:09:18",
  "venue" : "Hammes-Ankunding",
  "city" : "Talun",
  "artist" : "Tres-Zap"
}, {
  "name" : "Yotz",
  "date" : "2016-10-10 02:25:54",
  "venue" : "Maggio, Quigley and Johnson",
  "city" : "Castlebridge",
  "artist" : "Quo Lux"
}, {
  "name" : "Youopia",
  "date" : "2013-06-09 05:07:55",
  "venue" : "Goldner-Schneider",
  "city" : "Goiás",
  "artist" : "Redhold"
}, {
  "name" : "Topicshots",
  "date" : "2015-07-02 21:38:55",
  "venue" : "Gerlach, West and White",
  "city" : "Echarate",
  "artist" : "Zontrax"
}, {
  "name" : "Yozio",
  "date" : "2014-03-05 02:12:25",
  "venue" : "Kuvalis, Greenholt and Reichel",
  "city" : "Nawá",
  "artist" : "Flowdesk"
}];

function showEvents(x) {
    var output = '<div class="col s12 m4">' +
    '<div class="icon-block">' +                    
    '<ul class="center">';
    
    for (i=0; i < x.length; i++) {
    output += '<li><span class="header brown-text text-lighten-3">' + x[i].name + '</span><br />' +
    x[i].date + '<br />' +
    x[i].venue + '<br />' +
    x[i].artist + '</li>' +
    '<li>&nbsp;</li>';
    }
    
    output += '</ul>' +
    '</div>' +
    '</div>';
        
    document.write(output);
}


//REMIXES
var remix = [{
  "song_name" : "Fully-configurable",
  "artist" : "Willie Gordon"
}, {
  "song_name" : "disintermediate",
  "artist" : "Charles Marshall"
}, {
  "song_name" : "frame",
  "artist" : "Ryan Hansen"
}, {
  "song_name" : "Seamless",
  "artist" : "Jonathan Murphy"
}, {
  "song_name" : "web-enabled",
  "artist" : "Daniel Bell"
}, {
  "song_name" : "Enterprise-wide",
  "artist" : "Jessica Holmes"
}, {
  "song_name" : "Cross-group",
  "artist" : "Craig Price"
}, {
  "song_name" : "Assimilated",
  "artist" : "Maria Burns"
}, {
  "song_name" : "User-friendly",
  "artist" : "Beverly Mcdonald"
}, {
  "song_name" : "system engine",
  "artist" : "Nancy Moreno"
}, {
  "song_name" : "infrastructure",
  "artist" : "Denise Nichols"
}, {
  "song_name" : "executive",
  "artist" : "Nicole Turner"
}, {
  "song_name" : "strategy",
  "artist" : "Louise Watson"
}, {
  "song_name" : "Focused",
  "artist" : "Phyllis Marshall"
}, {
  "song_name" : "capability",
  "artist" : "Harry Harris"
}, {
  "song_name" : "homogeneous",
  "artist" : "Nicholas Payne"
}, {
  "song_name" : "Exclusive",
  "artist" : "Jimmy Sanders"
}, {
  "song_name" : "Reactive",
  "artist" : "Paula Anderson"
}, {
  "song_name" : "executive",
  "artist" : "Rebecca Banks"
}, {
  "song_name" : "open architecture",
  "artist" : "Timothy Kelley"
}];

var remix1 = [{
  "song_name" : "intermediate",
  "artist" : "Billy Montgomery"
}, {
  "song_name" : "4th generation",
  "artist" : "Gerald Burns"
}, {
  "song_name" : "object-oriented",
  "artist" : "Tina Olson"
}, {
  "song_name" : "Universal",
  "artist" : "Phillip Woods"
}, {
  "song_name" : "benchmark",
  "artist" : "Jane Alvarez"
}, {
  "song_name" : "productivity",
  "artist" : "Aaron Harrison"
}, {
  "song_name" : "Adaptive",
  "artist" : "Brian Smith"
}, {
  "song_name" : "data-warehouse",
  "artist" : "Evelyn Howell"
}, {
  "song_name" : "Managed",
  "artist" : "Ralph Kelley"
}, {
  "song_name" : "extranet",
  "artist" : "Frances Harvey"
}, {
  "song_name" : "adapter",
  "artist" : "Harry Day"
}, {
  "song_name" : "stable",
  "artist" : "Jimmy Cole"
}, {
  "song_name" : "Innovative",
  "artist" : "Bruce Hayes"
}, {
  "song_name" : "moderator",
  "artist" : "Debra Mcdonald"
}, {
  "song_name" : "executive",
  "artist" : "David Rose"
}, {
  "song_name" : "Profound",
  "artist" : "Judy Gonzalez"
}, {
  "song_name" : "Synchronised",
  "artist" : "Todd Montgomery"
}, {
  "song_name" : "Multi-lateral",
  "artist" : "Joseph Wagner"
}, {
  "song_name" : "bandwidth-monitored",
  "artist" : "Pamela Price"
}, {
  "song_name" : "Enhanced",
  "artist" : "Carl Duncan"
}];

var remix2 = [{
  "song_name" : "upward-trending",
  "artist" : "Joe Peterson"
}, {
  "song_name" : "analyzer",
  "artist" : "Janet Simmons"
}, {
  "song_name" : "emulation",
  "artist" : "Benjamin Lane"
}, {
  "song_name" : "standardization",
  "artist" : "Maria Johnston"
}, {
  "song_name" : "static",
  "artist" : "Sean Perkins"
}, {
  "song_name" : "model",
  "artist" : "Teresa Frazier"
}, {
  "song_name" : "coherent",
  "artist" : "Wayne Simpson"
}, {
  "song_name" : "Multi-lateral",
  "artist" : "Carolyn Ruiz"
}, {
  "song_name" : "Programmable",
  "artist" : "Anna Riley"
}, {
  "song_name" : "Profound",
  "artist" : "Joshua Bennett"
}, {
  "song_name" : "core",
  "artist" : "Karen Mendoza"
}, {
  "song_name" : "info-mediaries",
  "artist" : "Jean Jacobs"
}, {
  "song_name" : "client-server",
  "artist" : "Carol Kim"
}, {
  "song_name" : "Ergonomic",
  "artist" : "Joe Lane"
}, {
  "song_name" : "Customizable",
  "artist" : "Gerald Freeman"
}, {
  "song_name" : "Self-enabling",
  "artist" : "Bobby Cole"
}, {
  "song_name" : "Organic",
  "artist" : "Lori Thompson"
}, {
  "song_name" : "solution-oriented",
  "artist" : "Jeffrey Woods"
}, {
  "song_name" : "Operative",
  "artist" : "James Porter"
}, {
  "song_name" : "systematic",
  "artist" : "Cynthia Ramos"
}];

function showRemixes(x) {
    var output = '<div class="col s12 m4 white-text">' +
    '<div class="icon-block">' +                    
    '<ul class="center">';

    for (i=0; i < x.length; i++) {
        output += '<li><span class="header brown-text text-lighten-3">' + x[i].song_name + ' - </span>' + x[i].artist  + '</li>';
        '<li>&nbsp;</li>';
    }

    output += '</ul>' +
        '</div>' +
        '</div>';
    
    document.write(output);
}