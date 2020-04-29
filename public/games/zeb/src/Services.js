// CService object
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

var CServices = {};

CServices.extend = function (top, bot)
{
	var topC = Object.create(top.prototype || top);
	if(bot !== undefined && (bot = bot.prototype || bot))
		for(var prop in bot)
			if(bot.hasOwnProperty(prop))
				topC[prop] = bot[prop];

	return topC;
};

CServices.HIWORD = function (ul)
{
	return ul >> 16;
}
CServices.LOWORD = function (ul)
{
	return ul & 0x0000FFFF;
}
CServices.MAKELONG = function (lo, hi)
{
	return (hi << 16) | (lo & 0xFFFF);
}
CServices.getRValueFlash = function (rgb)
{
	return (rgb >>> 16) & 0xFF;
}
CServices.getGValueFlash = function (rgb)
{
	return (rgb >>> 8) & 0xFF;
}
CServices.getBValueFlash = function (rgb)
{
	return rgb & 0xFF;
}
CServices.RGBFlash = function (r, g, b)
{
	return (r & 0xFF) << 16 | (g & 0xFF) << 8 | (b & 0xFF);
}
CServices.swapRGB = function (rgb)
{
	var r = (rgb >>> 16) & 0xFF;
	var g = (rgb >>> 8) & 0xFF;
	var b = rgb & 0xFF;
	return (b & 0xFF) << 16 | (g & 0xFF) << 8 | (r & 0xFF);
}
CServices.clamp = function (val, a, b)
{
	return Math.min(Math.max(val, a), b);
}
CServices.getColorString = function (rgb)
{
	var r = ((rgb >>> 16) & 0xFF).toString(16);
	var g = ((rgb >>> 8) & 0xFF).toString(16);
	var b = (rgb & 0xFF).toString(16);
	while (r.length < 2)
		r = '0' + r;
	while (g.length < 2)
		g = '0' + g;
	while (b.length < 2)
		b = '0' + b;

	return '#' + r + g + b;
}
CServices.floatToInt = function (value)
{
	if (value < 0)
		return Math.ceil(value);
	else
		return Math.floor(value);
}
CServices.approximateInt = function (value)
{
	return Math.round(value);
}
CServices.isInt = function (value)
{
	return Math.ceil(value) == value;
}
CServices.createEllipse = function (ctx, x, y, w, h)
{
	var kappa = .5522848;
	ox = (w / 2) * kappa, // control point offset horizontal
		oy = (h / 2) * kappa, // control point offset vertical
		xe = x + w,           // x-end
		ye = y + h,           // y-end
		xm = x + w / 2,       // x-middle
		ym = y + h / 2;       // y-middle

	ctx.beginPath();
	ctx.moveTo(x, ym);
	ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	ctx.closePath();
}
CServices.drawRect = function (context, rc)
{
	context.beginPath();
	context.moveTo(rc.left, rc.top);
	context.lineTo(rc.right, rc.top);
	context.lineTo(rc.right, rc.bottom);
	context.lineTo(rc.left, rc.bottom);
	context.lineTo(rc.left, rc.top);
	context.closePath();
	context.stroke();
}
CServices.drawLine = function (context, x1, y1, x2, y2)
{
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.closePath();
	context.stroke();
}
CServices.formatDiscName = function (number, extension)
{
	var s = number.toString();
	while (s.length < 4)
		s = '0' + s;
	s += '.' + extension;
	return s;
}
CServices.compareStringsIgnoreCase = function (string1, string2)
{
	if (string1 == string2) return true;
	string1 = string1.toLowerCase();
	string2 = string2.toLowerCase();
	return (string1 == string2);
}
CServices.parseName = function (name)
{
	var pos = name.lastIndexOf("\\");
	if (pos > 0)
	{
		name = name.substring(pos + 1);
	}
	return name;
}
CServices.MAX_HEIGHTS = 40;
CServices.aHeightNormalToLF =
	[
		0, // 0
		1, // 1
		2, // 2
		3, // 3
		5, // 4
		7, // 5
		8, // 6
		9, // 7
		11, // 8
		12, // 9
		13, // 10
		15, // 11
		16, // 12
		17, // 13
		19, // 14
		20, // 15
		21, // 16
		23, // 17
		24, // 18
		25, // 19
		27, // 20
		28, // 21
		29, // 22
		31, // 23
		32, // 24
		33, // 25
		35, // 26
		36, // 27
		37, // 28
		39, // 29
		40, // 30
		41, // 31
		43, // 32
		44, // 33
		45, // 34
		47, // 35
		48, // 36
		49, // 37
		51, // 38
		52		// 39
	];

CServices.heightNormalToLF = function (height)
{
    if (height < CServices.MAX_HEIGHTS)
    {
        return CServices.aHeightNormalToLF[height];
    }
    return Math.round((height * 96) / 72);
}

CServices.DT_LEFT = 0x0000;
CServices.DT_TOP = 0x0000;
CServices.DT_CENTER = 0x0001;
CServices.DT_RIGHT = 0x0002;
CServices.DT_BOTTOM = 0x0008;
CServices.DT_VCENTER = 0x0004;
CServices.DT_SINGLELINE = 0x0020;
CServices.DT_CALCRECT = 0x0400;
CServices.DT_VALIGN = 0x0800;
CServices.drawText = function (context, s, flags, rc, font, displayArray)
{
	if (s.length == 0)
	{
		if ((flags & 0x0400) != 0)
		{
			rc.right = rc.left;
			rc.bottom = rc.top;
		}
		return 0;
	}

	if (!font.isGraphic)
		context.font = font.getFont();
	//CServices.fontHeight = font.getHeight();

	var maxHeight = 0;
	var char10 = String.fromCharCode(10);
	var char13 = String.fromCharCode(13);

    // Is there a "new line" character?
	var index = s.indexOf(char10);
	if (index >= 0)
	{
        // Yes, draw lines one by one
		var rc2 = new CRect();
		rc2.copyRect(rc);
		var sub;
		var h;
		var prevIndex = 0;
		var maxWidth = 0;
		var index2, nextIndex;

		do
		{
			index2 = -1;
			if (prevIndex < s.length)
			{
				index2 = s.indexOf(char13, prevIndex);
			}
			nextIndex = Math.max(index, index2);
			if (index2 == index - 1)
			{
				index--;
			}
			sub = s.substring(prevIndex, index);
			h = CServices.drawIt(context, sub, flags, rc2, displayArray, font);
			maxWidth = Math.max(maxWidth, rc2.right - rc2.left);
			maxHeight += h;
			rc2.top += h;
			rc2.bottom = rc.bottom;
			rc2.right = rc.right;
			prevIndex = nextIndex + 1;
			index = -1;
			if (prevIndex < s.length) {
			    index = s.indexOf(char10, prevIndex);
			}
			else {
                // Draw an empty line if the text ends with CR/LF characters
			    h = CServices.drawIt(context, "", flags, rc2, displayArray, font);
			    maxWidth = Math.max(maxWidth, rc2.right - rc2.left);
			    maxHeight += h;
			    rc2.top += h;
			    rc2.bottom = rc.bottom;
			    rc2.right = rc.right;
			}
		} while (index >= 0);
		if (prevIndex < s.length)
		{
			sub = s.substring(prevIndex);
			h = CServices.drawIt(context, sub, flags, rc2, displayArray, font);
			maxWidth = Math.max(maxWidth, rc2.right - rc2.left);
			maxHeight += h;
		}
		if ((flags & CServices.DT_CALCRECT) != 0)
		{
			rc.right = rc.left + maxWidth;
			rc.bottom = rc2.bottom;
			return maxHeight;
		}
		return maxHeight;
	}

    // No "new line" character, draw a single line
	maxHeight = CServices.drawIt(context, s, (flags | CServices.DT_VALIGN), rc, displayArray, font);
	return maxHeight;
}
CServices.xPos = null;
//CServices.fontHeight = 0;
CServices.drawIt = function (context, s, flags, rc, displayArray, font)
{
	if (s.length == 0)
	{
		s = " ";
	}

	var hLine;
	var spaceWidth;
	hLine = font.getHeight();
	if (font.isGraphic)
		spaceWidth = font.measureText(" ");
	else
		spaceWidth = context.measureText(" ").width;

	var rectWidth = rc.right - rc.left;
	var startSpace = 0;
	var currentSpace = 0;
	var previousSpace;
	var firstSpace = 0;
	var x;
	var width = 0;
	var height = 0;
	var currentXPos;
	if (CServices.xPos == null)
	{
		CServices.xPos = new Array(100);
	}
	var sx;
	var ss;
	var bQuit = false;
	var bContinue = false;

	var y = rc.top;
	var hCalcul = hLine;
	if ((hCalcul & 1) != 0)
	{
		hCalcul++;
	}
	/*    if ((flags & CServices.DT_VALIGN) != 0)
	 {
	 if ((flags & CServices.DT_VCENTER) != 0)
	 {
	 y = rc.top + (rc.bottom - rc.top) / 2 - hCalcul / 2;
	 }
	 else if ((flags & CServices.DT_BOTTOM) != 0)
	 {
	 y = rc.bottom - hLine;
	 }
	 }
	 */
	var yTop = y;
	do
	{
		firstSpace = startSpace;
		currentXPos = 0;
		x = 0;
		height += hLine;
		do
		{
			CServices.xPos[currentXPos] = x;
			currentXPos += 1;
			previousSpace = currentSpace;
			currentSpace = -1;
			if (firstSpace < s.length)
				currentSpace = s.indexOf(" ", firstSpace);
			if (currentSpace == -1)
				currentSpace = s.length;
			if (currentSpace < firstSpace)
			{
				x -= spaceWidth;
				break;
			}
			ss = s.substring(firstSpace, currentSpace);
			if (font.isGraphic)
				sx = font.measureText(ss);
			else
				sx = context.measureText(ss).width;
			if (x + sx > rectWidth)
			{
				currentXPos--;
				if (currentXPos > 0)
				{
					sx -= spaceWidth;
					x -= spaceWidth;
					currentSpace = previousSpace;
					break;
				}
				var c;
				for (c = firstSpace; c < currentSpace; c++)
				{
					if (font.isGraphic)
						sx = font.measureText(s.substring(c, c + 1));
					else
						sx = context.measureText(s.substring(c, c + 1)).width;
					if (x + sx >= rectWidth)
					{
						c--;
						if (c > 0)
						{
							width = Math.max(x, width);
							if ((flags & CServices.DT_CALCRECT) == 0)
							{
								if ((flags & CServices.DT_CENTER) != 0)
								{
									x = rc.left + (rc.right - rc.left) / 2 - x / 2;
								}
								else if ((flags & CServices.DT_RIGHT) != 0)
								{
									x = rc.right - x;
								}
								else
								{
									x = rc.left;
								}
								ss = s.substring(firstSpace, c);
								displayArray.push(new CDisplayText(x, y, ss));
							}
							currentSpace = c - 1;
							bQuit = true;
							bContinue = true;
							break;
						}
						currentSpace = -1;
						if (c < s.length)
						{
							currentSpace = s.indexOf(" ", c);
						}
						else
						{
							currentSpace = -1;
						}
						bQuit = true;
						if (currentSpace >= 0)
						{
							bContinue = true;
						}
						break;
					}
					x += sx;
				}
			}
			if (bQuit)
			{
				break;
			}
			x += sx;
			if (x + spaceWidth > rectWidth)
			{
				break;
			}
			x += spaceWidth;
			firstSpace = currentSpace + 1;
		} while (true);
		if (bContinue == false)
		{
			if (bQuit)
			{
				break;
			}
			width = Math.max(x, width);
			var n;
			if ((flags & CServices.DT_CALCRECT) == 0)
			{
				if ((flags & CServices.DT_CENTER) != 0)
					x = rc.left + (rc.right - rc.left) / 2 - x / 2;
				else if ((flags & CServices.DT_RIGHT) != 0)
					x = rc.right - x;
				else
					x = rc.left;
				firstSpace = startSpace;
				for (n = 0; n < currentXPos; n++)
				{
					currentSpace = -1;
					if (firstSpace < s.length)
						currentSpace = s.indexOf(" ", firstSpace);
					if (currentSpace == -1)
						currentSpace = s.length;
					if (currentSpace < firstSpace)
						break;
					ss = s.substring(firstSpace, currentSpace);
					displayArray.push(new CDisplayText(x + CServices.xPos[n], y, ss));
					firstSpace = currentSpace + 1;
				}
			}
		}
		bQuit = false;
		bContinue = false;
		y += hLine;
		startSpace = currentSpace + 1;
	} while (startSpace < s.length);

	rc.right = rc.left + width;
	rc.bottom = yTop + height;
	return height;
}

