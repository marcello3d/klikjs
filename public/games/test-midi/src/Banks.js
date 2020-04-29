// CImageBank object
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

function CMosaic(bank, h)
{
	this.imageBank = bank;
	this.app = bank.app;
	this.handle = h;
}
CMosaic.prototype =
{
	doLoad: function ()
	{
		var name = this.app.resources + "M" + CServices.formatDiscName(this.handle, "png");
		var image = new Image();
		this.imageBank.mosaics[this.handle] = image;
		var that = this;
		image.onload = function ()
		{
			that.app.dataHasLoaded(that);
		}
		image.onerror = function ()
		{
			that.app.dataHasLoaded(that);
		}
		image.src = name;
	}
}
function CImageBank(a)
{
	this.app = a;
	this.file = null;
	this.images = null;
	this.nHandlesReel = 0;
	this.nHandlesTotal = 0;
	this.nImages = 0;
	this.offsetsToImage = null;
	this.handleToIndex = null;
	this.useCount = null;
	this.rcInfo = null;
	this.hsInfo = null;
	this.apInfo = null;
	this.pIfo = null;
	this.mosaics = null;
	this.oldMosaics = null;
	this.mosaicLoaded = null;
}
CImageBank.prototype =
{
	preLoad:            function (f)
	{
		this.file = f;

		this.nHandlesReel = this.file.readAShort('CImageBank nHandlesReel');
		this.offsetsToImage = new Array(this.nHandlesReel);

		var nImg = this.file.readAShort('CImageBank nImg');
		var n;
		var offset;
		var image = new CImage();
		for (n = 0; n < nImg; n++)
		{
			offset = this.file.getFilePointer();
			image.loadHandle(this.file);
			this.offsetsToImage[image.handle] = offset;
		}

		this.useCount = new Array(this.nHandlesReel);
		var n;
		for (n = 0; n < this.nHandlesReel; n++)
			this.useCount[n] = 0;

		this.handleToIndex = null;
		this.nHandlesTotal = this.nHandlesReel;
		this.nImages = 0;
		this.images = null;
	},
	getImageFromHandle: function (handle)
	{
		if (handle >= 0 && handle < this.nHandlesTotal)
			if (this.handleToIndex[handle] != -1)
				return this.images[this.handleToIndex[handle]];
		return null;
	},
	getImageFromIndex:  function (index)
	{
		if (index >= 0 && index < this.nImages)
			return this.images[index];
		return null;
	},
	setAllToLoad:       function ()
	{
		var n;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			if (this.offsetsToImage[n])
				this.useCount[n] = 1;
		}
	},
	resetToLoad:        function ()
	{
		if ((this.app.dwOptions & CRunApp.AH2OPT_LOADDATAATSTART) == 0 && (this.app.dwOptions & CRunApp.AH2OPT_KEEPRESOURCESBETWEENFRAMES) == 0)
		{
			var n;
			for (n = 0; n < this.nHandlesReel; n++)
			{
				this.useCount[n] = 0;
			}
		}
		this.oldMosaics = null;
	},
	setToLoad:          function (handle)
	{
		this.useCount[handle]++;
	},

	enumerate: function (num)
	{
		this.setToLoad(num);
		return -1;
	},

	loadMosaic: function (handle)
	{
		if (this.mosaics[handle] == null)
		{
			if (this.oldMosaics != null && handle < this.oldMosaics.length && this.oldMosaics[handle] != null)
			{
				this.mosaics[handle] = this.oldMosaics[handle];
			}
			else
			{
				this.mosaics[handle] = new CMosaic(this, handle);
				this.app.addDataToLoad(this.mosaics[handle]);
			}
		}
	},

	load: function (file)
	{
		var n;

		// Reset mosaics
		if (this.app.mosaicMaxHandle > 0)
		{
			if (this.mosaics == null)
			{
				this.mosaics = new Array(this.app.mosaicMaxHandle);
				if (this.app.dwOptions & CRunApp.AH2OPT_LOADDATAATSTART)
				{
					for (n = 0; n < this.app.mosaicMaxHandle; n++)
					{
						if (this.app.mosaics[n])
							this.loadMosaic(n);
					}
				}
			}
			else
			{
				if ((this.app.dwOptions & CRunApp.AH2OPT_LOADDATAATSTART) == 0)
				{
					this.oldMosaics = new Array(this.app.mosaicMaxHandle);
					for (n = 0; n < this.app.mosaicMaxHandle; n++)
						this.oldMosaics[n] = this.mosaics[n];

					this.mosaics = new Array(this.app.mosaicMaxHandle);
					for (n = 0; n < this.app.mosaicMaxHandle; n++)
						this.mosaics[n] = null;
				}
			}
		}

		this.nImages = 0;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			if (this.useCount[n] != 0)
				this.nImages++;
		}

		var newImages = new Array(this.nImages);
		var count = 0;
		var h;
		for (h = 0; h < this.nHandlesReel; h++)
		{
			if (this.useCount[h] != 0)
			{
				if (this.images != null && this.handleToIndex[h] != -1 && this.images[this.handleToIndex[h]] != null)
				{
					newImages[count] = this.images[this.handleToIndex[h]];
					newImages[count].useCount = this.useCount[h];
					if (this.mosaics != null && this.oldMosaics != null)
					{
						var handle = newImages[count].mosaic;
						if (handle > 0)
							this.mosaics[handle] = this.oldMosaics[handle];
					}
				}
				else
				{
					if (this.offsetsToImage[h] != 0)
					{
						newImages[count] = new CImage();
						file.seek(this.offsetsToImage[h]);
						newImages[count].load(this.app);
						newImages[count].useCount = this.useCount[h];
					}
				}
				count++;
			}
			/*          else
			 {
			 }
			 */
		}
		this.images = newImages;

		this.handleToIndex = new Array(this.nHandlesReel);
		for (n = 0; n < this.nHandlesReel; n++)
		{
			this.handleToIndex[n] = -1;
		}
		for (n = 0; n < this.nImages; n++)
		{
			if (this.images[n])
			{
				this.handleToIndex[this.images[n].handle] = n;
			}
		}
		this.nHandlesTotal = this.nHandlesReel;
	},

	delImage:      function (handle)
	{
		var img = this.getImageFromHandle(handle);
		if (img != null)
		{
			img.useCount--;
			if (img.useCount <= 0)
			{
				var n;
				for (n = 0; n < this.nImages; n++)
				{
					if (this.images[n] == img)
					{
						this.images[n] = null;
						this.handleToIndex[handle] = -1;
						break;
					}
				}
			}
		}
	},
	/*
	 addImageCompare:function(newImage, xSpot, ySpot, xAP, yAP)
	 {
	 var i;
	 var width=newImage.width;
	 var height=newImage.height;
	 for (i=0; ithis.<nImages; i++)
	 {
	 if (this.images[i]!=null)
	 {
	 if (this.images[i].xSpot==xSpot && this.images[i].ySpot==ySpot && this.images[i].xAP==xAP && this.images[i].yAP==yAP)
	 {
	 if (width==this.images[i].img.width && height==this.images[i].img.height)
	 {
	 // Prend les pixels de la nouvelle image
	 if (newPixels==null)
	 {
	 var newRect:Rectangle=new Rectangle(0, 0, width, height);
	 newPixels=newImage.getPixels(newRect);
	 }

	 // Prend les pixels de l'image de la banque
	 var oldRect:Rectangle=new Rectangle(0, 0, width, height);
	 var oldPixels:ByteArray=images[i].img.getPixels(oldRect);

	 // Comparaison
	 var bEqual:Boolean=true;
	 var x:int, y:int;
	 for (y=0; y<height; y++)
	 {
	 for (x=0; x<width; x++)
	 {
	 if (newPixels[y*width+x]!=oldPixels[y*width+x])
	 {
	 bEqual=false;
	 break;
	 }
	 }
	 if (bEqual==false)
	 {
	 break;
	 }
	 }

	 // Image trouvee
	 if (bEqual)
	 {
	 images[i].useCount++;
	 return images[i].handle;
	 }
	 }
	 }
	 }
	 }
	 return addImage(newImage, xSpot, ySpot, xAP, yAP, 1);
	 },
	 */
	addImage:      function (image)
	{
		var h;

		// Cherche un handle libre
		var hFound = -1;
		for (h = this.nHandlesReel; h < this.nHandlesTotal; h++)
		{
			if (this.handleToIndex[h] == -1)
			{
				hFound = h;
				break;
			}
		}

		// Rajouter un handle
		if (hFound == -1)
		{
			this.handleToIndex.push(0);
			hFound = this.nHandlesTotal++;
		}

		// Cherche une image libre
		var i;
		var iFound = -1;
		for (i = 0; i < this.nImages; i++)
		{
			if (this.images[i] == null)
			{
				iFound = i;
				break;
			}
		}

		// Rajouter une image?
		if (iFound == -1)
		{
			this.images.push(0);
			iFound = this.nImages++;
		}

		// Ajoute la nouvelle image
		this.handleToIndex[hFound] = iFound;
		this.images[iFound] = image;
		this.useCount[hFound] = 1;

		return hFound;
	},
	loadImageList: function (handles)
	{
		var h;

		for (h = 0; h < handles.length; h++)
		{
			if (handles[h] >= 0 && handles[h] < this.nHandlesTotal)
			{
				if (this.offsetsToImage[handles[h]] != 0)
				{
					if (this.getImageFromHandle(handles[h]) == null)
					{
						var i;
						var iFound = -1;
						for (i = 0; i < this.nImages; i++)
						{
							if (this.images[i] == null)
							{
								iFound = i;
								break;
							}
						}
						if (iFound == -1)
						{
							var newImages = new Array(this.nImages + 10);
							for (i = 0; i < this.nImages; i++)
							{
								newImages[i] = this.images[i];
							}
							for (; i < this.nImages + 10; i++)
							{
								newImages[i] = null;
							}
							iFound = this.nImages;
							this.nImages += 10;
							this.images = newImages;
						}
						this.handleToIndex[handles[h]] = iFound;
						this.images[iFound] = new CImage();
						this.images[iFound].useCount = 1;
						this.file.seek(this.offsetsToImage[handles[h]]);
						this.images[iFound].load(this.app);
					}
				}
			}
		}
	},

	getImageInfoEx: function (nImage, nAngle, fScaleX, fScaleY)
	{
		var ptei;
		if (this.pIfo == null)
		{
			this.pIfo = new CImage();
		}

		ptei = this.getImageFromHandle(nImage);
		if (ptei != null)
		{
			var cx = ptei.width;
			var cy = ptei.height;
			var hsx = ptei.xSpot;
			var hsy = ptei.ySpot;
			var asx = ptei.xAP;
			var asy = ptei.yAP;

			if (nAngle == 0)
			{
				if (fScaleX != 1.0)
				{
					hsx = hsx * fScaleX;
					asx = asx * fScaleX;
					cx = cx * fScaleX;
				}

				if (fScaleY != 1.0)
				{
					hsy = hsy * fScaleY;
					asy = asy * fScaleY;
					cy = cy * fScaleY;
				}
			}
			else
			{
				if (fScaleX != 1.0)
				{
					hsx = hsx * fScaleX;
					asx = asx * fScaleX;
					cx = cx * fScaleX;
				}

				if (fScaleY != 1.0)
				{
					hsy = hsy * fScaleY;
					asy = asy * fScaleY;
					cy = cy * fScaleY;
				}

				if (this.rcInfo == null)
				{
					this.rcInfo = new CRect();
				}
				if (this.hsInfo == null)
				{
					this.hsInfo = new CPoint();
				}
				if (this.apInfo == null)
				{
					this.apInfo = new CPoint();
				}
				this.hsInfo.x = hsx;
				this.hsInfo.y = hsy;
				this.apInfo.x = asx;
				this.apInfo.y = asy;
				this.rcInfo.left = this.rcInfo.top = 0;
				this.rcInfo.right = cx;
				this.rcInfo.bottom = cy;
				this.doRotateRect(this.rcInfo, this.hsInfo, this.apInfo, nAngle);
				cx = this.rcInfo.right;
				cy = this.rcInfo.bottom;
				hsx = this.hsInfo.x;
				hsy = this.hsInfo.y;
				asx = this.apInfo.x;
				asy = this.apInfo.y;
			}
			this.pIfo.width = cx;
			this.pIfo.height = cy;
			this.pIfo.xSpot = hsx;
			this.pIfo.ySpot = hsy;
			this.pIfo.xAP = asx;
			this.pIfo.yAP = asy;

			return this.pIfo;
		}
		return ptei;
	},

	doRotateRect: function (prc, pHotSpot, pActionPoint, fAngle)
	{
		var x, y;
		var cosa, sina;

		if (fAngle == 90.0)
		{
			cosa = 0.0;
			sina = 1.0;
		}
		else if (fAngle == 180.0)
		{
			cosa = -1.0;
			sina = 0.0;
		}
		else if (fAngle == 270.0)
		{
			cosa = 0.0;
			sina = -1.0;
		}
		else
		{
			var arad = fAngle * Math.PI / 180.0;
			cosa = Math.cos(arad);
			sina = Math.sin(arad);
		}

		var topLeftX;
		var topLeftY;

		var nhxcos;
		var nhxsin;
		var nhycos;
		var nhysin;
		if (pHotSpot == null)
		{
			nhxcos = nhxsin = nhycos = nhysin = 0.0;
			topLeftX = topLeftY = 0;
		}
		else
		{
			nhxcos = -pHotSpot.x * cosa;
			nhxsin = -pHotSpot.x * sina;
			nhycos = -pHotSpot.y * cosa;
			nhysin = -pHotSpot.y * sina;
			topLeftX = nhxcos + nhysin;
			topLeftY = nhycos - nhxsin;
		}

		var topRightX;
		var topRightY;

		if (pHotSpot == null)
			x = prc.right;
		else
			x = prc.right - pHotSpot.x;
		nhxcos = x * cosa;
		nhxsin = x * sina;
		topRightX = nhxcos + nhysin;
		topRightY = nhycos - nhxsin;

		var bottomRightX
		var bottomRightY;

		if (pHotSpot == null)
			y = prc.bottom;
		else
			y = prc.bottom - pHotSpot.y;
		nhycos = y * cosa;
		nhysin = y * sina;
		bottomRightX = nhxcos + nhysin;
		bottomRightY = nhycos - nhxsin;

		var bottomLeftX;
		var bottomLeftY;
		bottomLeftX = topLeftX + bottomRightX - topRightX;
		bottomLeftY = topLeftY + bottomRightY - topRightY;

		var xmin = Math.min(topLeftX, Math.min(topRightX, Math.min(bottomRightX, bottomLeftX)));
		var ymin = Math.min(topLeftY, Math.min(topRightY, Math.min(bottomRightY, bottomLeftY)));
		var xmax = Math.max(topLeftX, Math.max(topRightX, Math.max(bottomRightX, bottomLeftX)));
		var ymax = Math.max(topLeftY, Math.max(topRightY, Math.max(bottomRightY, bottomLeftY)));

		if (pActionPoint != null)
		{
			if (pHotSpot == null)
			{
				x = pActionPoint.x;
				y = pActionPoint.y;
			}
			else
			{
				x = pActionPoint.x - pHotSpot.x;
				y = pActionPoint.y - pHotSpot.y;
			}
			pActionPoint.x = (x * cosa + y * sina) - xmin;
			pActionPoint.y = (y * cosa - x * sina) - ymin;
		}

		if (pHotSpot != null)
		{
			pHotSpot.x = -xmin;
			pHotSpot.y = -ymin;
		}

		prc.right = xmax - xmin;
		prc.bottom = ymax - ymin;
	}
}

