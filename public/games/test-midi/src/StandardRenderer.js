/* Renderer implementation using 2D canvas context
 */
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
function StandardRenderer(element)
{
    this.xScale = 1.0;
    this.yScale = 1.0;
    this.oldEffect = -1;
	this.smoothing = false;
	this.oldSmoothing = false;
	this.dxw = 0.0;               // sub-pixel margin size for destination rectangle
	this.dyw = 0.0;               // sub-pixel margin size for destination rectangle

	if (!(this._context = element.getContext('2d')))
		throw new Error("Failed to init standard renderer");
};

StandardRenderer.prototype = CServices.extend(new Renderer(),
	{
		resetEffect: function (smooth)
		{
			this.smoothing = smooth;
			this.oldSmoothing = smooth;
			this._context["imageSmoothingEnabled"] = smooth;
			this._context["webkitImageSmoothingEnabled"] = smooth;
			this._context["mozImageSmoothingEnabled"] = smooth;
			this._context["msImageSmoothingEnabled"] = smooth;

			this.oldEffect = -1;
			this.setInkEffect(0, 0);
		},

		setScale: function (sx, sy)
		{
			this._context.scale(sx, sy);

		    // Adjust subpixel correction according to scale, to avoid seams between backdrop objects
            // todo: should it depend on the browser?
			this.xScale = sx;
			this.yScale = sy;
			this.dxw = 0.0;             // no sub-pixel correction if no scaling
			this.dyw = 0.0;

			if (this.xScale > 1.0)
			    this.dxw = 1.0;         // 1 pixel correction if zoom > 1.0
		    else if (this.xScale > 0.0 && this.xScale < 1.0)
		        this.dxw = 1.0 / this.xScale;   // 1/scale pixel correction if zoom < 1.0
			if (this.yScale > 1.0)
			    this.dyw = 1.0;
			if (this.yScale > 0.0 && this.yScale < 1.0)
			    this.dyw = 1.0 / this.yScale;
		},

		clearBackground: function (x, y, w, h)
		{
			var context = this._context;
			context.clearRect(x, y, w, h);
		},

		renderSolidColor: function (x, y, w, h, color, inkEffect, inkEffectParam)
		{
			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);

			context.fillStyle = CServices.getColorString(color);

			var deltax = x - Math.floor(x);
			var deltay = y - Math.floor(y);
			if (deltax != 0)
			    deltax = (1 - deltax);
			if (deltay != 0)
			    deltay = (1 - deltay);
			deltax += this.dxw;
			deltay += this.dyw;
		    context.fillRect(x, y, w + deltax, h + deltay);
		},

		renderSolidColorEllipse: function (x, y, w, h, color, inkEffect, inkEffectParam)
		{
			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);

			context.fillStyle = CServices.getColorString(color);

			CServices.createEllipse(context, x, y, w, h);
			context.fill();
		},

		renderGradient: function (x, y, w, h, color1, color2, vertical, inkEffect, inkEffectParam)
		{
			if (color1 == color2)
				return this.renderSolidColor(x, y, w, h, color1, inkEffect, inkEffectParam);

			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);

			var deltax = x - Math.floor(x);
			var deltay = y - Math.floor(y);
			if (deltax != 0)
			    deltax = (1 - deltax);
			if (deltay != 0)
			    deltay = (1 - deltay);
			deltax += this.dxw;
			deltay += this.dyw;
			this.configureGradient(x, y, w + deltax, h + deltay, vertical, color1, color2);
			context.fillRect(x, y, w + deltax, h + deltay);
		},

		renderGradientEllipse: function (x, y, w, h, color1, color2, vertical, inkEffect, inkEffectParam)
		{
			if (color1 == color2)
				return this.renderSolidColorEllipse(x, y, w, h, color1, inkEffect, inkEffectParam);

			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);

			this.configureGradient(x, y, w, h, vertical, color1, color2);

			CServices.createEllipse(context, x, y, w, h);
			this._context.fill();
		},

		renderImage: function (image, x, y, angle, scaleX, scaleY, inkEffect, inkEffectParam)
		{
			//        if(! (image instanceof CImage))
			//            throw new Error("renderImage: bad image type: " + (typeof image));
			var context = this._context;
			var xi = x - image.xSpot;
			var yi = y - image.ySpot;
			//        if (xi+image.width<0 || xi>context.width || yi+image.height<0 || yi>context.height)
			//        	return;

			this.setInkEffect(inkEffect, inkEffectParam);

			var deltax = x - Math.floor(x);
			var deltay = y - Math.floor(y);
			if (deltax != 0)
			    deltax = (1 - deltax);
			if (deltay != 0)
			    deltay = (1 - deltay);
			deltax += this.dxw;
			deltay += this.dyw;
			var imgX = 0;
			var imgY = 0;
			var img = null;
			if (image.mosaic == 0) {
			    img = image.img;
			}
			else {
			    img = image.app.imageBank.mosaics[image.mosaic];
			    imgX = image.mosaicX;
			    imgY = image.mosaicY;
			}
			if (img != null)
			{
			    if (angle == 0 && scaleX == 1 && scaleY == 1)
			    {
			        if (image.mosaic == 0 && deltax == 0 && deltay == 0)
			        {
		                context.drawImage(img, xi, yi);
			        }
			        else
			        {
			            context.drawImage(img,
							imgX, imgY,
							image.width, image.height,
                            xi, yi,
							image.width + deltax, image.height + deltay);
			        }
			    }
			    else
			    {
			        context.save();

			        context.translate(x, y);

			        if (angle != 0)
			            context.rotate(-angle * 0.0174532925);

			        context.scale(Math.max(0.001, scaleX), Math.max(0.001, scaleY));
			        context.translate(-image.xSpot, -image.ySpot);

			        context.drawImage(img, imgX, imgY, image.width, image.height,
                        0, 0, image.width, image.height);

			        context.restore();
			    }
			}
		},

		renderSimpleImage: function (image, x, y, width, height, inkEffect, inkEffectParam)
		{
			this.setInkEffect(inkEffect, inkEffectParam);
			var deltax = x - Math.floor(x);
			var deltay = y - Math.floor(y);
			if (deltax != 0)
			    deltax = (1 - deltax);
			if (deltay != 0)
			    deltay = (1 - deltay);
			deltax += this.dxw;
			deltay += this.dyw;
		    this._context.drawImage(image, x, y, width + deltax, height + deltay);
		},

		renderPattern: function (image, x, y, w, h, inkEffect, inkEffectParam)
		{
			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);

			context.save();
			context.beginPath();
			context.moveTo(x, y);
			context.lineTo(x + w, y);
			context.lineTo(x + w, y + h);
			context.lineTo(x, y + h);
			context.lineTo(x, y);
			context.clip();

			var iSx = image.width;
			var iSy = image.height;
			var widthX = Math.floor(w / iSx) + 1;
			var heightY = Math.floor(h / iSy) + 1;
			var nX, nY;
			var deltax = x - Math.floor(x);
			var deltay = y - Math.floor(y);
			if (deltax != 0)
			    deltax = (1 - deltax);
			if (deltay != 0)
			    deltay = (1 - deltay);
			deltax += this.dxw;
			deltay += this.dyw;
			var imgX = 0;
			var imgY = 0;
			var img = null;
			if (image.mosaic == 0) {
			    img = image.img;
			}
			else {
			    img = image.app.imageBank.mosaics[image.mosaic];
			    imgX = image.mosaicX;
			    imgY = image.mosaicY;
			}
			if (img != null) {
			    for (nX = 0; nX < widthX; nX++) {
			        for (nY = 0; nY < heightY; nY++) {
			            context.drawImage(img,
							imgX, imgY,
							image.width, image.height,
                            x + nX * iSx, y + nY * iSy,
							image.width + deltax, image.height + deltay);
			        }
			    }
			}
			context.restore();
		},

		renderPatternEllipse: function (image, x, y, w, h, inkEffect, inkEffectParam)
		{
			if (!(image instanceof CImage))
				throw new Error("renderPatternEllipse: bad image type: " + (typeof image));

			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);

			if (image.mosaic == 0)
			{
				if (image.img != null)
				{
					context.fillStyle = context.createPattern(image.img, 'repeat');
				}
			}
			else
			{
				if (!image.pattern)
				{
					image.pattern = document.createElement("canvas");
					image.pattern.width = image.width;
					image.pattern.height = image.height;
					var context = image.pattern.getContext("2d");
					context.drawImage(image.app.imageBank.mosaics[image.mosaic],
						image.mosaicX, image.mosaicY,
						image.width, image.height, 0, 0,
						image.width, image.height);
				}
				context.fillStyle = context.createPattern(image.pattern, 'repeat');
			}
			CServices.createEllipse(context, x, y, w, h);
			this._context.fill();
		},

		renderLine: function (xA, yA, xB, yB, color, thickness, inkEffect, inkEffectParam)
		{
			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);

			context.strokeStyle = CServices.getColorString(color);
			context.lineCap = 'round';
			context.lineWidth = thickness;

			context.beginPath();
			context.moveTo(xA, yA);
			context.lineTo(xB, yB);
			context.closePath();

			context.stroke();
		},

		renderRect: function (x, y, w, h, color, thickness, inkEffect, inkEffectParam)
		{
			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);

			context.strokeStyle = CServices.getColorString(color);
			context.lineWidth = thickness;
			context.strokeRect(x, y, w, h);
		},

		renderEllipse: function (x, y, w, h, thickness, color, inkEffect, inkEffectParam)
		{
			var context = this._context;

			this.setInkEffect(inkEffect, inkEffectParam);
			context.lineWidth = thickness;
			context.strokeStyle = CServices.getColorString(color);

			CServices.createEllipse(context, x, y, w, h);
			this._context.stroke();
		},

		clip: function (x, y, w, h)
		{
			var context = this._context;
			context.save();
			context.beginPath();
			context.rect(x, y, w, h);
			context.clip();
		},

		unClip: function ()
		{
			this._context.restore();
		},

		pushClip: function ()
		{
			var context = this._context;

			var clip = Renderer.prototype.pushClip.apply(this, arguments);

			context.beginPath();
			context.rect(clip.x, clip.y, clip.w, clip.h);
			context.clip();
		},

		popClip: function ()
		{
			var context = this._context;

			Renderer.prototype.popClip.apply(this, arguments);

			if (this.clips.length > 0)
			{
				var clip = this.clips[this.clips.length - 1];

				context.beginPath();
				context.rect(clip.x, clip.y, clip.w, clip.h);
				context.clip();
			}
			else
			{
				context.resetClip();
			}
		},

		setInkEffect: function (effect, effectParam)
		{
			var context = this._context;
			if (typeof effect == 'undefined')
			{
				context.globalAlpha = 1.0;
				context.composite = 'source-over';
				return;
			}

			if (effect == this.oldEffect && effectParam == this.oldEffectParam)
				return;
			this.oldEffect = effect;
			this.oldEffectParam = effectParam;


			var effectMasked = effect & CRSpr.BOP_MASK;
			var smoothing = ((effect & CRSpr.BOP_SMOOTHING) != 0) | this.smoothing;
			if (smoothing != this.oldSmoothing)
			{
				this.oldSmoothing = smoothing;
				context["imageSmoothingEnabled"] = smoothing;
				context["webkitImageSmoothingEnabled"] = smoothing;
				context["mozImageSmoothingEnabled"] = smoothing;
				context["msImageSmoothingEnabled"] = smoothing;
            }

			if ((effect & CRSpr.BOP_RGBAFILTER) != 0)
				context.globalAlpha = (((effectParam >>> 24) & 0xFF) / 255.0);
			else if (effectMasked == CRSpr.BOP_BLEND)
				context.globalAlpha = ((128 - effectParam) / 128.0);
			else
				context.globalAlpha = 1.0;

			switch (effectMasked)
			{
				case CRSpr.BOP_ADD:
					context.composite = "lighter";
					break;
				case CRSpr.BOP_XOR:
					context.composite = "xor";
					break;
				default:
					context.composite = "source-over";
					break;
			}
		},

		configureGradient: function (x, y, w, h, vertical, color1, color2)
		{
			var gradient = vertical ?
				this._context.createLinearGradient(x, y, x, y + h)
				: this._context.createLinearGradient(x, y, x + w, y);

			gradient.addColorStop(0, CServices.getColorString(color1));
			gradient.addColorStop(1, CServices.getColorString(color2));

			this._context.fillStyle = gradient;
		}
	});