CServices.displayText = function (context, x, y, displayArray, font, color, effect, effectParam)
{
	var n, element;
	if (!font.isGraphic)
	{
		context.font = font.getFont();
		//CServices.fontHeight = font.getHeight();
		context.fillStyle = CServices.getColorString(color);
		context.textAlign = "left";
		context.textBaseline = "top";
		for (n = 0; n < displayArray.length; n++)
		{
			element = displayArray[n];
			context.fillText(element.text, x + element.x, y + element.y);
		}
	}
	else
	{
		for (n = 0; n < displayArray.length; n++)
		{
			element = displayArray[n];
			font.fillText(context, element.text, x + element.x, y + element.y);
		}
	}
}

CServices.intToString = function (value, displayFlags)
{
	var s = value.toString();
	if ((displayFlags & CCounter.CPTDISPFLAG_INTNDIGITS) != 0)
	{
		var nDigits = displayFlags & CCounter.CPTDISPFLAG_INTNDIGITS;
		if (s.length > nDigits)
		{
			s = s.substring(s.length - nDigits);
		}
		else
		{
			while (s.length < nDigits)
			{
				s = "0" + s;
			}
		}
	}
	return s;
}

CServices.doubleToString = function (value, displayFlags)
{
	var s;
	if ((displayFlags & CCounter.CPTDISPFLAG_FLOAT_FORMAT) == 0)
	{
		s = value.toString();
	}
	else
	{
		var bRemoveTrailingZeros = false;
		var nDigits = Math.floor(((displayFlags & CCounter.CPTDISPFLAG_FLOATNDIGITS) >> CCounter.CPTDISPFLAG_FLOATNDIGITS_SHIFT) + 1);
		var nDecimals = -1;
		if ((displayFlags & CCounter.CPTDISPFLAG_FLOAT_USENDECIMALS) != 0)
			nDecimals = ((displayFlags & CCounter.CPTDISPFLAG_FLOATNDECIMALS) >> CCounter.CPTDISPFLAG_FLOATNDECIMALS_SHIFT);
		else if (value != 0.0 && value > -1.0 && value < 1.0)
		{
			nDecimals = nDigits;
			bRemoveTrailingZeros = true;
		}
		if (nDecimals < 0)
		{
			s = value.toPrecision(nDigits);
		}
		else
		{
			s = value.toFixed(nDecimals);
		}
		var l, n;
		var ss;
		if ((displayFlags & CCounter.CPTDISPFLAG_FLOAT_PADD) != 0)
		{
			l = 0;
			for (n = 0; n < s.length; n++)
			{
				ss = s.charAt(n);
				if (ss != "." && ss != "+" && ss != "-" && ss != "e" && ss != "E")
					l++;
			}
		}
		var bFlag = false;
		if (s.charAt(0) == "-")
		{
			bFlag = true;
			s = s.substr(1);
		}
		while (l < nDigits)
		{
			s = "0" + s;
			l++;
		}
		if (bFlag)
		{
			s = "-" + s;
		}
	}
	return s;
}

CServices.subtractFilename = function (destination, source)
{
	var tempDest = destination;
	var tempSource = source;
	var pos = tempSource.indexOf("\\");
	while (pos >= 0)
	{
		if (tempDest.substring(0, pos) == tempSource.substring(0, pos))
		{
			tempSource = tempSource.substring(pos + 1);
			tempDest = tempDest.substring(pos + 1);
		}
		pos = tempSource.indexOf("\\", pos + 1);
	}
	return tempDest;
}

// CDisplayText object
// --------------------------------------------------------------
function CDisplayText(xx, yy, s)
{
	this.x = xx;
	this.y = yy;
	this.text = s;
}


// CFile Object 
// -----------------------------------------------------------------


// For IE9
var bUseAjax = false;
var bUseBlob = false;
var bUseBinaryString = false;

var req = window['XMLHttpRequest'] ? new XMLHttpRequest() : null;

if (!req || !req.overrideMimeType)
{
	bUseAjax = true;
	var script = document.createElement('script');
	script.type = "text/vbscript";
	script.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\
                Dim xhr\n\
                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\
                xhr.Open "GET", fileName, False\n\
                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\
                xhr.send\n\
                Dim byteArray()\n\
                if xhr.Status = 200 Then\n\
                    Dim byteString\n\
                    Dim i\n\
                    byteString=xhr.responseBody\n\
                    ReDim byteArray(LenB(byteString))\n\
                    For i = 1 To LenB(byteString)\n\
                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\
                    Next\n\
                End If\n\
                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\
            End Function';

	document.head.appendChild(script);
}
else
{
	try
	{
		bUseBlob = typeof new XMLHttpRequest()["responseType"] === 'string';
		if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0)
			bUseBlob = false;
	}
	catch (e)
	{
	}
}
if (bUseBlob)
{
	var reader = new FileReader();
	try
	{
		if (reader["readAsBinaryString"])
			bUseBinaryString = true;
	}
	catch (e)
	{
	}
	reader = null;
}
req = null;