// CImage Object
// ----------------------------------------------------------------------------
CImage.maxRotatedMasks = 10;
function CImage()
{
	this.app = null;
	this.handle = 0;
	this.width = 0;
	this.height = 0;
	this.xSpot = 0;
	this.ySpot = 0;
	this.xAP = 0;
	this.yAP = 0;
	this.useCount = 0;
	this.img = null;
	this.maskNormal = null;
	this.maskPlatform = null;
	this.maskRotation = null;
	this.filePointer = null;
	this.mosaic = 0;
	this.mosaicX = 0;
	this.mosaicY = 0;
	this.texID = -1;
	this.texCoords = null;
}
CImage.createFromFile = function (application, fileName)
{
	var image = new CImage();
	image.app = application;
	image.img = new Image();
	image.img.onload = function ()
	{
		image.app.imagesLoaded++;
		image.width = image.img.width;
		image.height = image.img.height;
	}
	application.imagesToLoad++;
	application.loading = true;
	image.img.src = application.resources + fileName;
	return image;
}
CImage.prototype =
{
	loadHandle:    function (file)
	{
		this.filePointer = file.getFilePointer();
		this.handle = file.readAShort('CImage handle');
		file.skipBytes(12);
	},
	doLoad:        function ()
	{
		this.img = new Image();
		var that = this;
		this.img.onload = function ()
		{
			that.app.dataHasLoaded(that);
		}
		this.img.onerror = function ()
		{
			that.app.dataHasLoaded(that);
		}
		var name = this.app.resources + CServices.formatDiscName(this.handle, "png");
		this.img.src = name;
	},
	load:          function (a)
	{
		this.app = a;
		this.filePointer = a.file.getFilePointer();

		this.handle = a.file.readAShort('CImage handle');
		this.width = a.file.readAShort('CImage width');
		this.height = a.file.readAShort('CImage height');
		this.xSpot = a.file.readShort('CImage xSpot');
		this.ySpot = a.file.readShort('CImage ySpot');
		this.xAP = a.file.readShort('CImage xAP');
		this.yAP = a.file.readShort('CImage yAP');
		this.mosaic = 0;
		this.img = null;
		if (this.app.frame.mosaicHandles != null)
		{
			this.mosaic = this.app.frame.mosaicHandles[this.handle];
			if (this.mosaic != 0)
			{
				this.app.imageBank.loadMosaic(this.mosaic);
				this.mosaicX = this.app.frame.mosaicX[this.handle];
				this.mosaicY = this.app.frame.mosaicY[this.handle];
			}
			else
			{
				this.app.addDataToLoad(this);
			}
		}
		else
			this.app.addDataToLoad(this);
	},
	createElement: function ()
	{
		var e = document.createElement('div');

		e.style.width = this.width + 'px';
		e.style.height = this.height + 'px';

		e.style.backgroundRepeat = 'no-repeat';

		if (this.mosaic == 0)
		{
			e.style.backgroundImage = "url('" + this.img.src + "')";
		}
		else
		{
			e.style.backgroundPosition = '-' + this.mosaicX + 'px -' + this.mosaicY + 'px';
			e.style.backgroundImage = "url('" + this.app.resources + "M" + CServices.formatDiscName(this.mosaic, "png") + "')";
		}

		return e;
	},
	getPixel:      function (x, y)
	{
		var canvas = document.createElement("canvas");
		canvas.width = this.width;
		canvas.height = this.height;
		var context = canvas.getContext("2d");
		if (this.mosaic == 0)
		{
			context.drawImage(this.img, 0, 0);
		}
		else
		{
			context.drawImage(this.app.imageBank.mosaics[this.mosaic],
				this.mosaicX, this.mosaicY,
				this.width, this.height, 0, 0,
				this.width, this.height);
		}
		var imgd = context.getImageData(x, y, 1, 1);
		return (imgd.data[0] << 16) | (imgd.data[1] << 8) | imgd.data[2];
	},
	getMask:       function (flags, angle, scaleX, scaleY)
	{
		if ((flags & CMask.GCMF_PLATFORM) == 0)
		{
			if (this.maskNormal == null)
			{
				this.maskNormal = new CMask();
				this.maskNormal.createMask(this.app, this, flags);
			}
			if (angle == 0 && scaleX == 1.0 && scaleY == 1.0)
			{
				return this.maskNormal;
			}

			var rMask;
			if (this.maskRotation == null)
			{
				this.maskRotation = new CArrayList();
			}
			var n;
			var tick = 0x7FFFFFFF;
			var nOldest = -1;
			for (n = 0; n < this.maskRotation.size(); n++)
			{
				rMask = this.maskRotation.get(n);
				if (angle == rMask.angle && scaleX == rMask.scaleX && scaleY == rMask.scaleY)
				{
					return rMask.mask;
				}
				if (rMask.tick < tick)
				{
					tick = rMask.tick;
					nOldest = n;
				}
			}
			if (this.maskRotation.size() < this.maxRotatedMasks)
			{
				nOldest = -1;
			}
			rMask = new CRotatedMask();
			rMask.mask = new CMask();
			rMask.mask.createRotatedMask(this.maskNormal, angle, scaleX, scaleY);
			rMask.angle = angle;
			rMask.scaleX = scaleX;
			rMask.scaleY = scaleY;
			rMask.tick = this.app.timer;
			if (nOldest < 0)
			{
				this.maskRotation.add(rMask);
			}
			else
			{
				this.maskRotation.set(nOldest, rMask);
			}
			return rMask.mask;
		}
		else
		{
			if (this.maskPlatform == null)
			{
				if (this.maskNormal == null)
				{
					this.maskNormal = new CMask();
					this.maskNormal.createMask(this.app, this, 0);
				}
				this.maskPlatform = new CMask();
				this.maskPlatform.createMask(this.app, this, flags);
			}
			return this.maskPlatform;
		}
	}
}

