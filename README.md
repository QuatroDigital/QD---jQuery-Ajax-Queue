#QUATRO DIGITAL - jQuery Ajax Queue#

###Atenção
> Esta extensão é mantida por [Quatro Digital](http://www.quatrodigital.com.br) e não possui suporte gratuito.
> O código fonte deste componente não pode ser vendido ou comercializado, ele esta livre para uso comercial mas só podem haver cobranças com relação à mão de obra necessária a sua instalação e não por sua utilização.
> O correto funcionamento deste script não é de responsabilidade de seu desenvolvedor, mantenedor ou constribuidores.
> Caso queira contribuir com o desenvolvimento fique a vontade para fazer um `Fork` e posteriormente um `pull request`.

**O uso desta extensão esta sob as regras da lincença: [MIT](http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT)**

----------

###**Exemplo, request comum em $.ajax**

```javascript
$.ajax({
	url: "//api.ipify.org?format=jsonp", 
	dataType: "jsonp"
}).done(function(data) {
	console.log(data);
});
```


###**Exemplo, a mesma request feito em $.qdAjax**

```javascript
$.qdAjax({
	url: "//api.ipify.org?format=jsonp", 
	dataType: "jsonp",
	clearQueueDelay: null // milisegundos ou null
}).done(function(data) {
	console.log(data);
});
```