function debug(type, value, message) {
	if (message) {
		console.info('[READ] ' + type + ': ' + message+'=' + value + (typeof value === 'number' ? ' (0x' + value.toString(16) + ')' : ''));
	}
}

function CFile()
{
	this.ccfBytes = "";
	this.pointer = 0;
	this.offset = 0;
	this.bUnicode = false;
}

CFile.prototype =
{

	readUnsignedByte: function (message)
	{
		var b = this.ccfBytes.charCodeAt(this.pointer++) & 0xFF;
		debug('readUnsignedByte', b, message);
		return b;
	},
	getChecksum:      function ()
	{
		var n;
		var count = 0;
		for (n = 0; n < this.end; n++)
			count += (this.ccfBytes.charCodeAt(n) & 0xFF) ^ 0xAA;
		return count;
	},
	getFile:          function (fileName, callback, size)
	{
		this.callback = callback;
        
		if (!bUseAjax)
		{
			var request = new XMLHttpRequest();
			request["open"]('GET', fileName, true);
			var that = this;

			if (bUseBlob)
			{
				request["responseType"] = "blob";
				request["onload"] = function ()
				{
					if (request["readyState"] == 4)
					{
						if (request["status"] == 200)
						{
							var reader = new FileReader();
							reader["onloadend"] = function ()
							{
								if (bUseBinaryString)
									that.ccfBytes += reader["result"];
								else
								{
									var array = new Uint8Array(reader["result"]);
									var n;
									for (n = 0; n < array.length; n++)
										that.ccfBytes += String.fromCharCode(array[n]);
								}
								that.end = that.ccfBytes.length;
								that.callback();
							}
							if (bUseBinaryString)
								reader.readAsBinaryString(request["response"]);
							else
								reader.readAsArrayBuffer(request["response"]);
						}
					}
				}
				request["send"](null);
			}
			else
			{
				request["overrideMimeType"]('text/plain; charset=x-user-defined');
				request["onload"] = function ()
				{
					if (request["readyState"] == 4)
					{
						if (request["status"] == 200)
						{
							that.ccfBytes += request["responseText"];
							that.end = that.ccfBytes.length;
							that.callback();
						}
					}
				}
				request.send(null);
			}
		}
		else
		{
			try
			{
				var array = BinFileReaderImpl_IE_VBAjaxLoader(fileName)['toArray']()
				var n;
				var length = array.length;
				if (length > size)
					length = size;
				for (n = 0; n < length; n++)
					this.ccfBytes += String.fromCharCode(array[n]);
				this.end = this.ccfBytes.length;
				this.callback();
			}
			catch (error)
			{
			}
		}
	},
	openFileASync:    function (fileName, parent)
	{
		this.parent = parent;
		var request = new XMLHttpRequest();
		request.open('GET', fileName, true);
		request.overrideMimeType('text/plain; charset=x-user-defined');
		var that = this;
		request.onload = function ()
		{
			if (request.readyState == 4)
			{
				if (request.status == 200)
				{
					that.ccfBytes = request.responseText;
					that.end = that.ccfBytes.length;
					that.pointer = 0;
					that.offset = 0;
					that.bUnicode = false;
					that.parent.dataReceived(true);
					return;
				}
			}
		}
		request.send(null);
	},
	getBytes:         function ()
	{
		return this.ccfBytes;
	},
	setBinary:        function (binary)
	{
		this.ccfBytes = binary;
		this.end = binary.length;
		var that = this;
		this.readUnsignedByte = function ()
		{
			return that.ccfBytes.charCodeAt(that.pointer++) & 0xFF;
		}
	},
	createFromFile:   function (offset, length)
	{
		var file = new CFile();
		file.ccfBytes = this.ccfBytes;
		file.offset = offset;
		file.pointer = offset;
		file.end = offset + length;
		file.bUnicode = this.bUnicode;
		return file;
	},

	getLength: function ()
	{
		return this.end - this.offset;
	},

	setUnicode: function (unicode)
	{
		this.bUnicode = unicode;
	},
	detectUnicode: function()
	{
		var b1 = this.readUnsignedByte();
		var b2 = this.readUnsignedByte();
		var b3 = this.readUnsignedByte();
		if (b1 == 0xFF && b2 == 0xFE)
		{
			this.bUnicode = true;               // UTF16
			this.pointer--;
		}
		else if (b1 == 0xEF && b2 == 0xBB && b3 == 0xBF)
		{
			this.bUnicode = false;              // UTF8
		}
		else
		{
			this.bUnicode = false;              // ASCII
			this.pointer -= 3;
		}
	},
	skipBytes: function (skip)
	{
		this.pointer += skip;
	},

	adjustTo8: function ()
	{
		if ((this.pointer & 0x07) != 0)
		{
			this.pointer += 8 - (this.pointer & 0x07);
		}
	},

	isEOF: function ()
	{
		return this.pointer >= this.end;
	},

	readInString: function (len, message)
	{
		var n, s = "";
		for (n = 0; n < len; n++)
			s += String.fromCharCode(this.readUnsignedByte());
		debug('readInString', s, message);
		return s;
	},

	readAByte: function (message)
	{
		var b = this.readUnsignedByte();
		debug('readAByte', b, message);
		return b;
	},

	readAShort: function (message)
	{
		var b1, b2;
		b1 = this.readUnsignedByte();
		b2 = this.readUnsignedByte();
		var s = b2 * 256 + b1;
		debug('readAShort', s, message);
		return s;
	},

	readShort: function (message)
	{
		var b1, b2;
		b1 = this.readUnsignedByte();
		b2 = this.readUnsignedByte();
		var value = b2 * 256 + b1;
		var s = value < 32768 ? value : value - 65536;
		debug('readShort', s, message);
		return s;
	},

	readAChar: function (message)
	{
		var b1, b2;
		b1 = this.readUnsignedByte();
		b2 = this.readUnsignedByte();
		var s = b2 * 256 + b1;
		debug('readAChar', String.fromCharCode(s), message);
		return s;
	},

	readACharArray: function (size, message)
	{
		var c = new Array();
		var b1, b2;
		var n;
		for (n = 0; n < size; n++)
		{
			b1 = this.readUnsignedByte();
			b2 = this.readUnsignedByte();
			c[n] = (b2 * 256 + b1);
		}
		debug('readACharArray('+size+')', c, message);
		return c;
	},

	readAInt: function (message)
	{
		var b1, b2, b3, b4;
		b1 = this.readUnsignedByte();
		b2 = this.readUnsignedByte();
		b3 = this.readUnsignedByte();
		b4 = this.readUnsignedByte();
		var value = b4 * 0x01000000 + b3 * 0x00010000 + b2 * 0x00000100 + b1;
		var i = value <= 0x7FFFFFFF ? value : value - 0x100000000;
		debug('readAInt', i, message);
		return i;

	},

	readAColor: function (message)
	{
		var b1, b2, b3;
		var c;

		b1 = this.readUnsignedByte();
		b2 = this.readUnsignedByte();
		b3 = this.readUnsignedByte();
		this.readUnsignedByte();

		c = b1 * 0x00010000 + b2 * 0x00000100 + b3;
		debug('readAColor', c, message);
		return c;
	},

	readAFloat: function (message)
	{
		var b1, b2, b3, b4;

		b1 = this.readUnsignedByte();
		b2 = this.readUnsignedByte();
		b3 = this.readUnsignedByte();
		b4 = this.readUnsignedByte();
		var total = b4 * 0x01000000 + b3 * 0x00010000 + b2 * 0x00000100 + b1;
		if (total > 0x80000000)
		{
			total -= 0xFFFFFFFF;
		}
		var f = total / 65536.0;
		debug('readAFloat', f, message);
		return f;
	},

	readADouble: function (message)
	{
		var b1, b2, b3, b4, b5, b6, b7, b8;

		b1 = this.readUnsignedByte();
		b2 = this.readUnsignedByte();
		b3 = this.readUnsignedByte();
		b4 = this.readUnsignedByte();
		b5 = this.readUnsignedByte();
		b6 = this.readUnsignedByte();
		b7 = this.readUnsignedByte();
		b8 = this.readUnsignedByte();

		var total = b8 * 0x0100000000000000 + b7 * 0x0001000000000000 + b6 * 0x0000010000000000 + b5 * 0x0000000100000000 + b4 * 0x01000000 + b3 * 0x00010000 + b2 * 0x00000100 + b1;
		if (total > 0x8000000000000000)
		{
			total -= 0xFFFFFFFFFFFFFFFF;
		}
		var d = total / 0x100000000;
		debug('readADouble', d, message);
		return d;
	},

	readAString:    function (length, message)
	{
		var string = "";
		if (!this.bUnicode)
		{
			if (typeof length !== 'number')
			{
				if (this.isEOF())
				{
					debug('readAString', string, length);
					return string;
				}

				var begin = this.pointer;
				var b = this.readUnsignedByte();
				while (b && !this.isEOF())
					b = this.readUnsignedByte();

				var stringLength = this.pointer - begin - 1;
				this.pointer = begin;

				string = this.readAString(stringLength);
				this.readUnsignedByte();

				debug('readAString', string, length);
				return string;
			}
			else
			{
				var c;
				var begin = this.pointer;
				for (var i = 0; i < length; ++i)
				{
					c = this.readUnsignedByte();
					if (c == 0)
						break;
					string += String.fromCharCode(c);
				}
				this.pointer = begin + length;
				debug('readAString', string, message);
				return string;
			}
		}
		else
		{
			if (typeof length !== 'number')
			{
				if (this.isEOF())
				{
					debug('readAString', string, length);
					return string;
				}

				var begin = this.pointer;

				var b = this.readAChar();
				while (b && !this.isEOF())
					b = this.readAChar();

				var stringLength = (this.pointer - begin - 2) / 2;
				this.pointer = begin;

				string = this.readAString(stringLength);
				this.readUnsignedByte();
				this.readUnsignedByte();

				debug('readAString', string, length);
				return string;
			}
			else
			{
				string = '';
				var begin = this.pointer;
				var c;
				for (var i = 0; i < length; i++)
				{
					c = this.readAChar();
					if (c == 0)
						break;
					string += String.fromCharCode(c);
				}
				this.pointer = begin + length * 2;

				debug('readAString', string, message);
				return string;
			}
		}
	},
	readAStringEOL: function (message)
	{
		var debut = this.pointer;
		var b;
		var ret = "";
		var end;
		var delta;
		var bb;

		if (this.bUnicode == false)
		{
			if (this.isEOF())
				return;

			b = this.readUnsignedByte('b');
			while (b != 10 && b != 13 && !this.isEOF())
				b = this.readUnsignedByte('b');

			end = this.pointer;
			this.pointer = debut;
			delta = 1;
			if (b != 10 && b != 13)
				delta = 0;

			if (end > debut + delta)
			{
				ret = this.readAString(end - debut - delta);
			}
			if (b == 10 || b == 13)
			{
				this.readUnsignedByte();
				bb = this.readAByte('bb');
				if (b == 10 && bb != 13)
				{
					this.pointer--;
				}
				if (b == 13 && bb != 10)
				{
					this.pointer--;
				}
			}
			debug('readAStringEOL', ret, message);
			return ret;
		}
		else
		{
			if (this.isEOF())
				return;

			b = this.readAChar();
			while (b != 10 && b != 13 && !this.isEOF())
				b = this.readAChar();

			end = this.pointer;
			this.pointer = debut;
			delta = 2;
			if (b != 10 && b != 13)
				delta = 0;
			if (end > debut + delta)
				ret = this.readAString((end - debut - delta) / 2);

			if (b == 10 || b == 13)
			{
				this.pointer += 2;
				bb = this.readAChar();
				if (b == 10 && bb != 13)
					this.pointer -= 2;
				if (b == 13 && bb != 10)
					this.pointer -= 2;
			}
			debug('readAStringEOL', ret, message);
			return ret;
		}
	},

	skipAString: function (message)
	{
		var b;
		if (this.bUnicode == false)
		{
			do
			{
				b = this.readUnsignedByte();
			} while (b != 0 && !this.EOF());
		}
		else
		{
			do
			{
				b = this.readAChar();
			} while (b != 0 && !this.EOF());
		}
		debug('skipAString', '', message);
	},

	getFilePointer: function ()
	{
		return this.pointer;
	},

	seek: function (pos)
	{
		if (pos >= this.end)
		{
			pos = this.end;
		}
		this.pointer = pos;
	},

	skipBack: function (n)
	{
		var pos = this.pointer;
		pos -= n;
		if (pos < 0)
			pos = 0;
		this.pointer = pos;
	},

	readBytesAsArray: function (a, message)
	{
		var n;
		var size = a.length;
		for (n = 0; n < size; n++)
			a[n] = this.readUnsignedByte();
		debug('readBytesAsArray', a, message);
	},

	readBuffer: function (size, message)
	{
		var buffer = new Array();
		var i;

		for (i = 0; i < size; i++)
			buffer[i] = this.readUnsignedByte();

		debug('readBuffer', buffer, message);
		return buffer;
	},

	readLogFont: function ()
	{
		var lf = new CFontInfo();
		lf.readLogFont(this);
		return lf;
	},

	readLogFont16: function ()
	{
		var lf = new CFontInfo();
		lf.readLogFont16(this);
		return lf;
	}
}


