// CRunApp object
// -----------------------------------------------------------------
/* Copyright (c) 1996-2012 Clickteam
 *
 * This source code is part of the HTML5 exporter for Clickteam Multimedia Fusion 2.
 *
 * Permission is hereby granted to any person obtaining a legal copy
 * of Clickteam Multimedia Fusion 2 to use or modify this source code for
 * debugging, optimizing, or customizing applications created with
 * Clickteam Multimedia Fusion 2.
 * Any other use of this source code is prohibited.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
window["FusionVersion"] = "Clickteam Fusion HTML5 Exporter Build 291.2";

function debug(message) {
	// console.log(message)
}

CRunApp.MAX_PLAYER = 4;
CRunApp.RUNTIME_VERSION = 0x0302;
CRunApp.MAX_KEY = 8;
CRunApp.GA_NOHEADING = 0x0002;
CRunApp.GA_STRETCHTOFIT = 0x0004;
CRunApp.GA_SPEEDINDEPENDANT = 0x0008;
CRunApp.GA_STRETCH = 0x0010;
CRunApp.GA_MENUHIDDEN = 0x0080;
CRunApp.GA_MENUBAR = 0x0100;
CRunApp.GA_MAXIMISE = 0x0200;
CRunApp.GA_MIX = 0x0400;
CRunApp.GA_FULLSCREENATSTART = 0x0800;
CRunApp.GANF_SAMPLESOVERFRAMES = 0x0001;
CRunApp.GANF_RUNFRAME = 0x0004;
CRunApp.GANF_SAMPLESEVENIFNOTFOCUS = 0x0008;
CRunApp.GANF_NOTHICKFRAME = 0x0040;
CRunApp.GANF_DONOTCENTERFRAME = 0x0080;
CRunApp.GANF_DISABLE_CLOSE = 0x0200;
CRunApp.GANF_HIDDENATSTART = 0x0400;
CRunApp.GANF_VSYNC = 0x1000;
CRunApp.GAOF_JAVASWING = 0x1000;
CRunApp.GAOF_JAVAAPPLET = 0x2000;
CRunApp.RUNTIME_CM = 1;
CRunApp.SL_RESTART = 0;
CRunApp.SL_STARTFRAME = 1;
CRunApp.SL_FRAMEFADEINLOOP = 2;
CRunApp.SL_FRAMELOOP = 3;
CRunApp.SL_FRAMEFADEOUTLOOP = 4;
CRunApp.SL_ENDFRAME = 5;
CRunApp.SL_QUIT = 6;
CRunApp.SL_WAITFORMOCHI = 7;
CRunApp.MAX_VK = 203;
CRunApp.VK_LEFT = 0x25;
CRunApp.VK_RIGHT = 0x27;
CRunApp.VK_UP = 0x26;
CRunApp.VK_DOWN = 0x28;
CRunApp.VK_LBUTTON = 200;
CRunApp.VK_MBUTTON = 201;
CRunApp.VK_RBUTTON = 202;
CRunApp.VK_NUMPAD0 = 0x60;
CRunApp.VK_NUMPAD1 = 0x61;
CRunApp.VK_NUMPAD2 = 0x62;
CRunApp.VK_NUMPAD3 = 0x63;
CRunApp.VK_NUMPAD4 = 0x64;
CRunApp.VK_NUMPAD5 = 0x65;
CRunApp.VK_NUMPAD6 = 0x66;
CRunApp.VK_NUMPAD7 = 0x67;
CRunApp.VK_NUMPAD8 = 0x68;
CRunApp.VK_NUMPAD9 = 0x69;
CRunApp.VK_S = 0x53;
CRunApp.VK_D = 0x44;
CRunApp.VK_E = 0x45;
CRunApp.VK_X = 0x58;
CRunApp.VK_F12 = 0x7B;
CRunApp.VK_SHIFT = 0x10;
CRunApp.VK_CONTROL = 0x11;
CRunApp.VK_MENU = 0x12;
CRunApp.CTRLTYPE_MOUSE = 0;
CRunApp.CTRLTYPE_JOY1 = 1;
CRunApp.CTRLTYPE_JOY2 = 2;
CRunApp.CTRLTYPE_JOY3 = 3;
CRunApp.CTRLTYPE_JOY4 = 4;
CRunApp.CTRLTYPE_KEYBOARD = 5;
CRunApp.ARF_INGAMELOOP = 0x0004;
CRunApp.BUILDFLAG_TEST = 0x0080;
CRunApp.AH2OPT_KEEPSCREENRATIO = 0x0001;
CRunApp.AH2OPT_RESAMPLESTRETCH = 0x0004;
CRunApp.AH2OPT_WEBGL = 0x10000;
CRunApp.AH2OPT_KEEPRESOURCESBETWEENFRAMES = 0x8000;
CRunApp.AH2OPT_RUNEVENIFNOTFOCUS = 0x100000;
CRunApp.AH2OPT_PRELOADERQUIT = 0x800000;
CRunApp.AH2OPT_LOADDATAATSTART = 0x1000000;
CRunApp.AH2OPT_LOADSOUNDSONTOUCH = 0x2000000;
CRunApp.AH2OPT_DESTROYIFNOINACTIVATE = 0x4000000;
CRunApp.MAX_TOUCHES = 10;
CRunApp.FAKE_TOUCHIDENTIFIER = 0x2356A465;
CRunApp.TOUCHID_EMPTY = 0x69865358;
CRunApp.MOUSE_DOUBLE_CLICK_DELAY = 300;

function loadApplication()
{
	window.application.loadApplication();
}
function loadInfo()
{
	window.application.loadInfo();
}
window['loadApplication'] = loadApplication;
window['loadInfo'] = loadInfo;

function CRunApp(cName, cfile, path, sub)
{
	this.isSubApp = (sub === true);
	this.isPreloaderSubApp = false;
	if(this.isSubApp)
	{
		this.canvas = cName.canvas;
		this.parent_element = cName.parent_element;
		this.cName = null;
	}
	else if(typeof cName === 'string')
	{
		this.canvas = document.getElementById(cName);
		this.parent_element = this.canvas.parentElement;
		this.cName = cName;
	}
	else if(cName instanceof HTMLElement)
	{
		this.canvas = document.createElement('canvas');
		this.parent_element = cName;
		this.cName = null;
	}

	var cont = this.container = cName.container || document.createElement('div');
	cont.appendChild(this.canvas);
	this.parent_element.appendChild(cont);

	cont.style.overflow = 'hidden';
	cont.style.position = 'relative';
	cont.style.transform = 'translateZ(0)';
	cont.style.margin = '0';
	cont.style.padding = '0';
	cont.style.display = 'block';
	cont.style.boxSizing = 'content-box';
	cont.className = "MMFDiv";

	this.frameOffsets = null;
	this.frameEffects = null;
	this.frameEffectParams = null;
	this.frameMaxIndex = 0;
	this.framePasswords = null;
	this.appName = null;
	this.nGlobalValuesInit = 0;
	this.globalValuesInitTypes = null;
	this.globalValuesInit = null;
	this.nGlobalStringsInit = 0;
	this.globalStringsInit = null;
	this.OIList = null;
	this.imageBank = null;
	this.fontBank = null;
	this.soundBank = null;
	this.soundPlayer = null;
	this.musicBank = null;
	this.musicPlayer = null;
	this.soundContext = null;
	this.soundContextType = 0;
	this.appRunningState = 0;
	this.lives = null;
	this.scores = null;
	this.playerNames = null;
	this.gValues = null;
	this.gStrings = null;
	this.startFrame = 0;
	this.nextFrame = 0;
	this.currentFrame = 0;
	this.frame = null;
	this.file = null;
	this.parentApp = null;
	this.parentOptions = 0;
	this.parentWidth = 0;
	this.parentHeight = 0;
	this.refTime = 0;
	this.run = null;
	this.preloader = null;
	this.loadPreloader = false;

	this.xOffset = 0;
	this.yOffset = 0;
	this.gaFlags = 0;
	this.gaNewFlags = 0;
	this.gaMode = 0;
	this.gaOtherFlags = 0;
	this.gaCxWin = 0;
	this.gaCyWin = 0;
	this.gaScoreInit = 0;
	this.gaLivesInit = 0;
	this.gaBorderColour = 0;
	this.gaNbFrames = 0;
	this.gaFrameRate = 0;
	this.pcCtrlType = null;
	this.pcCtrlKeys = null;
	this.frameHandleToIndex = null;
	this.frameMaxHandle = 0;
	this.cx = 0;
	this.cy = 0;
	this.mouseX = 0;
	this.mouseY = 0;
	this.bMouseIn = false;
	this.keyBuffer = null;

	this.cursorCount = 0;
	this.cursor = 'auto';
	this.sysEvents = null;
	this.quit = false;
	this.m_bLoading = false;
	this.extensionStorage = null;
	this.extLoader = null;
	this.embeddedFiles = null;
	this.bUnicode = false;
	this.xMouseOffset = 0;
	this.yMouseOffset = 0;
	this.mouseDoubleClickCode = null;
	this.mouseDoubleClickTimestamp = null;
	this.deltaWheel = 0;
	this.effect = 0;
	this.effectParam = 0;
	this.alpha = 0;

	this.dwOptions = 0;
	this.dwBuildType = 0;
	this.dwBuildFlags = 0;
	this.wScreenRatioTolerance = 0;
	this.wScreenAngle = 0;

	this.file = cfile;
	this.resources = "";
	this.path = path;
	var pos = path.lastIndexOf("/");
	if (pos >= 0)
		this.resources = path.substring(0, pos + 1);

	this.frameColor = 0;
	this.appEditorFilename = null;

	this.run = null;
	this.timer = 0;
	this.imagesToLoad = 0;
	this.imagesLoaded = 0;
	this.bLoading = false;
	this.keyNew = false;
	this.subApps = new Array(0);
	this.preloaderType = -1;                        // HTML5PRELOADER_IMAGE (0) ou HTML5PRELOADER_FRAMENUM (1)
	this.preloaderCircleCenterX = 0;
	this.preloaderCircleCenterY = 0;
	this.preloaderCircleRadius = 0;
	this.preloaderCircleThickness = 0;
	this.preloaderCircleColor = 0;
	this.preloaderBackColor = 0;
	this.preloaderFrameNumber = 0;        // première frame = 0
	this.transition = null;
	this.transitionManager = null;
	this.transitionDisplay = null;
	this.transitionOldSurface = null;
	this.bStartFadeIn = false;
	// Browser detection
	this.browserDetect = new BrowserDetect();
	this.touchesID = null;
	this.touchesX = null;
	this.touchesY = null;
	this.mouseTouch = CRunApp.TOUCHID_EMPTY;
	this.nTouches = 0;

	this.joystick = null;
	this.joystickOn = 0;

	this.accelerometer = 0;
	this.accelerometerHandler = null;
	this.accX = 0;
	this.accY = 0;
	this.accZ = 0;
	this.accGravX = 0;
	this.accGravY = 0;
	this.accGravZ = 0;
	this.scaleX = this.scaleY = 1;

	this.hasFocus = true;
	this.bStoppedFocus = false;
	this.iOS = false;
	this.firstFrameColor = 0;
	this.previousFrameGraphics = null;
	this.graphicFonts = null;

	this.infoVersion = -1;
	this.infoFile = null;
	this.infoCounter = 1000000000;
	this.infoPath = null;
	if (window.location.href.indexOf("192.") >= 0)
	{
		var pos = window.location.href.indexOf("21700/");
		if (pos >= 0)
		{
			this.infoPath = window.location.href.substring(0, pos + 6);
			this.infoVersion = -1;
			this.infoCounter = 25;
		}
	}
	this.bZoom = false;
	this.dataLoadingStep = 3;
	this.dataToLoad = new CArrayList();
	this.dataLoading = new CArrayList();
	this.mosaics = new Array();
	this.mosaicMaxHandle = 0;
	this.silentSound = null;
	this.m_touchMe = "Please touch the screen to start";
	this.oldFrameRate = -1000;
	this.fullScreen = false;
	this.versionCode = "***version***";
	this.versionCodePos = 0;
	this.versionCodeDisplay = 0;
	this.codePage = -1;



	this.modalSubappObject = null;
}
CRunApp.prototype =
{
	loadInfo:        function ()
	{
		var version = this.infoFile.readAInt('version');
		if (this.infoVersion < 0)
			this.infoVersion = version;
		if (version != this.infoVersion)
		{
			this.infoFile.setUnicode(true);
			var name = this.infoFile.readAString('name');
			var path = this.infoPath + name;
			window.open(path, "_self");
		}
		this.infoCounter = 25;
	},
	load:            function ()
	{
		this.numberOfFiles = this.file.readAShort('numberOfFiles');
		this.currentFile = 1;
		this.loadingFile = new CFile();
		var size = this.file.readAInt('size');
		var filePath = this.path.substring(0, this.path.length - 1) + this.currentFile.toString();
		this.loadingFile.getFile(filePath, loadApplication, size);
	},
	loadApplication: function ()
	{
		this.currentFile++;
		if (this.currentFile > this.numberOfFiles)
		{
			var zip = new JSZip(this.loadingFile.getBytes(), "content");
			var unzipped = zip.file("Application.ccj").asBinary();
			this.loadingFile = null;
			this.file = new CFile();
			this.file.setBinary(unzipped);
			this.digest();
			this.startApplication();
			return;
		}
		var size = this.file.readAInt('size');
		var filePath = this.path.substring(0, this.path.length - 1) + this.currentFile.toString();
		this.loadingFile.getFile(filePath, loadApplication, size);
	},
	setParentApp: function (pApp, sFrame, options, sprite, width, height)
	{
		this.parentApp = pApp;
		this.parentOptions = options;
		this.mainSprite = sprite;
		this.startFrame = sFrame;
		this.parentWidth = width;
		this.parentHeight = height;
	},

	digest:          function ()
	{
		function debug(message) {
			// debug('[DIGEST] ' + message);
		}
		// Charge le mini-header
		this.file.seek(0);
		var b = this.file.readBuffer(4, 'header');
		this.bUnicode = false;
		if (b[0] == 80 && b[1] == 65 && b[2] == 77 && b[3] == 85)
		{
			this.bUnicode = true;
		}
		this.file.setUnicode(this.bUnicode);
		this.file.skipBytes(8);
		this.file.skipBytes(4);

		// Reserve les objets
		this.OIList = new COIList();
		this.imageBank = new CImageBank(this);
		this.fontBank = new CFontBank(this);
		this.soundBank = new CSoundBank(this);
		this.soundPlayer = new CSoundPlayer(this);
		this.musicBank = new CMusicBank(this);
		this.musicPlayer = new CMusicPlayer(this);

		// Lis les chunks
		var posEnd;
		var nbPass = 0, n;
		var chID = 0;
		var chFlags;
		var chSize;
		while (chID != 0x7F7F)
		{
			chID = this.file.readAShort('chID');
			chFlags = this.file.readAShort('chFlags');
			chSize = this.file.readAInt('chSize');


			if (chSize == 0)
			{
				continue;
			}
			posEnd = this.file.getFilePointer() + chSize;

			switch (chID)
			{
				// CHUNK_APPHEADER
				case 0x2223:
					debug('CHUNK_APPHEADER');
					this.loadAppHeader();
					// Buffer pour les offsets frame
					this.frameOffsets = new Array(this.gaNbFrames);
					this.frameEffects = new Array(this.gaNbFrames);
					this.frameEffectParams = new Array(this.gaNbFrames);
					// Pour les password
					this.framePasswords = new Array(this.gaNbFrames);
					for (n = 0; n < this.gaNbFrames; n++)
						this.framePasswords[n] = null;
					break;
				// CHUNK_APPHDR2
				case 0x2245:
					debug('CHUNK_APPHDR2');
					this.dwOptions = this.file.readAInt('dwOptions');
					this.dwBuildType = this.file.readAInt('dwBuildType');
					this.dwBuildFlags = this.file.readAInt('dwBuildFlags');
					this.wScreenRatioTolerance = this.file.readAShort('wScreenRatioTolerance');
					this.wScreenAngle = this.file.readAShort('wScreenAngle');
					break;
				// CHUNK_APPNAME
				case 0x2224:
					debug('CHUNK_APPNAME');
					this.appName = this.file.readAString('appName');
					break;
			    // CHUNK_APPCODEPAGE
			    case 0x2246:
						debug('CHUNK_APPCODEPAGE');
			        this.codePage = this.file.readAInt('codePage');
			        break;
			   // Target file name
				case 0x222E:		// CHUNK_APPEDITORFILENAME:
					debug('CHUNK_APPEDITORFILENAME');
					this.appEditorFilename = this.file.readAString('appEditorFilename');
					break;
				// Touch Screen message for iOS
				case 0x224E:        // CHUNK_HTML5_TOUCHME
					debug('CHUNK_HTML5_TOUCHME');
					this.m_touchMe = this.file.readAString('m_touhMe');
					break;
				// CHUNK_GLOBALVALUES
				case 0x2232:
					debug('CHUNK_GLOBALVALUES');
					this.loadGlobalValues();
					break;
				// CHUNK_GLOBALSTRINGS
				case 0x2233:
					debug('CHUNK_GLOBALVALUES');
					this.loadGlobalStrings();
					break;
				// CHUNK_FRAMEITEMS
				// CHUNK_FRAMEITEMS_2
				case 0x2229:
			    case 0x223F:
						debug('CHUNK_FRAMEITEMS');
				    this.extLoader = new CExtLoader(this);
				    this.extLoader.createList(this.file);
				    this.OIList.preLoad(this.file);
					break;
				// CHUNK_FRAMEHANDLES
				case 0x222B:
					debug('CHUNK_FRAMEHANDLES');
					this.loadFrameHandles(chSize);
					break;
				// CHUNK_HTML5PRELOADER
				case 0x224A:
					debug('CHUNK_HTML5PRELOADER');
					this.preloaderType = this.file.readAInt('preloaderType');
					this.preloaderCircleCenterX = this.file.readAInt('preloaderCircleCenterX');
					this.preloaderCircleCenterY = this.file.readAInt('preloaderCircleCenterY');
					this.preloaderCircleRadius = this.file.readAInt('preloaderCircleRadius');
					this.preloaderCircleThickness = this.file.readAInt('preloaderCircleThickness');
					this.preloaderCircleColor = this.file.readAColor('preloaderCircleColor');
					this.preloaderBackColor = this.file.readAInt('preloaderBackColor');
					if (this.preloaderBackColor != -1)
					{
						this.file.skipBack(4);
						this.preloaderBackColor = this.file.readAColor('preloaderBackColor');
					}
					this.preloaderFrameNumber = this.file.readAInt('preloaderFrameNumber');
					this.loadPreloader = true;
					break;
				// CHUNK_FRAME
				case 0x3333:
					debug('CHUNK_FRAME');
					// Repere les positions des frames dans le fichier
					this.frameOffsets[this.frameMaxIndex] = this.file.getFilePointer();
					var frID = 0;
					var frFlags;
					var frSize;
					while (frID != 0x7F7F)		// CHUNK_LAST
					{
						frID = this.file.readAShort('frID');
						frFlags = this.file.readAShort('frFlags');
						frSize = this.file.readAInt('frSize');

						if (frSize == 0)
						{
							continue;
						}
						var frPosEnd = this.file.getFilePointer() + frSize;

						switch (frID)
						{
							case 0x3334:
								if (this.frameMaxIndex == 0)
								{
									this.file.skipBytes(2 * 4);
									this.firstFrameColor = this.file.readAColor('firstFrameColor');
								}
								break;
							case 0x3336:
								this.framePasswords[this.frameMaxIndex] = this.file.readAString('framePasswords[this.frameMaxIndex]');
								break;
							case 0x3349:
								this.frameEffects[this.frameMaxIndex] = this.file.readAInt('frameEffects[this.frameMaxIndex]');
								this.frameEffectParams[this.frameMaxIndex] = this.file.readAInt('frameEffectParams[this.frameMaxIndex]');
								break;
							// CHUNK_MOSAICIMAGETABLE
							case 0x3348:
								var number = frSize / (3 * 2);
								var n;
								for (n = 0; n < number; n++)
								{
									var handle = this.file.readAShort('handle');
									this.file.skipBytes(4);
									if (handle != 0)
									{
										this.mosaics[handle] = 1;
										this.mosaicMaxHandle = Math.max(this.mosaicMaxHandle, handle + 1);
									}
								}
								break;
						}
						this.file.seek(frPosEnd);
					}
					this.frameMaxIndex++;
					break;
				// CHUNK_BINARYFILES
				case 0x2238:
					debug('CHUNK_BINARYFILES');
					var nFiles = this.file.readAInt('nFiles');
					this.embeddedFiles = new Array(nFiles);
					for (n = 0; n < nFiles; n++)
					{
						this.embeddedFiles[n] = new CEmbeddedFile(this);
						this.embeddedFiles[n].preLoad();
					}
					break;
				// CHUNK_IMAGE
				case 0x6666:
					debug('CHUNK_IMAGE');
					this.imageBank.preLoad(this.file);
					break;
				// CHUNK_FONT
				case 0x6667:
					debug('CHUNK_FONT');
					this.fontBank.preLoad(this.file);
					break;
				// CHUNK_SOUNDS
				case 0x6668:
					debug('CHUNK_SOUNDS');
					this.soundBank.preLoad(this.file);
					break;
				// CHUNK_MUSIC
				case 0x6669:
					debug('CHUNK_MUSIC');
					this.musicBank.preLoad(this.file);
					break;
			}

			// Positionne a la fin du chunk
			this.file.seek(posEnd);
		}

		this.context = new StandardRenderer(this.canvas);

		// Fixe le flags multiple samples
		this.soundPlayer.setMultipleSounds((this.gaFlags & CRunApp.GA_MIX) != 0);

		// Cree le sprite principal
		if (this.parentApp == null)
		{
			this.mainSprite = new Sprite();
		}

	},

	initScreenZoom:     function ()
	{
		this.bZoom = false;
		this.scAngle = 0;
		this.scScale = this.scScaleX = this.scScaleY = 1;
		this.scXSpot = this.scXDest = this.gaCxWin / 2;
		this.scYSpot = this.scYDest = this.gaCyWin / 2;
	},
	setUpdate:          function ()
	{
		window.setTimeout(window.ua + "()", 20);
	},
	startApplication:   function ()
	{
		//	    this.dwOptions |= CRunApp.AH2OPT_LOADDATAATSTART;        // FRANCOIS
		//	    this.dwOptions |= CRunApp.AH2OPT_LOADSOUNDSONTOUCH;

		// Specific sound handling if on iOS
		this.iOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent);
		if (this.iOS && this.soundBank.nHandlesReel > 0) // && (this.dwOptions & CRunApp.AH2OPT_LOADSOUNDSONTOUCH) != 0)
		{
			this.silentSound = new CSound(this);
			this.silentSound.loadSilent();
		}

		//		if (this.gaFlags&CRunApp.GA_STRETCH)
		this.resizeCanvas();

		this.sysEvents = new CArrayList();

		this.keyBuffer = new Array(CRunApp.MAX_VK);
		var n;
		for (n = 0; n < CRunApp.MAX_VK; n++)
			this.keyBuffer[n] = false;

		this.canvas.application = this;
		if (this.parentApp == null)
		{
			var that = this;
			window.addEventListener("keypress", function (e)
			{
				that.doKeyPress(e);
			}, false);
			window.addEventListener("keydown", function (e)
			{
				that.doKeyDown(e);
			}, false);
			window.addEventListener("keyup", function (e)
			{
				that.doKeyUp(e);
			}, false);
			window.addEventListener("blur", function (e)
			{
				that.hasFocus = false;
			}, false);
			window.addEventListener("focus", function (e)
			{
				that.hasFocus = true;
			}, false);
			if(window !== window.top)
			{
				try
				{
					var win2 = window.top;
					win2.addEventListener("focus", function()
					{
						that.hasFocus = true;
						that.canvas.focus();
					});
					win2.addEventListener("blur", function()
					{
						that.hasFocus = false;
					});
				}
				catch(e){}

			}
			window.addEventListener("resize", function (e)
			{
				that.resizeCanvas();
			}, false);
			document.addEventListener("blur", function (e)
			{
				that.hasFocus = false;
			}, false);
			document.addEventListener("focus", function (e)
			{
				that.hasFocus = true;
			}, false);
			document.addEventListener("fullscreenchange", function ()
			{
				that.fullScreen = document.fullscreen;
				that.resizeCanvas();
			}, false);
			document.addEventListener("mozfullscreenchange", function ()
			{
				that.fullScreen = document.mozFullScreen;
				that.resizeCanvas();
			}, false);
			document.addEventListener("webkitfullscreenchange", function ()
			{
				that.fullScreen = document.webkitIsFullScreen;
				that.resizeCanvas();
			}, false);

            // Does the browser support pointer events?
			if (window.PointerEvent) {
			    // Disable Edge default touch handling if Multiple Touch object is included
			    if (typeof (CRunMultipleTouch) === "undefined") {
			        //debug("Multiple Touch not included => keep touch interception by browser");
			    } else {
			        //debug("Multiple Touch included => disable touch interception by browser");
			        this.canvas.setAttribute("style", "-ms-touch-action: none;");
			        this.canvas.setAttribute("style", "touch-action: none;");
			    }

			    this.canvas.addEventListener('pointerdown', function (event) {
			        //where should re direct these events
			        switch (event.pointerType) {
			            case 'mouse':
			            case 'pen':
			                that.mouseDown(event, true);
			                break;
			            case 'touch':
			                that.touchStart(event, true);
			                break;
			        }

			        //prevent default firing
			        if (event.preventDefault) {
			            event.preventDefault();
			        }
			    }, false);

			    this.canvas.addEventListener('pointermove', function (event) {
			        //where should re direct these events
			        switch (event.pointerType) {
			            case 'mouse':
			            case 'pen':
			                that.mouseMove(event, that.canvas);
			                break;
			            case 'touch':
			                that.touchMove(event, true);
			                break;
			        }

			        //prevent default firing
			        if (event.preventDefault) {
			            event.preventDefault();
			        }
			    }, false);

			    this.canvas.addEventListener('pointerup', function (event) {
			        //where should re direct these events
			        switch (event.pointerType) {
			            case 'mouse':
			            case 'pen':
			                that.mouseUp(event);
			                break;
			            case 'touch':
			                that.touchEnd(event, true);
			                break;
			        }

			        if (event.preventDefault) {
			            event.preventDefault();
			        }
			    }, false);

			    this.canvas.addEventListener('pointercancel', function (event) {
			        //where should re direct these events
			        switch (event.pointerType) {
			            case 'touch':
			                that.touchEnd(event, true);
			                break;
			        }

			        if (event.preventDefault) {
			            event.preventDefault();
			        }
			    }, false);
			}
			else {
                // The browser doesn't support pointer events
			    this.canvas.addEventListener("mousemove", function (e) {
			        that.mouseMove(e, that.canvas);
			        if (e.preventDefault) e.preventDefault();
			    }, false);
			    this.canvas.addEventListener("mousedown", function (e) {
			        that.mouseDown(e, false);
			        if (e.preventDefault) e.preventDefault();
			    }, false);
			    this.canvas.addEventListener("mouseup", function (e) {
			        that.mouseUp(e);
			        if (e.preventDefault) e.preventDefault();
			    }, false);
			    this.canvas.addEventListener("mouseout", function (e) {
			        that.mouseOut(e);
			        if (e.preventDefault) e.preventDefault();
			    }, false);
			    this.canvas.addEventListener("click", function (e) {
			        that.click(e);
			        if (e.preventDefault) e.preventDefault();
			    }, false);
			    this.canvas.addEventListener("dblclick", function (e) {
			        that.dblClick(e);
			        if (e.preventDefault) e.preventDefault();
			    }, false);
			}
			this.canvas.addEventListener("contextmenu", function (e)
			{
				if (e.preventDefault) e.preventDefault();
			}, false);
			var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"
			if (document.attachEvent)
				document.attachEvent("on" + mousewheelevt, function (e)
				{
					that.mouseWheel(e);
				})
			else if (document.addEventListener)
				document.addEventListener(mousewheelevt, function (e)
				{
					that.mouseWheel(e);
				}, false)

			document.onselectstart = function ()
			{
				return false;
			}
			this.canvas.onselectstart = function (e)
			{
				if (e.preventDefault) e.preventDefault();
				return false;
			}

			this.touchable = this.isTouchable();
			this.touchCalls = new CArrayList();
			this.touchesID = new Array(CRunApp.MAX_TOUCHES);
			this.bTouchesLocked = new Array(CRunApp.MAX_TOUCHES);
			this.touchesLocked = new Array(CRunApp.MAX_TOUCHES);
			this.touchesX = new Array(CRunApp.MAX_TOUCHES);
			this.touchesY = new Array(CRunApp.MAX_TOUCHES);
			for (n = 0; n < CRunApp.MAX_TOUCHES; n++)
			{
				this.touchesID[n] = CRunApp.TOUCHID_EMPTY;
				this.touchesX[n] = 0;
				this.touchesY[n] = 0;
				this.bTouchesLocked[n] = false;
				this.touchesLocked[n] = 0;
			}
			this.nTouches = 0;

			if (this.touchable && !window.PointerEvent)
			{
				this.canvas.addEventListener('touchstart', function (e)
				{
					that.touchStart(e, false);
					if (e.preventDefault) e.preventDefault();
				}, false);
				this.canvas.addEventListener('touchmove', function (e)
				{
				    that.touchMove(e, false);
					if (e.preventDefault) e.preventDefault();
				}, false);
				this.canvas.addEventListener('touchend', function (e)
				{
				    that.touchEnd(e, false);
					if (e.preventDefault) e.preventDefault();
				}, false);
				this.canvas.addEventListener('touchcancel', function (e)
				{
				    that.touchEnd(e, false);
					if (e.preventDefault) e.preventDefault();
				}, false);
				/*
				 var body=document.getElementsByTagName("body")[0];
				 body.addEventListener( 'touchstart', function(e)
				 {
				 e.preventDefault();
				 }, false );
				 */
			}
			window.focus();
			this.setUpdate();
		}
		else
		{
			this.touchable = this.parentApp.touchable;
			this.touchCalls = new CArrayList();
			this.touchesID = new Array(CRunApp.MAX_TOUCHES);
			this.bTouchesLocked = new Array(CRunApp.MAX_TOUCHES);
			this.touchesLocked = new Array(CRunApp.MAX_TOUCHES);
			this.touchesX = new Array(CRunApp.MAX_TOUCHES);
			this.touchesY = new Array(CRunApp.MAX_TOUCHES);
			for (n = 0; n < CRunApp.MAX_TOUCHES; n++)
			{
				this.touchesID[n] = CRunApp.TOUCHID_EMPTY;
				this.touchesX[n] = 0;
				this.touchesY[n] = 0;
				this.bTouchesLocked[n] = false;
				this.touchesLocked[n] = 0;
			}
			this.nTouches = 0;
		}
		this.xMouseOffset = 0;
		this.yMouseOffset = 0;

		this.appRunningState = 0;
		this.currentFrame = -2;

		this.run = new CRun(this);
	},
	resizeCanvas:       function ()
	{

		/*		if(navigator.userAgent.match(/Android/i))
		 {
		 window.scrollTo(0,1);
		 }
		 */
		var width = this.gaCxWin;
		var height = this.gaCyWin;

		var innerWidth;
		var innerHeight;
		if (this.fullScreen || (this.gaFlags & CRunApp.GA_STRETCH))
		{
			innerWidth = window.innerWidth;
			innerHeight = window.innerHeight;
			document.documentElement.style.overflow = 'hidden';
			document.body.scroll = "no";
		}
		else
		{
			innerWidth = width;
			innerHeight = height;
		}
		var scaleX = innerWidth / width,
			scaleY = innerHeight / height;

		if ((this.dwOptions & CRunApp.AH2OPT_KEEPSCREENRATIO) || ((this.gaFlags & CRunApp.GA_STRETCH) && (this.gaFlags & CRunApp.GA_STRETCHTOFIT)))
			scaleX = scaleY = Math.min(scaleX, scaleY);

		if (scaleX != this.scaleX || scaleY != this.scaleY)
		{
			this.scaleX = scaleX;
			this.scaleY = scaleY;

			this.canvas.width = Math.floor(this.scaleX * width);
			this.canvas.height = Math.floor(this.scaleY * height);
			this.context.setScale(this.scaleX, this.scaleY);
			var leftX = window.innerWidth / 2 - this.canvas.width / 2;
			var topY = window.innerHeight / 2 - this.canvas.height / 2;
			/*
			this.canvas.style.left = leftX.toString() + "px";
			this.canvas.style.top = topY.toString() + "px";
			var objParent = this.canvas;
			while (objParent)
			{
				objParent.style.left = leftX.toString() + "px";
				objParent.style.top = topY.toString() + "px";
				objParent.position = "absolute";
				objParent = objParent.offsetParent;
			}
			/*
			 var objParent=this.canvas;
			 while (objParent)
			 {
			 objParent.style.left="0px";
			 objParent.style.top="0px";
			 objParent.position = "absolute";
			 objParent = objParent.offsetParent;
			 }
			 */
		}
		if (this.run)
			this.run.autoResize();
	},
	resetKeyBuffer:     function ()
	{
		var n;
		for (n = 0; n < CRunApp.MAX_VK; n++)
			this.keyBuffer[n] = false;
	},
	isTouchable:        function ()
	{
		var agents = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'Blackberry', 'Windows Phone', 'Touch'];
		var nav = navigator.userAgent;
		var i;
		for (i in agents)
		{
			if (nav.indexOf(agents[i]) >= 0)
			{
				return true;
			}
		}
		if (('ontouchstart' in window) ||
             (navigator.maxTouchPoints > 0) ||
             (navigator.msMaxTouchPoints > 0)) {
		    return true;
		}
		return false;
	},
	dataHasLoaded:      function (data)
	{
		this.dataLoading.removeObject(data);
		this.imagesLoaded++;
	},
	addDataToLoad:      function (data)
	{
		this.dataToLoad.add(data);
		this.imagesToLoad++;
		this.loading = true;
	},
	/*
	 loadAllDataNow:function()
	 {
	 while (this.dataToLoad.size() > 0)
	 {
	 var data = this.dataToLoad.get(0);
	 this.dataLoading.add(data);
	 this.dataToLoad.removeIndex(0);
	 data.doLoad();
	 }
	 },
	 */
	stepApplication:    function ()
	{
		if (this.infoPath)
		{
			this.infoCounter--;
			if (this.infoCounter < 0)
			{
				this.infoCounter = 1000000000;
				this.infoFile = new CFile();
				this.infoFile.getFile(this.infoPath + "info.dat", loadInfo);
			}
		}

		var date = new Date();
		this.timer = date.getTime();
		if (this.playApplication(false))
		{
			if (!this.loading)
			{
				if (this.parentApp == null)
				{
					if (this.transitionDisplay == null)
					{
						this.context.resetEffect((this.dwOptions & CRunApp.AH2OPT_RESAMPLESTRETCH) != 0);
						if (!this.previousFrameGraphics)
						{
							var clearBack = false;
							if (this.frame.leClearBackground) this.context.clearBackground(0, 0, this.gaCxWin, this.gaCyWin);
							else this.context.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, this.frameColor);
						}
						else
							this.context.renderSimpleImage(this.previousFrameGraphics, 0, 0, this.gaCxWin, this.gaCyWin, 0, 0);

						var context = this.context._context;

						if (this.bZoom)
						{
							bRestore = true;
							context.save();
							context.translate(this.scXDest, this.scYDest);
							if (this.scAngle != 0)
								context.rotate(-this.scAngle * 0.0174532925);
							context.scale(Math.max(0.001, this.scScaleX), Math.max(0.001, this.scScaleY));
							context.translate(-this.scXSpot, -this.scYSpot);
						}
						this.mainSprite.draw(this.context, 0, 0);
						if (this.bZoom)
						{
							context.restore();
						}
						if (this.joystickOn)
							this.joystick.draw(this.context);
						if (this.versionCodeDisplay)
						{
							this.versionCodeDisplay--;
							if (!this.versionCodeSurface)
							{
								var font = new CFont();
								font.createDefaultFont();
								font.lfHeight = 16;
								this.versionCodeSurface = new CTextSurface(this, this.gaCxWin, 30);
								this.versionCodeSurface.manualClear(0xFF0000);
								this.versionCodeSurface.manualDrawText(window["FusionVersion"], CServices.DT_CENTER | CServices.DT_VCENTER, null, 0xFFFFFF, font, 1, 0xA0A0A0);
							}
							this.versionCodeSurface.draw(this.context, 0, 0, 0, 0);
						}
					}
					else
					{
						this.context.resetEffect();
						this.context.renderSimpleImage(this.transitionDisplay, 0, 0, this.gaCxWin, this.gaCyWin, 0, 0);
					}
					if ((this.gaNewFlags & CRunApp.GANF_VSYNC) != 0 && window.requestAnimationFrame)
						window.requestAnimationFrame(updateApplication);
					else
					{
						var delta = (new Date()).getTime() - this.timer;
						delta = Math.max(1000 / this.gaFrameRate - delta, 1);
						window.setTimeout(updateApplication, delta);
					}
				}
			}
			else
			{
				if (this.preloader == null)
				{
					var color = this.frameColor;
					if (this.loadPreloader)
					{
						this.preloader = this.preloaderType == 0 ? new CPreloaderImage(this) : new CPreloaderFrame(this);
						if (this.preloaderType == 0 && this.preloaderBackColor != -1)
							color = this.preloaderBackColor;
					}
					else
						this.preloader = new CPreloaderDefault(this);
					this.preloaderLoaded = false;
					this.resetted = true;
					if (this.parentApp == null)
					{
					    if (this.frame.leClearBackground)
					        this.context.clearBackground(0, 0, this.canvas.width, this.canvas.height);
						else
						    this.context.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, color);

						this.setUpdate();
					}
					return;
				}
				if (this.preloader != null && this.preloaderLoaded == false)
				{
					this.preloaderLoaded = this.preloader.load();
					if (this.parentApp == null)
						this.setUpdate();
					return;
				}

				while (this.dataToLoad.size() > 0 && this.dataLoading.size() < this.dataLoadingStep)
				{
					var data = this.dataToLoad.get(0);
					this.dataLoading.add(data);
					this.dataToLoad.removeIndex(0);
					data.doLoad();
				}
				this.soundPlayer.decodeData();

				var bComplete = false;
				if (this.dataToLoad.size() == 0 && this.dataLoading.size() == 0)
					bComplete = true;
				if (this.preloader != null && ((this.dwOptions & CRunApp.AH2OPT_LOADDATAATSTART) != 0 || (this.frame.html5Options & CRunFrame.HTML5FOPT_DISPLAYPRELOADER) != 0))
				{
					if (!this.resetted)
					{
						this.preloader.reset();
						this.resetted = true;
					}
					this.preloader.step();
					bComplete = this.preloader.isComplete();
				}
				if (bComplete)
				{
					this.resetted = false;
					this.run.resume();
					this.run.callComputeNewDisplay();
					this.loading = false;
					this.imageBank.resetToLoad();
					this.soundBank.resetToLoad();
					this.musicBank.resetToLoad();
					this.fontBank.resetToLoad();
					this.imagesToLoad = 0;
					this.imagesLoaded = 0;
					if (this.bStartFadeIn)
					{
						this.bStartFadeIn = false;
						var quit = this.run.doRunLoop();
						if (quit != 0)
							this.appRunningState = CRunApp.SL_ENDFRAME;
						else
						{
							this.appRunningState = CRunApp.SL_FRAMELOOP;
							this.startFrameFadeIn(this.transitionOldSurface);
							this.transitionOldSurface = null;
						}
					}
				}
				if (this.parentApp == null)
				{
					this.setUpdate();
				}
			}
			return true;
		}
		else
		{
			this.endApplication();
			return false;
		}
	},
	drawSubApplication: function (cont, x, y, erase)
	{
		if (!this.loading)
		{
		    this.context.resetEffect((this.dwOptions & CRunApp.AH2OPT_RESAMPLESTRETCH) != 0);
		    if (this.transitionDisplay == null)
			{
				if (!erase)
					this.context.renderSolidColor(x, y, this.parentWidth, this.parentHeight, this.frameColor);
				this.context.clip(x, y, this.parentWidth, this.parentHeight);
				this.mainSprite.draw(this.context, 0, 0);
				this.context.unClip();
			}
			else
			{
				this.context.resetEffect();
				this.context.renderSimpleImage(this.transitionDisplay, x, y, this.gaCxWin, this.gaCyWin, 0, 0);
			}
		}
	},

	checkFocus: function ()
	{
		if ((this.dwOptions & CRunApp.AH2OPT_RUNEVENIFNOTFOCUS) == 0)
		{
			if (this.hasFocus)
			{
				if (this.bStoppedFocus)
				{
					this.run.resume();
					this.bStoppedFocus = false;
				}
			}
			else
			{
				var bKeepSounds = this.gaNewFlags & CRunApp.GANF_SAMPLESEVENIFNOTFOCUS;
				this.run.pause(bKeepSounds);
				this.bStoppedFocus = true;
			}
		}
	},

	playApplication: function (bOnlyRestartApp)
	{
		this.checkFocus();

		var bLoop = true;
		var bContinue = true;
		do
		{
			switch (this.appRunningState)
			{
				case CRunApp.SL_RESTART:
					this.initGlobal();
					this.nextFrame = this.startFrame;
					this.appRunningState = 1;
					this.killGlobalData();
					if (bOnlyRestartApp)
					{
						bLoop = false;
						break;
					}
				case CRunApp.SL_STARTFRAME:
					this.startTheFrame();
					break;
				case CRunApp.SL_FRAMEFADEINLOOP:
					if (this.loopFrameFadeIn() == false)
					{
						this.endFrameFadeIn();
						if (this.appRunningState == CRunApp.SL_QUIT || this.appRunningState == CRunApp.SL_RESTART)
							this.endFrame();
					}
					else
						bLoop = false;
					break;
				case CRunApp.SL_FRAMELOOP:
					this.run.doRunLoop();
					if (this.run.rhQuit != 0)
					{
						if (this.startFrameFadeOut())
							this.appRunningState = CRunApp.SL_FRAMEFADEOUTLOOP;
						else
							this.endFrame();
					}
					else
						bLoop = false;
					break;
				case CRunApp.SL_FRAMEFADEOUTLOOP:
					if (this.loopFrameFadeOut() == false)
					{
						this.endFrameFadeOut();
						if (this.appRunningState == CRunApp.SL_QUIT || this.appRunningState == CRunApp.SL_RESTART)
							this.endFrame();
					}
					else
						bLoop = false;
					break;
				case CRunApp.SL_ENDFRAME:
					this.endFrame();
					break;
				default:
					bLoop = false;
					break;
			}
		} while (bLoop == true);

		// Quit ?
		if (this.appRunningState == CRunApp.SL_QUIT)
		{
			bContinue = false;
		}
		// Continue?
		return bContinue;
	},

	endApplication: function ()
	{
		// Remove listeners
		//		if (this.parentApp==null)
		//		{
		//			// Remove event handlers
		//		}

		// Stop sounds
		if (this.soundPlayer != null)
		{
			this.soundPlayer.stopAllSounds();
		}
		//		this.exitFullScreen();
	},

	startTheFrame: function ()
	{
		// Charge la frame
		if (this.nextFrame != this.currentFrame)
		{
			this.frame = new CRunFrame(this);
			this.frame.loadFullFrame(this.nextFrame);
		}
		this.frameColor = this.frame.leBackground;
		this.currentFrame = this.nextFrame;

		// Init runtime variables
		this.frame.leX = this.frame.leY = 0;
		this.frame.leLastScrlX = this.frame.leLastScrlY = 0;
		this.frame.rhOK = false;
		this.initScreenZoom();

		// Creates display planes
		var n;
		if (this.parentApp != null)
		{
			this.xOffset = 0;
			this.yOffset = 0;
		}
		else
		{
			this.xOffset = this.gaCxWin / 2 - this.frame.leEditWinWidth / 2;
			this.yOffset = this.gaCyWin / 2 - this.frame.leEditWinHeight / 2;
		}
		for (n = 0; n < this.frame.nLayers; n++)
		{
			this.frame.layers[n].createPlanes(this.xOffset, this.yOffset);
		}

		if (this.frame.leFlags & CRunFrame.LEF_DISPLAYNAME)
			document.title = this.frame.frameName;
		this.previousFrameGraphics = null;
		if (this.frame.leFlags & CRunFrame.LEF_KEEPDISPLAY)
			this.previousFrameGraphics = this.transitionOldSurface;
		if(this.frame.leFlags & CRunFrame.LEF_TRANSPARENTBKD)
			this.frame.leClearBackground = true;

		this.run.setFrame(this.frame);
		this.run.initRunLoop(this.frame.fadeIn != null);
		this.appRunningState = CRunApp.SL_FRAMELOOP;
		if (this.frame.fadeIn != null)
		{
			if (this.loading)
			{
				this.bStartFadeIn = true;
			}
			else
			{
				var quit = this.run.doRunLoop();
				if (quit != 0)
					this.appRunningState = CRunApp.SL_ENDFRAME;
				else
				{
					this.appRunningState = CRunApp.SL_FRAMELOOP;
					this.startFrameFadeIn(this.transitionOldSurface);
					this.transitionOldSurface = null;
				}
			}
		}
		else
		{
			this.transitionOldSurface = null;
		}
		if (this.loading)
			this.run.pause(true);
		else
			this.run.callComputeNewDisplay();
	},

	resetLayers: function ()
	{
		if (this.parentApp != null)
		{
			this.xOffset = 0;
			this.yOffset = 0;
		}
		else
		{
			this.xOffset = this.gaCxWin / 2 - this.frame.leEditWinWidth / 2;
			this.yOffset = this.gaCyWin / 2 - this.frame.leEditWinHeight / 2;
		}
		var n;
		for (n = 0; n < this.frame.nLayers; n++)
		{
			this.frame.layers[n].resetPlanes(this.xOffset, this.yOffset);
		}
	},

	endFrame: function ()
	{
		var ul;
		ul = this.run.killRunLoop(false);

		if ((this.gaNewFlags & CRunApp.GANF_RUNFRAME) != 0)
		{
			this.appRunningState = CRunApp.SL_QUIT;
		}
		else
		{
			switch (CServices.LOWORD(ul))
			{
				case 1:
					this.nextFrame = this.currentFrame + 1;
					if ( this.preloaderType == 1 && this.nextFrame == this.preloaderFrameNumber )
						this.nextFrame++;
					this.appRunningState = CRunApp.SL_STARTFRAME;
					if (this.nextFrame >= this.gaNbFrames)
						this.appRunningState = CRunApp.SL_QUIT;
					break;
				case 2:
					this.nextFrame = Math.max(0, this.currentFrame - 1);
					if ( this.preloaderType == 1 && this.nextFrame == this.preloaderFrameNumber )
					{
						if ( this.nextFrame == 0 )
							this.nextFrame = this.currentFrame;
						else
							this.nextFrame--;
					}
					this.appRunningState = CRunApp.SL_STARTFRAME;
					break;
				case 3:
					this.appRunningState = CRunApp.SL_STARTFRAME;
					if ((CServices.HIWORD(ul) & 0x8000) != 0)
					{
						this.nextFrame = CServices.HIWORD(ul) & 0x7FFF;
						if (this.nextFrame >= this.gaNbFrames)
						{
							this.nextFrame = this.gaNbFrames - 1;
						}
						if (this.nextFrame < 0)
						{
							this.nextFrame = 0;
						}
					}
					else
					{
						if (CServices.HIWORD(ul) < this.frameMaxHandle)
						{
							this.nextFrame = this.frameHandleToIndex[CServices.HIWORD(ul)];
							if (this.nextFrame == -1)
							{
								this.nextFrame = this.currentFrame + 1;
							}
						}
						else
						{
							this.nextFrame = this.currentFrame + 1;
						}
					}
					break;

				case 4:
					this.appRunningState = CRunApp.SL_RESTART;
					this.nextFrame = this.startFrame;
					break;

				default:
					this.appRunningState = CRunApp.SL_QUIT;
					break;
			}
		}

		if (this.appRunningState == CRunApp.SL_STARTFRAME)
		{
			// If invalid frame number, quit current game
			if (this.nextFrame < 0 || this.nextFrame >= this.gaNbFrames)
			{
				this.appRunningState = this.currentFrame;
			}
		}

		if (this.appRunningState != CRunApp.SL_STARTFRAME || this.nextFrame != this.currentFrame)
		{
			var n;
			for (n = 0; n < this.frame.nLayers; n++)
			{
				this.frame.layers[n].deletePlanes();
			}

			this.frame = null;
			this.currentFrame = -1;
		}
	},

	getTransitionManager: function ()
	{
		if (this.transitionManager == null)
		{
			this.transitionManager = new CTransitionManager(this);
		}
		return this.transitionManager;
	},

	startFrameFadeIn: function (pOldSurf)
	{
		var pSf1 = null;
		var pSf2 = null;
		var pData = this.frame.fadeIn;

		if (pData != null)
		{
			pSf1 = document.createElement("canvas");
			pSf1.width = this.gaCxWin;
			pSf1.height = this.gaCyWin;
			pSf2 = document.createElement("canvas");
			pSf2.width = this.gaCxWin;
			pSf2.height = this.gaCyWin;
			var renderer = new StandardRenderer(pSf2);
			renderer.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, this.frameColor);
			this.mainSprite.draw(renderer, 0, 0);

			// Fill source surface
			renderer = new StandardRenderer(pSf1);
			if ((pData.transFlags & CTransitionData.TRFLAG_COLOR) != 0)
				renderer.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, pData.transColor);
			else
			{
				renderer.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, this.gaBorderColour);
				if (pOldSurf != null)
					renderer.renderSimpleImage(pOldSurf, 0, 0, pOldSurf.width, pOldSurf.height, 0, 0);
			}

			// Reset current surface
			this.transitionDisplay = document.createElement("canvas");
			this.transitionDisplay.width = this.gaCxWin;
			this.transitionDisplay.height = this.gaCyWin;
			var context = this.transitionDisplay.getContext("2d");
			context.drawImage(pSf1, 0, 0);
			this.transition = this.getTransitionManager().createTransition(pData, this.transitionDisplay, pSf1, pSf2);
			if (this.transition != null)
			{
				this.appRunningState = CRunApp.SL_FRAMEFADEINLOOP;
				return true;
			}
		}
		this.transitionDisplay = null;
		this.appRunningState = CRunApp.SL_FRAMELOOP;
		this.run.createRemainingFrameObjects();
		return false;
	},

	loopFrameFadeIn: function ()
	{
		if (this.transition != null)
		{
			if (this.transition.isCompleted())
			{
				return false;
			}
			this.transition.stepDraw(CTrans.TRFLAG_FADEIN);
			return true;
		}
		return false;
	},

	endFrameFadeIn: function ()
	{
		if (this.transition != null)
		{
			this.transition.end();
			this.transition = null;
			this.transitionDisplay = null;
			if (this.appRunningState == CRunApp.SL_FRAMEFADEINLOOP)
			{
				this.appRunningState = CRunApp.SL_FRAMELOOP;
			}
			this.run.createRemainingFrameObjects();
		}
		return true;
	},

	startFrameFadeOut: function ()
	{
		var pSf1 = null;
		var pSf2 = null;
		var pData = this.frame.fadeOut;

		// V2 transitions
		if (pData != null)
		{
			pSf1 = document.createElement("canvas");
			pSf1.width = this.gaCxWin;
			pSf1.height = this.gaCyWin;
			pSf2 = document.createElement("canvas");
			pSf2.width = this.gaCxWin;
			pSf2.height = this.gaCyWin;
			var renderer = new StandardRenderer(pSf1);
			renderer.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, this.frameColor);
			this.mainSprite.draw(renderer, 0, 0);

			renderer = new StandardRenderer(pSf2);
			if ((pData.transFlags & CTransitionData.TRFLAG_COLOR) != 0)
				renderer.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, pData.transColor);
			else
				renderer.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, 0x000000);

			this.transitionDisplay = document.createElement("canvas");
			this.transitionDisplay.width = this.gaCxWin;
			this.transitionDisplay.height = this.gaCyWin;
			var context = this.transitionDisplay.getContext("2d");
			context.drawImage(pSf1, 0, 0);
			this.transition = this.getTransitionManager().createTransition(pData, this.transitionDisplay, pSf1, pSf2);
			if (this.transition != null)
			{
				this.appRunningState = CRunApp.SL_FRAMEFADEOUTLOOP;
				return true;
			}
		}
		this.transitionDisplay = null;
		return false;
	},

	loopFrameFadeOut: function ()
	{
		if (this.transition != null)
		{
			if (this.transition.isCompleted())
			{
				this.endFrameFadeOut();
				return false;		// Stop
			}
			this.transition.stepDraw(CTrans.TRFLAG_FADEOUT);
		}
		return true;
	},

	endFrameFadeOut: function ()
	{
		if (this.transition != null)
		{
			this.transitionOldSurface = this.transition.source2;
			this.transition.end();
			this.transition = null;
			this.transitionDisplay = null;
			if (this.appRunningState == CRunApp.SL_FRAMEFADEOUTLOOP)
			{
				this.appRunningState = CRunApp.SL_ENDFRAME;
			}
		}
		return true;
	},

	loadAppHeader: function ()
	{
		this.file.skipBytes(4);
		this.gaFlags = this.file.readAShort('gaFlags');
		this.gaNewFlags = this.file.readAShort('gaNewFlags');
		this.gaMode = this.file.readAShort('gaMode');
		this.gaOtherFlags = this.file.readAShort('gaOtherFlags');
		this.gaCxWin = this.file.readAShort('gaCxWin');
		this.gaCyWin = this.file.readAShort('gaCyWin');
		this.gaScoreInit = this.file.readAInt('gaScoreInit');
		this.gaLivesInit = this.file.readAInt('gaLivesInit');
		var n, m;
		this.pcCtrlType = new Array(CRunApp.MAX_PLAYER);
		for (n = 0; n < CRunApp.MAX_PLAYER; n++)
			this.pcCtrlType[n] = this.file.readAShort('pcCtrlType[n]');
		this.pcCtrlKeys = new Array(CRunApp.MAX_PLAYER * CRunApp.MAX_KEY);
		for (n = 0; n < CRunApp.MAX_PLAYER; n++)
		{
			for (m = 0; m < CRunApp.MAX_KEY; m++)
			{
				this.pcCtrlKeys[n * CRunApp.MAX_KEY + m] = this.file.readAShort('pcCtrlKeys[n * CRunApp.MAX_KEY + m]');	//CKeyConvert.getFlashKey(file.readAShort());
			}
		}
		this.gaBorderColour = this.file.readAColor('gaBorderColour');
		this.gaNbFrames = this.file.readAInt('gaNbFrames');
		this.gaFrameRate = this.file.readAInt('gaFrameRate');
		this.file.skipBytes(1);
		this.file.skipBytes(3);
	},

	loadGlobalValues: function ()
	{
		this.nGlobalValuesInit = this.file.readAShort('nGlobalValuesInit');
		this.globalValuesInit = new Array(this.nGlobalValuesInit);
		this.globalValuesInitTypes = new Array(this.nGlobalValuesInit);
		var n;
		for (n = 0; n < this.nGlobalValuesInit; n++)
			this.globalValuesInit[n] = this.file.readAInt('globalValuesInit[n]');
		this.file.readBytesAsArray(this.globalValuesInitTypes);
	},

	loadGlobalStrings: function ()
	{
		this.nGlobalStringsInit = this.file.readAInt('nGlobalStringsInit');
		this.globalStringsInit = new Array(this.nGlobalStringsInit);
		var n;
		for (n = 0; n < this.nGlobalStringsInit; n++)
			this.globalStringsInit[n] = this.file.readAString('globalStringsInit[n]');
	},

	loadFrameHandles: function (size)
	{
		this.frameMaxHandle = (size / 2);
		this.frameHandleToIndex = new Array(this.frameMaxHandle);

		var n;
		for (n = 0; n < this.frameMaxHandle; n++)
		{
			this.frameHandleToIndex[n] = this.file.readAShort('frameHandleToIndex[n]');
		}
	},

	HCellToNCell: function (hCell)
	{
		if (this.frameHandleToIndex == null || hCell == -1 || hCell >= this.frameMaxHandle)
		{
			return -1;
		}
		return this.frameHandleToIndex[hCell];
	},

	getGraphicFont: function (font)
	{
		if (this.graphicFonts)
		{
			var n;
			for (n = 0; n < this.graphicFonts.size(); n++)
			{
				gFont = this.graphicFonts.get(n);
				if (gFont.compareFont(font))
				{
					return gFont;
				}
			}
		}
		return font;
	},

	killGlobalData: function ()
	{
		this.adGO = null;
	},

	initGlobal: function ()
	{
		var n;

		// Vies et score
		if (this.parentApp == null || (this.parentApp != null && (this.parentOptions & CCCA.CCAF_SHARE_LIVES) == 0))
		{
			this.lives = new Array(CRunApp.MAX_PLAYER);
			for (n = 0; n < CRunApp.MAX_PLAYER; n++)
			{
				this.lives[n] = this.gaLivesInit ^ 0xFFFFFFFF;
			}
		}
		else
		{
			this.lives = null;
		}
		if (this.parentApp == null || (this.parentApp != null && (this.parentOptions & CCCA.CCAF_SHARE_SCORES) == 0))
		{
			this.scores = new Array(CRunApp.MAX_PLAYER);
			for (n = 0; n < CRunApp.MAX_PLAYER; n++)
			{
				this.scores[n] = this.gaScoreInit ^ 0xFFFFFFFF;
			}
		}
		else
		{
			this.scores = null;
		}
		this.playerNames = new Array(CRunApp.MAX_PLAYER);
		for (n = 0; n < CRunApp.MAX_PLAYER; n++)
		{
			this.playerNames[n] = "";
		}

		// Global values
		if (this.parentApp == null || (this.parentApp != null && (this.parentOptions & CCCA.CCAF_SHARE_GLOBALVALUES) == 0))
		{
			this.gValues = new Array(this.nGlobalValuesInit);
			for (n = 0; n < this.nGlobalValuesInit; n++)
				this.gValues[n] = this.globalValuesInit[n];
		}
		else
			this.gValues = null;

		// Global strings
		if (this.parentApp == null || (this.parentApp != null && (this.parentOptions & CCCA.CCAF_SHARE_GLOBALVALUES) == 0))
		{
			this.gStrings = new Array(this.nGlobalStringsInit);
			for (n = 0; n < this.nGlobalStringsInit; n++)
				this.gStrings[n] = this.globalStringsInit[n];
		}
		else
			this.gStrings = null;
	},

	getLives:          function ()
	{
		var app = this;
		while (app.lives == null)
			app = this.parentApp;
		return app.lives;
	},
	getScores:         function ()
	{
		var app = this;
		while (app.scores == null)
			app = this.parentApp;
		return app.scores;
	},
	getCtrlType:       function ()
	{
		var app = this;
		while (app.parentApp != null && (app.parentOptions & CCCA.CCAF_SHARE_PLAYERCTRLS) != 0)
			app = app.parentApp;
		return app.pcCtrlType;
	},
	getCtrlKeys:       function ()
	{
		var app = this;
		while (app.parentApp != null && (app.parentOptions & CCCA.CCAF_SHARE_PLAYERCTRLS) != 0)
			app = app.parentApp;
		return app.pcCtrlKeys;
	},
	getGlobalValues:   function ()
	{
		var app = this;
		while (app.gValues == null)
			app = app.parentApp;
		return app.gValues;
	},
	getNGlobalValues:  function ()
	{
		if (this.gValues != null)
			return gValues.length;
		return 0;
	},
	getGlobalStrings:  function ()
	{
		var app = this;
		while (app.gStrings == null)
			app = app.parentApp;
		return app.gStrings;
	},
	getNGlobalStrings: function ()
	{
		if (this.gStrings != null)
			return gStrings.length;
		return 0;
	},
	checkGlobalValue:  function (num)
	{
		var values = this.getGlobalValues();

		if (num < 0 || num > 1000)
			return null;
		var oldSize = values.length;
		if (num + 1 > oldSize)
		{
			var n;
			for (n = oldSize; n < num + 1; n++)
				values.push(0);
		}
		return values;
	},
	getGlobalValueAt:  function (num)
	{
		var values = this.checkGlobalValue(num);
		if (values != null)
			return values[num];
		return 0;
	},
	setGlobalValueAt:  function (num, value)
	{
		var values = this.checkGlobalValue(num);
		if (values != null)
			values[num] = value;
	},
	addGlobalValueAt:  function (num, value)
	{
		var values = this.checkGlobalValue(num);
		if (values != null)
			values[num] += value;
	},
	checkGlobalString: function (num)
	{
		var strings = this.getGlobalStrings();

		if (num < 0 || num > 1000)
			return null;
		var oldSize = strings.length;
		if (num + 1 > oldSize)
		{
			var n;
			for (n = oldSize; n < num + 1; n++)
				strings.push("");
		}
		return strings;
	},
	getGlobalStringAt: function (num)
	{
		var strings = this.checkGlobalString(num);
		if (strings != null)
			return strings[num];
		return "";
	},
	setGlobalStringAt: function (num, value)
	{
		var strings = this.checkGlobalString(num);
		if (strings != null)
			strings[num] = value;
	},

	// Event handlers
	// -----------------------------------------------------
	doKeyPress:        function (e)
	{
		if (e)
		{
			if (this.versionCode.charCodeAt(this.versionCodePos) == e.charCode)
			{
				this.versionCodePos++;
				if (this.versionCodePos == this.versionCode.length)
				{
					this.versionCodeDisplay = 50 * 5;
					this.versionCodePos = 0;
				}
			}
			else
			{
				this.versionCodePos = 0;
			}
		}
	},
	doKeyDown:         function (e)
	{
		if (e)
		{
			// Handles key events
			var code = e.keyCode;
			this.keyBuffer[code] = true;
			this.keyNew = true;
			if (this.run != null && this.run.rhEvtProg != null)
				this.run.rhEvtProg.onKeyDown(code);
			var n;
			for (n = 0; n < this.subApps.length; n++)
				this.subApps[n].doKeyDown(e);
		}
	},
	doKeyUp:           function (e)
	{
		if (e)
		{
			var code = e.keyCode;
			this.keyBuffer[code] = false;
			var n;
			for (n = 0; n < this.subApps.length; n++)
				this.subApps[n].doKeyUp(e);
		}
	},
	getKeyState:       function (code)
	{
		return this.keyBuffer[code];
	},
	setMouseOffsets:   function (xOffset, yOffset)
	{
		this.xMouseOffset = xOffset;
		this.yMouseOffset = yOffset;
	},
	mouseMove:         function (e, obj, flag)
	{
		if (e.pageX)
		{
			this.mouseX = e.pageX;
			this.mouseY = e.pageY;
		}
		else if (e.clientY)
		{
			this.mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			this.mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		var top = 0;
		var left = 0;
		var objParent = obj;
		while (objParent && objParent.tagName != 'BODY')
		{
			top += objParent.offsetTop;
			left += objParent.offsetLeft;
			objParent = objParent.offsetParent;
		}
		this.bMouseIn = true;
		this.mouseX -= left + this.xMouseOffset;
		this.mouseY -= top + this.yMouseOffset;
		this.mouseX = Math.floor(this.mouseX / this.scaleX);
		this.mouseY = Math.floor(this.mouseY / this.scaleY);
		if (this.run != null && this.run.rhEvtProg != null)
			this.run.rhEvtProg.onMouseMove();

		var n;
		for (n = 0; n < this.subApps.length; n++)
			this.subApps[n].mouseMove(e, obj);

		if (!this.touchable && flag != 0x12345678)
		    this.touchMove(new CFakeTouch(e.pageX, e.pageY, this.canvas), false);
	},
	_mouseButtonFromEvent: function (event) {
	    if (event.which) {
	        switch (event.which) {
	            case 2:
	                return CRunApp.VK_MBUTTON;
	                break;
	            case 3:
	                return CRunApp.VK_RBUTTON;
	                break;
	            default:
	                return CRunApp.VK_LBUTTON;
	                break;
	        }
	    } else {
	        switch (event.button) {
	            case 2:
	                return CRunApp.VK_RBUTTON;
	                break;
	            case 4:
	                return CRunApp.VK_MBUTTON;
	                break;
	            default:
	                return CRunApp.VK_LBUTTON;
	                break;
	        }
	    }
	},
	mouseUp: function (e)
	{
		var code = this._mouseButtonFromEvent(e);
		this.mouseMove(e, this.canvas, 0x12345678);
		this.bMouseIn = true;
		this.keyBuffer[code] = false;

		var n;
		for (n = 0; n < this.subApps.length; n++)
			this.subApps[n].mouseUp(e);

		if (!this.touchable)
		    this.touchEnd(new CFakeTouch(e.pageX, e.pageY, this.canvas), false);
	},
	mouseDown: function (e, pointerEvent)
	{
	    var code = this._mouseButtonFromEvent(e);
	    this.mouseMove(e, this.canvas, 0x12345678);
		this.bMouseIn = true;
		this.keyNew = true;
		this.keyBuffer[code] = true;

	    // Enable sounds in Chrome
		this.enableSoundsInChrome();

	    //handle mouse button event
		if (this.run != null && this.run.rhEvtProg != null) {
		    if (pointerEvent) {
		        //single or double click?
		        var now = Date.now();
		        var nClicks = (this.mouseDoubleClickTimestamp !== null && this.mouseDoubleClickCode == code && now - this.mouseDoubleClickTimestamp <= CRunApp.MOUSE_DOUBLE_CLICK_DELAY) ? 2 : 1;
		        this.mouseDoubleClickCode = code;
		        this.mouseDoubleClickTimestamp = now;
		        this.run.rhEvtProg.onMouseButton(code - CRunApp.VK_LBUTTON, nClicks);
		    }
		    else {

		        if (this.browserDetect.isIE) {
		            this.run.rhEvtProg.onMouseButton(code - CRunApp.VK_LBUTTON, 1);
		        }
		        else {
		            //single or double click, we check the number of "clicks" in quick repetition check for odd/even
		            //e.detail % 2 == 0 is double click!
		            this.run.rhEvtProg.onMouseButton(code - CRunApp.VK_LBUTTON, e.detail % 2 == 0 ? 2 : 1);
		        }
		    }
		}

	    //pass to sub apps
		var n;
		for (n = 0; n < this.subApps.length; n++)
		    this.subApps[n].mouseDown(e, pointerEvent);

	    //handle touches
		if (!this.touchable)
		    this.touchStart(new CFakeTouch(e.pageX, e.pageY, this.canvas), false);

	    // Build 289: give focus to window when user clicks
		window.focus();
	},
	forceMouseButton:  function (bDown)
	{
		this.keyBuffer[CRunApp.VK_LBUTTON] = bDown;
		var n;
		for (n = 0; n < this.subApps.length; n++)
			this.subApps[n].forceMouseButton(bDown);
	},
	mouseOut:          function (e)
	{
		this.bMouseIn = false;
		this.keyBuffer[CRunApp.VK_LBUTTON] = false;
		this.keyBuffer[CRunApp.VK_MBUTTON] = false;
		this.keyBuffer[CRunApp.VK_RBUTTON] = false;
		var n;
		for (n = 0; n < this.subApps.length; n++)
			this.subApps[n].mouseOut(e);
		if (!this.touchable)
		    this.touchEnd(new CFakeTouch(e.pageX, e.pageY, this.canvas), false);
	},
    // For IE only
	click:             function (e)
	{
	    if (this.browserDetect.isIE) {
	        //if (this.run != null && this.run.rhEvtProg != null)
	        //  this.run.rhEvtProg.onMouseButton(0, 1);

	        // Handles clicks
	        var n;
	        for (n = 0; n < this.subApps.length; n++)
	            this.subApps[n].click(e);
	    }
	},
    // For IE only
	dblClick:          function (e)
	{
	    if (this.browserDetect.isIE) {
	        if (this.run != null && this.run.rhEvtProg != null)
	            this.run.rhEvtProg.onMouseButton(0, 2);

	        var n;
	        for (n = 0; n < this.subApps.length; n++)
	            this.subApps[n].dblClick(e);
	    }
	},
	mouseWheel:        function (e)
	{
		this.bMouseIn = true;
		if ((typeof e.wheelDelta != 'undefined'))
			this.deltaWheel = e.wheelDelta / 40;
		else
			this.deltaWheel = -e.detail;
		if (this.run != null && this.run.rhEvtProg != null)
			this.run.onMouseWheel(this.deltaWheel);
	},

    // Enable sounds in Chrome
	enableSoundsInChrome: function ()
	{
	    if (this.browserDetect.isChrome && this.soundContext != null && this.soundContext.state == 'suspended')
	        this.soundContext.resume();
	},

	touchStart: function (event, pointerEvent)
	{
        // Enable sounds in Chrome
	    this.enableSoundsInChrome();

	    // Enable sounds on iOS
	    if (!this.iOS && this.silentSound)
		{
			this.silentSound.playIt();
			this.silentSound = null;
		}

		if (this.touchesID == null)
			return;

		var n, m;
		var nTouches = (pointerEvent) ? 1 : event.changedTouches.length;
		for (n = 0; n < nTouches; n++)
		{
		    var touch;
		    if (pointerEvent) {
		        touch = event;
		        touch.identifier = event.pointerId;
		    } else {
		        touch = event.changedTouches[n];
		    }

			for (m = 0; m < CRunApp.MAX_TOUCHES; m++)
			{
				if (this.touchesID[m] == CRunApp.TOUCHID_EMPTY)
				{
					this.touchesID[m] = touch.identifier;
					this.bTouchesLocked[m] = false;

					for (o = 0; o < this.touchCalls.size(); o++)
					{
						if (this.touchCalls.get(o).touchStarted(touch))
						{
							this.bTouchesLocked[m] = true;
							this.touchesLocked[m] = o;
							break;
						}
					}

					if (!this.bTouchesLocked[m])
					{
						this.touchesX[m] = this.getTouchX(touch);
						this.touchesY[m] = this.getTouchY(touch);
						if (this.mouseTouch == CRunApp.TOUCHID_EMPTY && touch.identifier != CRunApp.FAKE_TOUCHIDENTIFIER)
						{
							this.mouseTouch = m;
							this.mouseX = this.touchesX[m];
							this.mouseY = this.touchesY[m];
							this.bMouseIn = true;
							this.keyNew = true;
							this.keyBuffer[CRunApp.VK_LBUTTON] = true;
							if (this.run != null && this.run.rhEvtProg != null)
								this.run.rhEvtProg.onMouseButton(0, 1);
							var p;
							for (p = 0; p < this.subApps.length; p++)
							    this.subApps[p].touchStart(event, pointerEvent);
						}
					}
					break;
				}
			}
		}
	},
	touchMove: function (event, pointerEvent)
	{
		if (this.touchesID == null)
			return;

		var n, m, o;
		var nTouches = (pointerEvent) ? 1 : event.changedTouches.length;
		for (n = 0; n < nTouches; n++)
		{
		    var touch;
		    if (pointerEvent) {
		        touch = event;
		        touch.identifier = event.pointerId;
		    } else {
		        touch = event.changedTouches[n];
		    }

			for (m = 0; m < CRunApp.MAX_TOUCHES; m++)
			{
				if (this.touchesID[m] == touch.identifier)
				{
					if (this.bTouchesLocked[m])
					{
						this.touchCalls.get(this.touchesLocked[m]).touchMoved(touch);
					}
					else
					{
						for (o = 0; o < this.touchCalls.size(); o++)
							this.touchCalls.get(o).touchMoved(touch);
						this.touchesX[m] = this.getTouchX(touch);
						this.touchesY[m] = this.getTouchY(touch);
					}
					if (this.mouseTouch == m)
					{
						this.mouseX = this.touchesX[m];
						this.mouseY = this.touchesY[m];
						if (this.run != null && this.run.rhEvtProg != null)
							this.run.rhEvtProg.onMouseMove();
						var p;
						for (p = 0; p < this.subApps.length; p++)
						    this.subApps[p].touchMove(event, pointerEvent);
					}
					break;
				}
			}
		}
	},
	touchEnd: function (event, pointerEvent)
	{
	    // Enable sounds on iOS
	    if (this.iOS && this.silentSound) {
	        this.silentSound.playIt();
	        this.silentSound = null;
	    }

	    if (this.touchesID == null)
			return;

		var n, m, o;
		var nTouches = (pointerEvent) ? 1 : event.changedTouches.length;
		for (n = 0; n < nTouches; n++)
		{
		    var touch;
		    if (pointerEvent) {
		        touch = event;
		        touch.identifier = event.pointerId;
		    } else {
		        touch = event.changedTouches[n];
		    }

			for (m = 0; m < CRunApp.MAX_TOUCHES; m++)
			{
				if (this.touchesID[m] == touch.identifier)
				{
					this.touchesID[m] = CRunApp.TOUCHID_EMPTY;

					if (this.bTouchesLocked[m])
					{
						this.touchCalls.get(this.touchesLocked[m]).touchEnded(touch);
					}
					else
					{
						for (o = 0; o < this.touchCalls.size(); o++)
							this.touchCalls.get(o).touchEnded(touch);
						this.touchesX[m] = this.getTouchX(touch);
						this.touchesY[m] = this.getTouchY(touch);
					}
					if (m == this.mouseTouch)
					{
						this.mouseX = this.touchesX[m];
						this.mouseY = this.touchesY[m];
						this.mouseTouch = CRunApp.TOUCHID_EMPTY;
						this.keyBuffer[CRunApp.VK_LBUTTON] = false;
						var p;
						for (p = 0; p < this.subApps.length; p++)
						    this.subApps[p].touchEnd(event, pointerEvent);
					}
				}
			}
		}
	},

	getTouchX: function (touch)
	{
		var x = touch.pageX;
		var objParent = touch.target;
		while (objParent && objParent.tagName != 'BODY')
		{
			x -= objParent.offsetLeft;
			objParent = objParent.offsetParent;
		}
		return Math.floor((x - this.xMouseOffset) / this.scaleX);
	},

	getTouchY: function (touch)
	{
		var y = touch.pageY;
		var objParent = touch.target;
		while (objParent && objParent.tagName != 'BODY')
		{
			y -= objParent.offsetTop;
			objParent = objParent.offsetParent;
		}
		return Math.floor((y - this.yMouseOffset) / this.scaleY);
	},

	addTouchCall: function (object)
	{
		this.touchCalls.add(object);
	},

	removeTouchCall: function (object)
	{
		this.touchCalls.removeObject(object);
	},

	// Embedded files
	// ----------------
	getEmbeddedFile: function (path)
	{
		if (this.embeddedFiles != null)
		{
			var n;
			var pos = path.lastIndexOf("\\");
			if (pos < 0)
				pos = path.lastIndexOf('/');
			if (pos >= 0)
				path = path.substring(pos + 1);

			for (n = 0; n < this.embeddedFiles.length; n++)
			{
				if (this.embeddedFiles[n].path == path)
				{
					return this.embeddedFiles[n];
				}
			}
		}
		return null;
	},

	showCursor:      function (count)
	{
		this.cursorCount = count;
		if (this.cursorCount >= 0)
			this.canvas.style.cursor = this.cursor;
		else
			this.canvas.style.cursor = "none";
	},


	// Full screen
	// ----------------------------------
	enterFullScreen: function ()
	{
		if (this.canvas["requestFullScreen"])
			this.canvas["requestFullScreen"]();
		else if (this.canvas["webkitRequestFullScreen"])
			this.canvas["webkitRequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT);
		else if (this.canvas["mozRequestFullScreen"])
			this.canvas["mozRequestFullScreen"]();
	},

	exitFullScreen: function ()
	{
		this.gaFlags &= ~CRunApp.GA_STRETCH;
		if (document.cancelFullScreen)
			document.cancelFullScreen();
		else if (document.webkitCancelFullScreen)
			document.webkitCancelFullScreen();
		else if (document.mozCancelFullScreen)
			document.mozCancelFullScreen();
	},

	startJoystick:      function (type, flags)
	{
		if (this.joystick == null)
		{
			this.joystick = new CJoystick(this);
			this.joystick.loadImages();
			this.joystick.reset(flags);
			this.joystickOn = 1;
			if (this.frame != null && (this.frame.html5Options & CRunFrame.HTML5FOPT_JOYSTICK_DPAD) != 0)
			{
			    this.canvas.setAttribute("style", "-ms-touch-action: manipulation;");
			    this.canvas.setAttribute("style", "touch-action: manipulation;");
			}
			else
			{
			    this.canvas.setAttribute("style", "-ms-touch-action: none;");
			    this.canvas.setAttribute("style", "touch-action: none;");
			}
			if (this.touchCalls.indexOf(this.joystick) < 0)
			{
				this.touchCalls.add(this.joystick);
			}
		}
	},
	startAccJoystick:   function ()
	{
		this.startAccelerometer();
		this.joystickOn = 2;
	},
	endJoystick:        function ()
	{
		if (this.joystick != null)
		{
			if (this.joystickOn == 1)
			{
				this.touchCalls.removeObject(this.joystick);
			}
			this.joystick = null;
		}
		if (this.joystickOn == 2)
			this.endAccelerometer();
		this.joystickOn = 0;
	},
	startAccelerometer: function () {
	    if (this.accelerometer == 0) {
	        var that = this;
	        if (window.DeviceMotionEvent) {
	            this.accelerometerHandler = this._handleOnDeviceMotion.bind(this);
	            window.addEventListener("devicemotion", this.accelerometerHandler);
	        }
	    }
	    this.accelerometer++;
	},
	_handleOnDeviceMotion: function (event) {
	    var ax = event.acceleration.x / 9.780318;
	    var ay = event.acceleration.y / 9.780318;
	    var az = event.acceleration.z / 9.780318;
	    var agx = event.accelerationIncludingGravity.x / 9.780318;
	    var agy = event.accelerationIncludingGravity.y / 9.780318;
	    var agz = event.accelerationIncludingGravity.z / 9.780318;

	    this.accX = ax;
	    this.accY = ay;
	    this.accZ = az;
	    this.accGravX = agx;
	    this.accGravY = agy;
	    this.accGravZ = agz;

	    // Adjust this to device rotation
	    switch (window.orientation) {
	        case 0:     // portrait
	            this.accX = -ax;
	            this.accY = ay;
	            this.accGravX = -agx;
	            this.accGravY = agy;
	            break;
	        case 90:     // landscape
	            this.accX = ay;
	            this.accY = ax;
	            this.accGravX = agy;
	            this.accGravY = agx;
	            break;
	        case 180:    // portrait flipped
	            this.accX = ax;
	            this.accY = -ay;
	            this.accGravX = agx;
	            this.accGravY = -agy;
	            break;
	        case -90:     // landscape flipped
	            this.accX = -ay;
	            this.accY = -ax;
	            this.accGravX = -agy;
	            this.accGravY = -agx;
	            break;
	    }

	    if (this.iOS) {
	        this.accX = -this.accX;
	        this.accY = -this.accY;
	        this.accGravX = -this.accGravX;
	        this.accGravY = -this.accGravY;
	    }

	},
	endAccelerometer: function () {
	    this.accelerometer--;
	    if (this.accelerometer <= 0) {
	        //__scope.ondevicemotion = null;
	        if (window.DeviceMotionEvent) {
	            window.removeEventListener("devicemotion", this.accelerometerHandler);
	        }
	        this.accelerometer = 0;
	    }
	},
	getJoystick: function ()
	{
		var joystick = 0;
		if (this.accGravX < -0.2)
			joystick |= 0x04;
		if (this.accGravX > 0.2)
			joystick |= 0x08;
		if (this.accGravY < -0.2)
			joystick |= 0x01;
		if (this.accGravY > 0.2)
			joystick |= 0x02;
		return joystick;
	},

	// Draws the "Touch screen to continue" line for preloaders
	drawContinue:       function (preloader)
	{
		if (preloader.touchMe)
		{
			if (this.silentSound == null)
				preloader.touchMePhase = 2;

			switch (preloader.touchMePhase)
			{
				case 0:
					if (preloader.touchMeAlpha > 0)
					{
						preloader.touchMeAlpha -= 2;
						if (preloader.touchMeAlpha < 0)
						{
							preloader.touchMeAlpha = 0;
							phase++;
						}
					}
					break;
				case 1:
					break;
				case 2:
					if (preloader.touchMeAlpha < 128)
					{
						preloader.touchMeAlpha += 4;
						if (preloader.touchMeAlpha >= 128)
						{
							preloader.touchMeAlpha = 128;
							preloader.touchMeQuit = true;
						}
					}
					break;
			}
			this.context.renderSolidColor(preloader.touchMeRect.left, preloader.touchMeRect.top, preloader.touchMeRect.right - preloader.touchMeRect.left, preloader.touchMeRect.bottom - preloader.touchMeRect.top, this.frameColor, 0, 0);
			preloader.touchMe.draw(this.context, preloader.touchMeRect.left, preloader.touchMeRect.top, CRSpr.BOP_BLEND, preloader.touchMeAlpha);
			if (preloader.touchMeQuit)
			{
				preloader.touchMe = null;
				preloader.touchMeRect = null;
				preloader.touchMeFont = null;
			}
		}
		else
		{
			preloader.touchMeQuit = true;
			if (this.silentSound != null && (this.dwOptions & CRunApp.AH2OPT_LOADSOUNDSONTOUCH) != 0 )
			{
				preloader.touchMeFont = new CFont();
				preloader.touchMeFont.createDefaultFont();
				preloader.touchMeFont.lfHeight = 24;
				var height = preloader.touchMeFont.lfHeight + 6;
				preloader.touchMe = new CTextSurface(this, 120, height);
				var width = preloader.touchMe.measureText(this.m_touchMe, preloader.touchMeFont) + 64
				preloader.touchMe.resize(width, height);
				preloader.touchMe.manualClear();
				preloader.touchMe.manualDrawText(this.m_touchMe, CServices.DT_VCENTER | CServices.DT_CENTER, null, 0xFFFF00, preloader.touchMeFont, 2, 0x000000);
				preloader.touchMeRect = new CRect();
				preloader.touchMeRect.left = this.gaCxWin / 2 - width / 2;
				preloader.touchMeRect.top = this.gaCyWin / 2 - height / 2;
				preloader.touchMeRect.right = preloader.touchMeRect.left + width;
				preloader.touchMeRect.bottom = preloader.touchMeRect.top + height;
				preloader.touchMeAlpha = 128;
				preloader.touchMePhase = 0;
				preloader.touchMeQuit = false;

				this.context.renderSolidColor(0, 0, this.gaCxWin, this.gaCyWin, this.frameColor, 0, 0);
			}
		}
		return preloader.touchMeQuit;
	}
}

function CFakeTouch(x, y, t)
{
	this.changedTouches = new Array(1);
	this.changedTouches[0] = {pageX: x, pageY: y, target: t, identifier: CRunApp.FAKE_TOUCHIDENTIFIER};
}

// CRunFrame object
// ----------------------------------------------------------------
CRunFrame.LEF_DISPLAYNAME = 0x0001;
CRunFrame.LEF_GRABDESKTOP = 0x0002;
CRunFrame.LEF_KEEPDISPLAY = 0x0004;
CRunFrame.LEF_TOTALCOLMASK = 0x0020;
CRunFrame.LEF_RESIZEATSTART = 0x0100;
CRunFrame.LEF_NOSURFACE = 0x0800;
CRunFrame.LEF_TIMEDMVTS = 0x8000;
CRunFrame.LEF_TRANSPARENTBKD = 0x20000;
CRunFrame.CM_TEST_OBSTACLE = 0;
CRunFrame.CM_TEST_PLATFORM = 1;
CRunFrame.CM_OBSTACLE = 0x0001;
CRunFrame.CM_PLATFORM = 0x0002;
CRunFrame.HEIGHT_PLATFORM = 6;
CRunFrame.IPHONEOPT_JOYSTICK_FIRE1 = 0x0001;
CRunFrame.IPHONEOPT_JOYSTICK_FIRE2 = 0x0002;
CRunFrame.IPHONEOPT_JOYSTICK_LEFTHAND = 0x0004;
CRunFrame.HTML5FOPT_JOYSTICK_DPAD = 0x0008;
CRunFrame.HTML5FOPT_DISPLAYPRELOADER = 0x0100;
CRunFrame.JOYSTICK_NONE = 0x0000;
CRunFrame.JOYSTICK_TOUCH = 0x0001;
CRunFrame.JOYSTICK_ACCELEROMETER = 0x0002;
CRunFrame.JOYSTICK_EXT = 0x0003;
function CRunFrame(a)
{
	this.app = a;
	this.rhPtr = null;

	this.leWidth = 0;
	this.leHeight = 0;
	this.leBackground = 0;
	this.leClearBackground = false;
	this.leFlags = 0;

	this.leVirtualRect = null;
	this.leEditWinWidth = 0;
	this.leEditWinHeight = 0;
	this.frameName = null;
	this.nLayers = 0;
	this.layers = null;
	this.LOList = null;
	this.evtProg = null;
	this.maxObjects = 0;

	this.leX = 0;
	this.leY = 0;
	this.leLastScrlX = 0;
	this.leLastScrlY = 0;

	this.startLeX = 0;
	this.startLeY = 0;
	this.m_wRandomSeed = 0;
	this.m_dwMvtTimerBase = 0;
	this.fadeIn = null;
	this.fadeOut = null;
	this.mosaicHandles = null;
	this.mosaicX = null;
	this.mosaicY = null;
	this.mosaicMaxHandle = 0;
	this.joystick = 0;
	this.html5Options = 0;
}
CRunFrame.prototype =
{
	loadFullFrame: function (index)
	{
		// Positionne le fichier
		this.app.file.seek(this.app.frameOffsets[index]);

		// Charge la frame
		this.evtProg = new CEventProgram(this.app);
		this.LOList = new CLOList();
		this.leVirtualRect = new CRect();

		var chID = 0, chFlags, chSize;
		var posEnd;
		var nOldFrameWidth = 0;
		var nOldFrameHeight = 0;
		this.m_wRandomSeed = -1;
		while (chID != 0x7F7F)
		{
			chID = this.app.file.readAShort('CRunFrame chID');
			chFlags = this.app.file.readAShort('CRunFrame chFlags');
			chSize = this.app.file.readAInt('CRunFrame chSize');
			if (chSize == 0)
			{
				continue;
			}
			this.posEnd = this.app.file.getFilePointer() + chSize;
			switch (chID)
			{
				case 0x3334:
					debug('[CRunFrame] CHUNK_HEADER?');
					this.loadHeader();
					if (this.app.parentApp != null && (this.app.parentOptions & CCCA.CCAF_DOCKED) != 0)
					{
						this.leEditWinWidth = this.app.cx;
						this.leEditWinHeight = this.app.cy;
					}
					else
					{
						this.leEditWinWidth = Math.min(this.app.gaCxWin, this.leWidth);
						this.leEditWinHeight = Math.min(this.app.gaCyWin, this.leHeight);
					}
					break;

				// CHUNK_MOSAICIMAGETABLE
				case 0x3348:
					debug('[CRunFrame] CHUNK_MOSAICIMAGETABLE');
					var number = chSize / (3 * 2);
					this.mosaicHandles = new Array(number);
					this.mosaicX = new Array(number);
					this.mosaicY = new Array(number);
					this.mosaicMaxHandle = 0;
					var n;
					for (n = 0; n < number; n++)
					{
						this.mosaicHandles[n] = this.app.file.readAShort('mosaicHandles[n]');
						this.mosaicMaxHandle = Math.max(this.mosaicMaxHandle, this.mosaicHandles[n]);
						this.mosaicX[n] = this.app.file.readAShort('mosaicX[n]');
						this.mosaicY[n] = this.app.file.readAShort('mosaicY[n]');
					}
					this.mosaicMaxHandle++;
					break;

				// CHUNK_FRAME_HTML5_OPTIONS
				case 0x334A:
					debug('[CRunFrame] CHUNK_FRAME_HTML5_OPTIONS');
					this.joystick = this.app.file.readAShort('joystick');
					this.html5Options = this.app.file.readAShort('html5Options');
					break;

				case 0x3342:
					this.leVirtualRect.load(this.app.file);
					break;

				case 0x3344:
					this.m_wRandomSeed = this.app.file.readAShort('m_wRandomSeed');
					break;

				case 0x3347:
					this.m_dwMvtTimerBase = this.app.file.readAInt('m_dwMvtTimerBase');
					break;

				case 0x3335:
					this.frameName = this.app.file.readAString('frameName');
					break;

				// CHUNK_FRAMEFADEIN
				case 0x333B:
					debug('[CRunFrame] CHUNK_FRAMEFADEIN');
					this.fadeIn = new CTransitionData();
					this.fadeIn.load(this.app.file);
					break;

				// CHUNK_FRAMEFADEOUT
				case 0x333C:
					debug('[CRunFrame] CHUNK_FRAMEFADEOUT');
					this.fadeOut = new CTransitionData();
					this.fadeOut.load(this.app.file);
					break;

				case 0x3341:
					debug('[CRunFrame] CHUNK_LAYERS');
					this.loadLayers();
					break;

				case 0x3345:
					debug('[CRunFrame] CHUNK_LAYER_EFFECTS');
					this.loadLayerEffects();
					break;

				case 0x3338:
					debug('[CRunFrame] CHUNK_LOList');
					this.LOList.load(this.app);
					break;

				case 0x333D:
					debug('[CRunFrame] CHUNK_EVENT_PROGRAM');
					this.evtProg.load(this.app);
					this.maxObjects = this.evtProg.maxObjects;
					break;
			}
			// Positionne a la fin du chunk
			this.app.file.seek(this.posEnd);
		}

		this.app.OIList.resetToLoad();
		var n;
		for (n = 0; n < this.LOList.nIndex; n++)
		{
			var loTemp = this.LOList.getLOFromIndex(n);
			this.app.OIList.setToLoad(loTemp.loOiHandle);
		}

		this.app.imageBank.resetToLoad();
		this.app.soundBank.resetToLoad();
		this.app.musicBank.resetToLoad();
		this.app.fontBank.resetToLoad();
		this.app.OIList.load(this.app.file);
		this.app.OIList.enumElements(this.app.imageBank, this.app.fontBank);
		if (this.app.dwOptions & CRunApp.AH2OPT_LOADDATAATSTART)
		{
			this.app.fontBank.setAllToLoad();
			this.app.soundBank.setAllToLoad();
			this.app.musicBank.setAllToLoad();
			//if (this.app.mosaicMaxHandle == 0)
			this.app.imageBank.setAllToLoad();
		}
		this.app.imageBank.load(this.app.file);
		this.app.fontBank.load(this.app.file);
		this.evtProg.enumSounds(this.app.soundBank);
		this.app.soundBank.load();
		this.evtProg.enumSounds(this.app.musicBank);
		this.app.musicBank.load();

		this.app.OIList.resetOICurrent();
		for (n = 0; n < this.LOList.nIndex; n++)
		{
			var lo = this.LOList.list[n];
			if (lo.loType >= COI.OBJ_SPR)
			{
				this.app.OIList.setOICurrent(lo.loOiHandle);
			}
		}
	},

	loadLayers: function ()
	{
		this.nLayers = this.app.file.readAInt('nLayers');
		this.layers = new Array(this.nLayers);

		var n;
		for (n = 0; n < this.nLayers; n++)
		{
			this.layers[n] = new CLayer(this.app);
			this.layers[n].load(this.app.file);
		}
	},

	loadLayerEffects: function ()
	{
		var l;
		for (l = 0; l < this.nLayers; l++)
		{
			this.layers[l].effect = this.app.file.readAInt('layers[l].effect');
			this.layers[l].effectParam = this.app.file.readAInt('layers[l].effectParam');
			this.app.file.skipBytes(12);
		}
	},

	loadHeader: function ()
	{
		this.leWidth = this.app.file.readAInt('leWidth');
		this.leHeight = this.app.file.readAInt('leHeight');
		this.leBackground = this.app.file.readAColor('leBackground');
		this.leFlags = this.app.file.readAInt('leFlags');
	}
}

// CSoundPlayer object
// ----------------------------------------------------------------
CSoundPlayer.NCHANNELS = 32;
function CSoundPlayer(a)
{
	this.app = a;
	this.channels = null;
	this.bMultipleSounds = false;
	this.bOn = true;
	this.volumes = null;
	this.bLocked = null;
	this.pans = null;
	this.mainVolume = 0;
	this.mainPan = 0;
	this.dataToDecode = null;
	this.decoding = false;

	this.channels = new Array(CSoundPlayer.NCHANNELS);
	this.volumes = new Array(CSoundPlayer.NCHANNELS);
	this.bLocked = new Array(CSoundPlayer.NCHANNELS);
	this.bOn = true;
	this.bMultipleSounds = true;
	var n;
	for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
	{
		this.channels[n] = null;
		this.volumes[n] = 100;
		this.bLocked[n] = false;
	}
	this.mainVolume = 100;
	this.mainPan = 0;

	var sound = new Audio();
	var canPlay = new Array(4);
	canPlay[0] = sound.canPlayType('audio/ogg');
	canPlay[1] = sound.canPlayType('audio/x-m4a');
	canPlay[2] = sound.canPlayType('audio/mpeg');
	canPlay[3] = sound.canPlayType('audio/wav');
	this.probablePlayableFormats = 0;
	this.maybePlayableFormats = 0;
	for (n = 0; n < 4; n++)
	{
		if (canPlay[n] == 'probably')
			this.probablePlayableFormats |= (1 << n);
		if (canPlay[n] == 'maybe')
			this.maybePlayableFormats |= (1 << n);
	}

	// Use WEB AUDIO?
	var papp = a;
	while (papp.parentApp != null)
	    papp = papp.parentApp;
	this.context = papp.soundContext;
	this.contextType = papp.soundContextType;
	if (this.context == null)
	{
	    if (typeof AudioContext !== "undefined")
	    {
	        this.context = new AudioContext();
	        this.contextType = 1;
	    }
	    else if (typeof webkitAudioContext !== "undefined")
	    {
	        this.context = new webkitAudioContext();
	        this.contextType = 0;
	    }
	    papp.soundContext = this.context;
	    papp.soundContextType = this.contextType;
    }
}
CSoundPlayer.prototype =
{
	addDataToDecode: function (cSound)
	{
		if (this.dataToDecode == null)
			this.dataToDecode = new CArrayList();
		this.dataToDecode.add(cSound);
	},
	decodeData:      function ()
	{
		if (this.dataToDecode != null && this.dataToDecode.size() > 0)
		{
			if (!this.decoding)
			{
				var cSound = this.dataToDecode.get(0);
				this.dataToDecode.removeIndex(0);
				this.decoding = true;
				var that = this;
				that.context["decodeAudioData"](cSound.response, function (buffer)
				{
					cSound.buffer = buffer;
					cSound.response = null;
					that.app.dataHasLoaded(cSound);
					that.decoding = false;
				});
			}
		}
	},
	reset:           function ()
	{
		var n;
		for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
		{
			this.bLocked[n] = false;
		}
	},
	lockChannel:     function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			this.bLocked[channel] = true;
		}
	},
	unlockChannel:   function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			this.bLocked[channel] = false;
		}
	},

	play: function (handle, nLoops, channel, bPrio)
	{
		var n;

		if (this.bOn == false)
			return;

		var sound = this.app.soundBank.getSoundFromHandle(handle);
		if (sound == null)
			return;
		if (this.bMultipleSounds == false)
			channel = 0;
		/*      	else
		 {
		 for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
		 {
		 if (this.channels[n] == sound)
		 {
		 sound=sound.createFromSound();
		 break;
		 }
		 }
		 }
		 */
		if (channel < 0)
		{
			for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
			{
				if (this.channels[n] == null && this.bLocked[n] == false)
				{
					break;
				}
			}
			if (n == CSoundPlayer.NCHANNELS)
			{
				for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
				{
					if (this.bLocked[n] == false)
					{
						if (this.channels[n] != null)
						{
							if (this.channels[n].bUninterruptible == false)
							{
								break;
							}
						}
					}
				}
			}
			channel = n;
			if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
			{
				this.volumes[channel] = this.mainVolume;
			}
		}
		if (channel < 0 || channel >= CSoundPlayer.NCHANNELS)
			return;

		if (this.channels[channel] != null)
		{
			if (this.channels[channel].bUninterruptible == true)
				return;
			if (this.channels[channel] != sound)
			{
				this.channels[channel].stop();
				this.channels[channel] = null;
			}
		}
		for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
		{
			if (this.channels[n] == sound)
			{
				this.channels[n].stop();
				this.channels[n] = null;
			}
		}
		this.channels[channel] = sound;
		sound.play(nLoops, bPrio, this.volumes[channel]);
	},

	setMultipleSounds: function (bMultiple)
	{
		this.bMultipleSounds = bMultiple;
	},

	keepCurrentSounds: function ()
	{
		var n;
		for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
		{
			if (this.channels[n] != null)
			{
				if (this.channels[n].isPlaying())
				{
					this.app.soundBank.setToLoad(this.channels[n].handle);
				}
			}
		}
	},

	setOnOff: function (bState)
	{
		if (bState != bOn)
		{
			this.bOn = bState;
			if (this.bOn == false)
				this.stopAllSounds();
		}
	},

	getOnOff: function ()
	{
		return this.bOn;
	},

	stopAllSounds: function ()
	{
		var n;
		for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
		{
			if (this.channels[n] != null)
			{
				this.channels[n].stop();
				this.channels[n] = null;
			}
		}
	},

	stopSample: function (handle)
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].handle == handle)
				{
					this.channels[c].stop();
					this.channels[c] = null;
				}
			}
		}
	},

	stopChannel: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				this.channels[channel].stop();
				this.channels[channel] = null;
			}
		}
	},

	isSamplePaused: function (handle)
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].handle == handle)
				{
					return this.channels[c].isPaused();
				}
			}
		}
		return false;
	},

	isSoundPlaying: function ()
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].isPlaying())
					return true;
			}
		}
		return false;
	},

	isSamplePlaying: function (handle)
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].handle == handle)
				{
					return this.channels[c].isPlaying();
				}
			}
		}
		return false;
	},

	isChannelPlaying: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				return this.channels[channel].isPlaying();
			}
		}
		return false;
	},

	isChannelPaused: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				return this.channels[channel].isPaused();
			}
		}
		return false;
	},

	pause: function ()
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				this.channels[c].globalpause();
			}
		}
	},

	pauseChannel: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				this.channels[channel].pause();
			}
		}
	},

	pauseSample: function (handle)
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].handle == handle)
				{
					this.channels[c].pause();
				}
			}
		}
	},

	resume: function ()
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
			    this.channels[c].globalresume();
			}
		}
	},

	resumeChannel: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				this.channels[channel].resume();
			}
		}
	},

	resumeSample: function (handle)
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].handle == handle)
				{
					this.channels[c].resume();
				}
			}
		}
	},

	setVolumeChannel: function (channel, volume)
	{
		if (volume < 0) volume = 0;
		if (volume > 100) volume = 100;

		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			this.volumes[channel] = volume;
			if (this.channels[channel] != null)
			{
				this.channels[channel].setVolume(volume);
			}
		}
	},

	setFrequencyChannel: function (channel, freq)
	{
		//        if (freq<0) freq=0;
		//        if (freq>100000) freq= 100000;

		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				this.channels[channel].setFrequency(freq);
			}
		}
	},

	setFrequencySample: function (handle, freq)
	{
		//        if (freq<0) freq=0;
		//        if (freq>100000) freq= 100000;

		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].handle == handle)
				{
					this.channels[c].setFrequency(freq);
				}
			}
		}
	},

	setPositionChannel: function (channel, pos)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				this.channels[channel].setPosition(pos);
			}
		}
	},

	setPositionSample: function (handle, pos)
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].handle == handle)
				{
					this.channels[c].setPosition(pos);
				}
			}
		}
	},

	getVolumeChannel: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				return this.volumes[channel];
			}
		}
		return 0;
	},

	setVolumeSample: function (handle, volume)
	{
		if (volume < 0) volume = 0;
		if (volume > 100) volume = 100;

		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].handle == handle)
				{
					this.volumes[c] = volume;
					this.channels[c].setVolume(volume);
				}
			}
		}
	},

	setMainVolume: function (volume)
	{
		var n;
		this.mainVolume = volume;
		for (n = 0; n < CSoundPlayer.NCHANNELS; n++)
		{
			this.volumes[n] = volume;
			if (this.channels[n] != null)
			{
				this.channels[n].setVolume(volume);
			}
		}
	},

	getMainVolume: function ()
	{
		return this.mainVolume;
	},

	getChannel: function (name)
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].name == name)
				{
					return c;
				}
			}
		}
		return -1;
	},

	getDurationChannel: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				return this.channels[channel].getDuration();
			}
		}
		return 0;
	},

	getPositionChannel: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				return this.channels[channel].getPosition();
			}
		}
		return 0;
	},

	getFrequencyChannel: function (channel)
	{
		if (channel >= 0 && channel < CSoundPlayer.NCHANNELS)
		{
			if (this.channels[channel] != null)
			{
				return this.channels[channel].getFrequency();
			}
		}
		return 0;
	},

	getVolumeSample: function (name)
	{
		var channel = this.getChannel(name);
		if (channel >= 0)
		{
			return this.volumes[channel];
		}
		return 0;
	},

	getDurationSample: function (name)
	{
		var channel = this.getChannel(name);
		if (channel >= 0)
		{
			return this.channels[channel].getDuration();
		}
		return 0;
	},

	getPositionSample: function (name)
	{
		var channel = this.getChannel(name);
		if (channel >= 0)
		{
			return this.channels[channel].getPosition();
		}
		return 0;
	},

	getFrequencySample: function (name)
	{
		var channel = this.getChannel(name);
		if (channel >= 0)
		{
			return this.channels[channel].getFrequency();
		}
		return 0;
	},

	checkSounds: function ()
	{
		var c;
		for (c = 0; c < CSoundPlayer.NCHANNELS; c++)
		{
			if (this.channels[c] != null)
			{
				if (this.channels[c].checkSound())
				{
					this.channels[c] = null;
				}
			}
		}
	}
}



