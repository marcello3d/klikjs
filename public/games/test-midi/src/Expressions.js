// CExp object
// -------------------------------------------------------------
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
CExp.EXP_EXTGETFRICTION = (35 << 8);
CExp.EXP_EXTGETRESTITUTION = (36 << 8);
CExp.EXP_EXTGETDENSITY = (37 << 8);
CExp.EXP_EXTGETVELOCITY = (38 << 8);
CExp.EXP_EXTGETANGLE = (39 << 8);
CExp.EXP_EXTGETMASS = (42 << 8);
CExp.EXP_EXTGETANGULARVELOCITY = (43 << 8);
CExp.EXP_STRING = ((3 << 16) | 0xFFFF);
CExp.EXP_LONG = ((0 << 16) | 0xFFFF);
CExp.EXP_DOUBLE = ((23 << 16) | 0xFFFF);

CExp.create = function (file)
{
	var debut = file.getFilePointer();
	var exp = null;
	var c = file.readAInt();
	switch (c)
	{
		case 0x00000000:
			exp = new EXP_ZERO();
			break;
		case 0x00020000:
			exp = new EXP_PLUS();
			break;
		case 0x00040000:
			exp = new EXP_MINUS();
			break;
		case 0x00060000:
			exp = new EXP_MULT();
			break;
		case 0x00080000:
			exp = new EXP_DIV();
			break;
		case 0x000A0000:
			exp = new EXP_MOD();
			break;
		case 0x000C0000:
			exp = new EXP_POW();
			break;
		case 0x000E0000:
			exp = new EXP_AND();
			break;
		case 0x00100000:
			exp = new EXP_OR();
			break;
		case 0x00120000:
			exp = new EXP_XOR();
			break;
		case ((0 << 16) | 0xFFFF):
			exp = new EXP_LONG();
			break;
		case ((1 << 16) | 0xFFFF):
			exp = new EXP_RANDOM();
			break;
		case ((2 << 16) | 0xFFFF):
			exp = new EXP_VARGLO();
			break;
		case ((3 << 16) | 0xFFFF):
			exp = new EXP_STRING();
			break;
		case ((4 << 16) | 0xFFFF):
			exp = new EXP_STR();
			break;
		case ((5 << 16) | 0xFFFF):
			exp = new EXP_VAL();
			break;
		case ((6 << 16) | 0xFFFF):
		case ((7 << 16) | 0xFFFF):
		case ((8 << 16) | 0xFFFF):
		case ((9 << 16) | 0xFFFF):
			exp = new EXP_EMPTY();
			break;
		case ((10 << 16) | 0xFFFF):
			exp = new EXP_SIN();
			break;
		case ((11 << 16) | 0xFFFF):
			exp = new EXP_COS();
			break;
		case ((12 << 16) | 0xFFFF):
			exp = new EXP_TAN();
			break;
		case ((13 << 16) | 0xFFFF):
			exp = new EXP_SQR();
			break;
		case ((14 << 16) | 0xFFFF):
			exp = new EXP_LOG();
			break;
		case ((15 << 16) | 0xFFFF):
			exp = new EXP_LN();
			break;
		case ((16 << 16) | 0xFFFF):
			exp = new EXP_HEX();
			break;
		case ((17 << 16) | 0xFFFF):
			exp = new EXP_BIN();
			break;
		case ((18 << 16) | 0xFFFF):
			exp = new EXP_EXP();
			break;
		case ((19 << 16) | 0xFFFF):
			exp = new EXP_LEFT();
			break;
		case ((20 << 16) | 0xFFFF):
			exp = new EXP_RIGHT();
			break;
		case ((21 << 16) | 0xFFFF):
			exp = new EXP_MID();
			break;
		case ((22 << 16) | 0xFFFF):
			exp = new EXP_LEN();
			break;
		case ((23 << 16) | 0xFFFF):
			exp = new EXP_DOUBLE();
			break;
		case ((24 << 16) | 0xFFFF):
			exp = new EXP_VARGLONAMED();
			break;
		case ((28 << 16) | 0xFFFF):
			exp = new EXP_INT();
			break;
		case ((29 << 16) | 0xFFFF):
			exp = new EXP_ABS();
			break;
		case ((30 << 16) | 0xFFFF):
			exp = new EXP_CEIL();
			break;
		case ((31 << 16) | 0xFFFF):
			exp = new EXP_FLOOR();
			break;
		case ((32 << 16) | 0xFFFF):
			exp = new EXP_ACOS();
			break;
		case ((33 << 16) | 0xFFFF):
			exp = new EXP_ASIN();
			break;
		case ((34 << 16) | 0xFFFF):
			exp = new EXP_ATAN();
			break;
		case ((35 << 16) | 0xFFFF):
			exp = new EXP_NOT();
			break;
		case ((40 << 16) | 0xFFFF):
			exp = new EXP_MIN();
			break;
		case ((41 << 16) | 0xFFFF):
			exp = new EXP_MAX();
			break;
		case ((42 << 16) | 0xFFFF):
			exp = new EXP_GETRGB();
			break;
		case ((43 << 16) | 0xFFFF):
			exp = new EXP_GETRED();
			break;
		case ((44 << 16) | 0xFFFF):
			exp = new EXP_GETGREEN();
			break;
		case ((45 << 16) | 0xFFFF):
			exp = new EXP_GETBLUE();
			break;
		case ((46 << 16) | 0xFFFF):
			exp = new EXP_LOOPINDEX();
			break;
		case ((47 << 16) | 0xFFFF):
			exp = new EXP_NEWLINE();
			break;
		case ((48 << 16) | 0xFFFF):
			exp = new EXP_ROUND();
			break;
		case ((49 << 16) | 0xFFFF):
			exp = new EXP_STRINGGLO();
			break;
		case ((50 << 16) | 0xFFFF):
			exp = new EXP_STRINGGLONAMED();
			break;
		case ((51 << 16) | 0xFFFF):
			exp = new EXP_LOWER();
			break;
		case ((52 << 16) | 0xFFFF):
			exp = new EXP_UPPER();
			break;
		case ((53 << 16) | 0xFFFF):
			exp = new EXP_FIND();
			break;
		case ((54 << 16) | 0xFFFF):
			exp = new EXP_REVERSEFIND();
			break;
		case ((58 << 16) | 0xFFFF):
			exp = new EXP_FLOATTOSTRING();
			break;
		case ((59 << 16) | 0xFFFF):
			exp = new EXP_ATAN2();
			break;
		case ((60 << 16) | 0xFFFF):
			exp = new EXP_ZERO();
			break;
		case ((61 << 16) | 0xFFFF):
			exp = new EXP_EMPTY();
			break;
		case ((62 << 16) | 0xFFFF):
			exp = new EXP_DISTANCE();
			break;
		case ((63 << 16) | 0xFFFF):
			exp = new EXP_ANGLE();
			break;
		case ((64 << 16) | 0xFFFF):
			exp = new EXP_RANGE();
			break;
		case ((65 << 16) | 0xFFFF):
			exp = new EXP_RANDOMRANGE();
			break;
	    case ((67 << 16) | 0xFFFF):
	        exp = new EXP_RUNTIMENAME();
	        break;
	    case ((-1 << 16) | 0xFFFF):
			exp = new EXP_PARENTH1();
			break;
		case ((-2 << 16) | 0xFFFF):
			exp = new EXP_PARENTH2();
			break;
		case ((-3 << 16) | 0xFFFF):
			exp = new EXP_VIRGULE();
			break;
		case ((0 << 16) | 0xFFFE):
			exp = new EXP_GETSAMPLEMAINVOL();
			break;
		case ((1 << 16) | 0xFFFE):
			exp = new EXP_GETSAMPLEVOL();
			break;
		case ((2 << 16) | 0xFFFE):
			exp = new EXP_GETCHANNELVOL();
			break;
		case ((3 << 16) | 0xFFFE):
			exp = new EXP_ZERO();
			break;
		case ((4 << 16) | 0xFFFE):
			exp = new EXP_GETSAMPLEPAN();
			break;
		case ((5 << 16) | 0xFFFE):
			exp = new EXP_GETCHANNELPAN();
			break;
		case ((6 << 16) | 0xFFFE):
			exp = new EXP_GETSAMPLEPOS();
			break;
		case ((7 << 16) | 0xFFFE):
			exp = new EXP_GETCHANNELPOS();
			break;
		case ((8 << 16) | 0xFFFE):
			exp = new EXP_GETSAMPLEDUR();
			break;
		case ((9 << 16) | 0xFFFE):
			exp = new EXP_GETCHANNELDUR();
			break;
		case ((10 << 16) | 0xFFFE):
			exp = new EXP_GETSAMPLEFREQ();
			break;
		case ((11 << 16) | 0xFFFE):
			exp = new EXP_GETCHANNELFREQ();
			break;
		case ((0 << 16) | 0xFFFD):
			exp = new EXP_GAMLEVEL();
			break;
		case ((1 << 16) | 0xFFFD):
			exp = new EXP_GAMNPLAYER();
			break;
		case ((2 << 16) | 0xFFFD):
			exp = new EXP_PLAYXLEFT();
			break;
		case ((3 << 16) | 0xFFFD):
			exp = new EXP_PLAYXRIGHT();
			break;
		case ((4 << 16) | 0xFFFD):
			exp = new EXP_PLAYYTOP();
			break;
		case ((5 << 16) | 0xFFFD):
			exp = new EXP_PLAYYBOTTOM();
			break;
		case ((6 << 16) | 0xFFFD):
			exp = new EXP_PLAYWIDTH();
			break;
		case ((7 << 16) | 0xFFFD):
			exp = new EXP_PLAYHEIGHT();
			break;
		case ((8 << 16) | 0xFFFD):
			exp = new EXP_GAMLEVELNEW();
			break;
		case ((9 << 16) | 0xFFFD):
			exp = new EXP_GETCOLLISIONMASK();
			break;
		case ((10 << 16) | 0xFFFD):
			exp = new EXP_FRAMERATE();
			break;
		case ((11 << 16) | 0xFFFD):
			exp = new EXP_GETVIRTUALWIDTH();
			break;
		case ((12 << 16) | 0xFFFD):
			exp = new EXP_GETVIRTUALHEIGHT();
			break;
		case ((13 << 16) | 0xFFFD):
			exp = new EXP_GETFRAMEBKDCOLOR();
			break;
		case ((14 << 16) | 0xFFFD):
			exp = new EXP_ZERO();
			break;
		case ((15 << 16) | 0xFFFD):
			exp = new EXP_ZERO();
			break;
		case ((16 << 16) | 0xFFFD):
			exp = new EXP_FRAMEALPHACOEF();
			break;
		case ((17 << 16) | 0xFFFD):
			exp = new EXP_FRAMERGBCOEF();
			break;
		case ((18 << 16) | 0xFFFD):
			exp = new EXP_ZERO();
			break;
		case ((0 << 16) | 0xFFFC):
			exp = new EXP_TIMVALUE();
			break;
		case ((1 << 16) | 0xFFFC):
			exp = new EXP_TIMCENT();
			break;
		case ((2 << 16) | 0xFFFC):
			exp = new EXP_TIMSECONDS();
			break;
		case ((3 << 16) | 0xFFFC):
			exp = new EXP_TIMHOURS();
			break;
		case ((4 << 16) | 0xFFFC):
			exp = new EXP_TIMMINITS();
			break;
		case ((5 << 16) | 0xFFFC):
			exp = new EXP_EVENTAFTER();
			break;
		case ((0 << 16) | 0xFFFA):
			exp = new EXP_XMOUSE();
			break;
		case ((1 << 16) | 0xFFFA):
			exp = new EXP_YMOUSE();
			break;
		case ((2 << 16) | 0xFFFA):
			exp = new EXP_MOUSEWHEELDELTA();
			break;
		case ((0 << 16) | 0xFFF9):
			exp = new EXP_PLASCORE();
			break;
		case ((1 << 16) | 0xFFF9):
			exp = new EXP_PLALIVES();
			break;
		case ((2 << 16) | 0xFFF9):
			exp = new EXP_GETINPUT();
			break;
		case ((3 << 16) | 0xFFF9):
			exp = new EXP_GETINPUTKEY();
			break;
		case ((4 << 16) | 0xFFF9):
			exp = new EXP_GETPLAYERNAME();
			break;
		case ((0 << 16) | 0xFFFB):
			exp = new EXP_CRENUMBERALL();
			break;
		case (( (80 + 0) << 16) | 3):
			exp = new EXP_STRNUMBER();
			break;
		case (( (80 + 1) << 16) | 3):
			exp = new EXP_STRGETCURRENT();
			break;
		case (( (80 + 2) << 16) | 3):
			exp = new EXP_STRGETNUMBER();
			break;
		case (( (80 + 3) << 16) | 3):
			exp = new EXP_STRGETNUMERIC();
			break;
		case (( (80 + 4) << 16) | 3):
			exp = new EXP_STRGETNPARA();
			break;
		case ((80 + 0) << 16 | 2):
			exp = new EXP_GETRGBAT();
			break;
		case ((80 + 1) << 16 | 2):
			exp = new EXP_GETSCALEX();
			break;
		case ((80 + 2) << 16 | 2):
			exp = new EXP_GETSCALEY();
			break;
		case ((80 + 3) << 16 | 2):
			exp = new EXP_GETANGLE();
			break;
		case (( (80 + 0) << 16) | 7):
			exp = new EXP_CVALUE();
			break;
		case (( (80 + 1) << 16) | 7):
			exp = new EXP_CGETMIN();
			break;
		case (( (80 + 2) << 16) | 7):
			exp = new EXP_CGETMAX();
			break;
		case (( (80 + 3) << 16) | 7):
			exp = new EXP_CGETCOLOR1();
			break;
		case (( (80 + 4) << 16) | 7):
			exp = new EXP_CGETCOLOR2();
			break;
		case (((80 + 0) << 16) | 9):
			exp = new EXP_CCAGETFRAMENUMBER();
			break;
		case (((80 + 1) << 16) | 9):
			exp = new EXP_CCAGETGLOBALVALUE();
			break;
		case (((80 + 2) << 16) | 9):
			exp = new EXP_CCAGETGLOBALSTRING();
			break;
		default:
			switch (c & 0xFFFF0000)
			{
				case ( 1 << 16):
					exp = new EXP_EXTYSPR();
					break;
				case ( 2 << 16):
					exp = new EXP_EXTISPR();
					break;
				case ( 3 << 16):
					exp = new EXP_EXTSPEED();
					break;
				case ( 4 << 16):
					exp = new EXP_EXTACC();
					break;
				case ( 5 << 16):
					exp = new EXP_EXTDEC();
					break;
				case ( 6 << 16):
					exp = new EXP_EXTDIR();
					break;
				case ( 7 << 16):
					exp = new EXP_EXTXLEFT();
					break;
				case ( 8 << 16):
					exp = new EXP_EXTXRIGHT();
					break;
				case ( 9 << 16):
					exp = new EXP_EXTYTOP();
					break;
				case (10 << 16):
					exp = new EXP_EXTYBOTTOM();
					break;
				case (11 << 16):
					exp = new EXP_EXTXSPR();
					break;
				case (12 << 16):
					exp = new EXP_EXTIDENTIFIER();
					break;
				case (13 << 16):
					exp = new EXP_EXTFLAG();
					break;
				case (14 << 16):
					exp = new EXP_EXTNANI();
					break;
				case (15 << 16):
					exp = new EXP_EXTNOBJECTS();
					break;
				case (16 << 16):
					exp = new EXP_EXTVAR();
					break;
				case (17 << 16):
					exp = new EXP_EXTGETSEMITRANSPARENCY();
					break;
				case (18 << 16):
					exp = new EXP_EXTNMOVE();
					break;
				case (19 << 16):
					exp = new EXP_EXTVARSTRING();
					break;
				case (20 << 16):
					exp = new EXP_EXTGETFONTNAME();
					break;
				case (21 << 16):
					exp = new EXP_EXTGETFONTSIZE();
					break;
				case (22 << 16):
					exp = new EXP_EXTGETFONTCOLOR();
					break;
				case (23 << 16):
					exp = new EXP_EXTGETLAYER();
					break;
				case (24 << 16):
					exp = new EXP_EXTGETGRAVITY();
					break;
				case (25 << 16):
					exp = new EXP_EXTXAP();
					break;
				case (26 << 16):
					exp = new EXP_EXTYAP();
					break;
				case (27 << 16):
					exp = new EXP_EXTALPHACOEF();
					break;
				case (28 << 16):
					exp = new EXP_EXTRGBCOEF();
					break;
				case (29 << 16):
					exp = new EXP_ZERO();
					break;
				case (30 << 16):
					exp = new EXP_EXTVARBYINDEX();
					break;
				case (31 << 16):
					exp = new EXP_EXTVARSTRINGBYINDEX();
					break;

				case (32 << 16):
					exp = new EXP_EXTDISTANCE();
					break;
				case (33 << 16):
					exp = new EXP_EXTANGLE();
					break;
				case (34 << 16):
					exp = new EXP_EXTLOOPINDEX();
					break;

				case (35 << 16):
					exp = new EXP_EXTGETFRICTION();
					break;
				case (36 << 16):
					exp = new EXP_EXTGETRESTITUTION();
					break;
				case (37 << 16):
					exp = new EXP_EXTGETDENSITY();
					break;
				case (38 << 16):
					exp = new EXP_EXTGETVELOCITY();
					break;
				case (39 << 16):
					exp = new EXP_EXTGETANGLE();
					break;
				case (40 << 16):
					exp = new EXP_EXTWIDTH();
					break;
				case (41 << 16):
					exp = new EXP_EXTHEIGHT();
					break;
			    case (42 << 16):
			        exp = new EXP_EXTGETMASS();
			        break;
			    case (43 << 16):
			        exp = new EXP_EXTGETANGULARVELOCITY();
			        break;
			    case (44 << 16):
			        exp = new EXP_EXTGETNAME();
			        break;

				default:
					exp = new CExpExtension();
					break;
			}
	}
	if (exp != null)
	{
		exp.code = c;

		if (c != 0x00000000)
		{
			var size = file.readAShort();

			var type;
			switch (c)
			{
				case ((3 << 16) | 0xFFFF):
					exp.string = file.readAString();
					break;
				case ((0 << 16) | 0xFFFF):
					exp.value = file.readAInt();
					break;
				case ((23 << 16) | 0xFFFF):
					exp.value = file.readADouble();
					break;
				case ((24 << 16) | 0xFFFF):
					file.skipBytes(4);
					exp.number = file.readAShort();
					break;
				case ((50 << 16) | 0xFFFF):
					file.skipBytes(4);
					exp.number = file.readAShort();
					break;
				default:
					type = c & 0xFFFF;
					if ((type & 0x8000) != 0)
						type = type - 65536;
					if (type >= 2 || type == COI.OBJ_PLAYER)
					{
						exp.oi = file.readShort();
						exp.oiList = file.readShort();
						switch (c & 0xFFFF0000)
						{
							case (16 << 16):		// EXP_EXTVAR
								exp.number = file.readAShort();
								break;
							case (19 << 16):		// EXP_EXTVARSTRING			
								exp.number = file.readAShort();
								break;
							default:
								break;
						}
					}
			}
			file.seek(debut + size);
		}
	}
	return exp;
}
function CExp()
{
}