// CArrayList Object 
// -----------------------------------------------------------------
function CArrayList()
{
	this.array = new Array();
}
CArrayList.prototype =
{
	add:          function (o)
	{
		this.array.push(o);
	},
	isEmpty:      function ()
	{
		return (this.array.length == 0);
	},
	insert:       function (index, o)
	{
		this.array.splice(index, 0, o);
	},
	get:          function (index)
	{
		if (index < this.array.length)
		{
			return this.array[index];
		}
		return null;
	},
	put:          function (index, o)
	{
		this.array[index] = o;
	},
	set:          function (index, o)
	{
		if (index < this.array.length)
		{
			this.array[index] = o;
		}
	},
	removeIndex:  function (index)
	{
		if (index < this.array.length)
		{
			this.array.splice(index, 1);
		}
	},
	indexOf:      function (o)
	{
		return this.array.indexOf(o);
	},
	contains:     function (o)
	{
		return this.array.indexOf(o) >= 0;
	},
	removeObject: function (o)
	{
		var n = this.array.indexOf(o);
		if (n >= 0)
			this.array.splice(n, 1);
	},
	size:         function ()
	{
		return this.array.length;
	},
	clear:        function ()
	{
		this.array.length = 0;
	},
	sort: function (callback)
	{
	    Array.prototype.sort.call(this.array, callback);
	}
}

// CRect object
// -------------------------------------------------------------
function CRect(l, t, r, b)
{
	if (l)
		this.left = l
	else
		this.left = 0;

	if (t)
		this.top = t
	else
		this.top = 0;

	if (r)
		this.right = r;
	else
		this.right = 0;

	if (b)
		this.bottom = b;
	else
		this.bottom = 0;
}
CRect.prototype =
{
	load: function (file)
	{
		this.left = file.readAInt('left');
		this.top = file.readAInt('top');
		this.right = file.readAInt('right');
		this.bottom = file.readAInt('bottom');
	},

	copyRect: function (srce)
	{
		this.left = srce.left;
		this.right = srce.right;
		this.top = srce.top;
		this.bottom = srce.bottom;
	},

	ptInRect: function (x, y)
	{
		if (x >= this.left && x < this.right && y >= this.top && y < this.bottom)
			return true;
		return false;
	},

	intersectRect: function (rc)
	{
		if ((this.left >= rc.left && this.left < rc.right) || (this.right >= rc.left && this.right < rc.right) || (rc.left >= this.left && rc.left < this.right) || (rc.right >= this.left && rc.right < this.right))
		{
			if ((this.top >= rc.top && this.top < rc.bottom) || (this.bottom >= rc.top && this.bottom < rc.bottom) || (rc.top >= this.top && rc.top < this.bottom) || (rc.bottom >= this.top && rc.bottom < this.bottom))
			{
				return true;
			}
		}
		return false;
	}
}

// CPoint object
// ------------------------------------------------------------
function CPoint()
{
	this.x = 0;
	this.y = 0;
}

// CZone object
// ------------------------------------------------------------
function CZone()
{
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0;
	this.y2 = 0;
}


