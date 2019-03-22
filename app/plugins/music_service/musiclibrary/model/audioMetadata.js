/**
 * @typedef {object} AudioMetadata
 * @extends {AudioMetadataPk}
 * @extends {Model}
 * @property {string} album
 * @property {string} albumartist
 * @property {string} artist
 * @property {string} artists   - comma-separated artists
 * @property {string} composer
 * @property {string} date
 * @property {string} genre		- comma-separated artists
 * @property {string} rating
 * @property {string} title
 * @property {number} year
 * @property {number} disk
 * @property {number} tracknumber

 * @property {any} [extra]
 * @property {boolean} [favorite]
 *
 * @property {string} location
 * @property {number} trackOffset
 */

/**
 * Metadata fields: https://github.com/borewit/music-metadata/blob/HEAD/doc/common_metadata.md
 * Data types: http://docs.sequelizejs.com/manual/data-types.html
 */
module.exports = function(sequelize, DataTypes) {


	return sequelize.define('AudioMetadata', {

		// media info
		album: DataTypes.TEXT,
		albumartist: DataTypes.TEXT,
		artist: DataTypes.TEXT,
		artists: DataTypes.TEXT,		// comma-separated artists
		composer: DataTypes.TEXT,  		// Composer
		date: DataTypes.TEXT,  			// Release date
		genre: DataTypes.TEXT,			// comma-separated genres
		rating: DataTypes.TEXT,  		// Object holding rating score [0..1] (0.0 worst rating, 1.0 best rating) and source (e.g. user e-mail)
		title: DataTypes.TEXT,
		year: DataTypes.INTEGER,

		disk: DataTypes.INTEGER,  // Disk or media number
		tracknumber: DataTypes.INTEGER, // Track number on the media


		/**
		 * raw metadata from parser
		 */
		extra: DataTypes.JSON,

		// user-defined data

		/**
		 * user marked song as favorite
		 */
		favorite: {type: DataTypes.BOOLEAN, defaultValue: false},


		// system stuff

		/**
		 * string used for search
		 * This is case-insensitive string (sqlite and postgre only)
		 *
		 * TODO: use full-text search: http://www.sqlitetutorial.net/sqlite-full-text-search/
		 */
		// search:  {type: DataTypes.CITEXT, unique: true},

		/**
		 * file location
		 */
		location: {type: DataTypes.TEXT},

		/**
		 * track offset in seconds
		 * It's used when single file contains multiple tracks
		 */
		trackOffset: {type: DataTypes.INTEGER, defaultValue: null}


		// By default, Sequelize will add the attributes createdAt and updatedAt to your model so you will be able to know when the database entry went into the db and when it was updated last.
	});
};

// TODO: create index location_idx on  AudioMetadata (location);

/*
{
  "format": {
    "tagTypes": [
      "ID3v2.3"
    ],
    "lossless": false,
    "dataformat": "mp3",
    "bitrate": 128000,
    "sampleRate": 44100,
    "numberOfChannels": 2,
    "encoder": "LAME3.97 ",
    "duration": 245.7861224489796,
    "codecProfile": "V2.3"
  },
  "common": {
    "track": {
      "no": 1,
      "of": null
    },
    "disk": {
      "no": 1,
      "of": 1
    },
    "label": [
      "Sequel"
    ],
    "language": "English",
    "title": "Ordinary Day",
    "artists": [
      "Dolores O'Riordan"
    ],
    "artist": "Dolores O'Riordan",
    "albumartist": "Dolores O'Riordan",
    "album": "Are You Listening?",
    "year": 2007,
    "genre": [
      "Alternative Pop"
    ],
    "composer": [
      "Dolores O'Riordan"
    ]
  }
}
 */