function EXP_EMPTY()
{
}
EXP_EMPTY.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
	}
}

function EXP_ZERO()
{
}
EXP_ZERO.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}

function EXP_LONG()
{
}
EXP_LONG.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = this.value;

	}
}

function EXP_DOUBLE()
{
}
EXP_DOUBLE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = this.value;
		rhPtr.flagFloat = true;
	}
}
function EXP_EXTVAR()
{
}
EXP_EXTVAR.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var value;
		if (pHo.rov != null)
			value = pHo.rov.getValue(this.number);
		else
			value = 0;
		if (!CServices.isInt(value))
			rhPtr.flagFloat = true;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = value;
	}
}
function EXP_EXTVARSTRING()
{
}
EXP_EXTVARSTRING.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rov.getString(this.number);
	}
}

function EXP_STRINGGLONAMED()
{
}
EXP_STRINGGLONAMED.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.getGlobalStringAt(this.number);
	}
}

function EXP_VARGLONAMED()
{
}
EXP_VARGLONAMED.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.getGlobalValueAt(this.number);
	}
}

function EXP_STRING()
{
}
EXP_STRING.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = this.string;
	}
}

function EXP_EXTVARBYINDEX()
{
}
EXP_EXTVARBYINDEX.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		var number = rhPtr.get_ExpressionInt();
		if (pHo != null && pHo.rov != null)
		{
			if (number >= 0 && number < pHo.rov.rvValues.length)
			{
				var value = pHo.rov.getValue(number);
				if (!CServices.isInt(value))
					rhPtr.flagFloat = true;

				rhPtr.rh4Results[rhPtr.rh4PosPile] = value;
				return;
			}
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}

