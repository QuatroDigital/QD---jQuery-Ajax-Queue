/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function($) {
	"use strict";

	if (typeof $.qdAjax === "function")
		return;

	// Aramazenamento da fila
	var qdAjaxQueue = {};
	$.qdAjaxQueue = qdAjaxQueue;

	// Alerta sobre a versão do jQuery
	if(parseInt(($.fn.jquery.replace(/[^0-9]+/g, '') + '000').slice(0,3), 10) < 150){
		if(console && typeof console.error == 'function')
			console.error();
	}

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
				clearQueueDelay: 5 // Define o tempo em milesegundos em que os dados da requisição serão armazenados em cache. Caso seja passado "null" os dados nunca serão limpos
			};
			var options = $.extend({}, defaults, opts);

			// Criando ID único da requsição
			var requestData;
			if(typeof options.data === "object")
				requestData = JSON.stringify(options.data);
			else
				requestData = options.data.toString();
			var urlId = encodeURIComponent(options.url + '|' + options.type + '|' + requestData);

			// Adicionando um novo item a fila
			qdAjaxQueue[urlId] = qdAjaxQueue[urlId] || {};

			// Fazendo a chamada Ajax
			if (typeof qdAjaxQueue[urlId].jqXHR == "undefined")
				qdAjaxQueue[urlId].jqXHR = $.ajax(options);
			else{
				qdAjaxQueue[urlId].jqXHR.done(options.success);
				qdAjaxQueue[urlId].jqXHR.fail(options.error);
				qdAjaxQueue[urlId].jqXHR.always(options.complete);
			}

			// limpando o cache conforme o tempo passado por parametro
			// Removendo os dados jqXHR
			qdAjaxQueue[urlId].jqXHR.always(function() {
				if (!isNaN(parseInt(options.clearQueueDelay))){
					setTimeout(function() {
						qdAjaxQueue[urlId].jqXHR = undefined;
					}, options.clearQueueDelay);
				}
			});

			return qdAjaxQueue[urlId].jqXHR;
		}
		catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas no $.qdAjax :( . Detalhes: " + e.message)); }
	};

	$.qdAjax.version = "4.0";
})(jQuery);