// CFontthis object
// ------------------------------------------------------------
function CFontInfo()
{
	this.lfHeight = 12;
	this.lfWeight = 400;
	this.lfItalic = 0;
	this.lfFaceName = "Arial";
	this.isGraphic = false;
}
CFontInfo.prototype =
{
	copy:    function (f)
	{
		this.lfHeight = f.lfHeight;
		this.lfWeight = f.lfWeight;
		this.lfItalic = f.lfItalic;
		this.lfFaceName = f.lfFaceName;
	},
	getFont: function ()
	{
		var result;
		if (this.lfItalic)
			result = "italic ";
		else
			result = "normal "

		var weight = Math.floor(this.lfWeight / 100) * 100;
		weight = Math.max(weight, 100);
		weight = Math.min(weight, 900);
		result += weight + " ";

		var height = this.lfHeight; // CServices.heightNormalToLF(this.lfHeight);
		result += height + "px ";
		result += this.lfFaceName;

		return result;
	},

	getHeight: function () {
	    return this.lfHeight + Math.ceil(this.lfHeight / 8);
	},

	init: function ()
	{
		this.lfFaceName = "Arial";
		this.lfHeight = 13;
		this.lfWeight = 400;
		this.lfItalic = 0;
	},
	readLogFont:   function (file)
	{
		this.lfHeight = file.readAInt('lfHeight');
		if (this.lfHeight < 0)
			this.lfHeight = -this.lfHeight;
		file.skipBytes(12);
		this.lfWeight = file.readAInt('lfWeight');
		this.lfItalic = file.readAByte('lfItalic');
		this.lfUnderline = file.readAByte('lfUnderline');
		this.lfStrikeOut = file.readAByte('lfStrikeOut');
		file.skipBytes(5);
		this.lfFaceName = file.readAString(32, 'lfFaceName');
	},
	readLogFont16: function (file)
	{
		this.lfHeight = file.readShort('lfHeight');
		if (this.lfHeight < 0)
			this.lfHeight = -this.lfHeight;
		file.skipBytes(6);
		this.lfWeight = file.readAShort('lfWeight');
		this.lfItalic = file.readAByte('lfItalic');
		this.lfUnderline = file.readAByte('lfUnderline');
		this.lfStrikeOut = file.readAByte('lfStrikeOut');
		file.skipBytes(5);
		var oldUnicode = file.bUnicode;
		file.bUnicode = false;
		this.lfFaceName = file.readAString(32, 'lfFaceName');
		file.bUnicode = oldUnicode;
	}
}


// CIni object
// ------------------------------------------------------------
CIni.separator = "{@24}";
CIni.INIFLAG_UTF8 = 0x0001;
CIni.INIFLAG_UTF16 = 0x0002;
function CIni(a, flags)
{
	this.app = a;
	this.flags = flags;
	this.strings = new CArrayList();
	this.currentFileName = null;
}
CIni.prototype =
{
	saveIni:     function ()
	{
		if (this.strings != null && this.currentFileName != null)
		{
			var value = "";
			var n;
			for (n = 0; n < this.strings.size(); n++)
				value += this.strings.get(n) + CIni.separator;
			localStorage.setItem(this.currentFileName, value);
		}
	},
	loadIni:     function (fileName)
	{
		var reload = true;
		if (this.currentFileName != null)
		{
			if (CServices.compareStringsIgnoreCase(fileName, this.currentFileName))
			{
				reload = false;
			}
		}
		if (reload)
		{
			this.saveIni();

			this.currentFileName = fileName;
			this.strings = new CArrayList();

			var value = localStorage.getItem(this.currentFileName);
			if (value)
			{
				var begin = 0;
				var end = value.indexOf(CIni.separator, 0);
				while (end >= 0)
				{
					this.strings.add(value.substring(begin, end));
					begin = end + CIni.separator.length;
					end = value.indexOf(CIni.separator, begin);
				}
				;
			}
			else
			{
				/*		     	var cFile=new CFile();
				 cFile.openFile(this.currentFileName);
				 if (cFile.getLength()==0)
				 {
				 cFile=null;
				 }
				 */
				var cFile = null;
				if (cFile == null)
				{
					var eFile = this.app.getEmbeddedFile(this.currentFileName);
					if (eFile != null)
					{
						cFile = eFile.open();
					}
				}
				if (cFile)
				{
				    var utf8 = false;
				    cFile.detectUnicode();
					if (typeof this.flags != 'undefined')
					{
					    if (this.flags & CIni.INIFLAG_UTF8) {
					        this.bUnicode = false;
					        utf8 = true;
					    }
					    if (this.flags & CIni.INIFLAG_UTF16)
							this.bUnicode = true;
					}
					while (cFile.isEOF() == false)
					{
						var currentLine = cFile.readAStringEOL('currentLine');
						if (utf8)
						    currentLine = this.decodeUtf8(currentLine);
						if (currentLine.substring(0, 1) == "<")
						{
							this.strings.clear();
							break;
						}
						if (currentLine == null)
						{
							break;
						}
						this.strings.add(currentLine);
					}
				}
			}
		}
	},
    /**
     * http://www.webtoolkit.info/javascript-utf8.html
     */
	decodeUtf8: function (utftext) {
	    var string = "";
	    var i = 0;
	    var c = 0, c1 = 0, c2 = 0, c3 = 0;

	    while (i < utftext.length) {

	        c = utftext.charCodeAt(i);

	        if (c < 128) {
	            string += String.fromCharCode(c);
	            i++;
	        }
	        else if ((c > 191) && (c < 224)) {
	            c2 = utftext.charCodeAt(i + 1);
	            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
	            i += 2;
	        }
	        else {
	            c2 = utftext.charCodeAt(i + 1);
	            c3 = utftext.charCodeAt(i + 2);
	            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	            i += 3;
	        }

	    }

	    return string;
	},
	findSection: function (sectionName)
	{
		var l;
		var s, s2;
		for (l = 0; l < this.strings.size(); l++)
		{
			s = this.strings.get(l);
			if (s.charAt(0) == "[")
			{
				var last = s.lastIndexOf("]");
				if (last >= 1)
				{
					s2 = s.substring(1, last);
					if (CServices.compareStringsIgnoreCase(sectionName, s2))
					{
						return l;
					}
				}
			}
		}
		return -1;
	},

	findKey: function (l, keyName)
	{
		var s, s2;
		var last;
		for (; l < this.strings.size(); l++)
		{
			s = this.strings.get(l);
			if (s.charAt(0) == "[")
			{
				return -1;
			}
			last = s.indexOf('=');
			if (last >= 0)
			{
				var start = 0;
				while (start < last && s.charCodeAt(start) == 32)
				{
					start++;
				}
				while (last > start && s.charCodeAt(last - 1) == 32)
				{
					last--;
				}
				if (last > start)
				{
					s2 = s.substring(0, last);
					if (CServices.compareStringsIgnoreCase(s2, keyName))
					{
						return l;
					}
				}
			}
		}
		return -1;
	},

	getPrivateProfileString: function (sectionName, keyName, defaultString, fileName)
	{
		this.loadIni(fileName);

		var l = this.findSection(sectionName);
		if (l >= 0)
		{
			l = this.findKey(l + 1, keyName);
			if (l >= 0)
			{
				var s = this.strings.get(l);
				var last = s.indexOf("=");
				return s.substring(last + 1);
			}
		}
		return defaultString;
	},

	writePrivateProfileString: function (sectionName, keyName, name, fileName)
	{
		this.loadIni(fileName);

		var s;
		var section = this.findSection(sectionName);
		if (section < 0)
		{
			s = "[" + sectionName + "]";
			this.strings.add(s);
			s = keyName + "=" + name;
			this.strings.add(s);
			//            this.saveIni();
			return;
		}

		var key = this.findKey(section + 1, keyName);
		if (key >= 0)
		{
			s = keyName + "=" + name;
			this.strings.set(key, s);
			//            this.saveIni();
			return;
		}

		for (key = section + 1; key < this.strings.size(); key++)
		{
			s = this.strings.get(key);
			if (s.charAt(0) == '[')
			{
				s = keyName + "=" + name;
				this.strings.insert(key, s);
				//	            this.saveIni();
				return;
			}
		}
		s = keyName + "=" + name;
		this.strings.add(s);
		//        this.saveIni();
	},

	deleteItem: function (group, item, iniName)
	{
		this.loadIni(iniName);

		var s = this.findSection(group);
		if (s >= 0)
		{
			var k = this.findKey(s + 1, item);
			if (k >= 0)
			{
				this.strings.removeIndex(k);
			}
			this.saveIni();
		}
	},

	deleteGroup: function (group, iniName)
	{
		this.loadIni(iniName);

		var s = this.findSection(group);
		if (s >= 0)
		{
			this.strings.removeIndex(s);
			while (true)
			{
				s++;
				if (s >= this.strings.size())
				{
					break;
				}
				if (this.strings.get(s).charAt(0) == '[')
				{
					break;
				}
				this.strings.removeIndex(s);
			}
			this.saveIni();
		}
	}
}