function EXP_EXTVARSTRINGBYINDEX()
{
}
EXP_EXTVARSTRINGBYINDEX.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		var number = rhPtr.get_ExpressionInt();
		if (pHo != null && pHo.rov != null)
		{
		    if (number >= 0 && number < pHo.rov.rvStrings.length)
			{
				rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rov.getString(number);
				return;
			}
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
	}
}

// CUT


// System object
// ---------------------------------------------------------------
function EXP_DISTANCE()
{
}
EXP_DISTANCE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var x1 = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var y1 = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var x2 = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var y2 = rhPtr.getExpression();
		var deltaX = x2 - x1;
		var deltaY = y2 - y1;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.approximateInt(Math.sqrt(deltaX * deltaX + deltaY * deltaY));
	}
}
// CUT

function EXP_ANGLE()
{
}
EXP_ANGLE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var x1 = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var y1 = rhPtr.getExpression();
		var angle = Math.atan2(-y1, x1) * 180.0 / 3.141592653589;
		if (angle < 0)
			angle = 360 + angle;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.approximateInt(angle);
	}
}
// CUT

function EXP_RANGE()
{
}
EXP_RANGE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var minimum = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var maximum = rhPtr.getExpression();

		value = Math.max(value, minimum);
		value = Math.min(value, maximum);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = value;
	}
}
// CUT

function EXP_RANDOMRANGE()
{
}
EXP_RANDOMRANGE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var minimum = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var maximum = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = minimum + rhPtr.random(maximum - minimum + 1);
	}
}
// CUT

function EXP_RUNTIMENAME()
{
}
EXP_RUNTIMENAME.prototype =
{
    evaluate: function (rhPtr) {
        rhPtr.rh4Results[rhPtr.rh4PosPile] = "Html5";
    }
}
// CUT

function EXP_ABS()
{
}
EXP_ABS.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.abs(value);
	}
}
// CUT

function EXP_ABS()
{
}
EXP_ABS.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.abs(value);
	}
}
// CUT

function EXP_ACOS()
{
}
EXP_ACOS.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.acos(value) * 57.295779513082320876798154814105;
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_AND()
{
}
EXP_AND.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] &= rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
	}
}
// CUT

function EXP_ASIN()
{
}
EXP_ASIN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.asin(value) * 57.295779513082320876798154814105;
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_ATAN()
{
}
EXP_ATAN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.atan(value) * 57.295779513082320876798154814105;
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_ATAN2()
{
}
EXP_ATAN2.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value1 = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var value2 = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.atan2(value1, value2) * 57.295779513082320876798154814105;
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_CEIL()
{
}
EXP_CEIL.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.ceil(value);
	}
}
// CUT

function EXP_BIN()
{
}
EXP_BIN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var a = rhPtr.get_ExpressionInt();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = "0b" + a.toString(2);
	}
}
// CUT