// CMusicPlayer object
// ----------------------------------------------------------------
function CMusicPlayer(a)
{
	this.app = a;
	this.bOn = true;
	this.currentMusic = null;
}
CMusicPlayer.prototype =
{
	reset:           function ()
	{
	},

	play: function (handle, nLoops)
	{
		this.stop();
		var music = this.app.musicBank.getMusicFromHandle(handle);
		if (music == null)
			return;
		this.currentMusic = music;
		music.play(nLoops);
	},


	setOnOff: function (bState)
	{
		if (bState != this.bOn)
		{
			this.bOn = bState;
			if (this.bOn == false)
				this.stop();
		}
	},

	getOnOff: function ()
	{
		return this.bOn;
	},

	isMusicPlaying: function (handle)
	{
		if (this.currentMusic == null)
		{
			return false;
		}
		if (handle == null || handle == this.currentMusic.handle) {
			return this.currentMusic.isPlaying();
		}
		return false;
	},
	isMusicPaused: function ()
	{
		if (this.currentMusic != null)
		{
			return this.currentMusic.isPaused();
		}
		return false;
	},

	pause: function ()
	{
		if (this.currentMusic != null) {
			this.currentMusic.pause();
		}
	},

	stop: function ()
	{
		if (this.currentMusic != null) {
			this.currentMusic.stop();
			this.currentMusic = null;
		}
	},

	resume: function ()
	{
		if (this.currentMusic != null) {
			this.currentMusic.resume();
		}
	},

	checkMusic: function ()
	{

		if (this.currentMusic != null && this.currentMusic.checkMusic())
		{
			this.currentMusic = null;
		}
	}
}