// CFontBank object
// -----------------------------------------------------------------
function CFontBank(a)
{
	this.app = a;
	this.file = null;
	this.fonts = null;
	this.offsetsToFonts = null;
	this.nFonts = 0;
	this.handleToIndex = null;
	this.maxHandlesReel = 0;
	this.maxHandlesTotal = 0;
	this.useCount = null;
	this.nullFont = new CFont();
	this.nullFont.createDefaultFont();
}
CFontBank.prototype =
{
	preLoad: function (file)
	{
		var number = file.readAInt('number');
		var n;

		this.maxHandlesReel = 0;
		var debut = file.getFilePointer();
		var temp = new CFont();
		for (n = 0; n < number; n++)
		{
			temp.loadHandle(file);
			this.maxHandlesReel = Math.max(this.maxHandlesReel, temp.handle + 1);
		}
		file.seek(debut);
		this.offsetsToFonts = new Array(this.maxHandlesReel);
		for (n = 0; n < number; n++)
		{
			debut = file.getFilePointer();
			temp.loadHandle(file);
			this.offsetsToFonts[temp.handle] = debut;
		}
		this.useCount = new Array(this.maxHandlesReel);
		var n;
		for (n = 0; n < this.maxHandlesReel; n++)
			this.useCount[n] = 0;
		this.handleToIndex = null;
		this.maxHandlesTotal = this.maxHandlesReel;
		this.nFonts = 0;
		this.fonts = null;
	},

	load: function (file)
	{
		var n;
		this.nFonts = 0;
		for (n = 0; n < this.maxHandlesReel; n++)
		{
			if (this.useCount[n] != 0)
			{
				this.nFonts++;
			}
		}

		var newFonts = new Array(this.nFonts);
		var count = 0;
		var h;
		for (h = 0; h < this.maxHandlesReel; h++)
		{
			if (this.useCount[h] != 0)
			{
				if (this.fonts != null && this.handleToIndex[h] != -1 && this.fonts[this.handleToIndex[h]] != null)
				{
					newFonts[count] = this.fonts[this.handleToIndex[h]];
					newFonts[count].useCount = this.useCount[h];
				}
				else
				{
					newFonts[count] = new CFont();
					file.seek(this.offsetsToFonts[h]);
					newFonts[count].load(file);
					newFonts[count].useCount = this.useCount[h];
				}
				count++;
			}
		}
		this.fonts = newFonts;

		this.handleToIndex = new Array(this.maxHandlesReel);
		for (n = 0; n < this.maxHandlesReel; n++)
		{
			this.handleToIndex[n] = -1;
		}
		for (n = 0; n < this.nFonts; n++)
		{
			this.handleToIndex[this.fonts[n].handle] = n;
		}
		this.maxHandlesTotal = this.maxHandlesReel;
	},

	getFontFromHandle: function (handle)
	{
		if (handle == -1)
		{
			return this.nullFont;
		}
		if (handle >= 0 && handle < this.maxHandlesTotal)
			if (this.handleToIndex[handle] != -1)
				return this.fonts[this.handleToIndex[handle]];
		return null;
	},

	getFontFromIndex: function (index)
	{
		if (index >= 0 && index < this.nFonts)
			return this.fonts[index];
		return null;
	},

	getFontInfoFromHandle: function (handle)
	{
		var font = this.getFontFromHandle(handle);
		return font.getFontInfo();
	},

	resetToLoad: function ()
	{
		if ((this.app.dwOption & CRunApp.AH2OPT_LOADDATAATSTART) == 0 && (this.app.dwOptions & CRunApp.AH2OPT_KEEPRESOURCESBETWEENFRAMES) == 0)
		{
			var n;
			for (n = 0; n < this.maxHandlesReel; n++)
			{
				this.useCount[n] = 0;
			}
		}
	},

	setAllToLoad: function ()
	{
		var n;
		for (n = 0; n < this.maxHandlesReel; n++)
		{
			if (this.offsetsToFonts[n])
				this.useCount[n] = 1;
		}
	},

	setToLoad: function (handle)
	{
		if (handle == -1)
		{
			if (this.nullFont == null)
			{
				this.nullFont = new CFont();
				this.nullFont.createDefaultFont();
			}
			return;
		}
		this.useCount[handle]++;
	},

	enumerate: function (num)
	{
		this.setToLoad(num);
		return -1;
	},

	addFont: function (info)
	{
		var h;

		// Cherche une fonte identique
		var n;
		for (n = 0; n < this.nFonts; n++)
		{
			if (this.fonts[n] == null) continue;
			if (this.fonts[n].lfHeight != info.lfHeight) continue;
			if (this.fonts[n].lfWeight != info.lfWeight) continue;
			if (this.fonts[n].lfItalic != info.lfItalic) continue;
			if (this.fonts[n].lfFaceName != info.lfFaceName) continue;
			break;
		}
		if (n < this.nFonts)
		{
			return this.fonts[n].handle;
		}

		var hFound = -1;
		for (h = this.maxHandlesReel; h < this.maxHandlesTotal; h++)
		{
			if (this.handleToIndex[h] == -1)
			{
				this.hFound = h;
				break;
			}
		}

		if (hFound == -1)
		{
			var newHToI = new Array(this.maxHandlesTotal + 10);
			for (h = 0; h < this.maxHandlesTotal; h++)
			{
				newHToI[h] = this.handleToIndex[h];
			}
			for (; h < this.maxHandlesTotal + 10; h++)
			{
				newHToI[h] = -1;
			}
			hFound = this.maxHandlesTotal;
			this.maxHandlesTotal += 10;
			this.handleToIndex = newHToI;
		}

		var f;
		var fFound = -1;
		for (f = 0; f < this.nFonts; f++)
		{
			if (this.fonts[f] == null)
			{
				fFound = f;
				break;
			}
		}

		if (fFound == -1)
		{
			fFound = this.nFonts;
			this.fonts.push(null);
		}

		this.handleToIndex[hFound] = fFound;
		this.fonts[fFound] = new CFont();
		this.fonts[fFound].handle = hFound;
		this.fonts[fFound].lfHeight = info.lfHeight;
		this.fonts[fFound].lfWeight = info.lfWeight;
		this.fonts[fFound].lfItalic = info.lfItalic;
		this.fonts[fFound].lfFaceName = info.lfFaceName;

		return hFound;
	}
}

