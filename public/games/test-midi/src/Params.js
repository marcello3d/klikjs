// CParam object
// ------------------------------------------------------
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

CParam.PARAM_EXPRESSIONNUM = 22;
CParam.create = function (app)
{
	var debut = app.file.getFilePointer();

	var param = null;
	var size = app.file.readAShort('size');
	var c = app.file.readAShort('c');

	switch (c)
	{
		case 1:
			param = new PARAM_OBJECT(app);
			break;
		case 2:
			param = new PARAM_TIME(app);
			break;
		case 3:
			param = new PARAM_SHORT(app);
			break;
		case 4:
			param = new PARAM_SHORT(app);
			break;
		case 5:
			param = new PARAM_INT(app);
			break;
		case 6:
			param = new PARAM_SAMPLE(app);
			break;
		case 9:
			param = new PARAM_CREATE(app);
			break;
		case 10:
			param = new PARAM_SHORT(app);
			break;
		case 11:
			param = new PARAM_SHORT(app);
			break;
		case 12:
			param = new PARAM_SHORT(app);
			break;
		case 13:
			param = new PARAM_EVERY(app);
			break;
		case 14:
			param = new PARAM_KEY(app);
			break;
		case 15:
			param = new PARAM_EXPRESSION(app);
			break;
		case 16:
			param = new PARAM_POSITION(app);
			break;
		case 17:
			param = new PARAM_SHORT(app);
			break;
		case 18:
			param = new PARAM_SHOOT(app);
			break;
		case 19:
			param = new PARAM_ZONE(app);
			break;
		case 21:
			param = new PARAM_CREATE(app);
			break;
		case 22:
			param = new PARAM_EXPRESSION(app);
			break;
		case 23:
			param = new PARAM_EXPRESSION(app);
			break;
		case 24:
			param = new PARAM_COLOUR(app);
			break;
		case 25:
			param = new PARAM_INT(app);
			break;
		case 26:
			param = new PARAM_SHORT(app);
			break;
		case 27:
			param = new PARAM_EXPRESSION(app);
			break;
		case 28:
			param = new PARAM_EXPRESSION(app);
			break;
		case 29:
			param = new PARAM_INT(app);
			break;
		case 31:
			param = new PARAM_SHORT(app);
			break;
		case 32:
			param = new PARAM_SHORT(app);
			break;
		case 34:
			param = new PARAM_INT(app);
			break;
		case 35:
			param = new PARAM_SAMPLE(app);
			break;
		case 36:
			param = new PARAM_SAMPLE(app);
			break;
		case 37:
			param = new PARAM_SHORT(app);
			break;
		case 38:
			param = new PARAM_GROUP(app);
			break;
		case 39:
			param = new PARAM_GROUPOINTER(app);
			break;
		case 40:
			param = new PARAM_STRING(app);
			break;
		case 41:
			param = new PARAM_STRING(app);
			break;
		case 42:
			param = new PARAM_CMPTIME(app);
			break;
		case 43:
			param = new PARAM_SHORT(app);
			break;
		case 44:
			param = new PARAM_KEY(app);
			break;
		case 45:
			param = new PARAM_EXPRESSION(app);
			break;
		case 46:
			param = new PARAM_EXPRESSION(app);
			break;
		case 47:
			param = new PARAM_2SHORTS(app);
			break;
		case 48:
			param = new PARAM_INT(app);
			break;
		case 49:
			param = new PARAM_SHORT(app);
			break;
		case 50:
			param = new PARAM_SHORT(app);
			break;
		case 51:
			param = new PARAM_2SHORTS(app);
			break;
		case 52:
			param = new PARAM_EXPRESSION(app);
			break;
		case 53:
			param = new PARAM_EXPRESSION(app);
			break;
		case 54:
			param = new PARAM_EXPRESSION(app);
			break;
		case 55:
			param = new PARAM_EXTENSION(app);
			break;
		case 56:
			param = new PARAM_INT(app);
			break;
		case 57:
			param = new PARAM_SHORT(app);
			break;
		case 58:
			param = new PARAM_SHORT(app);
			break;
		case 59:
			param = new PARAM_EXPRESSION(app);
			break;
		case 60:
			param = new PARAM_SHORT(app);
			break;
		case 61:
			param = new PARAM_SHORT(app);
			break;
		case 62:
			param = new PARAM_EXPRESSION(app);
			break;
		case 63:
			param = new PARAM_STRING(app);
			break;
		case 64:
			param = new PARAM_STRING(app);
			break;
	    case 67:
	        param = new PARAM_SHORT(app);
	        break;
	    case 68:
	        param = new PARAM_MULTIPLEVAR(app);
	        break;
	    case 69:
	        param = new PARAM_CHILDEVENT(app);
	        break;
	}
	param.code = c;
	app.file.seek(debut + size);
	return param;
}
function CParam()
{
}