// CTextSurface
// -----------------------------------------------------------------
function CTextSurface(a, w, h)
{
	this.app = a;
	this.width = w;
	this.height = h;
	this.canvas = document.createElement("canvas");
	this.canvas.width = w;
	this.canvas.height = h;
	this.canvasContext = this.canvas.getContext("2d");
}
CTextSurface.prototype =
{
	measureText:    function (text, font)
	{
		font = this.app.getGraphicFont(font);
		if (font.isGraphic)
			return font.measureText(text);
		this.canvasContext.font = font.getFont();
		return this.canvasContext.measureText(text).width;
	},
	setText:        function (text, dtflags, rectangle, font, color)
	{
		/* TODO : fix rect comparison */

		if (text == this.lastText && dtflags == this.lastFlags
			&& rectangle == this.lastRect && font == this.lastFont
			&& color == this.lastColor)
		{
			return this.lastHt;
		}

		var context = this.canvasContext;
		context.clearRect(0, 0, this.width, this.height);

		if (!rectangle)
			rectangle = new CRect(0, 0, this.width, this.height);
		var displayArray = new Array(0);
		font = this.app.getGraphicFont(font);
		var ht = CServices.drawText(context, text, dtflags, rectangle, font, displayArray);
		if (ht != 0)
		{
			var deltaY = 0;
			if ((dtflags & CServices.DT_BOTTOM) != 0)
				deltaY = this.height - ht;
			else if ((dtflags & CServices.DT_VCENTER) != 0)
				deltaY = this.height / 2 - ht / 2;
			CServices.displayText(context, 0, deltaY, displayArray, font, color, 0, 0);
		}
		this.lastText = text;
		this.lastFlags = dtflags;
		this.lastRect = rectangle;
		this.lastFont = font;
		this.lastColor = color;
		this.lastHt = ht;

		return ht;
	},
	manualClear:    function (color)
	{
		if (!color)
		{
			this.canvasContext.clearRect(0, 0, this.width, this.height);
			return;
		}

		this.canvasContext.fillStyle = CServices.getColorString(color);
		this.canvasContext.fillRect(0, 0, this.width, this.height);
	},
	manualDrawText: function (s, flags, rect, color, font, relief, color2)
	{
		var context = this.canvasContext;

		var displayArray = new Array(0);
		if (!rect)
			rect = new CRect(0, 0, this.width, this.height);
		font = this.app.getGraphicFont(font);
		var ht = CServices.drawText(this.canvasContext, s, flags, rect, font, displayArray);
		if (ht != 0)
		{
			var deltaY = 0;
			if ((flags & CServices.DT_BOTTOM) != 0)
				deltaY = this.height - ht;
			else if ((flags & CServices.DT_VCENTER) != 0)
				deltaY = this.height / 2 - ht / 2;
			switch (relief)
			{
				case 1:
					CServices.displayText(this.canvasContext, 1, deltaY + 1, displayArray, font, color2, 0, 0);
					CServices.displayText(this.canvasContext, 0, deltaY, displayArray, font, color, 0, 0);
					break;
				case 2:
					CServices.displayText(this.canvasContext, 1, deltaY, displayArray, font, color2, 0, 0);
					CServices.displayText(this.canvasContext, 1, deltaY + 2, displayArray, font, color2, 0, 0);
					CServices.displayText(this.canvasContext, 0, deltaY + 1, displayArray, font, color2, 0, 0);
					CServices.displayText(this.canvasContext, 2, deltaY + 1, displayArray, font, color2, 0, 0);
					CServices.displayText(this.canvasContext, 1, deltaY + 1, displayArray, font, color, 0, 0);
					break;
				case 0:
					CServices.displayText(this.canvasContext, 0, deltaY, displayArray, font, color, 0, 0);
					break;
			}
		}
	},
	resize:         function (w, h)
	{
		if (w != this.width || h != this.height)
		{
			this.width = w;
			this.height = h;
			this.canvas.width = w;
			this.canvas.height = h;
		}
	},
	draw:           function (context, x, y, inkEffect, inkEffectParam)
	{
		context.renderSimpleImage(this.canvas, x, y, this.width, this.height, inkEffect, inkEffectParam);
	}
}

// Browser detection
// ----------------------------------------------------------------------
BrowserDetect.dataBrowser =
	[
		{
			string:    navigator.userAgent,
			subString: "Chrome",
			identity:  "Chrome"
		},
		{    string:       navigator.userAgent,
			subString:     "OmniWeb",
			versionSearch: "OmniWeb/",
			identity:      "OmniWeb"
		},
		{
			string:        navigator.vendor,
			subString:     "Apple",
			identity:      "Safari",
			versionSearch: "Version"
		},
		{
			prop:          window.opera,
			identity:      "Opera",
			versionSearch: "Version"
		},
		{
			string:    navigator.vendor,
			subString: "iCab",
			identity:  "iCab"
		},
		{
			string:    navigator.vendor,
			subString: "KDE",
			identity:  "Konqueror"
		},
		{
			string:    navigator.userAgent,
			subString: "Firefox",
			identity:  "Firefox"
		},
		{
			string:    navigator.vendor,
			subString: "Camino",
			identity:  "Camino"
		},
		{		// for newer Netscapes (6+)
			string:    navigator.userAgent,
			subString: "Netscape",
			identity:  "Netscape"
		},
		{
			string:        navigator.userAgent,
			subString:     "MSIE",
			identity:      "Explorer",
			versionSearch: "MSIE"
		},
		{
			string:        navigator.userAgent,
			subString:     "Gecko",
			identity:      "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string:        navigator.userAgent,
			subString:     "Mozilla",
			identity:      "Netscape",
			versionSearch: "Mozilla"
		}
	];
BrowserDetect.dataOS =
	[
		{
			string:    navigator.platform,
			subString: "Win",
			identity:  "Windows"
		},
		{
			string:    navigator.platform,
			subString: "Mac",
			identity:  "MacOS"
		},
		{
			string:    navigator.userAgent,
			subString: "iPhone",
			identity:  "iOS"
		},
		{
			string:    navigator.userAgent,
			subString: "iPod",
			identity:  "iOS"
		},
		{
			string:    navigator.userAgent,
			subString: "iPad",
			identity:  "iOS"
		},
		{
			string:    navigator.userAgent,
			subString: "Android",
			identity:  "Android"
		},
		{
			string:    navigator.platform,
			subString: "Windows Phone",
			identity:  "Windows Phone"
		},
		{
			string:    navigator.platform,
			subString: "Linux",
			identity:  "Linux"
		}
	];