// CFont object
// ------------------------------------------------------
function CFont()
{
	this.useCount = 0;
	this.handle = 0;
	this.lfHeight = 0;
	this.lfWeight = 0;
	this.lfItalic = 0;
	this.lfFaceName = null;
	this.font = null;
	this.isGraphic = false;
}
CFont.prototype =
{
	loadHandle: function (file)
	{
		this.handle = file.readAInt('handle');
		if (file.bUnicode == false)
		{
			file.skipBytes(0x48);
		}
		else
		{
			file.skipBytes(0x68);
		}
	},

	load: function (file)
	{
		this.handle = file.readAInt('handle');
		var debut = file.getFilePointer();
		file.skipBytes(12);

		this.lfHeight = file.readAInt('lfHeight');
		if (this.lfHeight < 0)
			this.lfHeight = -this.lfHeight;
		file.readAInt();
		file.readAInt();
		file.readAInt();
		this.lfWeight = file.readAInt('lfWeight');
		this.lfItalic = file.readAByte('lfItalic');
		file.readAByte();
		file.readAByte();
		file.readAByte();
		file.readAByte();
		file.readAByte();
		file.readAByte();
		file.readAByte();
		this.lfFaceName = file.readAString('lfFaceName');

		if (file.bUnicode == false)
		{
			file.seek(debut + 0x48);
		}
		else
		{
			file.seek(debut + 0x68);
		}
	},

	getFontInfo: function ()
	{
		var info = new CFontInfo();
		info.lfHeight = this.lfHeight;
		info.lfWeight = this.lfWeight;
		info.lfItalic = this.lfItalic;
		info.lfFaceName = this.lfFaceName;
		return info;
	},

	createDefaultFont: function ()
	{
		this.lfFaceName = "Arial";
		this.lfHeight = 13;
		this.lfWeight = 400;
		this.lfItalic = 0;
	},

	getHeight: function ()
	{
	    return this.lfHeight + Math.ceil(this.lfHeight / 8);
	},

	getFont: function ()
	{
		if (this.font == null)
		{
			if (this.lfItalic)
				this.font = "italic ";
			else
				this.font = "normal "

			var weight = Math.floor(this.lfWeight / 100) * 100;
			weight = Math.max(weight, 100);
			weight = Math.min(weight, 900);
			this.font += weight + " ";

			var height = this.lfHeight; // CServices.heightNormalToLF(this.lfHeight);
			this.font += height + "px ";
			this.font += this.lfFaceName;
		}
		return this.font;
	}
}

