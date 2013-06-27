/* Quatro Digital - jQuery Ajax Queue // 1.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function($){
	if(typeof $.qdAjax === "function") return;

	// Aramazenamento da fila
	$.qdAjaxQueue={};
	
	// Plugin
	$.qdAjax=function(opts){
		var defaults,options,urlId,queue,ajaxOptions;
		
		defaults={
			success:function(){},
			error:function(){},
			complete:function(){},
			clearQueueDelay:0
		};
		options=$.extend({},defaults, opts);
	
		// Adicionando a requisição na fila
		urlId=escape(encodeURIComponent(options.url));
		queue={
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
		$.qdAjaxQueue[urlId]=$.qdAjaxQueue[urlId]||{};
		$.qdAjaxQueue[urlId]["opts"]=$.qdAjaxQueue[urlId]["opts"]||[];
		$.qdAjaxQueue[urlId]["opts"].push(queue);
		
		// Criando função que chamará a fila
		ajaxOptions=$.extend({},options,{
			success:function(data, textStatus, jqXHR){
				// var item;
				for(var i in $.qdAjaxQueue[urlId]["opts"]){
					if(typeof $.qdAjaxQueue[urlId]["opts"][i] !== "object")
						continue;

					$.qdAjaxQueue[urlId]["opts"][i].success.call(this, data, textStatus, jqXHR);
					$.qdAjaxQueue[urlId]["opts"][i].success=function(){};
				}
			},
			error:function(jqXHR, textStatus, errorThrown){
				for(var i in $.qdAjaxQueue[urlId]["opts"]){
					if(typeof $.qdAjaxQueue[urlId]["opts"][i] !== "object")
						continue;

					$.qdAjaxQueue[urlId]["opts"][i].error.call(this, jqXHR, textStatus, errorThrown);
					$.qdAjaxQueue[urlId]["opts"][i].error=function(){};
				}
			},
			complete:function(jqXHR, textStatus){
				for(var i in $.qdAjaxQueue[urlId]["opts"]){
					if(typeof $.qdAjaxQueue[urlId]["opts"][i] !== "object")
						continue;

					$.qdAjaxQueue[urlId]["opts"][i].complete.call(this, jqXHR, textStatus);
					$.qdAjaxQueue[urlId]["opts"][i].complete=function(){};
				}
				
				// Removendo os dados jqXHR
				setTimeout(function(){
					$.qdAjaxQueue[urlId]["jqXHR"]=undefined;
					$.qdAjaxQueue[urlId]["opts"]=undefined;
				},options.clearQueueDelay);
			}
		});
		
		// Fazendo a chamada Ajax
		if(typeof $.qdAjaxQueue[urlId]["jqXHR"] === "undefined")
			$.qdAjaxQueue[urlId]["jqXHR"]=$.ajax(ajaxOptions);
	};
})(jQuery);