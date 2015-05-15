/* Quatro Digital - jQuery Ajax Queue // 3.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */

// FUNCÇÕES AUXILIARES
	/*http://phpjs.org/functions/utf8_encode/*/
	function utf8_encode(b){if(null===b||"undefined"===typeof b)return"";b+="";var d="",f,g,h=0;f=g=0;for(var h=b.length,e=0;e<h;e++){var a=b.charCodeAt(e),c=null;if(128>a)g++;else if(127<a&&2048>a)c=String.fromCharCode(a>>6|192,a&63|128);else if(55296!=(a&63488))c=String.fromCharCode(a>>12|224,a>>6&63|128,a&63|128);else{if(55296!=(a&64512))throw new RangeError("Unmatched trail surrogate at "+e);c=b.charCodeAt(++e);if(56320!=(c&64512))throw new RangeError("Unmatched lead surrogate at "+(e-1));a=((a&1023)<<
	10)+(c&1023)+65536;c=String.fromCharCode(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}null!==c&&(g>f&&(d+=b.slice(f,g)),d+=c,f=g=e+1)}g>f&&(d+=b.slice(f,h));return d};
	/*http://phpjs.org/functions/md5/*/
	if("function"!==typeof qd_md5)var qd_md5=function(p){var h=function(b,a){var d,c,f,e,g;f=b&2147483648;e=a&2147483648;d=b&1073741824;c=a&1073741824;g=(b&1073741823)+(a&1073741823);return d&c?g^2147483648^f^e:d|c?g&1073741824?g^3221225472^f^e:g^1073741824^f^e:g^f^e},k=function(b,a,d,c,f,e,g){b=h(b,h(h(a&d|~a&c,f),g));return h(b<<e|b>>>32-e,a)},l=function(b,a,d,c,f,e,g){b=h(b,h(h(a&c|d&~c,f),g));return h(b<<e|b>>>32-e,a)},m=function(b,a,c,d,e,f,g){b=h(b,h(h(a^c^d,e),g));return h(b<<f|b>>>32-f,a)},n=
	function(b,a,c,d,f,e,g){b=h(b,h(h(c^(a|~d),f),g));return h(b<<e|b>>>32-e,a)},q=function(b){var a="",c="",d;for(d=0;3>=d;d++)c=b>>>8*d&255,c="0"+c.toString(16),a+=c.substr(c.length-2,2);return a},e=[],f,r,t,u,v,b,a,d,c;p=this.utf8_encode(p);e=function(b){var a,c=b.length;a=c+8;for(var d=16*((a-a%64)/64+1),e=Array(d-1),f=0,g=0;g<c;)a=(g-g%4)/4,f=g%4*8,e[a]|=b.charCodeAt(g)<<f,g++;a=(g-g%4)/4;e[a]|=128<<g%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return e}(p);b=1732584193;a=4023233417;d=2562383102;c=271733878;p=
	e.length;for(f=0;f<p;f+=16)r=b,t=a,u=d,v=c,b=k(b,a,d,c,e[f+0],7,3614090360),c=k(c,b,a,d,e[f+1],12,3905402710),d=k(d,c,b,a,e[f+2],17,606105819),a=k(a,d,c,b,e[f+3],22,3250441966),b=k(b,a,d,c,e[f+4],7,4118548399),c=k(c,b,a,d,e[f+5],12,1200080426),d=k(d,c,b,a,e[f+6],17,2821735955),a=k(a,d,c,b,e[f+7],22,4249261313),b=k(b,a,d,c,e[f+8],7,1770035416),c=k(c,b,a,d,e[f+9],12,2336552879),d=k(d,c,b,a,e[f+10],17,4294925233),a=k(a,d,c,b,e[f+11],22,2304563134),b=k(b,a,d,c,e[f+12],7,1804603682),c=k(c,b,a,d,e[f+13],
	12,4254626195),d=k(d,c,b,a,e[f+14],17,2792965006),a=k(a,d,c,b,e[f+15],22,1236535329),b=l(b,a,d,c,e[f+1],5,4129170786),c=l(c,b,a,d,e[f+6],9,3225465664),d=l(d,c,b,a,e[f+11],14,643717713),a=l(a,d,c,b,e[f+0],20,3921069994),b=l(b,a,d,c,e[f+5],5,3593408605),c=l(c,b,a,d,e[f+10],9,38016083),d=l(d,c,b,a,e[f+15],14,3634488961),a=l(a,d,c,b,e[f+4],20,3889429448),b=l(b,a,d,c,e[f+9],5,568446438),c=l(c,b,a,d,e[f+14],9,3275163606),d=l(d,c,b,a,e[f+3],14,4107603335),a=l(a,d,c,b,e[f+8],20,1163531501),b=l(b,a,d,c,e[f+
	13],5,2850285829),c=l(c,b,a,d,e[f+2],9,4243563512),d=l(d,c,b,a,e[f+7],14,1735328473),a=l(a,d,c,b,e[f+12],20,2368359562),b=m(b,a,d,c,e[f+5],4,4294588738),c=m(c,b,a,d,e[f+8],11,2272392833),d=m(d,c,b,a,e[f+11],16,1839030562),a=m(a,d,c,b,e[f+14],23,4259657740),b=m(b,a,d,c,e[f+1],4,2763975236),c=m(c,b,a,d,e[f+4],11,1272893353),d=m(d,c,b,a,e[f+7],16,4139469664),a=m(a,d,c,b,e[f+10],23,3200236656),b=m(b,a,d,c,e[f+13],4,681279174),c=m(c,b,a,d,e[f+0],11,3936430074),d=m(d,c,b,a,e[f+3],16,3572445317),a=m(a,d,
	c,b,e[f+6],23,76029189),b=m(b,a,d,c,e[f+9],4,3654602809),c=m(c,b,a,d,e[f+12],11,3873151461),d=m(d,c,b,a,e[f+15],16,530742520),a=m(a,d,c,b,e[f+2],23,3299628645),b=n(b,a,d,c,e[f+0],6,4096336452),c=n(c,b,a,d,e[f+7],10,1126891415),d=n(d,c,b,a,e[f+14],15,2878612391),a=n(a,d,c,b,e[f+5],21,4237533241),b=n(b,a,d,c,e[f+12],6,1700485571),c=n(c,b,a,d,e[f+3],10,2399980690),d=n(d,c,b,a,e[f+10],15,4293915773),a=n(a,d,c,b,e[f+1],21,2240044497),b=n(b,a,d,c,e[f+8],6,1873313359),c=n(c,b,a,d,e[f+15],10,4264355552),
	d=n(d,c,b,a,e[f+6],15,2734768916),a=n(a,d,c,b,e[f+13],21,1309151649),b=n(b,a,d,c,e[f+4],6,4149444226),c=n(c,b,a,d,e[f+11],10,3174756917),d=n(d,c,b,a,e[f+2],15,718787259),a=n(a,d,c,b,e[f+9],21,3951481745),b=h(b,r),a=h(a,t),d=h(d,u),c=h(c,v);return(q(b)+q(a)+q(d)+q(c)).toLowerCase()};

// CORE jQuery Ajax Queue
(function($) {
	"use strict";

	if (typeof $.qdAjax === "function") return;

	// Aramazenamento da fila
	var qdAjaxQueue = {};
	$.qdAjaxQueue = qdAjaxQueue;

	// Plugin
	$.qdAjax = function(opts) {
		"use strict";
		try {

			var defaults = {
				url: "",
				type: 'GET',
				data: "",
				success: function() {},
				error: function() {},
				complete: function() {},
				clearQueueDelay: 0 // Define o tempo em milesegundos em que os dados da requisição serão armazenados em cache. Caso seja passado "null" os dados nunca serão limpos
			};
			var options = $.extend({}, defaults, opts);

			// Criando ID único da requsição
			var requestData = "";
			if(typeof options.data === "number" || typeof options.data === "string")
				requestData = options.data;
			else if(typeof options.data === "object")
				requestData = JSON.stringify(options.data);
			var urlId = qd_md5(options.url + options.type + requestData);

			// Adicionando a requisição na fila
			var queue = {
				success: function(data, textStatus, jqXHR) {
					options.success.call(this, data, textStatus, jqXHR);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					options.error.call(this, jqXHR, textStatus, errorThrown);
				},
				complete: function(jqXHR, textStatus) {
					options.complete.call(this, jqXHR, textStatus);
				}
			};
			// Adicionando um novo item a fila
			qdAjaxQueue[urlId] = qdAjaxQueue[urlId] || {};
			qdAjaxQueue[urlId].opts = qdAjaxQueue[urlId].opts || [];
			qdAjaxQueue[urlId].opts.push(queue);

			// Iniciando a chave correspondente aos parametros recebidos na requisção para uma URL em especifico
			qdAjaxQueue[urlId].parameters = qdAjaxQueue[urlId].parameters || {"success": {}, "error": {}, "complete": {} };

			// Informando que nenhum callback tem informação armazenada até o momento
			qdAjaxQueue[urlId].callbackFns = qdAjaxQueue[urlId].callbackFns || {};
			qdAjaxQueue[urlId].callbackFns.successPopulated = typeof qdAjaxQueue[urlId].callbackFns.successPopulated === "boolean" ? qdAjaxQueue[urlId].callbackFns.successPopulated : false;
			qdAjaxQueue[urlId].callbackFns.errorPopulated = typeof qdAjaxQueue[urlId].callbackFns.errorPopulated === "boolean" ? qdAjaxQueue[urlId].callbackFns.errorPopulated : false;
			qdAjaxQueue[urlId].callbackFns.completePopulated = typeof qdAjaxQueue[urlId].callbackFns.completePopulated === "boolean" ? qdAjaxQueue[urlId].callbackFns.completePopulated : false;

			// Aqui os dados após a requisição são armazenados para uso futuro e os callbacks são chamados
			var ajaxOptions = $.extend({}, options, {
				success: function(data, textStatus, jqXHR) {
					try{
						qdAjaxQueue[urlId].parameters.success = {
							data: data,
							textStatus: textStatus,
							jqXHR: jqXHR
						};
						qdAjaxQueue[urlId].callbackFns.successPopulated = true;

						for (var i in qdAjaxQueue[urlId].opts) {
							if (typeof qdAjaxQueue[urlId].opts[i] !== "object")
								continue;

							qdAjaxQueue[urlId].opts[i].success.call(this, data, textStatus, jqXHR);
							qdAjaxQueue[urlId].opts[i].success = function() {};
						}
					}
					catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas no $.qdAjax :( . Detalhes: " + e.message)); }
				},
				error: function(jqXHR, textStatus, errorThrown) {
					try{
						qdAjaxQueue[urlId].parameters.error = {
							errorThrown: errorThrown,
							textStatus: textStatus,
							jqXHR: jqXHR
						};
						qdAjaxQueue[urlId].callbackFns.errorPopulated = true;

						for (var i in qdAjaxQueue[urlId].opts) {
							if (typeof qdAjaxQueue[urlId].opts[i] !== "object")
								continue;

							qdAjaxQueue[urlId].opts[i].error.call(this, jqXHR, textStatus, errorThrown);
							qdAjaxQueue[urlId].opts[i].error = function() {};
						}
					}
					catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas no $.qdAjax :( . Detalhes: " + e.message)); }
				},
				complete: function(jqXHR, textStatus) {
					try{
						qdAjaxQueue[urlId].parameters.complete = {
							textStatus: textStatus,
							jqXHR: jqXHR
						};
						qdAjaxQueue[urlId].callbackFns.completePopulated = true;

						for (var i in qdAjaxQueue[urlId].opts) {
							if (typeof qdAjaxQueue[urlId].opts[i] !== "object")
								continue;

							qdAjaxQueue[urlId].opts[i].complete.call(this, jqXHR, textStatus);
							qdAjaxQueue[urlId].opts[i].complete = function() {};
						}

						// Removendo os dados jqXHR
						if (!isNaN(parseInt(options.clearQueueDelay))){
							setTimeout(function() {
								qdAjaxQueue[urlId].jqXHR = undefined;
								qdAjaxQueue[urlId].opts = undefined;
								qdAjaxQueue[urlId].parameters = undefined;
								qdAjaxQueue[urlId].callbackFns = undefined;
							}, options.clearQueueDelay);
						}
					}
					catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas no $.qdAjax :( . Detalhes: " + e.message)); }
				}
			});

			// Fazendo a chamada Ajax
			if (typeof qdAjaxQueue[urlId].jqXHR === "undefined")
				qdAjaxQueue[urlId].jqXHR = $.ajax(ajaxOptions);
			// Executando os calbbacks sem chamar o ajax caso a chamada ainda exista
			else if (qdAjaxQueue[urlId].jqXHR && qdAjaxQueue[urlId].jqXHR.readyState && qdAjaxQueue[urlId].jqXHR.readyState == 4) {
				// Sucesso
				if (qdAjaxQueue[urlId].callbackFns.successPopulated)
					ajaxOptions.success(qdAjaxQueue[urlId].parameters.success.data, qdAjaxQueue[urlId].parameters.success.textStatus, qdAjaxQueue[urlId].parameters.success.jqXHR);
				// Erro
				if (qdAjaxQueue[urlId].callbackFns.errorPopulated)
					ajaxOptions.error(qdAjaxQueue[urlId].parameters.error.jqXHR, qdAjaxQueue[urlId].parameters.error.textStatus, qdAjaxQueue[urlId].parameters.error.errorThrown);
				// Completo
				if (qdAjaxQueue[urlId].callbackFns.completePopulated)
					ajaxOptions.complete(qdAjaxQueue[urlId].parameters.complete.jqXHR, qdAjaxQueue[urlId].parameters.complete.textStatus);
			}
		}
		catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas no $.qdAjax :( . Detalhes: " + e.message)); }
	};

	$.qdAjax.version = "2.1";
})(jQuery);