// CSoundBank object
// -----------------------------------------------------------------

function CSoundBank(a)
{
	this.app = a;
	this.sounds = null;
	this.nHandlesReel = 0;
	this.nHandlesTotal = 0;
	this.nSounds = 0;
	this.offsetsToSounds = null;
	this.handleToIndex = null;
	this.useCount = null;
	this.file = null;
	//  this.bChrome=navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
}
CSoundBank.prototype =
{
	preLoad: function (f)
	{
		this.file = f;

		this.nHandlesReel = this.file.readAShort('CSoundBank nHandlesReel');
		this.offsetsToSounds = new Array(this.nHandlesReel);
		this.useCount = new Array(this.nHandlesReel);
		this.handleToIndex = new Array(this.nHandlesReel);
		var n;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			this.useCount[n] = 0;
			this.handleToIndex[n] = -1;
		}

		var nSons = this.file.readAShort('CSoundBank nSons');
		var n;
		var sound = new CSound(this.app);
		var offset;
		for (n = 0; n < nSons; n++)
		{
			offset = this.file.getFilePointer();
			sound.loadHandle();
			this.offsetsToSounds[sound.handle] = offset;
		}

		this.nHandlesTotal = this.nHandlesReel;
		this.nSounds = 0;
		this.sounds = null;
	},

	getSoundFromHandle: function (handle)
	{
		if (handle >= 0 && handle < this.nHandlesTotal)
			if (this.handleToIndex[handle] != -1)
				return this.sounds[this.handleToIndex[handle]];
		return null;
	},

	getSoundHandleFromName: function (soundName)
	{
	    for (var h = 0; h < this.nHandlesTotal; h++)
	    {
	        if (this.handleToIndex[h] != -1)
	        {
	            var snd = this.sounds[this.handleToIndex[h]];
	            if (snd.name == soundName)
	                return h;
	        }
	    }
	    return -1;
	},

	checkLoad:          function ()
	{
		var index;
		for (index = 0; index < this.nSounds; index++)
		{
			if (this.sounds[index] != null)
			{
				this.sounds[index].checkLoad();
			}
		}
	},
	getSoundFromIndex:  function (index)
	{
		if (index >= 0 && index < this.nSounds)
			return this.sounds[index];
		return null;
	},

	resetToLoad: function ()
	{
		if ((this.app.dwOptions & CRunApp.AH2OPT_LOADDATAATSTART) == 0 && (this.app.dwOptions & CRunApp.AH2OPT_KEEPRESOURCESBETWEENFRAMES) == 0)
		{
			var n;
			for (n = 0; n < this.nHandlesReel; n++)
				this.useCount[n] = 0;
		}
	},

	setAllToLoad: function ()
	{
		var n;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			if (this.offsetsToSounds[n])
				this.useCount[n] = 1;
		}
	},

	addAllToLoad: function ()
	{
		var n;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			if (this.offsetsToSounds[n])
			{
				this.app.imagesToLoad++;
			}
		}
	},

	setToLoad: function (handle)
	{
		this.useCount[handle]++;
	},

	enumerate: function (num)
	{
		this.setToLoad(num);
		return -1;
	},


	load: function ()
	{
		var n;

		this.nSounds = 0;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			if (this.useCount[n] != 0)
				this.nSounds++;
		}

		var newSounds = new Array(this.nSounds);
		var count = 0;
		var h;
		for (h = 0; h < this.nHandlesReel; h++)
		{
			if (this.useCount[h] != 0)
			{
				if (this.sounds != null && this.handleToIndex[h] != -1 && this.sounds[this.handleToIndex[h]] != null)
				{
					newSounds[count] = this.sounds[this.handleToIndex[h]];
					newSounds[count].useCount = this.useCount[h];
				}
				else
				{
					newSounds[count] = new CSound(this.app);
					this.file.seek(this.offsetsToSounds[h]);
					newSounds[count].load();
					newSounds[count].useCount = this.useCount[h];
				}
				count++;
			}
		}
		this.sounds = newSounds;

		this.handleToIndex = new Array(this.nHandlesReel);
		for (n = 0; n < this.nHandlesReel; n++)
			this.handleToIndex[n] = -1;
		for (n = 0; n < this.nSounds; n++)
			this.handleToIndex[this.sounds[n].handle] = n;
		this.nHandlesTotal = this.nHandlesReel;

		this.resetToLoad();
	}
}