function EXP_COS()
{
}
EXP_COS.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.cos(value / 57.295779513082320876798154814105);
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_DIV()
{
}
EXP_DIV.prototype =
{
	evaluate: function (rhPtr)
	{
		var value1 = rhPtr.rh4Results[rhPtr.rh4PosPile];
		var value2 = rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
		//		if (Math.floor(value1)==value1 &&  (value2)==value2)
		if (value2 != 0)
		{
			if (rhPtr.flagFloat == false)
				rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.floatToInt(value1 / value2);
			else
				rhPtr.rh4Results[rhPtr.rh4PosPile] /= rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
		}
		else
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}
// CUT

function EXP_EXP()
{
}
EXP_EXP.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.exp(value);
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_FIND()
{
}
EXP_FIND.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var pMainString = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var pSubString = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var firstChar = rhPtr.get_ExpressionInt();

		if (firstChar >= pMainString.length)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = -1;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pMainString.indexOf(pSubString, firstChar);
	}
}
// CUT

function EXP_FLOATTOSTRING()
{
}
EXP_FLOATTOSTRING.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();

		rhPtr.rh4CurToken++;
		var nDigits = rhPtr.get_ExpressionInt();
		if (nDigits < 1)
			nDigits = 1;

		rhPtr.rh4CurToken++;
		var nDecimals = rhPtr.get_ExpressionInt();

		var temp = value.toString();
		var result = new String();

		var point = temp.indexOf(".");

		var cpt;
		if (point >= 0)
		{
			for (cpt = point + 1; cpt < temp.length; cpt++)
			{
				if (temp.charAt(cpt) != "0")
				{
					break;
				}
			}
			if (cpt == temp.length)
				point = -1;
		}

		var pos = 0;
		if (point >= 0)
		{
			if (value < 0.0)
			{
				result += "-";
				pos++;
			}

			while (pos < point)
			{
				result += temp.charAt(pos);
				pos++;
			}

			if (nDecimals > 0)
			{
				result += ".";
				pos++;

				for (cpt = 0; cpt < nDecimals && cpt + pos < temp.length; cpt++)
					result += temp.charAt(pos + cpt);
			}
			else if (nDecimals < 0)
			{
				result += ".";
				pos++;
				while (pos < temp.length)
				{
					result += temp.charAt(pos);
					pos++;
				}
			}
		}
		else
		{
			while (pos < temp.length && temp.charAt(pos) != ".")
			{
				result += temp.charAt(pos);
				pos++;
			}
			if (nDecimals > 0)
			{
				result += ".";
				for (cpt = 0; cpt < nDecimals; cpt++)
				{
					result += "0";
				}
			}
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = result;
	}
}
// CUT

function EXP_FLOOR()
{
}
EXP_FLOOR.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.floor(value);
	}
}
// CUT

function EXP_GETBLUE()
{
}
EXP_GETBLUE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var rgb = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = (rgb >>> 16) & 255;
	}
}
// CUT

function EXP_GETGREEN()
{
}
EXP_GETGREEN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var rgb = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = (rgb >>> 8) & 255;
	}
}
// CUT

function EXP_GETRED()
{
}
EXP_GETRED.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var rgb = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rgb & 255;
	}
}
// CUT

function EXP_GETRGB()
{
}
EXP_GETRGB.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var r = rhPtr.get_ExpressionInt();
		rhPtr.rh4CurToken++;
		var g = rhPtr.get_ExpressionInt();
		rhPtr.rh4CurToken++;
		var b = rhPtr.get_ExpressionInt();
		var rgb = ((b & 255) << 16) + ((g & 255) << 8) + (r & 255);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rgb;
	}
}
// CUT

function EXP_HEX()
{
}
EXP_HEX.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var a = rhPtr.get_ExpressionInt();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = "0x" + a.toString(16);
	}
}
// CUT

function EXP_INT()
{
}
EXP_INT.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.floatToInt(value);

	}
}
// CUT

function EXP_LEFT()
{
}
EXP_LEFT.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var string = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var pos = rhPtr.get_ExpressionInt();
		if (pos < 0)
			pos = 0;
		if (pos > string.length)
			pos = string.length;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = string.substring(0, pos);

	}
}
// CUT

function EXP_LEN()
{
}
EXP_LEN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var pString = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pString.length;
	}
}
// CUT

function EXP_LN()
{
}
EXP_LN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.log(value);
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_LOG()
{
}
EXP_LOG.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.log(value) / Math.log(10);
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_LOOPINDEX()
{
}
EXP_LOOPINDEX.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var token = rhPtr.rh4Tokens[rhPtr.rh4CurToken];
		var pLoop;

		// Simple expression?
		if ( rhPtr.rh4Tokens[rhPtr.rh4CurToken+1].code<=0 || rhPtr.rh4Tokens[rhPtr.rh4CurToken+1].code>=0x00140000 )
		{
			// Index?
			if ( token.code == CExp.EXP_LONG )
			{
				pLoop = rhPtr.rh4FastLoops.get(token.value);
				rhPtr.rh4CurToken++;
				rhPtr.rh4Results[rhPtr.rh4PosPile] = pLoop.index;
				return;
			}

			// Name = simple string?
			if ( token.code == CExp.EXP_STRING )
			{
				var curToken = rhPtr.rh4CurToken;
				var pName = token.string;	// rhPtr.getExpression();
				rhPtr.rh4CurToken++;

				var n;
				for (n = 0; n < rhPtr.rh4FastLoops.size(); n++)
				{
					pLoop = rhPtr.rh4FastLoops.get(n);
					if (CServices.compareStringsIgnoreCase(pLoop.name, pName))
					{
						rhPtr.rh4Tokens[curToken] = new EXP_LONG();
						rhPtr.rh4Tokens[curToken].code = CExp.EXP_LONG;
						rhPtr.rh4Tokens[curToken].value = n;

						rhPtr.rh4Results[rhPtr.rh4PosPile] = pLoop.index;
						return;
					}
				}
				rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
				return;
			}
		}

		var pName = rhPtr.getExpression();

		var n;
		for (n = 0; n < rhPtr.rh4FastLoops.size(); n++)
		{
			pLoop = rhPtr.rh4FastLoops.get(n);
			if (CServices.compareStringsIgnoreCase(pLoop.name, pName))
			{
				rhPtr.rh4Results[rhPtr.rh4PosPile] = pLoop.index;
				return;
			}
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}
// CUT

function EXP_LOWER()
{
}
EXP_LOWER.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var pString = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pString.toLowerCase();

	}
}
// CUT

function EXP_MAX()
{
}
EXP_MAX.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var aValue = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var bValue = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.max(aValue, bValue);
	}
}
// CUT

function EXP_MID()
{
}
EXP_MID.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var string = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var start = rhPtr.get_ExpressionInt();
		rhPtr.rh4CurToken++;
		var len = rhPtr.get_ExpressionInt();

		if (start < 0)
			start = 0;
		if (start > string.length)
			start = string.length;
		if (len < 0)
			len = 0;
		if (start + len > string.length)
			len = string.length - start;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = string.substr(start, len);
	}
}
// CUT

function EXP_MIN()
{
}
EXP_MIN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var aValue = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var bValue = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.min(aValue, bValue);
	}
}
// CUT

function EXP_MINUS()
{
}
EXP_MINUS.prototype =
{
	evaluate: function (rhPtr)
	{
		if (rhPtr.bOperande)
		{
			rhPtr.rh4CurToken++;
			rhPtr.rh4Tokens[rhPtr.rh4CurToken].evaluate(rhPtr);
			rhPtr.rh4Results[rhPtr.rh4PosPile] = -rhPtr.rh4Results[rhPtr.rh4PosPile];
		}
		else
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] -= rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
		}
	}
}
// CUT

function EXP_MOD()
{
}
EXP_MOD.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] %= rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
	}
}
// CUT

function EXP_MULT()
{
}
EXP_MULT.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] *= rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
	}
}
// CUT

function EXP_NEWLINE()
{
}
EXP_NEWLINE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = "\n";
	}
}
// CUT

function EXP_OR()
{
}
EXP_OR.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] |= rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
	}
}
// CUT

function EXP_NOT()
{
}
EXP_NOT.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.get_ExpressionInt();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = value ^ 0xFFFFFFFF;
	}
}
// CUT

function EXP_PARENTH1()
{
}
EXP_PARENTH1.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.getExpression();
	}
}
// CUT

function EXP_PARENTH2()
{
}
EXP_PARENTH2.prototype =
{
	evaluate: function (rhPtr)
	{
	}
}
// CUT

function EXP_PLUS()
{
}
EXP_PLUS.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] += rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
	}
}
// CUT

