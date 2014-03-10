/* Quatro Digital - jQuery Ajax Queue // 2.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function($){
	if(typeof $.qdAjax === "function") return;

	// Aramazenamento da fila
	$.qdAjaxQueue={};

	// Plugin
	$.qdAjax = function(opts){
		var defaults,options,urlId,queue,ajaxOptions;

		defaults={
			success : function(){},
			error : function(){},
			complete : function(){},
			clearQueueDelay : 0
		};
		options = $.extend({},defaults, opts);

		// Adicionando a requisição na fila
		urlId = escape(encodeURIComponent(options.url));
		queue = {
			success:function(data, textStatus, jqXHR){
				options.success.call(this, data, textStatus, jqXHR);
			},
			error:function(jqXHR, textStatus, errorThrown){
				options.error.call(this, jqXHR, textStatus, errorThrown);
			},
			complete:function(jqXHR, textStatus){
				options.complete.call(this, jqXHR, textStatus);
			}
		};
		// Adicionando um novo item a fila
		$.qdAjaxQueue[urlId] = $.qdAjaxQueue[urlId] || {};
		$.qdAjaxQueue[urlId]["opts"] = $.qdAjaxQueue[urlId]["opts"] || [];
		$.qdAjaxQueue[urlId]["opts"].push(queue);

		// Iniciando a chave correspondente aos parametros recebidos na requisção para uma URL em especifico
		$.qdAjaxQueue[urlId]["parameters"] = $.qdAjaxQueue[urlId]["parameters"] || {"success" : {}, "error" : {}, "complete" : {}};

		// Informando que nenhum callback tem informação armazenada até o momento
		$.qdAjaxQueue[urlId]["callbackFns"] = $.qdAjaxQueue[urlId]["callbackFns"] || {};
		$.qdAjaxQueue[urlId]["callbackFns"]["successPopulated"] = typeof $.qdAjaxQueue[urlId]["callbackFns"]["successPopulated"] === "boolean" ? $.qdAjaxQueue[urlId]["callbackFns"]["successPopulated"] : false;
		$.qdAjaxQueue[urlId]["callbackFns"]["errorPopulated"] = typeof $.qdAjaxQueue[urlId]["callbackFns"]["errorPopulated"] === "boolean" ? $.qdAjaxQueue[urlId]["callbackFns"]["errorPopulated"] : false;
		$.qdAjaxQueue[urlId]["callbackFns"]["completePopulated"] = typeof $.qdAjaxQueue[urlId]["callbackFns"]["completePopulated"] === "boolean" ? $.qdAjaxQueue[urlId]["callbackFns"]["completePopulated"] : false;

		// Criando função que chamará a fila
		ajaxOptions = $.extend({}, options, {
			success:function(data, textStatus, jqXHR){
				// var item;

				$.qdAjaxQueue[urlId]["parameters"].success = {data : data, textStatus : textStatus, jqXHR : jqXHR};
				$.qdAjaxQueue[urlId]["callbackFns"]["successPopulated"] = true;

				for(var i in $.qdAjaxQueue[urlId]["opts"]){
					if(typeof $.qdAjaxQueue[urlId]["opts"][i] !== "object")
						continue;

					$.qdAjaxQueue[urlId]["opts"][i].success.call(this, data, textStatus, jqXHR);
					$.qdAjaxQueue[urlId]["opts"][i].success=function(){};
				}
			},
			error:function(jqXHR, textStatus, errorThrown){
				$.qdAjaxQueue[urlId]["parameters"].error = {errorThrown : errorThrown, textStatus : textStatus, jqXHR : jqXHR};
				$.qdAjaxQueue[urlId]["callbackFns"]["errorPopulated"] = true;

				for(var i in $.qdAjaxQueue[urlId]["opts"]){
					if(typeof $.qdAjaxQueue[urlId]["opts"][i] !== "object")
						continue;

					$.qdAjaxQueue[urlId]["opts"][i].error.call(this, jqXHR, textStatus, errorThrown);
					$.qdAjaxQueue[urlId]["opts"][i].error=function(){};
				}
			},
			complete:function(jqXHR, textStatus){
				$.qdAjaxQueue[urlId]["parameters"].complete = {textStatus : textStatus, jqXHR : jqXHR};
				$.qdAjaxQueue[urlId]["callbackFns"]["completePopulated"] = true;

				for(var i in $.qdAjaxQueue[urlId]["opts"]){
					if(typeof $.qdAjaxQueue[urlId]["opts"][i] !== "object")
						continue;

					$.qdAjaxQueue[urlId]["opts"][i].complete.call(this, jqXHR, textStatus);
					$.qdAjaxQueue[urlId]["opts"][i].complete=function(){};
				}

				// Removendo os dados jqXHR
				setTimeout(function(){
					$.qdAjaxQueue[urlId]["jqXHR"] = undefined;
					$.qdAjaxQueue[urlId]["opts"] = undefined;
					$.qdAjaxQueue[urlId]["parameters"] = undefined;
					$.qdAjaxQueue[urlId]["callbackFns"] = undefined;
				}, options.clearQueueDelay);
			}
		});

		// Fazendo a chamada Ajax
		if(typeof $.qdAjaxQueue[urlId]["jqXHR"] === "undefined")
			$.qdAjaxQueue[urlId]["jqXHR"] = $.ajax(ajaxOptions);
		// Executando os calbbacks sem chamar o ajax caso a chamada ainda exista
		else if( $.qdAjaxQueue[urlId]["jqXHR"] &&  $.qdAjaxQueue[urlId]["jqXHR"].readyState && $.qdAjaxQueue[urlId]["jqXHR"].readyState == 4){
			// Sucesso
			if($.qdAjaxQueue[urlId]["callbackFns"]["successPopulated"])
				ajaxOptions.success($.qdAjaxQueue[urlId]["parameters"].success.data, $.qdAjaxQueue[urlId]["parameters"].success.textStatus, $.qdAjaxQueue[urlId]["parameters"].success.jqXHR);
			// Erro
			if($.qdAjaxQueue[urlId]["callbackFns"]["errorPopulated"])
				ajaxOptions.error($.qdAjaxQueue[urlId]["parameters"].error.jqXHR, $.qdAjaxQueue[urlId]["parameters"].error.textStatus, $.qdAjaxQueue[urlId]["parameters"].error.errorThrown);
			// Completo
			if($.qdAjaxQueue[urlId]["callbackFns"]["completePopulated"])
				ajaxOptions.complete($.qdAjaxQueue[urlId]["parameters"].complete.jqXHR, $.qdAjaxQueue[urlId]["parameters"].complete.textStatus);
		}
	};

	$.qdAjax.version = "2.0";
})(jQuery);