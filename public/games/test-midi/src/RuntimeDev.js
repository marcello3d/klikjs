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
var scripts = document.getElementsByTagName("script");
var path = scripts[scripts.length - 1].src;
document.srcPath = "";
var pos = path.lastIndexOf("/");
if (pos >= 0)
	document.srcPath = path.substring(0, pos + 1);

var now = '0';
//var now = new Date().getTime();       Use this if you want a reload of the code every time
document.write('<script src="' + document.srcPath + 'Services.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Renderer.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'StandardRenderer.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Events.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Animations.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Conditions.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Actions.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Params.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Expressions.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Movements.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'RunLoop.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Extensions.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Application.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Sprites.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Frame.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Objects.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'OI.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Banks.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Values.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'Transitions.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'TransitionCCTrans.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'jszip.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'jszip-inflate.js?' + now + '"></script>');
document.write('<script src="' + document.srcPath + 'jszip-load.js?' + now + '"></script>');


function RuntimeDev(canvasName, appName, frameName)
{
	var file = new CFile();
	window.application = new CRunApp(canvasName, file, appName);
	file.getFile(appName, headerLoaded);
}
function headerLoaded()
{
	window.application.load();
}
window.ua = 'updateApplication';
function updateApplication()
{
	window.application.stepApplication();
}


