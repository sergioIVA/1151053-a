function cargarAjax(pagina) {
	$(document).ready(function(){
        $("#contenido").load(""+pagina+"");
});
	
}