// CSound object
// -----------------------------------------------------------------
function CSound(a)
{
	this.application = a;
	this.context = a.soundPlayer.context;
	this.contextType = a.soundPlayer.contextType;
	this.gainNode = a.soundPlayer.gainNode;
	this.type = 0;
	this.file = a.file;
	this.handle = -1;
	this.source = null;
	this.sound = null;
	this.useCount = 0;
	this.bUninterruptible = false;
	this.nLoops = 0;
	this.numSound = 0;
	this.name = null;
	this.bPaused = false;
	this.bAllowGlobalResume = false;
	this.bPlaying = false;
	this.frequency = 0;
	this.response = null;
	this.gain = null;
}
CSound.prototype =
{
	loadHandle: function ()
	{
		this.handle = this.file.readAShort('handle');
		this.file.skipBytes(5);
		var l = this.file.readAShort('l');
		if (this.file.bUnicode == false)
			this.file.skipBytes(l);
		else
			this.file.skipBytes(l * 2);
	},

	createFromSound: function ()
	{
		if (HTMLMediaElement.mozLoadFrom)
		{
			var snd = new CSound(this.application);
			snd.handle = this.handle;
			snd.sound = HTMLMediaElement.mozLoadFrom(this.sound);
			snd.name = this.name;
			snd.type = this.type;
			snd.song = this.song;
			snd.type = this.type;
			return snd;
		}
		return this;
	},

	doLoad:     function ()
	{
		var format;
		var playableFormats = this.application.soundPlayer.probablePlayableFormats & this.type;
		if (playableFormats == 0)
			playableFormats = this.application.soundPlayer.maybePlayableFormats & this.type;
		for (format = 0; format < 4; format++)
		{
			if (playableFormats & (1 << format))
			{
				break;
			}
		}
		if (format < 4)
		{
			var ext = "";
			switch (format)
			{
				case 0:
					ext = "ogg";
					break;
				case 1:
					ext = "m4a";
					break;
				case 2:
					ext = "mp3";
					break;
				case 3:
					ext = "wav"
					break;
			}

			if (this.context)
			{
				var that = this;
                    
					var request = new XMLHttpRequest();
					request.open('GET', this.application.resources + CServices.formatDiscName(this.handle, ext), true);
					request.responseType = 'arraybuffer';
					request.addEventListener('load', function (event)
					{
						that.response = request.response;
						that.application.soundPlayer.addDataToDecode(that);
					});
					request.send();
			}
			else
			{
				this.sound = new Audio();
				this.sound.preload = "auto";

				var that = this;
				this.sound.addEventListener("loadeddata", function (e)
				{
					that.application.dataHasLoaded(that);
					that.sound.removeEventListener('loadeddata', arguments.callee, false);
				}, false);
				this.sound.addEventListener("error", function (e)
				{
					that.application.dataHasLoaded(that);
					that.sound = null;
				}, false);
				this.sound.src = this.application.resources + CServices.formatDiscName(this.handle, ext);
				this.sound.load();
				this.sound.autoplay = false;
			}
		}
		else
			this.application.dataHasLoaded(this);
	},
	load:       function ()
	{
		this.handle = this.file.readAShort('CSound handle');
		this.type = this.file.readAByte('CSound type');
		this.frequency = this.file.readAInt('CSound frequency');
		this.currentFrequency = this.frequency;
		var l = this.file.readAShort('CSound name length');
		this.name = this.file.readAString(l, 'CSound name');
		this.sound = null;
		this.application.addDataToLoad(this);
	},
	loadSilent: function ()
	{
		this.handle = 9999;
		this.type = 0x04;
		this.frequency = 40000;
		this.currentFrequency = this.frequency;
		this.name = "";
		this.sound = null;
		this.application.addDataToLoad(this);
	},
	playIt:     function (time, frequency)
	{
		if (!time)
			time = 0;
		if (!frequency)
			frequency = this.frequency;
		if (this.sound)
		{
			this.sound.volume = (this.volume / 100.0);
			this.currentFrequency = frequency;
			this.sound.playbackRate = frequency / this.frequency;
			if (this.sound.duration)
				this.sound.currentTime = 0;
			this.sound.play();
		}
		else if (this.buffer)
		{
			this.source = this.context["createBufferSource"]();
			this.source["buffer"] = this.buffer;
			if (this.contextType == 0)
			{
				this.source["gain"]["value"] = (this.volume / 100.0);
				this.source["connect"](this.context["destination"]);
			}
			else
			{
				this.gain = this.context["createGain"]();
				this.source["connect"](this.gain);
				this.gain["connect"](this.context["destination"]);
				this.gain["gain"]["value"] = (this.volume / 100.0);
			}
			if (!time)
				time = 0;
			if (!frequency)
				frequency = this.frequency;
			this.currentFrequency = frequency;
			this.source["playbackRate"]["value"] = frequency / this.frequency;
			this.startTime = Date.now() - time;
			if (typeof this.source["start"] !== "undefined")
				this.source["start"](0, time / 1000);
			else
				this.source["noteOn"](time);
			var that = this;
			this.source["onended"] = function (e)
			{
				that.bEnded = true;
			}
		}
		this.bPaused = false;
		this.bPlaying = true;
		this.bEnded = false;
	},
	play:       function (nl, bPrio, v)
	{
		this.nLoops = nl;
		if (this.nLoops == 0)
			this.nLoops = 10000000;
		this.volume = v;

		this.playIt();
	},
	stop:       function ()
	{
		if (this.sound)
			this.sound.pause();
		else if (this.source && this.bPlaying)
		{
			if (typeof this.source["stop"] !== "undefined")
				this.source["stop"](0);
			else
				this.source["noteOff"](0);
			this.source["onended"] = null;
		}
		this.bUninterruptible = false;
		this.bPlaying = false;
	},

	setVolume: function (v)
	{
		this.volume = v;
		if (this.sound)
			this.sound.volume = (v / 100.0);
		else if (this.source)
		{
			if (this.gain)
				this.gain["gain"]["value"] = (v / 100.0);
			else
				this.source["gain"]["value"] = (v / 100.0);
		}
	},

	pause: function ()
	{
	    if (!this.bPaused) {
	        if (this.sound)
	            this.sound.pause();
	        else if (this.source) {
	            this.source["onended"] = null;
	            if (typeof this.source["stop"] !== "undefined")
	                this.source["stop"](0);
	            else
	                this.source["noteOff"](0);
	            this.pauseTime = Date.now() - this.startTime;
            }
	        this.bPaused = true;
	    }
	},

	globalpause: function () {
	    if (!this.bPaused) {
	        this.pause();
	        this.bAllowGlobalResume = true;
	    } else {
	        this.bAllowGlobalResume = false;
	    }
	},

	resume: function ()
	{
	    if (this.bPaused) {
	        if (this.sound)
	            this.sound.play();
	        else if (this.source) {
	            this.playIt(this.pauseTime);
	        }
	        this.bPaused = false;
	    }
	},

	globalresume: function () {
	    if (this.bAllowGlobalResume) {
	        this.resume();
	        this.bAllowGlobalResume = false;
	    }
	},

	isPaused: function ()
	{
		return this.bPaused;
	},

	isPlaying: function ()
	{
		if ((this.sound || this.source) && this.bPlaying)
		{
		    return true;    // !this.bPaused;
		}
		return false;
	},

	getDuration: function ()
	{
		if (this.sound && this.sound.duration != undefined && isNaN(this.sound.duration) == false && this.sound.duration != Infinity)
		{
			return Math.floor(this.sound.duration * 1000);
		}
		else if (this.source)
		{
			return this.buffer["duration"] * 1000;
		}
		return 0;
	},

	getPosition: function ()
	{
		if (this.sound)
			return Math.floor(this.sound.currentTime * 1000);
		else if (this.source)
		{
		    var t;
		    if (this.bPaused)
		        t = this.pauseTime;
		    else
		        t = Date.now() - this.startTime;
		    return Math.min(this.buffer["duration"] * 1000, t);
		}
		return 0;
	},

	setPosition: function (t)
	{
		if (this.sound)
			this.sound.currentTime = t / 1000;
		else if (this.source)
		{
		    if (this.bPlaying)
			{
		        this.source["onended"] = null;
		        if (typeof this.source["stop"] !== "undefined")
					this.source["stop"](0);
				else
					this.source["noteOff"](0);
			}
			this.playIt(t);
        }
	},

	setFrequency: function (t)
	{
		var pitch = t / this.frequency;
		this.currentFrequency = t;
		if (this.sound)
			this.sound.playbackRate = pitch;
		else if (this.source)
			this.source["playbackRate"]["value"] = pitch;
	},

	getFrequency: function (t)
	{
		return this.currentFrequency;
	},

	checkSound: function ()
	{
		if (this.bPlaying == true && this.bPaused == false)
		{
			if (this.sound)
			{
				if (this.sound.ended)
				{
					if (this.nLoops > 0)
					{
						this.nLoops--;
						if (this.nLoops > 0)
						{
							this.playIt(0, this.currentFrequency);
							return false;
						}
					}
					this.bUninterruptible = false;
					this.bPlaying = false;
					return true;
				}
			}
			else if (this.source)
			{
				if (this.source["playbackState"] == 3 || this.bEnded)
				{
					if (this.nLoops > 0)
					{
						this.nLoops--;
						if (this.nLoops > 0)
						{
							this.playIt(0, this.currentFrequency);
							return false;
						}
					}
					this.bUninterruptible = false;
					this.bPlaying = false;
					return true;
				}
			}
		}
		return false;
	}

}
    

    