// Embedded Files
// ------------------------------------------------------------
function CEmbeddedFile(a)
{
	this.app = a;
}
CEmbeddedFile.prototype =
{
	preLoad: function ()
	{
		var l = this.app.file.readAShort('l');
		this.path = this.app.file.readAString(l, 'path');
		var pos = this.path.lastIndexOf("\\");
		if (pos >= 0)
		{
			this.path = this.path.substring(pos + 1);
		}
		this.length = this.app.file.readAInt('length');
		this.offset = this.app.file.getFilePointer();
		this.app.file.skipBytes(this.length);
	},
	open:    function ()
	{
		return this.app.file.createFromFile(this.offset, this.length)
	}
}

// Preloader
// -------------------------------------------------------------
function CPreloaderImage(a)
{
	this.app = a;
	this.isLoaded = false;
	this.subApp = null;
	this.context = this.app.context;
	this.radius = this.app.preloaderCircleRadius;   // * (this.app.scaleX + this.app.scaleY) / 2;
	this.color = this.app.preloaderCircleColor;
	this.xCenter = this.app.preloaderCircleCenterX;
	if (this.xCenter < 0)
		this.xCenter = this.app.gaCxWin / 2;
	this.yCenter = this.app.preloaderCircleCenterY;
	if (this.yCenter < 0)
		this.yCenter = this.app.gaCyWin / 2;
	this.currentAngle = 0;
	this.size = this.app.preloaderCircleThickness;  // * (this.app.scaleX + this.app.scaleY) / 2;
	this.oldAngle = 0;
	this.counter = 25;
	this.phase = 0;

	this.image = new Image();
	var that = this;
	this.image.onload = function ()
	{
		that.isLoaded = true;
	}
	this.image.src = this.app.resources + "Preloader.png";
}
CPreloaderImage.prototype =
{
	load:  function ()
	{
		return this.isLoaded;
	},
	reset: function ()
	{
		this.phase = 0;
		this.oldAngle = 0;
		this.counter = 25;
	},
	step:  function ()
	{
		switch (this.phase)
		{
			case 0:
				if (this.app.preloaderBackColor != -1)
				    this.context.renderSolidColor(0, 0, this.app.gaCxWin, this.app.gaCyWin, this.app.preloaderBackColor);
                else
				    this.context.clearBackground(0, 0, this.app.gaCxWin, this.app.gaCyWin);
                this.context.renderSimpleImage(this.image, this.xCenter - this.image.width / 2, this.yCenter - this.image.height / 2, this.image.width, this.image.height, 0, 0);
				this.phase++;
				break;
			case 1:
				this.angle = this.app.imagesLoaded / this.app.imagesToLoad * 2 * Math.PI;
				this.drawIt(this.angle);
				if (this.app.imagesLoaded == this.app.imagesToLoad)
					this.phase++;
				break;
			case 2:
				if (this.counter > 0)
					this.counter--;
				if (this.counter == 0)
					this.phase++;
				break;
			case 3:
				if (this.app.drawContinue(this))
					this.phase++;
				break;
			default:
				break;
		}
	},

	isComplete: function ()
	{
		return this.phase == 4;
	},
	drawIt:     function (angle)
	{
		var a;
		var x1, y1, x2, y2;
		for (a = this.oldAngle; a <= angle; a += 0.005)
		{
			x1 = this.xCenter + Math.cos(a) * (this.radius - this.size);
			y1 = this.yCenter - Math.sin(a) * (this.radius - this.size);
			x2 = this.xCenter + Math.cos(a) * this.radius;
			y2 = this.yCenter - Math.sin(a) * this.radius;
			this.context.renderLine(x1, y1, x2, y2, this.color, 1, 0, 0);

			var n;
			for (n = 0; n < 3; n++)
			{
				x1 = this.xCenter + Math.cos(a) * (this.radius - this.size - n);
				y1 = this.yCenter - Math.sin(a) * (this.radius - this.size - n);
				x2 = this.xCenter + Math.cos(a) * (this.radius - this.size - n - 1);
				y2 = this.yCenter - Math.sin(a) * (this.radius - this.size - n - 1);
				this.context.renderLine(x1, y1, x2, y2, this.color, 1, 0, 0);

				x1 = this.xCenter + Math.cos(a) * (this.radius + n);
				y1 = this.yCenter - Math.sin(a) * (this.radius + n);
				x2 = this.xCenter + Math.cos(a) * (this.radius + n + 1);
				y2 = this.yCenter - Math.sin(a) * (this.radius + n + 1);
				this.context.renderLine(x1, y1, x2, y2, this.color, 1, 0, 0);
			}
		}
		this.oldAngle = angle;
	}
}
function CPreloaderDefault(a)
{
	this.app = a;
	this.context = this.app.context;
	this.currentPosition = 0;
	this.width = 100;
	this.height = 12;
	this.position = 0;
	this.backColor = 0xA0A0A0;
	this.borderColor = 0x808080;
	this.barColor = 0x000000;
	this.rect = new CRect();
	this.rect.left = this.app.gaCxWin / 2 - this.width / 2;
	this.rect.top = this.app.gaCyWin / 2 - this.height / 2;
	this.rect.right = this.rect.left + this.width;
	this.rect.bottom = this.rect.top + this.height;
	this.reset();
}
CPreloaderDefault.prototype =
{
	load:  function ()
	{
		return true;
	},
	reset: function ()
	{
		this.quit = false;
		this.phase = 0;
		this.alpha = 128;
		this.position = 0;
	},
	step:  function ()
	{
		if (this.app.imagesLoaded < this.app.imagesToLoad)
		{
			switch (this.phase)
			{
				case 0:
					if (this.alpha > 0)
					{
						this.alpha -= 2;
						if (this.alpha <= 0)
						{
							this.alpha = 0;
							this.phase++;
						}
					}
					break;
				case 1:
					break;
			}
		}
		else
		{
			switch (this.phase)
			{
				case 0:
				case 1:
					this.phase = 2;
					break;
				case 2:
					if (this.alpha < 128)
					{
						this.alpha += 4;
					}
					if (this.alpha >= 128)
					{
						this.alpha = 128;
						if (this.app.silentSound == null)
							this.quit = true;
						else
							this.phase++;
					}
					break;
				default:
					this.quit = this.app.drawContinue(this);
					return;
			}
		}
		//            this.context.renderSolidColor(this.rect.left, this.rect.top, this.width, this.height, this.app.frameColor, 0, 0);
		this.context.renderSolidColor(this.rect.left, this.rect.top, this.width, this.height, this.backColor, CRSpr.BOP_BLEND, this.alpha);
		this.context.renderRect(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, CRSpr.BOP_BLEND, this.alpha);
		this.position = this.app.imagesLoaded / this.app.imagesToLoad * (this.width - 2);
		this.context.renderSolidColor(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.barColor, CRSpr.BOP_BLEND, this.alpha);
	},

	isComplete: function ()
	{
		return this.quit && (this.app.imagesLoaded == this.app.imagesToLoad);
	}
}