function EXP_POW()
{
}
EXP_POW.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.pow(rhPtr.rh4Results[rhPtr.rh4PosPile], rhPtr.rh4Results[rhPtr.rh4PosPile + 1]);
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_RANDOM()
{
}
EXP_RANDOM.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var num = rhPtr.get_ExpressionInt();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.random(num);
	}
}
// CUT

function EXP_REVERSEFIND()
{
}
EXP_REVERSEFIND.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var pMainString = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var pSubString = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var firstChar = rhPtr.get_ExpressionInt();

		if (firstChar > pMainString.length)
		{
			firstChar = pMainString.length;
		}

		var oldPos;
		var pos = -1;
		while (true)
		{
			oldPos = pos;
			var pFound = pMainString.indexOf(pSubString, pos + 1);
			if (pFound == -1)
				break;
			pos = pFound;
			if (pos > firstChar)
				break;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = oldPos;
	}
}
// CUT

function EXP_RIGHT()
{
}
EXP_RIGHT.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var str = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var pos = rhPtr.get_ExpressionInt();

		if (pos < 0)
			pos = 0;
		if (pos > str.length)
			pos = str.length;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = str.substring(str.length - pos, str.length);
	}
}
// CUT

function EXP_ROUND()
{
}
EXP_ROUND.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.round(value);
	}
}
// CUT

function EXP_SIN()
{
}
EXP_SIN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.sin(value / 57.295779513082320876798154814105);
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_SQR()
{
}
EXP_SQR.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		if (value < 0)
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
		else
			rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.sqrt(value);
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_STR()
{
}
EXP_STR.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var pValue = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pValue.toString();
	}
}
// CUT

function EXP_STRINGGLO()
{
}
EXP_STRINGGLO.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var num = (rhPtr.get_ExpressionInt() - 1);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.getGlobalStringAt(num);
	}
}
// CUT

function EXP_TAN()
{
}
EXP_TAN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.tan(value / 57.295779513082320876798154814105);
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_UPPER()
{
}
EXP_UPPER.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var pString = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pString.toUpperCase();
	}
}
// CUT

function EXP_VAL()
{
}
EXP_VAL.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;

		var s = rhPtr.getExpression();

		var n = 0;
		while(n < s.length && s.charAt(n) == 32)
			n++;
		var result = 0;
		if (n < s.length)
		{
			s = s.substr(n);
			if (s.substr(0, 2) == '0b' || s.substr(n, 2) == '0B')
				result = parseInt(s.substr(n + 2), 2);
			else
			{
				var result1 = parseInt(s);
				result = parseFloat(s);
				if (!isNaN(result) && !isNaN(result1))
				{
					if (result == 0 && result1 != 0)
						result = result1;
					var iValue = CServices.floatToInt(result);
					if (iValue != result)
						rhPtr.flagFloat = true;
				}
			}
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = result;
	}
}
// CUT

function EXP_VARGLO()
{
}
EXP_VARGLO.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var num = (rhPtr.get_ExpressionInt() - 1);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.getGlobalValueAt(num);
	}
}
// CUT

function EXP_VIRGULE()
{
}
EXP_VIRGULE.prototype =
{
	evaluate: function (rhPtr)
	{
	}
}
// CUT

function EXP_XOR()
{
}
EXP_XOR.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] ^= rhPtr.rh4Results[rhPtr.rh4PosPile + 1];
	}
}
// CUT

function EXP_VIRGULE()
{
}
EXP_VIRGULE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}
// CUT

// Timer object
// ------------------------------------------------------------------
function EXP_EVENTAFTER()
{
}
EXP_EVENTAFTER.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhEvtProg.rhCurParam1;
	}
}
// CUT

function EXP_TIMCENT()
{
}
EXP_TIMCENT.prototype =
{
	evaluate: function (rhPtr)
	{
		var c = CServices.floatToInt(rhPtr.rhTimer / 10);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = c % 100;
	}
}
// CUT

function EXP_TIMHOURS()
{
}
EXP_TIMHOURS.prototype =
{
	evaluate: function (rhPtr)
	{
		var c = CServices.floatToInt(rhPtr.rhTimer / 3600000);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = c;
	}
}
// CUT

function EXP_TIMMINITS()
{
}
EXP_TIMMINITS.prototype =
{
	evaluate: function (rhPtr)
	{
		var c = CServices.floatToInt(rhPtr.rhTimer / 60000);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = c % 60;
	}
}
// CUT

function EXP_TIMSECONDS()
{
}
EXP_TIMSECONDS.prototype =
{
	evaluate: function (rhPtr)
	{
		var s = CServices.floatToInt(rhPtr.rhTimer / 1000);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = s % 60;
	}
}
// CUT

function EXP_TIMVALUE()
{
}
EXP_TIMVALUE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhTimer;

		// For benchmarks only
		//var date = new Date();
	    //rhPtr.rh4Results[rhPtr.rh4PosPile] = date.getTime() % 100000;
	}
}
// CUT

// Storyboard object
// ------------------------------------------------------------------
function EXP_FRAMEALPHACOEF()
{
}
EXP_FRAMEALPHACOEF.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = 255;
	}
}
// CUT

function EXP_FRAMERGBCOEF()
{
}
EXP_FRAMERGBCOEF.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = 0x00FFFFFF;
	}
}
// CUT

function EXP_FRAMERATE()
{
}
EXP_FRAMERATE.prototype =
{
	evaluate: function (rhPtr)
	{
		var n;
		var total = 0;
		for (n = 0; n < CRun.MAX_FRAMERATE; n++)
			total += rhPtr.rh4FrameRateArray[n];
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.round((1000 * CRun.MAX_FRAMERATE) / total);
	}
};


// CUT

function EXP_GAMLEVEL()
{
}
EXP_GAMLEVEL.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.currentFrame;
	}
}
// CUT

function EXP_GAMLEVELNEW()
{
}
EXP_GAMLEVELNEW.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.currentFrame + 1;
	}
}
// CUT

function EXP_GAMNPLAYER()
{
}
EXP_GAMNPLAYER.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhNPlayers;
	}
}
// CUT

function EXP_GETCOLLISIONMASK()
{
}
EXP_GETCOLLISIONMASK.prototype =
{
	evaluate: function (rhPtr)
	{
		var x, y;

		rhPtr.rh4CurToken++;
		x = rhPtr.get_ExpressionInt();
		rhPtr.rh4CurToken++;
		y = rhPtr.get_ExpressionInt();

		var result = 0;
		if (rhPtr.y_GetLadderAt(-1, x, y) != null)
			result = 2;
		else
		{
			if (rhPtr.colMask_Test_XY(x, y, -1, CRunFrame.CM_TEST_OBSTACLE))
				result = 1;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = result;
	}
}
// CUT

function EXP_GETFRAMEBKDCOLOR()
{
}
EXP_GETFRAMEBKDCOLOR.prototype =
{
	evaluate: function (rhPtr)
	{
		var color = rhPtr.rhFrame.leBackground;
		if (rhPtr.rhApp.isPreloaderSubApp)
			color = rhPtr.rhApp.parentApp.frame.leBackground;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.swapRGB(color);
	}
}
// CUT

function EXP_GETVIRTUALHEIGHT()
{
}
EXP_GETVIRTUALHEIGHT.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhFrame.leVirtualRect.bottom;
	}
}
// CUT

function EXP_GETVIRTUALWIDTH()
{
}
EXP_GETVIRTUALWIDTH.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhFrame.leVirtualRect.right;
	}
}
// CUT

function EXP_PLAYHEIGHT()
{
}
EXP_PLAYHEIGHT.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhFrame.leHeight;
	}
}
// CUT

function EXP_PLAYWIDTH()
{
}
EXP_PLAYWIDTH.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhFrame.leWidth;
	}
}
// CUT

function EXP_PLAYXLEFT()
{
}
EXP_PLAYXLEFT.prototype =
{
	evaluate: function (rhPtr)
	{
		var r = rhPtr.rhWindowX;
		if ((rhPtr.rh3Scrolling & CRun.RH3SCROLLING_SCROLL) != 0)
			r = rhPtr.rh3DisplayX;
		if (r < 0)
			r = 0;

		rhPtr.rh4Results[rhPtr.rh4PosPile] = r;
	}
}
// CUT