// CMusicBank object
// -----------------------------------------------------------------

function CMusicBank(a)
{
	this.app = a;
	this.musics = null;
	this.nHandlesReel = 0;
	this.nHandlesTotal = 0;
	this.nMusics = 0;
	this.offsetsToMusics = null;
	this.handleToIndex = null;
	this.useCount = null;
	this.file = null;
	//  this.bChrome=navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
}
CMusicBank.prototype =
{
	preLoad: function (f)
	{
		this.file = f;

		this.nHandlesReel = this.file.readAShort('CMusicBank nHandlesReel');
		this.offsetsToMusics = new Array(this.nHandlesReel);
		this.useCount = new Array(this.nHandlesReel);
		this.handleToIndex = new Array(this.nHandlesReel);
		var n;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			this.useCount[n] = 0;
			this.handleToIndex[n] = -1;
		}


		var noMusics = this.nHandlesReel;//this.file.readAShort('noMusics');
		var n;
		var music = new CMusic(this.app);
		var offset;
		for (n = 0; n < noMusics; n++)
		{
			offset = this.file.getFilePointer();
			music.loadHandle();
			this.offsetsToMusics[music.handle] = offset;
		}

		this.nHandlesTotal = this.nHandlesReel;
		this.nMusics = 0;
		this.musics = null;
	},

	getMusicFromHandle: function (handle)
	{
		if (handle >= 0 && handle < this.nHandlesTotal)
			if (this.handleToIndex[handle] != -1)
				return this.musics[this.handleToIndex[handle]];
		return null;
	},

	getMusicHandleFromName: function (musicName)
	{
	    for (var h = 0; h < this.nHandlesTotal; h++)
	    {
	        if (this.handleToIndex[h] != -1)
	        {
	            var snd = this.musics[this.handleToIndex[h]];
	            if (snd.name == musicName)
	                return h;
	        }
	    }
	    return -1;
	},

	checkLoad:          function ()
	{
		var index;
		for (index = 0; index < this.nMusics; index++)
		{
			if (this.musics[index] != null)
			{
				this.musics[index].checkLoad();
			}
		}
	},
	getMusicFromIndex:  function (index)
	{
		if (index >= 0 && index < this.nMusics)
			return this.musics[index];
		return null;
	},

	resetToLoad: function ()
	{
		if ((this.app.dwOptions & CRunApp.AH2OPT_LOADDATAATSTART) == 0 && (this.app.dwOptions & CRunApp.AH2OPT_KEEPRESOURCESBETWEENFRAMES) == 0)
		{
			var n;
			for (n = 0; n < this.nHandlesReel; n++)
				this.useCount[n] = 0;
		}
	},

	setAllToLoad: function ()
	{
		var n;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			if (this.offsetsToMusics[n])
				this.useCount[n] = 1;
		}
	},

	addAllToLoad: function ()
	{
		var n;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			if (this.offsetsToMusics[n])
			{
				this.app.imagesToLoad++;
			}
		}
	},

	setToLoad: function (handle)
	{
		this.useCount[handle]++;
	},

	enumerate: function (num)
	{
		this.setToLoad(num);
		return -1;
	},


	load: function ()
	{
		var n;

		this.nMusics = 0;
		for (n = 0; n < this.nHandlesReel; n++)
		{
			if (this.useCount[n] != 0)
				this.nMusics++;
		}

		var newMusics = new Array(this.nMusics);
		var count = 0;
		var h;
		for (h = 0; h < this.nHandlesReel; h++)
		{
			if (this.useCount[h] != 0)
			{
				if (this.musics != null && this.handleToIndex[h] != -1 && this.musics[this.handleToIndex[h]] != null)
				{
					newMusics[count] = this.musics[this.handleToIndex[h]];
					newMusics[count].useCount = this.useCount[h];
				}
				else
				{
					newMusics[count] = new CMusic(this.app);
					this.file.seek(this.offsetsToMusics[h]);
					newMusics[count].load();
					newMusics[count].useCount = this.useCount[h];
				}
				count++;
			}
		}
		this.musics = newMusics;

		this.handleToIndex = new Array(this.nHandlesReel);
		for (n = 0; n < this.nHandlesReel; n++)
			this.handleToIndex[n] = -1;
		for (n = 0; n < this.nMusics; n++)
			this.handleToIndex[this.musics[n].handle] = n;
		this.nHandlesTotal = this.nHandlesReel;

		this.resetToLoad();
	}
}