function CPreloaderFrame(a)
{
	this.app = a;
	this.isLoaded = false;
	this.appSprite = new Sprite();
	this.subApp = new CRunApp(this.app, this.app.file, this.app.path, true);
	this.subApp.isPreloaderSubApp = true;
	this.subApp.setParentApp(this.app, this.app.preloaderFrameNumber, 0, this.appSprite, this.app.gaCxWin, this.app.gaCyWin);
	this.subApp.digest();
	this.subApp.loadPreloader = false;
	this.subApp.subAppStopped = false;
	this.subApp.dwOptions &= ~CRunApp.AH2OPT_LOADDATAATSTART;
	this.subApp.startApplication();
	this.subApp.setMouseOffsets(0, 0);
	this.subApp.stepApplication();
	this.appSprite.x = this.app.gaCxWin / 2 - this.subApp.frame.leWidth / 2;
	this.appSprite.y = this.app.gaCyWin / 2 - this.subApp.frame.leHeight / 2;
	this.stopOnLoad = (this.app.dwOptions & CRunApp.AH2OPT_PRELOADERQUIT) != 0;
	this.app.subApps.push(this.subApp);
	this.delay = 0;
}
CPreloaderFrame.prototype =
{
	load:       function ()
	{
		this.step();
		return !this.subApp.loading;
	},
	reset:      function ()
	{
		this.subApp.run.f_StopSamples();
		this.subApp.run.killFrameObjects();
		this.subApp.run.y_KillLevel(false);
		this.subApp.run.resetFrameLayers(-1, false);
		this.subApp.run.rhEvtProg.unBranchPrograms();
		this.subApp.run.freeMouse();
		this.subApp.run.freeRunHeader();

		this.subApp.run.rhFrame.leX = this.subApp.run.rhFrame.leLastScrlX = this.subApp.run.rh3DisplayX = 0;
		this.subApp.run.rhFrame.leY = this.subApp.run.rhFrame.leLastScrlY = this.subApp.run.rh3DisplayY = 0;
		this.subApp.resetLayers();
		this.subApp.run.allocRunHeader();
		this.subApp.run.initAsmLoop();
		this.subApp.run.resetFrameLayers(-1, false);
		this.subApp.run.prepareFrame();
		this.subApp.run.createFrameObjects(false);
		this.subApp.run.drawLevel();
		this.subApp.run.loadGlobalObjectsData();
		this.subApp.run.rhEvtProg.prepareProgram();
		this.subApp.run.rhEvtProg.assemblePrograms(this.subApp.run);
		this.subApp.run.f_InitLoop();
		this.subApp.run.captureMouse();
		this.subApp.run.rhQuit = 0;
		this.subApp.run.rhQuitParam = 0;
		this.subApp.subAppStopped = false;
		this.app.subApps.push(this.subApp);
		this.delay = 0;
	},
	step:       function ()
	{
		if (!this.subApp.subAppStopped)
		{
			if (this.stopOnLoad)
				this.subApp.subAppStopped = (this.app.imagesLoaded == this.app.imagesToLoad);
			if (this.subApp.stepApplication() == false)
				this.subApp.subAppStopped = true;
			this.subApp.drawSubApplication(this.context, this.appSprite.x, this.appSprite.y, false);
		}
		if (this.subApp.subAppStopped && this.app.silentSound)
		{
			this.app.drawContinue(this);
		}
	},
	isComplete: function ()
	{
		var bComplete = this.subApp.subAppStopped;
		if (this.app.silentSound)
			bComplete = false;
		if (bComplete)
		{
			if (this.delay > 0)
			{
				this.delay--;
				if (this.delay > 0)
					return false;
			}
			var n;
			for (n = 0; n < this.app.subApps.length; n++)
			{
				if (this.app.subApps[n] == this.subApp)
				{
					this.app.subApps.splice(n, 1);
					break;
				}
			}
		}
		return bComplete;
	}
}