// CPositionInfo object
// ------------------------------------------------------------------------
function CPositionInfo()
{
	this.x = 0;
	this.y = 0;
	this.dir = 0;
	this.layer = 0;
	this.bRepeat = false;
}
// Parameter objects
// ------------------------------------------------------------------------
function PARAM_2SHORTS(app)
{
	this.value1 = app.file.readAShort('value1');
	this.value2 = app.file.readAShort('value2');
}
function PARAM_CMPTIME(app)
{
	this.timer = app.file.readAInt('timer');
	this.loops = app.file.readAInt('loops');
	this.comparaison = app.file.readAShort('comparaison');
}
function PARAM_COLOUR(app)
{
	this.color = app.file.readAColor('color');
}
function PARAM_EVERY(app)
{
	this.delay = app.file.readAInt('delay');
	this.compteur = app.file.readAInt('compteur');
}
function PARAM_EXPRESSION(app)
{
	this.comparaison = app.file.readAShort('comparaison');

	var debut = app.file.getFilePointer();
	var count = 0;
	var size;
	var code;
	while (true)
	{
		count++;
		code = app.file.readAInt('code');
		if (code == 0)
			break;
		size = app.file.readAShort('size');
		if (size > 6)
			app.file.skipBytes(size - 6);
	}

	app.file.seek(debut);
	this.tokens = new Array(count);
	var n;
	for (n = 0; n < count; n++)
		this.tokens[n] = CExp.create(app.file);
}
function PARAM_EXTENSION(app)
{
	var size = app.file.readAShort('size');
	app.file.skipBytes(4);
	this.data = 0;
	if (size > 6)
	{
		this.data = app.file.getFilePointer();
		app.file.skipBytes(size - 6);
	}
}
PARAM_GROUP.GRPFLAGS_INACTIVE = 0x0001;
PARAM_GROUP.GRPFLAGS_CLOSED = 0x0002;
PARAM_GROUP.GRPFLAGS_PARENTINACTIVE = 0x0004;
PARAM_GROUP.GRPFLAGS_GROUPINACTIVE = 0x0008;
PARAM_GROUP.GRPFLAGS_GLOBAL = 0x0010;
function PARAM_GROUP(app)
{
	this.grpFlags = app.file.readAShort('grpFlags');
	this.grpId = app.file.readAShort('grpId');
}
function PARAM_GROUPOINTER(app)
{
	app.file.skipBytes(4);
	this.pointer = 0;
	this.id = app.file.readAShort('id');
}
function PARAM_INT(app)
{
	this.value = app.file.readAInt('value');
	this.value2 = 0;
}
function PARAM_KEY(app)
{
	this.key = app.file.readAShort('key');
}
function PARAM_OBJECT(app)
{
	this.oiList = app.file.readShort('oiList');
	this.oi = app.file.readShort('oi');
	this.type = app.file.readShort('type');
}
function PARAM_CHILDEVENT(app) {
    app.file.skipBytes(4);
    this.evgOffsetList = 0;
    this.ois = new Array();
    while (true) {
        var oi = app.file.readShort('       var oi');
        var oil = app.file.readShort('       var oil');
        if (oi == -1)
            break;
        this.ois.push(oi);
        this.ois.push(oil);
    }
}
CPosition.CPF_DIRECTION = 0x0001;
CPosition.CPF_ACTION = 0x0002;
CPosition.CPF_INITIALDIR = 0x0004;
CPosition.CPF_DEFAULTDIR = 0x0008;
function CPosition()
{
}
CPosition.prototype =
{
	read_Position: function (rhPtr, getDir, pInfo)
	{
		pInfo.layer = -1;

		if (this.posOINUMParent == -1)
		{
			if (getDir != 0)
			{
				pInfo.dir = -1;
				if ((this.posFlags & CPosition.CPF_DEFAULTDIR) == 0)
				{
					pInfo.dir = rhPtr.get_Direction(this.posDir);
				}
			}
			pInfo.x = this.posX;
			pInfo.y = this.posY;
			var nLayer = this.posLayer;
			if (nLayer > rhPtr.rhFrame.nLayers - 1)
				nLayer = rhPtr.rhFrame.nLayers - 1;
			pInfo.layer = nLayer;
			pInfo.bRepeat = false;
		}
		else
		{
			rhPtr.rhEvtProg.rh2EnablePick = false;
			var pHo;
			pHo = rhPtr.rhEvtProg.get_CurrentObjects(this.posOiList);
			pInfo.bRepeat = rhPtr.rhEvtProg.repeatFlag;
			if (pHo == null)
				return false;
			pInfo.x = pHo.hoX;
			pInfo.y = pHo.hoY;
			pInfo.layer = pHo.hoLayer;

			if ((this.posFlags & CPosition.CPF_ACTION) != 0)
			{
				if ((pHo.hoOEFlags & CObjectCommon.OEFLAG_ANIMATIONS) != 0)
				{
					if (pHo.roc.rcImage >= 0)
					{
						var ifo;
						var angle = pHo.roc.rcAngle;
						var pMBase = rhPtr.GetMBase(pHo);
						if (pMBase != null)
							angle = pMBase.getAngle();
						ifo = rhPtr.rhApp.imageBank.getImageInfoEx(pHo.roc.rcImage, angle, pHo.roc.rcScaleX, pHo.roc.rcScaleY);
						pInfo.x += ifo.xAP - ifo.xSpot;
						pInfo.y += ifo.yAP - ifo.ySpot;
					}
				}
			}

			if ((this.posFlags & CPosition.CPF_DIRECTION) != 0)
			{
				var dir = this.posAngle + pHo.hoAdRunHeader.getDir(pHo) & 0x1F;
				var px = CMove.getDeltaX(this.posSlope, dir);
				var py = CMove.getDeltaY(this.posSlope, dir);
				pInfo.x += px;
				pInfo.y += py;
			}
			else
			{
				pInfo.x += this.posX;
				pInfo.y += this.posY;
			}

			if ((getDir & 0x01) != 0)
			{
				if ((this.posFlags & CPosition.CPF_DEFAULTDIR) != 0)
					pInfo.dir = -1;
				else if ((this.posFlags & CPosition.CPF_INITIALDIR) != 0)
					pInfo.dir = pHo.hoAdRunHeader.getDir(pHo);
				else
					pInfo.dir = rhPtr.get_Direction(this.posDir);
			}
		}

		if ((getDir & 0x02) != 0)
		{
			if (pInfo.x < rhPtr.rh3XMinimumKill || pInfo.x > rhPtr.rh3XMaximumKill)
				return false;
			if (pInfo.y < rhPtr.rh3YMinimumKill || pInfo.y > rhPtr.rh3YMaximumKill)
				return false;
		}
		return true;
	}
}
function PARAM_POSITION(app)
{
	this.posOINUMParent = app.file.readShort('posOINUMParent');
	this.posFlags = app.file.readShort('posFlags');
	this.posX = app.file.readShort('posX');
	this.posY = app.file.readShort('posY');
	this.posSlope = app.file.readShort('posSlope');
	this.posAngle = app.file.readShort('posAngle');
	this.posDir = app.file.readAInt('posDir');
	this.posTypeParent = app.file.readShort('posTypeParent');
	this.posOiList = app.file.readShort('posOiList');
	this.posLayer = app.file.readShort('posLayer');
}
PARAM_POSITION.prototype = CServices.extend(new CPosition(),
	{
	});