function EXP_PLAYXRIGHT()
{
}
EXP_PLAYXRIGHT.prototype =
{
	evaluate: function (rhPtr)
	{
		var r = rhPtr.rhWindowX;
		if ((rhPtr.rh3Scrolling & CRun.RH3SCROLLING_SCROLL) != 0)
			r = rhPtr.rh3DisplayX;
		r += rhPtr.rh3WindowSx;
		if (r > rhPtr.rhLevelSx)
			r = rhPtr.rhLevelSx;

		rhPtr.rh4Results[rhPtr.rh4PosPile] = r;
	}
}
// CUT

function EXP_PLAYYBOTTOM()
{
}
EXP_PLAYYBOTTOM.prototype =
{
	evaluate: function (rhPtr)
	{
		var r = rhPtr.rhWindowY;
		if ((rhPtr.rh3Scrolling & CRun.RH3SCROLLING_SCROLL) != 0)
			r = rhPtr.rh3DisplayY;
		r += rhPtr.rh3WindowSy;
		if (r > rhPtr.rhLevelSy)
			r = rhPtr.rhLevelSy;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = r;
	}
}
// CUT

function EXP_PLAYYTOP()
{
}
EXP_PLAYYTOP.prototype =
{
	evaluate: function (rhPtr)
	{
		var r = rhPtr.rhWindowY;
		if ((rhPtr.rh3Scrolling & CRun.RH3SCROLLING_SCROLL) != 0)
			r = rhPtr.rh3DisplayY;
		if (r < 0)
			r = 0;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = r;
	}
}
// CUT

// Create object
// ------------------------------------------------------------------
function EXP_CRENUMBERALL()
{
}
EXP_CRENUMBERALL.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhNObjects;
	}
}
// CUT

// Counter object
// ------------------------------------------------------------------
function EXP_CGETCOLOR1()
{
}
EXP_CGETCOLOR1.prototype =
{
	evaluate: function (rhPtr)
	{
		var hoPtr = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (hoPtr == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var rgb = hoPtr.cpt_GetColor1();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.swapRGB(rgb);
	}
}
// CUT

function EXP_CGETCOLOR2()
{
}
EXP_CGETCOLOR2.prototype =
{
	evaluate: function (rhPtr)
	{
		var hoPtr = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (hoPtr == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var rgb = hoPtr.cpt_GetColor2();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.swapRGB(rgb);
	}
}
// CUT

function EXP_CGETMAX()
{
}
EXP_CGETMAX.prototype =
{
	evaluate: function (rhPtr)
	{
		var hoPtr = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (hoPtr == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = hoPtr.cpt_GetMax();
	}
}
// CUT

function EXP_CGETMIN()
{
}
EXP_CGETMIN.prototype =
{
	evaluate: function (rhPtr)
	{
		var hoPtr = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (hoPtr == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = hoPtr.cpt_GetMin();
	}
}
// CUT

function EXP_CVALUE()
{
}
EXP_CVALUE.prototype =
{
	evaluate: function (rhPtr)
	{
		var hoPtr = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (hoPtr == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = hoPtr.cpt_GetValue();
		if (hoPtr.bFloat)
			rhPtr.flagFloat = true;
	}
}
// CUT

// Sub application object
// ------------------------------------------------------------------
function EXP_CCAGETGLOBALSTRING()
{
}
EXP_CCAGETGLOBALSTRING.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		var num = rhPtr.get_ExpressionInt() - 1;
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.getGlobalString(num);
	}
}
// CUT

function EXP_CCAGETGLOBALVALUE()
{
}
EXP_CCAGETGLOBALVALUE.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		var num = rhPtr.get_ExpressionInt() - 1;
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.getGlobalValue(num);
	}
}
// CUT

function EXP_CCAGETFRAMENUMBER()
{
}
EXP_CCAGETFRAMENUMBER.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.getFrameNumber();
	}
}
// CUT

// String object
// ----------------------------------------------------------------------
function EXP_STRGETCURRENT()
{
}
EXP_STRGETCURRENT.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
			return;
		}
		if (pHo.rsTextBuffer != null)
			rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rsTextBuffer;
		else
			rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
	}
}
// CUT

function EXP_STRGETNPARA()
{
}
EXP_STRGETNPARA.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.getCurrentResult().forceInt(0);
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rsMaxi;
	}
}
// CUT

function EXP_STRGETNUMBER()
{
}
EXP_STRGETNUMBER.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
			return;
		}
		var num = rhPtr.get_ExpressionInt();

		if (num < 0)
		{
			if (pHo.rsTextBuffer != null)
				rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rsTextBuffer;
			else
				rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
			return;
		}

		if (num >= pHo.rsMaxi)
			num = pHo.rsMaxi - 1;
		var txt = pHo.hoCommon.ocObject;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = txt.otTexts[num].tsText;
	}
}
// CUT

function EXP_STRGETNUMERIC()
{
}
EXP_STRGETNUMERIC.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.getCurrentResult().forceInt(0);
			return;
		}
		if (pHo.rsTextBuffer != null)
			rhPtr.rh4Results[rhPtr.rh4PosPile] = parseFloat(pHo.rsTextBuffer);
		else
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}
// CUT

function EXP_STRNUMBER()
{
}
EXP_STRNUMBER.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rsMini + 1;
	}
}
// CUT

// Common object expressions
// -----------------------------------------------------------------------

function EXP_EXTDISTANCE()
{
}
EXP_EXTDISTANCE.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		var x2 = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var y2 = rhPtr.getExpression();
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var deltaX = x2 - pHo.hoX;
		var deltaY = y2 - pHo.hoY;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.approximateInt(Math.sqrt(deltaX * deltaX + deltaY * deltaY));
	}
}
// CUT

function EXP_EXTANGLE()
{
}
EXP_EXTANGLE.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		var x2 = rhPtr.getExpression();
		rhPtr.rh4CurToken++;
		var y2 = rhPtr.getExpression();
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var angle = Math.atan2(-(y2 - pHo.hoY), (x2 - pHo.hoX)) * 180.0 / 3.141592653589;
		if (angle < 0)
			angle = 360 + angle;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = CServices.approximateInt(angle);
	}
}
// CUT

function EXP_EXTACC()
{
}
EXP_EXTACC.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.getAcc();
	}
}
// CUT

function EXP_EXTALPHACOEF()
{
}
EXP_EXTALPHACOEF.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var effect = pHo.ros.rsEffect;
		var effectParam = pHo.ros.rsEffectParam;
		var alpha = 0;
		var rgbaCoeff = effectParam;

		switch (effect & CRSpr.BOP_MASK)
		{
			case CRSpr.BOP_EFFECTEX:
				alpha = 255 - ((effectParam >> 24) & 0xFF);
				break;
			case CRSpr.BOP_BLEND:
				alpha = 255 - ((effectParam == 128) ? 0 : (255 - effectParam * 2));
				break;
			default:
				if (effect & CRSpr.BOP_RGBAFILTER)
					alpha = 255 - ((effectParam >> 24) & 0xFF);
				break;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = alpha;
	}
}
// CUT

function EXP_EXTDEC()
{
}
EXP_EXTDEC.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.getDec();
	}
}
// CUT

function EXP_EXTDIR()
{
}
EXP_EXTDIR.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.getDir(pHo);
	}
}
// CUT

function EXP_EXTFLAG()
{
}
EXP_EXTFLAG.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		var num = rhPtr.get_ExpressionInt();
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		num &= 31;
		if (pHo.rov != null)
		{
			var result = 0;
			if (((1 << num) & pHo.rov.rvValueFlags) != 0)
				result = 1;
			rhPtr.rh4Results[rhPtr.rh4PosPile] = result;
		}
		else
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}
// CUT

function EXP_EXTGETFONTCOLOR()
{
}
EXP_EXTGETFONTCOLOR.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var rgb = CRun.getObjectTextColor(pHo);
		rgb = CServices.swapRGB(rgb);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rgb;
	}
}
// CUT