// Virtual joystick
// ----------------------------------------------------------------
CJoystick.KEY_JOYSTICK = 0;
CJoystick.KEY_FIRE1 = 1;
CJoystick.KEY_FIRE2 = 2;
CJoystick.KEY_NONE = -1;
CJoystick.MAX_TOUCHES = 3;
CJoystick.JFLAG_JOYSTICK = 0x0001;
CJoystick.JFLAG_FIRE1 = 0x0002;
CJoystick.JFLAG_FIRE2 = 0x0004;
CJoystick.JFLAG_LEFTHANDED = 0x0008;
CJoystick.JFLAG_DPAD = 0x0010;
CJoystick.JPOS_NOTDEFINED = 0x80000000;
CJoystick.JOY_ANGLEGAP = 70;
CJoystick.DEADZONE = 0.25;

function CJoystick(a)
{
	this.app = a;
	this.joyBack = null;
	this.joyFront = null;
	this.joyUp = null;
	this.joyUpD = null;
	this.joyDown = null;
	this.joyDownD = null;
	this.joyLeft = null;
	this.joyLeftD = null;
	this.joyRight = null;
	this.joyRightD = null;
	this.fire1U = null;
	this.fire2U = null;
	this.fire1D = null;
	this.fire2D = null;
	this.imagesX = new Array(3);
	this.imagesY = new Array(3);
	this.joystickX = 0;
	this.joystickY = 0;
	this.joystick = 0;
	this.flags = 0;
	this.touches = new Array(3);
	this.bSetPositions = false;
	this.joydeadzone = 0;
	this.joyanglezone = 0;
	this.joyradsize = 0;
}
CJoystick.prototype =
{
	loadImages:   function ()
	{
	    if (this.joyBack == null)
	    {
	        this.joyBack = CImage.createFromFile(this.app, "joyback.png");
	        this.joyFront = CImage.createFromFile(this.app, "joyfront.png");
	    }
	    if (this.joyUp == null && (this.app.frame.html5Options & CRunFrame.HTML5FOPT_JOYSTICK_DPAD) != 0)     // need to test the frame option, as this.flags may not be initialized yet
        {
	        this.joyUp = CImage.createFromFile(this.app, "joyup.png");
	        this.joyUpD = CImage.createFromFile(this.app, "joyupd.png");
	        this.joyDown = CImage.createFromFile(this.app, "joydown.png");
	        this.joyDownD = CImage.createFromFile(this.app, "joydownd.png");
	        this.joyLeft = CImage.createFromFile(this.app, "joyleft.png");
	        this.joyLeftD = CImage.createFromFile(this.app, "joyleftd.png");
	        this.joyRight = CImage.createFromFile(this.app, "joyright.png");
	        this.joyRightD = CImage.createFromFile(this.app, "joyrightd.png");
	    }
	    if (this.fire1U == null)
        {
			this.fire1U = CImage.createFromFile(this.app, "fire1U.png");
			this.fire2U = CImage.createFromFile(this.app, "fire2U.png");
			this.fire1D = CImage.createFromFile(this.app, "fire1D.png");
			this.fire2D = CImage.createFromFile(this.app, "fire2D.png");
		}
	},
	reset:        function (f)
	{
		this.flags = f;

		if (this.joyBack != null && this.joyBack.width != 0)
			this.setPositions();
		else
			this.bSetPositions = true;

		this.joyanglezone = CJoystick.JOY_ANGLEGAP * Math.PI / 180;
	},
	setPositions: function ()
	{
		var sx, sy;
		sx = this.app.gaCxWin;
		sy = this.app.gaCyWin;

		if ((this.flags & CJoystick.JFLAG_DPAD) != 0)
		{
		    this.joyradsize = Math.ceil(Math.sqrt(this.joyLeft.width * this.joyLeft.width + this.joyUp.height * this.joyUp.height));
		}
		else
		{
		    this.joyradsize = Math.ceil(Math.sqrt(this.joyBack.width / 2 * this.joyBack.width / 2 + this.joyBack.height / 2 * this.joyBack.height / 2));
		}
		this.joydeadzone = CJoystick.DEADZONE * this.joyradsize;

		if ((this.flags & CJoystick.JFLAG_LEFTHANDED) == 0)
		{
			if ((this.flags & CJoystick.JFLAG_JOYSTICK) != 0)
			{
			    if ((this.flags & CJoystick.JFLAG_DPAD) != 0)
			    {
			        this.imagesX[CJoystick.KEY_JOYSTICK] = 16 + this.joyLeft.width;
			        this.imagesY[CJoystick.KEY_JOYSTICK] = sy - 16 - this.joyDown.height;
                }
			    else
			    {
			        this.imagesX[CJoystick.KEY_JOYSTICK] = 16 + this.joyBack.width / 2;
			        this.imagesY[CJoystick.KEY_JOYSTICK] = sy - 16 - this.joyBack.height / 2;
			    }
			}
			if ((this.flags & CJoystick.JFLAG_FIRE1) != 0 && (this.flags & CJoystick.JFLAG_FIRE2) != 0)
			{
				this.imagesX[CJoystick.KEY_FIRE1] = sx - this.fire1U.width / 2 - 32;
				this.imagesY[CJoystick.KEY_FIRE1] = sy - this.fire1U.height / 2 - 16;
				this.imagesX[CJoystick.KEY_FIRE2] = sx - this.fire2U.width / 2 - 16;
				this.imagesY[CJoystick.KEY_FIRE2] = sy - this.fire2U.height / 2 - this.fire1U.height - 24;
			}
			else if ((this.flags & CJoystick.JFLAG_FIRE1) != 0)
			{
				this.imagesX[CJoystick.KEY_FIRE1] = sx - this.fire1U.width / 2 - 16;
				this.imagesY[CJoystick.KEY_FIRE1] = sy - this.fire1U.height / 2 - 16;
			}
			else if ((this.flags & CJoystick.JFLAG_FIRE2) != 0)
			{
				this.imagesX[CJoystick.KEY_FIRE2] = sx - this.fire2U.width / 2 - 16;
				this.imagesY[CJoystick.KEY_FIRE2] = sy - this.fire2U.height / 2 - 16;
			}
		}
		else
		{
			if ((this.flags & CJoystick.JFLAG_JOYSTICK) != 0)
			{
			    if ((this.flags & CJoystick.JFLAG_DPAD) != 0)
			    {
				    this.imagesX[CJoystick.KEY_JOYSTICK] = sx - 16 - this.joyLeft.width;
				    this.imagesY[CJoystick.KEY_JOYSTICK] = sy - 16 - this.joyDown.height;
                }
			    else
			    {
				    this.imagesX[CJoystick.KEY_JOYSTICK] = sx - 16 - this.joyBack.width / 2;
				    this.imagesY[CJoystick.KEY_JOYSTICK] = sy - 16 - this.joyBack.height / 2;
				}
            }
			if ((this.flags & CJoystick.JFLAG_FIRE1) != 0 && (this.flags & CJoystick.JFLAG_FIRE2) != 0)
			{
				this.imagesX[CJoystick.KEY_FIRE1] = this.fire1U.width / 2 + 16 + this.fire2U.width * 2 / 3;
				this.imagesY[CJoystick.KEY_FIRE1] = sy - this.fire1U.height / 2 - 16;
				this.imagesX[CJoystick.KEY_FIRE2] = this.fire2U.width / 2 + 16;
				this.imagesY[CJoystick.KEY_FIRE2] = sy - this.fire2U.height / 2 - this.fire1U.height - 24;
			}
			else if ((this.flags & CJoystick.JFLAG_FIRE1) != 0)
			{
				this.imagesX[CJoystick.KEY_FIRE1] = this.fire1U.width / 2 + 16;
				this.imagesY[CJoystick.KEY_FIRE1] = sy - this.fire1U.height / 2 - 16;
			}
			else if ((this.flags & CJoystick.JFLAG_FIRE2) != 0)
			{
				this.imagesX[CJoystick.KEY_FIRE2] = this.fire2U.width / 2 + 16;
				this.imagesY[CJoystick.KEY_FIRE2] = sy - this.fire2U.height / 2 - 16;
			}
		}
	},
	setXPosition: function (f, p)
	{
		if ((f & CJoystick.JFLAG_JOYSTICK) != 0)
		{
			this.imagesX[CJoystick.KEY_JOYSTICK] = p;
		}
		else if ((f & CJoystick.JFLAG_FIRE1) != 0)
		{
			this.imagesX[CJoystick.KEY_FIRE1] = p;
		}
		else if ((f & CJoystick.JFLAG_FIRE2) != 0)
		{
			this.imagesX[CJoystick.KEY_FIRE2] = p;
		}
	},
	setYPosition: function (f, p)
	{
		if ((f & CJoystick.JFLAG_JOYSTICK) != 0)
		{
			this.imagesY[CJoystick.KEY_JOYSTICK] = p;
		}
		else if ((f & CJoystick.JFLAG_FIRE1) != 0)
		{
			this.imagesY[CJoystick.KEY_FIRE1] = p;
		}
		else if ((f & CJoystick.JFLAG_FIRE2) != 0)
		{
			this.imagesY[CJoystick.KEY_FIRE2] = p;
		}
	},
	draw:         function (context)
	{
		if (this.bSetPositions)
		{
			this.bSetPositions = false;
			this.setPositions();
		}

		var x, y, width, height;
		if ((this.flags & CJoystick.JFLAG_JOYSTICK) != 0)
		{
		    if ((this.flags & CJoystick.JFLAG_DPAD) != 0)
		    {
		        var img = (this.joystick & 1) ? this.joyUpD : this.joyUp;
		        x = this.imagesX[CJoystick.KEY_JOYSTICK] - img.width / 2;
		        y = this.imagesY[CJoystick.KEY_JOYSTICK] - img.height;
		        context.renderImage(img, x, y, 0, 1, 1, 0, 0);


		        img = (this.joystick & 2) ? this.joyDownD : this.joyDown;
		        x = this.imagesX[CJoystick.KEY_JOYSTICK] - img.width / 2;
		        y = this.imagesY[CJoystick.KEY_JOYSTICK];
		        context.renderImage(img, x, y, 0, 1, 1, 0, 0);

		        img = (this.joystick & 4) ? this.joyLeftD : this.joyLeft;
		        x = this.imagesX[CJoystick.KEY_JOYSTICK] - img.width;
		        y = this.imagesY[CJoystick.KEY_JOYSTICK] - img.height / 2;
		        context.renderImage(img, x, y, 0, 1, 1, 0, 0);

		        img = (this.joystick & 8) ? this.joyRightD : this.joyRight;
		        x = this.imagesX[CJoystick.KEY_JOYSTICK];
		        y = this.imagesY[CJoystick.KEY_JOYSTICK] - img.height / 2;
		        context.renderImage(img, x, y, 0, 1, 1, 0, 0);
            }
		    else
		    {
		        x = this.imagesX[CJoystick.KEY_JOYSTICK] - this.joyBack.width / 2;
		        y = this.imagesY[CJoystick.KEY_JOYSTICK] - this.joyBack.height / 2;
		        context.renderImage(this.joyBack, x, y, 0, 1, 1, 0, 0);
		        x = this.imagesX[CJoystick.KEY_JOYSTICK] + this.joystickX - this.joyFront.width / 2;
		        y = this.imagesY[CJoystick.KEY_JOYSTICK] + this.joystickY - this.joyFront.height / 2;
		        context.renderImage(this.joyFront, x, y, 0, 1, 1, 0, 0);
		    }
		}
		if ((this.flags & CJoystick.JFLAG_FIRE1) != 0)
		{
			var tex = ((this.joystick & 0x10) == 0) ? this.fire1U : this.fire1D;
			x = this.imagesX[CJoystick.KEY_FIRE1] - tex.width / 2;
			y = this.imagesY[CJoystick.KEY_FIRE1] - tex.height / 2;
			context.renderImage(tex, x, y, 0, 1, 1, 0, 0);
		}
		if ((this.flags & CJoystick.JFLAG_FIRE2) != 0)
		{
			var tex = ((this.joystick & 0x20) == 0) ? this.fire2U : this.fire2D;
			x = this.imagesX[CJoystick.KEY_FIRE2] - tex.width / 2;
			y = this.imagesY[CJoystick.KEY_FIRE2] - tex.height / 2;
			context.renderImage(tex, x, y, 0, 1, 1, 0, 0);
		}
	},

	updateJoystickState:         function (x, y)
    {
	    this.joystickX = x - this.imagesX[CJoystick.KEY_JOYSTICK];
	    this.joystickY = y - this.imagesY[CJoystick.KEY_JOYSTICK];

	    if ((this.flags & CJoystick.JFLAG_DPAD) == 0)
        {
	        if (this.joystickX<-this.joyBack.width/4)
            {
	            this.joystickX=-this.joyBack.width/4;
            }
	        if (this.joystickX>this.joyBack.width/4)
            {
	            this.joystickX=this.joyBack.width/4;
            }
	        if (this.joystickY<-this.joyBack.height/4)
            {
	            this.joystickY=-this.joyBack.height/4;
            }
	        if (this.joystickY>this.joyBack.height/4)
            {
	            this.joystickY=this.joyBack.height/4;
            }
        }

	    var angle = (Math.PI * 2 - Math.atan2(this.joystickY, this.joystickX)) % (Math.PI * 2);
	    this.joystick &= 0xF0;
	    var h = Math.sqrt(this.joystickX * this.joystickX + this.joystickY * this.joystickY);

	    // Is the radius vector above the deadzone and border of the joystick base
	    if (h > this.joydeadzone && h <= this.joyradsize)
	    {
	        this.joystickX = Math.cos(angle) * this.joyradsize/2;
	        this.joystickY = Math.sin(angle) * -this.joyradsize/2;

	        var j = 0;

	        // Checking in 45 degrees zone equal (PI/4); 1/4, 2/4, 3/4, 4/4, 5/4, 6/4, 7/4, 8/4
	        // organized like 8/4, 2/4, 4/4, 6/4,  priority for right, up, left and down
	        if (angle >= 0.0)
	        {
	            while (true)
	            {
	                // Right
	                if (this.insideZone(angle, 0, this.joyanglezone) || this.insideZone(angle, (Math.PI) * 2, this.joyanglezone))
	                {
	                    j = 8;
	                    break;
	                }
	                // Up
	                if (this.insideZone(angle, Math.PI / 2, this.joyanglezone))
	                {
	                    j = 1;
	                    break;
	                }
	                // Left
	                if (this.insideZone(angle, (Math.PI), this.joyanglezone))
	                {
	                    j = 4;
	                    break;
	                }
	                // Down
	                if (this.insideZone(angle, (Math.PI / 4) * 6, this.joyanglezone))
	                {
	                    j = 2;
	                    break;
	                }
	                // Right/Up
	                if (this.insideZone(angle, Math.PI / 4, Math.PI / 2 - this.joyanglezone))
	                {
	                    j = 9;
	                    break;
	                }
	                // Left/Up
	                if (this.insideZone(angle, (Math.PI / 4) * 3, Math.PI / 2 - this.joyanglezone))
	                {
	                    j = 5;
	                    break;
	                }
	                // Left/Down
	                if (this.insideZone(angle, (Math.PI / 4) * 5, Math.PI / 2 - this.joyanglezone))
	                {
	                    j = 6;
	                    break;
	                }
	                // Right/Down
	                if (this.insideZone(angle, (Math.PI / 4) * 7, Math.PI / 2 - this.joyanglezone))
	                {
	                    j = 10;
	                    break;
	                }
	                break;
	            }
	        }
	        this.joystick |= j;
	    }
    },

	touchStarted: function (touch)
	{
		var bFlag = false;
		var x = this.app.getTouchX(touch);
		var y = this.app.getTouchY(touch);

		var key = this.getKey(x, y);
		if (key != CJoystick.KEY_NONE)
		{
			this.touches[key] = touch.identifier;
			if (key == CJoystick.KEY_JOYSTICK)
			{
				this.joystick &= 0xF0;
				bFlag = true;
            
				if ((this.flags & CJoystick.JFLAG_DPAD) != 0)
				{
				    this.updateJoystickState(x, y);
				}
            }
			if (key == CJoystick.KEY_FIRE1)
			{
				this.joystick |= 0x10;
				bFlag = true;
			}
			else if (key == CJoystick.KEY_FIRE2)
			{
				this.joystick |= 0x20;
				bFlag = true;
			}
		}
		return bFlag;
	},

	touchMoved: function (touch)
	{
		var x = this.app.getTouchX(touch);
		var y = this.app.getTouchY(touch);

		var key = this.getKey(x, y);
		if (key == CJoystick.KEY_JOYSTICK)
		{
		    this.touches[CJoystick.KEY_JOYSTICK] = touch.identifier;
		}
	    //if (key == CJoystick.KEY_JOYSTICK && touch.identifier == this.touches[CJoystick.KEY_JOYSTICK])
		if ( this.touches[CJoystick.KEY_JOYSTICK] == touch.identifier )
		{
		    this.updateJoystickState(x, y);
		}
	},

	insideZone: function (angle, angle_ref, gap)
	{
		// check if the angle is in the range, could be ported using degrees instead.
		return (angle > (angle_ref - gap / 2) && angle < (angle_ref + gap / 2));
	},

	touchEnded: function (touch)
	{
		var n;
		for (n = 0; n < CJoystick.MAX_TOUCHES; n++)
		{
			if (this.touches[n] == touch.identifier)
			{
				this.touches[n] = 0;
				switch (n)
				{
					case CJoystick.KEY_JOYSTICK:
						this.joystickX = 0;
						this.joystickY = 0;
						this.joystick &= 0xF0;
						break;
					case CJoystick.KEY_FIRE1:
						this.joystick &= ~0x10;
						break;
					case CJoystick.KEY_FIRE2:
						this.joystick &= ~0x20;
						break;
				}
				break;
			}
		}
	},
	getKey:     function (x, y)
	{
		if ((this.flags & CJoystick.JFLAG_JOYSTICK) != 0)
		{
		    if ((this.flags & CJoystick.JFLAG_DPAD) != 0)
		    {
		        if (x >= this.imagesX[CJoystick.KEY_JOYSTICK] - this.joyLeft.width && x < this.imagesX[CJoystick.KEY_JOYSTICK] + this.joyRight.width)
		        {
		            if (y > this.imagesY[CJoystick.KEY_JOYSTICK] - this.joyUp.height && y < this.imagesY[CJoystick.KEY_JOYSTICK] + this.joyDown.height)
		            {
		                return CJoystick.KEY_JOYSTICK;
		            }
		        }
		    }
		    else
		    {
		        if (x >= this.imagesX[CJoystick.KEY_JOYSTICK] - this.joyBack.width / 2 && x < this.imagesX[CJoystick.KEY_JOYSTICK] + this.joyBack.width / 2)
		        {
		            if (y > this.imagesY[CJoystick.KEY_JOYSTICK] - this.joyBack.height / 2 && y < this.imagesY[CJoystick.KEY_JOYSTICK] + this.joyBack.height / 2)
		            {
		                return CJoystick.KEY_JOYSTICK;
		            }
		        }
		    }
		}
		if ((this.flags & CJoystick.JFLAG_FIRE1) != 0)
		{
			if (x >= this.imagesX[CJoystick.KEY_FIRE1] - this.fire1U.width / 2 && x < this.imagesX[CJoystick.KEY_FIRE1] + this.fire1U.width / 2)
			{
				if (y > this.imagesY[CJoystick.KEY_FIRE1] - this.fire1U.height / 2 && y < this.imagesY[CJoystick.KEY_FIRE1] + this.fire1U.height / 2)
				{
					return CJoystick.KEY_FIRE1;
				}
			}
		}
		if ((this.flags & CJoystick.JFLAG_FIRE2) != 0)
		{
			if (x >= this.imagesX[CJoystick.KEY_FIRE2] - this.fire2U.width / 2 && x < this.imagesX[CJoystick.KEY_FIRE2] + this.fire2U.width / 2)
			{
				if (y > this.imagesY[CJoystick.KEY_FIRE2] - this.fire2U.height / 2 && y < this.imagesY[CJoystick.KEY_FIRE2] + this.fire2U.height / 2)
				{
					return CJoystick.KEY_FIRE2;
				}
			}
		}
		return CJoystick.KEY_NONE;
	},

	getJoystick: function ()
	{
		return this.joystick;
	}
}