// CMusic object
// -----------------------------------------------------------------
function CMusic(a)
{
	this.application = a;
	this.url = null;
	this.timidity = null;
	this.type = 0;
	this.file = a.file;
	this.handle = -1;
	this.useCount = 0;
	this.nLoops = 0;
	this.numMusic = 0;
	this.name = null;
	this.bPaused = false;
	this.bPlaying = false;
	this.bEnded = false;
}
CMusic.prototype =
{
	loadHandle: function ()
	{
		this.handle = this.file.readAShort('handle');
		this.file.skipBytes(5);
		var l = this.file.readAShort('l');
		if (this.file.bUnicode == false)
			this.file.skipBytes(l);
		else
			this.file.skipBytes(l * 2);
	},

	doLoad:     function ()
	{
		this.url = this.application.resources + CServices.formatDiscName(this.handle, 'mid');
		console.log('[MIDI] load:', this.url);
		if (window.Timidity) {
			this.timidity = new window.Timidity('/midi/');
			this.timidity.load(this.url);
			const that = this;

			function onEnded () {
				that.bEnded = true;
			}

			this.timidity.on('ended', onEnded)
		}

		this.application.dataHasLoaded(this);
	},
	load:       function ()
	{
		this.handle = this.file.readAShort('CMusic handle');
		this.type = this.file.readAByte('CMusic type');
		this.frequency = this.file.readAInt('CMusic frequency');
		this.currentFrequency = this.frequency;
		var l = this.file.readAShort('CMusic name length');
		this.name = this.file.readAString(l, 'CMusic name');
		this.timidity = null;
		this.application.addDataToLoad(this);
	},
	playIt:     function ()
	{
		if (this.timidity)
		{
			this.bEnded = false;
			this.timidity.seek(0);
			this.timidity.play();
		}
		else if (window.MIDIjs) {
			window.MIDIjs.play(this.url)
		}
		this.bPaused = false;
		this.bPlaying = true;
	},
	play:       function (nl)
	{
		this.nLoops = nl;
		if (this.nLoops == 0)
			this.nLoops = 10000000;

		this.playIt();
	},
	stop:       function ()
	{
		if (this.timidity)
			this.timidity.pause();
		else if (window.MIDIjs)
			window.MIDIjs.pause();
		this.bPlaying = false;
	},


	pause: function ()
	{
		if (!this.bPaused) {
			if (this.timidity)
				this.timidity.pause();
			else if (window.MIDIjs)
				window.MIDIjs.pause();
			this.bPaused = true;
		}
	},


	resume: function ()
	{
		if (this.bPaused) {
			if (this.timidity)
				this.timidity.play();
			else if (window.MIDIjs)
				window.MIDIjs.resume();
			this.bPaused = false;
		}
	},

	isPaused: function ()
	{
		return this.bPaused;
	},

	isPlaying: function ()
	{
		return this.bPlaying;
	},

	hasEnded: function ()
	{
		if (this.timidity)
		{
			return this.bEnded;
		}
	},

	checkMusic: function ()
	{
		if (this.bPlaying == true && this.bPaused == false)
		{
			if (this.hasEnded())
			{
				if (this.nLoops > 0)
				{
					this.nLoops--;
					if (this.nLoops > 0)
					{
						this.playIt();
						return false;
					}
				}
				this.bPlaying = false;
				return true;
			}
		}
		return false;
	}

}