function EXP_EXTGETFONTNAME()
{
}
EXP_EXTGETFONTNAME.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
			return;
		}
		var info = CRun.getObjectFont(pHo);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = info.lfFaceName;
	}
}
// CUT

function EXP_EXTGETFONTSIZE()
{
}
EXP_EXTGETFONTSIZE.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var info = CRun.getObjectFont(pHo);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = Math.round((info.lfHeight * 72) / 96);
	}
}
// CUT

function EXP_EXTGETGRAVITY()
{
}
EXP_EXTGETGRAVITY.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.getGravity();
	}
}
// CUT

function EXP_EXTGETLAYER()
{
}
EXP_EXTGETLAYER.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoLayer + 1;
	}
}
// CUT

function EXP_EXTGETSEMITRANSPARENCY()
{
}
EXP_EXTGETSEMITRANSPARENCY.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var t = 0;
		if (pHo.ros != null)
			t = pHo.ros.getSemiTransparency();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = t;
	}
}
// CUT

function EXP_EXTIDENTIFIER()
{
}
EXP_EXTIDENTIFIER.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var id = (pHo.hoCreationId << 16) | (pHo.hoNumber & 0xFFFF);
		rhPtr.rh4Results[rhPtr.rh4PosPile] = id;
	}
}
// CUT

function EXP_EXTISPR()
{
}
EXP_EXTISPR.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var i = 0;
		if (pHo.roa != null)
			i = pHo.roa.raAnimFrame;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = i;
	}
}
// CUT

function EXP_EXTNANI()
{
}
EXP_EXTNANI.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var i = 0;
		if (pHo.roa != null)
			i = pHo.roa.raAnimOn;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = i;
	}
}
// CUT

function EXP_EXTNMOVE()
{
}
EXP_EXTNMOVE.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var i = 0;
		if (pHo.roa != null)
			i = pHo.rom.rmMvtNum;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = i;
	}
}
// CUT

function EXP_EXTNOBJECTS()
{
}
EXP_EXTNOBJECTS.prototype =
{
	evaluate: function (rhPtr)
	{
		var qoil = this.oiList;
		var poil;
		if ((qoil & 0x8000) == 0)
		{
			poil = rhPtr.rhOiList[qoil];
			rhPtr.rh4Results[rhPtr.rh4PosPile] = poil.oilNObjects;
		}
		else
		{
			var count = 0;
			if (qoil != -1)
			{
				var pqoi = rhPtr.rhEvtProg.qualToOiList[qoil & 0x7FFF];
				var qoi;
				for (qoi = 0; qoi < pqoi.qoiList.length; qoi += 2)
				{
					poil = rhPtr.rhOiList[pqoi.qoiList[qoi + 1]];
					count += poil.oilNObjects;
				}
			}
			rhPtr.rh4Results[rhPtr.rh4PosPile] = count;
		}
	}
}
// CUT

function EXP_EXTRGBCOEF()
{
}
EXP_EXTRGBCOEF.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var effect = pHo.ros.rsEffect;
		var effectParam = pHo.ros.rsEffectParam;
		var rgb = 0;
		var rgbaCoeff = effectParam;

		if ((effect & CRSpr.BOP_MASK) == CRSpr.BOP_EFFECTEX || (effect & CRSpr.BOP_RGBAFILTER) != 0)
			rgb = CServices.swapRGB((rgbaCoeff & 0x00FFFFFF));
		else
			rgb = 0x00FFFFFF;

		rhPtr.rh4Results[rhPtr.rh4PosPile] = rgb;
	}
}
// CUT

function EXP_EXTSPEED()
{
}
EXP_EXTSPEED.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var i = 0;
		if (pHo.roa != null)
			i = pHo.rom.rmMovement.getSpeed();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = i;
	}
}
// CUT

function EXP_EXTXAP()
{
}
EXP_EXTXAP.prototype =
{
	evaluate: function (rhPtr)
	{
		var x = 0;
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo != null)
		{
			x = pHo.hoX;
			if (pHo.roa != null)
			{
				if (pHo.roc.rcImage >= 0)
				{
					var ifo;
					ifo = rhPtr.rhApp.imageBank.getImageInfoEx(pHo.roc.rcImage, pHo.roc.rcAngle, pHo.roc.rcScaleX, pHo.roc.rcScaleY);
					if (ifo != null)
					{
						rhPtr.rh4Results[rhPtr.rh4PosPile] = x + ifo.xAP - ifo.xSpot;
						return;
					}
				}
			}
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = x;
	}
}
// CUT

function EXP_EXTXLEFT()
{
}
EXP_EXTXLEFT.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoX - pHo.hoImgXSpot;
	}
}
// CUT

function EXP_EXTXRIGHT()
{
}
EXP_EXTXRIGHT.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoX - pHo.hoImgXSpot + pHo.hoImgWidth;
	}
}
// CUT

function EXP_EXTXSPR()
{
}
EXP_EXTXSPR.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoX;
	}
}
// CUT

function EXP_EXTYAP()
{
}
EXP_EXTYAP.prototype =
{
	evaluate: function (rhPtr)
	{
		var y = 0;
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo != null)
		{
			y = pHo.hoY;
			if (pHo.roa != null)
			{
				if (pHo.roc.rcImage >= 0)
				{
					var ifo;
					ifo = rhPtr.rhApp.imageBank.getImageInfoEx(pHo.roc.rcImage, pHo.roc.rcAngle, pHo.roc.rcScaleX, pHo.roc.rcScaleY);
					if (ifo != null)
					{
						rhPtr.rh4Results[rhPtr.rh4PosPile] = y + ifo.yAP - ifo.ySpot;
						return;
					}
				}
			}
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = y;
	}
}
// CUT

function EXP_EXTACC()
{
}
EXP_EXTACC.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.getAcc();
	}
}
// CUT

function EXP_EXTYBOTTOM()
{
}
EXP_EXTYBOTTOM.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoY - pHo.hoImgYSpot + pHo.hoImgHeight;
	}
}
// CUT

function EXP_EXTYSPR()
{
}
EXP_EXTYSPR.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoY;
	}
}
// CUT

function EXP_EXTYTOP()
{
}
EXP_EXTYTOP.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoY - pHo.hoImgYSpot;
	}
}
// CUT

// Active object
// -----------------------------------------------------------------------
function EXP_GETANGLE()
{
}
EXP_GETANGLE.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var angle = pHo.roc.rcAngle;
		var pMovement = rhPtr.GetMBase(pHo);
		if (pMovement)
		{
			angle = pMovement.getAngle();
			if (angle == CRunMBase.ANGLE_MAGIC)
				angle = pHo.roc.rcAngle;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = angle;
	}
}
// CUT


function EXP_GETRGBAT()
{
}
EXP_GETRGBAT.prototype =
{
	evaluate: function (rhPtr)
	{
		var hoPtr = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		rhPtr.rh4CurToken++;
		if (hoPtr == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var x = rhPtr.get_ExpressionInt();
		rhPtr.rh4CurToken++;
		var y = rhPtr.get_ExpressionInt();

		var rgb = 0;
		if (hoPtr.roc.rcImage != -1)
		{
			var image = rhPtr.rhApp.imageBank.getImageFromHandle(hoPtr.roc.rcImage);
			rgb = image.getPixel(x, y);
			rgb = CServices.swapRGB(rgb);
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rgb;
	}
}
// CUT

function EXP_GETSCALEX()
{
}
EXP_GETSCALEX.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.roc.rcScaleX;
		rhPtr.flagFloat = true;
	}
}
// CUT

function EXP_GETSCALEY()
{
}
EXP_GETSCALEY.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.roc.rcScaleY;
		rhPtr.flagFloat = true;
	}
}
// CUT

// Speaker object
// -----------------------------------------------------------------------
function EXP_GETCHANNELDUR()
{
}
EXP_GETCHANNELDUR.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.get_ExpressionInt();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getDurationChannel(value - 1);
	}
}
// CUT

function EXP_GETCHANNELFREQ()
{
}
EXP_GETCHANNELFREQ.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.get_ExpressionInt();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getFrequencyChannel(value - 1);
	}
}
// CUT

function EXP_GETCHANNELPOS()
{
}
EXP_GETCHANNELPOS.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.get_ExpressionInt();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getPositionChannel(value - 1);
	}
}
// CUT


