var addRule = (function (style) {
	var sheet = document.head.appendChild(style).sheet;
	return function (selector, css) {
		var propText =
			typeof css === "string"
				? css
				: Object.keys(css)
						.map(function (p) {
							return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
						})
						.join(";");
		sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
	};
})(document.createElement("style"));
