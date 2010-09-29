function mudaImagem(id, caminhoDaImagem){
    
    $("#" + id).click(function(){
        $('#produto_imagem > img').first().attr('src, caminhoDaImagem');
        $(this).hover(
            function(){
                $(this).css('opacity', '1');
            },
            function(){
                $(this).css('opacity', '0.9');
            }
        );
    });
}