function EXP_GETSAMPLEDUR()
{
}
EXP_GETSAMPLEDUR.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var name = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getDurationSample(name);
	}
}
// CUT

function EXP_GETSAMPLEFREQ()
{
}
EXP_GETSAMPLEFREQ.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var name = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getFrequencySample(name);
	}
}
// CUT

function EXP_GETSAMPLEMAINPAN()
{
}
EXP_GETSAMPLEMAINPAN.prototype =
{
	evaluate: function (rhPtr)
	{
		var p = rhPtr.rhApp.soundPlayer.getMainPan() * 100;
		if (p < 0)
			p -= 0.5;
		else
			p += 0.5;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = p;
	}
}
// CUT

function EXP_GETSAMPLEMAINVOL()
{
}
EXP_GETSAMPLEMAINVOL.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getMainVolume();
	}
}
// CUT

function EXP_GETSAMPLEPOS()
{
}
EXP_GETSAMPLEPOS.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var name = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getPositionSample(name);
	}
}
// CUT

function EXP_GETCHANNELVOL()
{
}
EXP_GETCHANNELVOL.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var value = rhPtr.get_ExpressionInt();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getVolumeChannel(value - 1);
	}
}
// CUT

function EXP_GETSAMPLEVOL()
{
}
EXP_GETSAMPLEVOL.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var name = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.soundPlayer.getVolumeSample(name);
	}
}

function EXP_GETSAMPLEPAN()
{
}
EXP_GETSAMPLEPAN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var name = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}
// CUT

function EXP_GETCHANNELPAN()
{
}
EXP_GETCHANNELPAN.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4CurToken++;
		var name = rhPtr.getExpression();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
	}
}
// CUT

// Keyboard object
// ---------------------------------------------------------
function EXP_MOUSEWHEELDELTA()
{
}
EXP_MOUSEWHEELDELTA.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.deltaWheel * 40;
	}
}
// CUT

function EXP_XMOUSE()
{
}
EXP_XMOUSE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.getXMouse();
	}
}
// CUT

function EXP_YMOUSE()
{
}
EXP_YMOUSE.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.getYMouse();
	}
}
// CUT

// Player object
// ---------------------------------------------------------
function EXP_GETINPUT()
{
}
EXP_GETINPUT.prototype =
{
	evaluate: function (rhPtr)
	{
		var joueur = this.oi;
		var r = CRunApp.CTRLTYPE_KEYBOARD;
		if (joueur < CRunApp.MAX_PLAYER)
			r = rhPtr.rhApp.getCtrlType()[joueur];
		if (r == CRunApp.CTRLTYPE_KEYBOARD)
			r = CRunApp.CTRLTYPE_MOUSE;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = r;
	}
}
// CUT

function EXP_GETINPUTKEY()
{
}
EXP_GETINPUTKEY.prototype =
{
	evaluate: function (rhPtr)
	{
		var joueur = this.oi;

		rhPtr.rh4CurToken++;
		var kvCode = rhPtr.get_ExpressionInt();
		var s = "";
		if (key < CRunApp.MAX_KEY)
		{
			if (vkCode >= 96 && vkCode <= 105)
			{
				c = vkCode - 96;
				s = "Numpad" + c.toString();
			}
			else if (vkCode >= 112 && vkCode <= 126)
			{
				c = vkCode - 112;
				s = "F" + c.toString();
			}
			else if (vkCode >= 48 && vkCode <= 57)
			{
				c = vkCode - 48;
				s = c.toString();
			}
			else if (vkCode >= 65 && vkCode <= 90)
			{
				s = String.fromCharCode(vkCode);
			}
			else
			{
				s = "Control key";
				/*TODO		    var n;
				 for (n=0; n<NB_SPECIAL_KEYS; n++)
				 {
				 if (keys[n*2+1]==vkCode)
				 {
				 s=keyNames[n];
				 break;
				 }
				 }
				 */
			}
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = s;
	}
}
// CUT

function EXP_GETPLAYERNAME()
{
}
EXP_GETPLAYERNAME.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.playerNames[this.oi];
	}
}
// CUT

function EXP_PLALIVES()
{
}
EXP_PLALIVES.prototype =
{
	evaluate: function (rhPtr)
	{
		rhPtr.rh4Results[rhPtr.rh4PosPile] = rhPtr.rhApp.getLives()[this.oi];
	}
}
// CUT

function EXP_PLASCORE()
{
}
EXP_PLASCORE.prototype =
{
	evaluate: function (rhPtr)
	{
		var scores = rhPtr.rhApp.getScores();
		rhPtr.rh4Results[rhPtr.rh4PosPile] = scores[this.oi];
	}
}
// CUT

function EXP_EXTLOOPINDEX()
{
}
EXP_EXTLOOPINDEX.prototype =
{
	evaluate: function (rhPtr)
	{
		var x = 0;
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo != null)
		{
			if (rhPtr.rh4CurrentForEach != null)
			    if (this.oiList == rhPtr.rh4CurrentForEach.oi)
					x = rhPtr.rh4CurrentForEach.index;

			if (rhPtr.rh4CurrentForEach2 != null)
			    if (this.oiList == rhPtr.rh4CurrentForEach2.oi)
					x = rhPtr.rh4CurrentForEach2.index;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = x;
	}
}
// CUT

// BOX2D MOVEMENTS
//////////////////////////////////////////////////////////////////////

function EXP_EXTGETFRICTION()
{
}
EXP_EXTGETFRICTION.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (rhPtr.GetMBase(pHo) == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.callMovement(CExp.EXP_EXTGETFRICTION, 0);
	}
}
// CUT

function EXP_EXTGETRESTITUTION()
{
}
EXP_EXTGETRESTITUTION.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (rhPtr.GetMBase(pHo) == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.callMovement(CExp.EXP_EXTGETRESTITUTION, 0);
	}
}
// CUT

function EXP_EXTGETDENSITY()
{
}
EXP_EXTGETDENSITY.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (rhPtr.GetMBase(pHo) == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.callMovement(CExp.EXP_EXTGETDENSITY, 0);
	}
}
// CUT

function EXP_EXTGETVELOCITY()
{
}
EXP_EXTGETVELOCITY.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (rhPtr.GetMBase(pHo) == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.callMovement(CExp.EXP_EXTGETVELOCITY, 0);
	}
}
// CUT

function EXP_EXTGETANGLE()
{
}
EXP_EXTGETANGLE.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (rhPtr.GetMBase(pHo) == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.callMovement(CExp.EXP_EXTGETANGLE, 0);
	}
}
// CUT

function EXP_EXTGETRESTITUTION()
{
}
EXP_EXTGETRESTITUTION.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (rhPtr.GetMBase(pHo) == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.callMovement(CExp.EXP_EXTGETRESTITUTION, 0);
	}
}
// CUT

function EXP_EXTWIDTH()
{
}
EXP_EXTWIDTH.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoImgWidth;
	}
}
// CUT

function EXP_EXTHEIGHT()
{
}
EXP_EXTHEIGHT.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoImgHeight;
	}
}
// CUT

function EXP_EXTGETMASS() {
}
EXP_EXTGETMASS.prototype =
{
    evaluate: function (rhPtr) {
        var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
        if (rhPtr.GetMBase(pHo) == null) {
            rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
            return;
        }
        rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.callMovement(CExp.EXP_EXTGETMASS, 0);
    }
}
// CUT

function EXP_EXTGETANGULARVELOCITY() {
}
EXP_EXTGETANGULARVELOCITY.prototype =
{
    evaluate: function (rhPtr) {
        var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
        if (rhPtr.GetMBase(pHo) == null) {
            rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
            return;
        }
        rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.rom.rmMovement.callMovement(CExp.EXP_EXTGETANGULARVELOCITY, 0);
    }
}
// CUT

function EXP_EXTGETNAME() {
}
EXP_EXTGETNAME.prototype =
{
    evaluate: function (rhPtr) {
        var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
        if (pHo == null) {
            rhPtr.rh4Results[rhPtr.rh4PosPile] = "";
            return;
        }
        rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.hoOiList.oilName;
    }
}
// CUT