function PARAM_CREATE(app)
{
	this.posOINUMParent = app.file.readShort('posOINUMParent');
	this.posFlags = app.file.readShort('posFlags');
	this.posX = app.file.readShort('posX');
	this.posY = app.file.readShort('posY');
	this.posSlope = app.file.readShort('posSlope');
	this.posAngle = app.file.readShort('posAngle');
	this.posDir = app.file.readAInt('posDir');
	this.posTypeParent = app.file.readShort('posTypeParent');
	this.posOiList = app.file.readShort('posOiList');
	this.posLayer = app.file.readShort('posLayer');
	this.cdpHFII = app.file.readAShort('cdpHFII');
	this.cdpOi = app.file.readAShort('cdpOi');
}
PARAM_CREATE.prototype = CServices.extend(new CPosition(),
	{
	});
function PARAM_SHOOT(app)
{
	this.posOINUMParent = app.file.readShort('posOINUMParent');
	this.posFlags = app.file.readShort('posFlags');
	this.posX = app.file.readShort('posX');
	this.posY = app.file.readShort('posY');
	this.posSlope = app.file.readShort('posSlope');
	this.posAngle = app.file.readShort('posAngle');
	this.posDir = app.file.readAInt('posDir');
	this.posTypeParent = app.file.readShort('posTypeParent');
	this.posOiList = app.file.readShort('posOiList');
	this.posLayer = app.file.readShort('posLayer');
	this.cdpHFII = app.file.readShort('cdpHFII');
	this.cdpOi = app.file.readShort('cdpOi');
	app.file.skipBytes(4);		//cdpFree
	this.shtSpeed = app.file.readAShort('shtSpeed');
}
PARAM_SHOOT.prototype = CServices.extend(new CPosition(),
	{
	});