function BrowserDetect()
{
    // New detection, taken from http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

    // Opera 8.0+
    this.isOpera = (!!window['opr'] && !!opr.addons) || !!window['opera'] || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    this.isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    this.isSafari = Object.prototype.toString.call(window['HTMLElement']).indexOf('Constructor') > 0 || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari['pushNotification']);

    // Internet Explorer 6-11
    this.isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    this.isEdge = !this.isIE && !!window['StyleMedia'];

    // Chrome 1+
    this.isChrome = !!window.chrome && !!window.chrome.webstore;

    if (this.isChrome)
        this.browser = "Chrome";
    else if (this.isEdge)
        this.browser = "Edge";
    else if (this.isIE)
        this.browser = "Explorer";
    else if (this.isFirefox)
        this.browser = "Firefox";
    else if (this.isOpera)
        this.browser = "Opera";
    else if (this.isSafari)
        this.browser = "Safari";

    // Old version
    else
        this.browser = this.searchString(BrowserDetect.dataBrowser) || "Unknown browser";

    this.version = this.searchVersion(navigator.userAgent)
		|| this.searchVersion(navigator.appVersion)
		|| "Unknown version";
	this.OS = this.searchString(BrowserDetect.dataOS) || "Unknown OS";
}
BrowserDetect.prototype =
{
	searchString:  function (data)
	{
		for (var i = 0; i < data.length; i++)
		{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString)
			{
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString)
	{
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	}
};

// REPLACE COLOR
// -----------------------------------------------------
function CActReplaceColor()
{
	this.mode = null;
	this.dwMax = null;
	this.pImages = null;
	this.pRh = null;
}

function CReplaceColor()
{
	this.mode = 0;
	this.app = null;
	this.pImages = null;
}
CReplaceColor.prototype =
{
	replaceColor: function (rhPtr, pHo, newColor, oldColor)
	{
		this.app = rhPtr.rhApp;

		// Changement des couleurs
		// ----------------------------------------------------------------------------
		var oi = pHo.hoOi;
		var poi = rhPtr.rhApp.OIList.getOIFromHandle(oi);
		if (poi == null)
			return;

		// Get image max
		this.dwMax = -1;
		this.mode = 0;
		poi.enumElements(this, null);

		// Rechercher le premier
		var pHoFirst = pHo;
		while ((pHoFirst.hoNumPrev & 0x80000000) == 0)
			pHoFirst = rhPtr.rhObjectList[pHoFirst.hoNumPrev & 0x7FFFFFFF];

		// Parcourir la liste
		do
		{
			if (pHoFirst.roc.rcImage != -1 && pHoFirst.roc.rcImage > this.dwMax)
				this.dwMax = pHoFirst.roc.rcImage;
			if (pHoFirst.roc.rcOldImage != -1 && pHoFirst.roc.rcOldImage > this.dwMax)
				this.dwMax = pHoFirst.roc.rcOldImage;

			// Le dernier?
			if ((pHoFirst.hoNumNext & 0x80000000) != 0)
				break;

			// Next OI
			pHoFirst = rhPtr.rhObjectList[pHoFirst.hoNumNext];

		} while (true);

		// Allocate memory
		this.pImages = new Array(this.dwMax + 1);
		var n;
		for (n = 0; n < this.dwMax + 1; n++)
		{
			this.pImages[n] = -1;
		}

		// List all images
		this.mode = 1;
		poi.enumElements(this, null);

		// Replace color in all images and create new images
		var i;
		var newImg;
		for (i = 0; i <= this.dwMax; i++)
		{
			if (this.pImages[i] == -1)
				continue;

			var sourceImg = rhPtr.rhApp.imageBank.getImageFromHandle(i);
			var destImg = CServices.performReplacement(rhPtr.rhApp, sourceImg, oldColor, newColor);
			if (destImg != null)
			{
				// Create new image in the bank
				this.pImages[i] = rhPtr.rhApp.imageBank.addImage(destImg);
			}
		}

		// Remplacer images dans les objets de m�me OI
		pHoFirst = pHo;
		while ((pHoFirst.hoNumPrev & 0x80000000) == 0)
			pHoFirst = rhPtr.rhObjectList[pHoFirst.hoNumPrev & 0x7FFFFFFF];

		// Parcourir la liste
		do
		{
			if (pHoFirst.roc.rcImage != -1 && this.pImages[pHoFirst.roc.rcImage] != -1)
			{
				pHoFirst.roc.rcImage = this.pImages[pHoFirst.roc.rcImage];
			}
			if (pHoFirst.roc.rcOldImage != -1 && this.pImages[pHoFirst.roc.rcOldImage] != -1)
			{
				pHoFirst.roc.rcOldImage = this.pImages[pHoFirst.roc.rcOldImage];
			}

			// Le dernier?
			if ((pHoFirst.hoNumNext & 0x80000000) != 0)
				break;
			// Next OI
			pHoFirst = rhPtr.rhObjectList[pHoFirst.hoNumNext];

		} while (true);

		this.mode = 2;
		poi.enumElements(this, null);

		// Replace old images by new ones
		this.mode = 3;
		poi.enumElements(this, null);

		// Mark OI to reload
		poi.oiLoadFlags |= COI.OILF_TORELOAD;
	},
	enumerate:    function (num)
	{
		switch (this.mode)
		{
			case 0:
				if (num > this.dwMax)
					this.dwMax = num;
				return -1;
			case 1:
				this.pImages[num] = 1;
				return -1;
			case 2:
				this.app.imageBank.delImage(num);
				return -1;
			case 3:
				var image = this.app.imageBank.getImageFromHandle(this.pImages[num]);
				image.useCount++;
				return this.pImages[num];
		}
		return -1;
	}
}
CServices.performReplacement = function (app, image, sourceColor, destColor)
{
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	var context = canvas.getContext("2d");
	if (image.mosaic == 0)
	{
		context.drawImage(image.img, 0, 0);
	}
	else
	{
		context.drawImage(app.imageBank.mosaics[image.mosaic],
			image.mosaicX, image.mosaicY,
			image.width, image.height, 0, 0,
			image.width, image.height);
	}
	var imageData = context.getImageData(0, 0, image.width, image.height);
	var newR = (destColor >> 16) & 0xFF;
	var newG = (destColor >> 8) & 0xFF;
	var newB = destColor & 0xFF;
	var oldR = (sourceColor >> 16) & 0xFF;
	var oldG = (sourceColor >> 8) & 0xFF;
	var oldB = sourceColor & 0xFF;
	var index, x, y;
	for (y = 0; y < image.height; y++)
	{
		for (x = 0; x < image.width; x++)
		{
			index = (y * image.width + x) * 4;
			if (imageData.data[index] == oldR && imageData.data[index + 1] == oldG && imageData.data[index + 2] == oldB)
			{
				imageData.data[index] = newR;
				imageData.data[index + 1] = newG;
				imageData.data[index + 2] = newB;
			}
		}
	}
	context.putImageData(imageData, 0, 0);
	var newImage = new CImage();
	newImage.app = app;
	newImage.width = image.width;
	newImage.height = image.height;
	newImage.xSpot = image.xSpot;
	newImage.ySpot = image.ySpot;
	newImage.xAP = image.xAP;
	newImage.yAP = image.yAP;
	newImage.useCount = 0;
	newImage.img = canvas;
	newImage.maskNormal = image.maskNormal;
	newImage.maskPlatform = image.maskPlatform;
	newImage.maskRotation = image.maskRotation;

	return newImage;
}

// Graphic font
// ---------------------------------------------------------
CGraphicFont.FONTFLAG_ITALIC = 0x0001;
CGraphicFont.FONTFLAG_UNDERLINE = 0x0002;
CGraphicFont.FONTFLAG_BOLD = 0x0004;
CGraphicFont.FLAG_PRIORITY = 0x0008;
function CGraphicFont()
{
	this.characters = null;
	this.width = 0;
	this.height = 0;
	this.image = null;
	this.color = 0;
	this.flags = 0;
	this.fontName = null;
	this.fontHeight = 0;
	this.fontFlags = 0;
	this.interline = 0;
	this.interchar = 0;
	this.nChars = 0;
	this.charWidths = null;
	this.isGraphic = true;
}

CGraphicFont.prototype =
{
	compareFont: function (font)
	{
		if (this.fontName != font.lfFaceName)
			return false;
		if (this.fontHeight != font.lfHeight)
			return false;
		var b1 = (this.fontFlags & CGraphicFont.FONTFLAG_ITALIC) != 0;
		var b2 = (font.lfItalic) != 0;
		if (b1 != b2)
			return false;
		b1 = (this.fontFlags & CGraphicFont.FONTFLAG_BOLD) != 0;
		b2 = (font.lfWeight) > 400;
		if (b1 != b2)
			return false;
		return true;
	},

	getHeight: function () {
	    return this.height + this.interline;
	},

	measureText: function (s)
	{
		var w = 0;
		var l = s.length;
		var n, index;
		for (n = 0; n < l; n++)
		{
			index = this.characters.indexOf(s.charAt(n));
			if (index >= 0)
			{
				w += this.charWidths[index] + this.interchar;
			}
			else
			{
				w += this.width;
			}
		}
		return w;
	},

	measureChar: function (c)
	{
		var w;
		var index = characters.indexOf(String.fromCharCode(c));
		if (index >= 0)
			w = this.charWidths[index] + this.interchar;
		else
			w = this.width;
		return w;
	},

	fillText: function (context, s, x, y)
	{
		var l = s.length;
		var n, xs, ys, index, col, line, c;

		var image = this.image;

		if ((this.flags & CGraphicFont.FLAG_PRIORITY) == 0)
		{
			for (n = 0; n < l; n++)
			{
				index = this.characters.indexOf(s.charAt(n));
				if (index >= 0)
				{
					line = Math.floor(index / this.nChars);
					col = index - (line * this.nChars);
					ys = line * (this.height + 1);
					xs = col * (this.width + 1);

					if (image.mosaic == 0)
					{
					    context.drawImage(image.img, xs, ys, this.width, this.height, Math.round(x), Math.round(y), this.width, this.height);
					}
					else
					{
						context.drawImage(image.app.imageBank.mosaics[image.mosaic],
							xs + image.mosaicX, ys + image.mosaicY, this.width, this.height,
							Math.round(x), Math.round(y), this.width, this.height);
					}
					x += this.charWidths[index] + this.interchar;
				}
				else
				{
					context.fillStyle = CServices.getColorString(this.color);
					context.fillRect(x, y, this.width, this.height);
					x += this.width;
				}
			}
		}
		else
		{
			x += this.measureText(s);
			for (n = l - 1; n >= 0; n--)
			{
				index = this.characters.indexOf(s.charAt(n));
				if (index >= 0)
				{
					x -= (this.charWidths[index] + this.interchar);
					line = index / this.nChars;
					col = index - (line * this.nChars);
					ys = line * (this.height + 1);
					xs = col * (this.width + 1);
					if (image.mosaic == 0)
					{
					    context.drawImage(image.img, xs, ys, this.width, this.height, Math.round(x), Math.round(y), this.width, this.height);
					}
					else
					{
						context.drawImage(image.app.imageBank.mosaics[image.mosaic],
							xs + image.mosaicX, ys + image.mosaicY, this.width, this.height,
							Math.round(x), Math.round(y), this.width, this.height);
					}
				}
				else
				{
					x -= this.width;
					context.fillStyle = CServices.getColorString(this.color);
					context.fillRect(x, y, this.width, this.height);
				}
			}
		}
	}
}

// OBJECT SELECTION CLASS
// ------------------------------------------------------------------------------
function ObjectSelection(runApp)
{
	this.rhPtr = runApp;
	this.run = this.rhPtr.run;
	this.eventProgram = this.run.rhEvtProg;
	this.ObjectList = this.run.rhObjectList;				//get a pointer to the mmf object list
	this.OiList = this.run.rhOiList;						//get a pointer to the mmf object info list
	this.QualToOiList = this.eventProgram.qualToOiList;	//get a pointer to the mmf qualifier to Oi list
}
ObjectSelection.prototype =
{
	//Selects *all* objects of the given object-type
	selectAll:                 function (OiList)
	{
		var pObjectInfo = this.OiList[OiList];
		pObjectInfo.oilNumOfSelected = pObjectInfo.oilNObjects;
		pObjectInfo.oilListSelected = pObjectInfo.oilObject;
		pObjectInfo.oilEventCount = this.eventProgram.rh2EventCount;

		var i = pObjectInfo.oilObject;
		while ((i & 0x80000000) == 0)
		{
			var pObject = this.ObjectList[i];
			pObject.hoNextSelected = pObject.hoNumNext;
			i = pObject.hoNumNext;
		}
	},

	//Resets all objects of the given object-type
	selectNone:                function (OiList)
	{
		var pObjectInfo = this.OiList[OiList];
		if (pObjectInfo == null)
			return;
		pObjectInfo.oilNumOfSelected = 0;
		pObjectInfo.oilListSelected = -1;
		pObjectInfo.oilEventCount = this.eventProgram.rh2EventCount;
	},

	//Resets the SOL and inserts only one given object
	selectOneObject:           function (object)
	{
		var pObjectInfo = object.hoOiList;
		pObjectInfo.oilNumOfSelected = 1;
		pObjectInfo.oilEventCount = this.eventProgram.rh2EventCount;
		pObjectInfo.oilListSelected = object.hoNumber;
		this.ObjectList[object.hoNumber].hoNextSelected = -1;
	},

	//Resets the SOL and inserts the given list of objects
	selectObjects:             function (OiList, objects)
	{
		var pObjectInfo = this.OiList[OiList];

		if (pObjectInfo == null)
			return;

		pObjectInfo.oilNumOfSelected = objects.length;
		pObjectInfo.oilEventCount = eventProgram.rh2EventCount;

		if (objects.length == 0)
			return;

		var i = 0;
		var prevNumber = objects[i].hoNumber;
		pObjectInfo.oilListSelected = prevNumber;
		while (i < objects.length)
		{
			currentNumber = objects[i++].hoNumber;
			this.ObjectList[prevNumber].hoNextSelected = currentNumber;
			prevNumber = currentNumber;
		}
		this.ObjectList[prevNumber].hoNextSelected = -1;
	},

	//Run a custom filter on the SOL (via function callback)
	filterObjects:             function (rdPtr, OiList, negate, filter)
	{
		if ((OiList & 0x8000) != 0)
		{
			return ((this.filterQualifierObjects(rdPtr, OiList & 0x7FFF, negate, filter) ? 1 : 0) ^ (negate ? 1 : 0)) != 0;
		}
		return ((this.filterNonQualifierObjects(rdPtr, OiList, negate, filter) ? 1 : 0) ^ (negate ? 1 : 0)) != 0;
	},

	//Filter qualifier objects
	filterQualifierObjects:    function (rdPtr, OiList, negate, filter)
	{
		var CurrentQualToOi = this.QualToOiList[OiList];

		var hasSelected = false;
		var i = 0;

		while (i < CurrentQualToOi.qoiList.length)
		{
			var CurrentOi = CurrentQualToOi.qoiList[i + 1];
			hasSelected = (((hasSelected ? 1 : 0) |
				(this.filterNonQualifierObjects(rdPtr, CurrentOi, negate, filter) ? 1 : 0))) != 0;

			i += 2;
		}
		return hasSelected;
	},

	//Filter normal objects
	filterNonQualifierObjects: function (rdPtr, OiList, negate, filter)
	{
		var pObjectInfo = this.OiList[OiList];
		if (pObjectInfo == null)
			return false;
		var hasSelected = false;
		if (pObjectInfo.oilEventCount != this.eventProgram.rh2EventCount)
		{
			this.selectAll(OiList);	//The SOL is invalid, must reset.
		}

		//If SOL is empty
		if (pObjectInfo.oilNumOfSelected <= 0)
		{
			return false;
		}

		var firstSelected = -1;
		var count = 0;
		var current = pObjectInfo.oilListSelected;
		var previous = null;

		while ((current & 0x80000000) == 0)
		{
			var pObject = this.ObjectList[current];
			var filterResult = filter(rdPtr, pObject);
			var useObject = ((filterResult ? 1 : 0) ^ (negate ? 1 : 0)) != 0;
			hasSelected = ((hasSelected ? 1 : 0) | (useObject ? 1 : 0)) != 0;

			if (useObject)
			{
				if (firstSelected == -1)
				{
					firstSelected = current;
				}

				if (previous != null)
				{
					previous.hoNextSelected = current;
				}

				previous = pObject;
				count++;
			}
			current = pObject.hoNextSelected;
		}
		if (previous != null)
		{
			previous.hoNextSelected = -1;
		}

		pObjectInfo.oilListSelected = firstSelected;
		pObjectInfo.oilNumOfSelected = count;

		return hasSelected;
	},

	//Return the number of selected objects for the given object-type
	getNumberOfSelected:       function (OiList)
	{
		if ((OiList & 0x8000) != 0)
		{
			OiList &= 0x7FFF;	//Mask out the qualifier part
			var numberSelected = 0;

			var CurrentQualToOi = this.QualToOiList[OiList];

			var i = 0;
			while (i < CurrentQualToOi.qoiList.length)
			{
				var CurrentOi = this.OiList[CurrentQualToOi.qoiList[i + 1]];
				numberSelected += CurrentOi.oilNumOfSelected;
				i += 2;
			}
			return numberSelected;
		}
		else
		{
			var pObjectInfo = this.OiList[OiList];
			return pObjectInfo.oilNumOfSelected;
		}
	},

	objectIsOfType: function (obj, OiList)
	{
		if ((OiList & 0x8000) != 0)
		{
			OiList &= 0x7FFF;	//Mask out the qualifier part
			var CurrentQualToOi = this.QualToOiList[OiList];

			var i = 0;
			while (i < CurrentQualToOi.qoiList.length)
			{
				var CurrentOi = this.OiList[CurrentQualToOi.qoiList[i + 1]];
				if (CurrentOi.oilOi == obj.hoOi)
					return true;
				i += 2;
			}
			return false;
		}
		return (obj.hoOi == this.OiList[OiList].oilOi);
	},

	//Returns the object-info structure from a given object-type
	GetOILFromOI:   function (Oi)
	{
		for (i = 0; i < this.run.rhMaxOI; ++i)
		{
			var oil = this.OiList[i];
			if (oil.oilOi == Oi)
				return oil;
		}
		return null;
	}
}


// function decode_b64(d,b,c,u,r,q,x){b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(r=q=x='';c=d.charAt(x++);~c&&(u=q%4?u*64+c:c,q++%4)?r+=String.fromCharCode(255&u>>(-2*q&6)):0)c=b.indexOf(c);return r}
// function encode_b64(a,b,c,d,e,f){b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";c="=";for(d=f='';e&=3,a.charAt(d++)||(b='=',e);f+=b.charAt(63&c>>++e*2))c=c<<8|a.charCodeAt(d-=!e);return f}


//----------------------------------------------------------------------------------
//
// CTokenizer
//
//----------------------------------------------------------------------------------
function CTokenizer(text, delimiter) {
    this.tokens = new CArrayList();

    var oldPos = 0;
    var pos = text.indexOf(delimiter);

    // Special case: if delimiter = \n, then remove \r from end of tokens
    if (delimiter.length == 1 && delimiter.charCodeAt(0) == 10) {
        while (pos >= 0) {
            if (pos > oldPos) {
                var str = text.substring(oldPos, pos);
                if (str.length > 0 && str.charCodeAt(str.length - 1) == 13)
                    str = str.substr(0, str.length - 1);
                this.tokens.add(str);
            }
            oldPos = pos + delimiter.length;
            pos = text.indexOf(delimiter, oldPos);
        }

        if (text.length > oldPos) {
            var str = text.substring(oldPos, text.length);
            if (str.length > 0 && str.charCodeAt(str.length - 1) == 13)
                str = str.substr(0, str.length - 1);
            this.tokens.add(str);
        }
    }
    else {
        while (pos >= 0) {
            if (pos > oldPos) {
                this.tokens.add(text.substring(oldPos, pos));
            }
            oldPos = pos + delimiter.length;
            pos = text.indexOf(delimiter, oldPos);
        }

        if (text.length > oldPos) {
            this.tokens.add(text.substring(oldPos, text.length));
        }
    }

    this.numToken = 0;
}
CTokenizer.prototype =
{
    countTokens: function () {
        return this.tokens.size();
    },
    nextToken: function () {
        if (this.numToken < this.tokens.size()) {
            var s = this.tokens.get(this.numToken++);
            if (s == null) {
                return "";
            }
            return s;
        }
        return "";
    }
}

