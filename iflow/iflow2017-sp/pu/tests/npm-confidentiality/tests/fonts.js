// From FPDetective: original script name: pomegranate.js
// Fingerprinting fonts: Added some randomness to emulate the presence of certain fonts
// Sources: offsetWidth and offsetHeight are high
// Sinks: console.log(), normally it is an image source, GET request or xhr
Math.random = require("./DeterministicRandom.js")(23);
var utils = require("iflow");
utils.addSink(console.log);

var document = {fontspan:{offsetWidth : utils.source(15, utils.HIGH_LEVEL, "fonts-width"), offsetHeight: utils.source(15, utils.HIGH_LEVEL, "fonts-width"), style : {fontFamily: ""} }}

var fonts = new Array('Abadi MT Condensed Light', 'Academy Engraved LET',
		'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO',
		'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium',
		'Algerian', 'Amazone BT', 'American Typewriter',
		'American Typewriter Condensed', 'AmerType Md BT', 'Andale Mono',
		'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita',
		'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo',
		'Arabic Typesetting', 'ARCHER', 'Arial', 'Arial Black', 'Arial Hebrew',
		'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold',
		'Arial Unicode MS', 'ARNO PRO', 'Arrus BT', 'Aurora Cn BT',
		'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy',
		'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
		'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni',
		'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT',
		'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed',
		'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
		'Bitstream Vera Sans Mono', 'Blackadder ITC', 'BlairMdITC TT',
		'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT',
		'Bodoni MT Black', 'Bodoni MT Condensed',
		'Bodoni MT Poster Compressed', 'Book Antiqua', 'Bookman Old Style',
		'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC',
		'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New',
		'BrowalliaUPC', 'Brush Script MT', 'Calibri', 'Californian FB',
		'Calisto MT', 'Calligrapher', 'Cambria', 'Cambria Math', 'Candara',
		'CaslonOpnface BT', 'Castellar', 'Centaur', 'Century',
		'Century Gothic', 'Century Schoolbook', 'Cezanne', 'CG Omega',
		'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster',
		'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
		'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed',
		'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Comic Sans',
		'Comic Sans MS', 'Consolas', 'Constantia', 'Cooper Black',
		'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
		'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel',
		'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Courier',
		'Courier New', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David',
		'DB LCD Temp', 'DELICIOUS', 'Denmark', 'Devanagari Sangam MN',
		'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum',
		'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant',
		'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT',
		'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
		'Estrangelo Edessa', 'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS',
		'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys',
		'FONTIN', 'Footlight MT Light', 'Forte', 'Franklin Gothic',
		'Franklin Gothic Book', 'Franklin Gothic Demi',
		'Franklin Gothic Demi Cond', 'Franklin Gothic Heavy',
		'Franklin Gothic Medium', 'Franklin Gothic Medium Cond', 'FrankRuehl',
		'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script',
		'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
		'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT',
		'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT',
		'Garamond', 'Gautami', 'Geeza Pro', 'Geneva', 'Geometr231 BT',
		'Geometr231 Hv BT', 'Geometr231 Lt BT', 'Georgia', 'GeoSlab 703 Lt BT',
		'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT',
		'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold',
		'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha',
		'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
		'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT',
		'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe',
		'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington',
		'Heather', 'Heiti SC', 'Heiti TC', 'HELV', 'Helvetica',
		'Helvetica Neue', 'Herald', 'High Tower Text',
		'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text',
		'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Impact',
		'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
		'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT',
		'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET',
		'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT',
		'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
		'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC',
		'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script',
		'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT',
		'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
		'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax',
		'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans',
		'Lucida Sans Typewriter', 'Lucida Sans Unicode', 'Lydian BT',
		'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
		'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett',
		'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI',
		'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue',
		'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le',
		'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU',
		'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion',
		'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern',
		'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Monaco', 'Mongolian Baiti',
		'MONO', 'Monotype Corsiva', 'MoolBoran', 'Mrs Eaves', 'MS Gothic',
		'MS LineDraw', 'MS Mincho', 'MS Outlook', 'MS PGothic', 'MS PMincho',
		'MS Reference Sans Serif', 'MS Reference Specialty', 'MS Sans Serif',
		'MS Serif', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli', 'MYRIAD',
		'MYRIAD PRO', 'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic',
		'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid',
		'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century',
		'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
		'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Palatino',
		'Palatino Linotype', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus',
		'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick',
		'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
		'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET',
		'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic',
		'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed',
		'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
		'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold',
		'SCRIPTINA', 'Segoe Print', 'Segoe Script', 'Segoe UI',
		'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'Serifa',
		'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
		'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard',
		'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed',
		'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell',
		'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
		'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook',
		'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen',
		'Symbol', 'Synchro LET', 'System', 'Tahoma', 'Tamil Sangam MN',
		'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
		'Terminal', 'Thonburi', 'Times', 'Times New Roman',
		'Times New Roman PS', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO',
		'Trebuchet MS', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT',
		'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
		'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium',
		'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Verdana', 'Vijaya',
		'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda',
		'Webdings', 'Westminster', 'WHITNEY', 'Wide Latin', 'Wingdings',
		'Wingdings 2', 'Wingdings 3', 'ZapfEllipt BT', 'ZapfHumnst BT',
		'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT',
		'ZWAdobeF');

// the if statement below enables an observable implicit flow since variable dim is high.

function get_fonts() {
//	var fontSpan = document.getElementById("fontSpan");
	var fontSpan = document.fontspan; 
	var installed_fonts = "";
	var dim = fontSpan.offsetWidth + fontSpan.offsetHeight;
	for (var i = 0; i < fonts.length; i++) {
	
		fontSpan.style.fontFamily = fonts[i];
//		console.log(fontSpan.offsetWidth + fontSpan.offsetHeight);
//		console.log(dim);
        	var random = (Math.floor((Math.random() * 10) +1) % 2);
		var dim_old = dim;
		dim += random;
		if (dim !== fontSpan.offsetWidth + fontSpan.offsetHeight) {
			if (installed_fonts.length > 0)
				installed_fonts += ", ";
			installed_fonts += fonts[i];	
		}
		dim = dim_old;
	}
//	console.log(installed_fonts)
	return installed_fonts;
}


console.log(get_fonts());