function PARAM_SAMPLE(app)
{
	this.sndHandle = app.file.readAShort('sndHandle');
	this.sndFlags = app.file.readAShort('sndFlags');
}
function PARAM_MUSIC(app)
{
	this.sndHandle = app.file.readAShort('sndHandle');
	this.sndFlags = app.file.readAShort('sndFlags');
}
function PARAM_SHORT(app)
{
	this.value = app.file.readAShort('value');
}
function PARAM_STRING(app)
{
	this.string = app.file.readAString('string');
}
function PARAM_TIME(app)
{
	this.timer = app.file.readAInt('timer');
	this.loops = app.file.readAInt('loops');
}
function PARAM_ZONE(app)
{
	this.x1 = app.file.readShort('x1');
	this.y1 = app.file.readShort('y1');
	this.x2 = app.file.readShort('x2');
	this.y2 = app.file.readShort('y2');
}
function multiVar(app, _global, _double)
{
    this.index = app.file.readAInt('   this.index');
    this.op = app.file.readAInt('   this.op');
    this.global = _global;
    if (_double) {
        this.val = app.file.readADouble('       this.val');
    } else {
        this.val = app.file.readAInt('       this.val');
        app.file.skipBytes(4);
    }
}
function PARAM_MULTIPLEVAR(app) {
    this.flags = app.file.readAInt('   this.flags');
    this.flagMasks = app.file.readAInt('   this.flagMasks');
    this.flagValues = app.file.readAInt('   this.flagValues');
    this.values = new Array();
    var mask = 1;
    var maskGlobal = 2;
    var maskDouble = 4;
    for (var i = 0; i < 4; i++) {
        if ((this.flags & mask) == 0)
            break;
        var value = new multiVar(app, (this.flags & maskGlobal) != 0, (this.flags & maskDouble) != 0);
        mask <<= 4;
        maskGlobal <<= 4;
        maskDouble <<= 4;
        this.values.push(value);
    }
}
PARAM_MULTIPLEVAR.prototype =
{
    evaluate: function (pHo) {

        if ( pHo.rov == null )
            return false;

        // Test multiple flags
        if ( this.flagMasks != 0 )
        {
            if ( (pHo.rov.rvValueFlags & this.flagMasks) != this.flagValues )
                return false;
        }

        // Test values
        for (var i = 0; i < this.values.length; i++) {
            var value = this.values[i];
            var v;
            if (value.global) {
                v = pHo.hoAdRunHeader.rhApp.getGlobalValueAt(value.index);
            }
            else {
                v = pHo.rov.getValue(value.index);
            }
            if (!CRun.compareTo(v, value.val, value.op))
                return false;
        }
        return true;
    },

    evaluateNoGlobal: function (pHo) {

        if ( pHo.rov == null )
            return false;

        // Test multiple flags
        if ( this.flagMasks != 0 )
        {
            if ( (pHo.rov.rvValueFlags & this.flagMasks) != this.flagValues )
                return false;
        }

        // Test values
        for (var i = 0; i < this.values.length; i++) {
            var value = this.values[i];
            var v = pHo.rov.getValue(value.index);
            if (!CRun.compareTo(v, value.val, value.op))
                return false;
        }
        return true;
    }
}
