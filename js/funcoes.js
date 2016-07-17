function comecarJogo(){
  $(".jogador1").hide();

  $('td').each(function(){
      $(this).click(function(){
        if($(this).html() == ''){
          if(jogador == 1){
            $(this).html('X');
            jogador = 2;
            $(".jogador1").show();
            $(".jogador2").hide();
            verificaGanhador();
        } else {
            if(jogador == 2){
              $(this).html('O');
              jogador = 1;
              $(".jogador2").show();
              $(".jogador1").hide();
              verificaGanhador();
          }
          else {
            if(jogador == 3){
            $(this).html('');
            alert('Jogo Acabou !');
              $(".jogador1").hide();
              $(".jogador2").hide();
          }
          }
      }
  }

});
  });
}

function verificaGanhador(){
    if(( $('td').eq(0).html() && $('td').eq(1).html() && $('td').eq(2).html() ) != ''  )
    {

        if( ($('td').eq(0).html() == $('td').eq(1).html()) &&
            ($('td').eq(0).html() == $('td').eq(2).html()))
        {
            $('td').eq(0).css({"background" : "green"});
            $('td').eq(1).css({"background" : "green"});
            $('td').eq(2).css({"background" : "green"});
            ganhador();
        }
    }
    if(( $('td').eq(3).html() && $('td').eq(4).html() && $('td').eq(5).html() ) != ''  )
    {  
        if( ($('td').eq(3).html() == $('td').eq(4).html()) &&
            ($('td').eq(3).html() == $('td').eq(5).html()))
        {
            $('td').eq(3).css({"background" : "green"});
            $('td').eq(4).css({"background" : "green"});
            $('td').eq(5).css({"background" : "green"});
            ganhador();
        }
    }
    if(( $('td').eq(6).html() && $('td').eq(7).html() && $('td').eq(8).html() ) != ''  )
    {
        if( ($('td').eq(6).html() == $('td').eq(7).html()) &&
            ($('td').eq(6).html() == $('td').eq(8).html()))
        {
            $('td').eq(6).css({"background" : "green"});
            $('td').eq(7).css({"background" : "green"});
            $('td').eq(8).css({"background" : "green"});
            ganhador();
        }
    }   
                    //verticais
                    if(( $('td').eq(0).html() && $('td').eq(3).html() && $('td').eq(6).html() ) != ''  )
                    {


                        if( ($('td').eq(0).html() == $('td').eq(3).html()) &&
                            ($('td').eq(0).html() == $('td').eq(6).html()))
                        {
                            $('td').eq(0).css({"background" : "green"});
                            $('td').eq(3).css({"background" : "green"});
                            $('td').eq(6).css({"background" : "green"});
                            ganhador();
                        }
                    } 
                    if(( $('td').eq(1).html() && $('td').eq(4).html() && $('td').eq(7).html() ) != ''  )
                    { 

                        if( ($('td').eq(1).html() == $('td').eq(4).html()) &&
                            ($('td').eq(1).html() == $('td').eq(7).html()))
                        {
                            $('td').eq(1).css({"background" : "green"});
                            $('td').eq(4).css({"background" : "green"});
                            $('td').eq(7).css({"background" : "green"});

                            ganhador();
                        }
                    }
                    if(( $('td').eq(2).html() && $('td').eq(5).html() && $('td').eq(8).html() ) != ''  )
                    {


                        if( ($('td').eq(2).html() == $('td').eq(5).html()) &&
                            ($('td').eq(2).html() == $('td').eq(8).html()))
                        {
                            $('td').eq(2).css({"background" : "green"});
                            $('td').eq(5).css({"background" : "green"});
                            $('td').eq(8).css({"background" : "green"});
                            ganhador();
                        }
                    }
                 //diagonais
                 if(( $('td').eq(0).html() && $('td').eq(4).html() && $('td').eq(8).html() ) != ''  )
                 {


                    if( ($('td').eq(0).html() == $('td').eq(4).html()) &&
                        ($('td').eq(0).html() == $('td').eq(8).html()))
                    {
                        $('td').eq(0).css({"background" : "green"});
                        $('td').eq(4).css({"background" : "green"});
                        $('td').eq(8).css({"background" : "green"});
                        ganhador();
                    } 
                }
                if(( $('td').eq(2).html() && $('td').eq(4).html() && $('td').eq(6).html() ) != ''  )
                {   


                    if( ($('td').eq(2).html() == $('td').eq(4).html())&&
                        ($('td').eq(2).html() == $('td').eq(6).html()))
                    {
                        $('td').eq(2).css({"background" : "green"});
                        $('td').eq(4).css({"background" : "green"});
                        $('td').eq(6).css({"background" : "green"});

                        ganhador();
                    }
                }
                if(( $('td').eq(0).html()
                    && $('td').eq(2).html()
                    && $('td').eq(4).html()
                    && $('td').eq(6).html()
                    && $('td').eq(8).html()
                    ) != ''  )
                {   



                }

                if((
                    $('td').eq(0).html() &&
                    $('td').eq(1).html() &&
                    $('td').eq(2).html() &&
                    $('td').eq(3).html() &&
                    $('td').eq(4).html() &&
                    $('td').eq(5).html() &&
                    $('td').eq(6).html() &&
                    $('td').eq(7).html() &&
                    $('td').eq(8).html()) != ''){
                    if( ($('td').eq(4).html() == $('td').eq(0).html()&&
                       $('td').eq(4).html() == $('td').eq(2).html()&&
                       $('td').eq(4).html() == $('td').eq(6).html()&&
                       $('td').eq(4).html() == $('td').eq(8).html()))
                    {
                        $('td').eq(0).css({"background" : "green"});
                        $('td').eq(2).css({"background" : "green"});
                        $('td').eq(4).css({"background" : "green"});
                        $('td').eq(6).css({"background" : "green"});
                        $('td').eq(8).css({"background" : "green"});
                        ganhador();
                    } else {
                        empate();
                    }
                }


            }
            function ganhador(){

                if(jogador == 1){
                    jogador = 2;
                    vencedor = 2;             
                    var pontos_jogador2 = $("#pontos_jogador2").val();
                    pontos_jogador2 = (pontos_jogador2* 1) + 1;
                    $("#pontos_jogador2").val( pontos_jogador2);
                } else {
                    vencedor = 1;
                    jogador = 1;
                    var pontos_jogador1 = $("#pontos_jogador1").val();
                    pontos_jogador1 = (pontos_jogador1* 1) + 1;
                    $("#pontos_jogador1").val(pontos_jogador1);
                }
       //$('td').unbind('click');
       $("<div class='teste alert alert-success' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='e'></span> <span class='sr-only'></span> Jogador "+jogador+" Ganhou </div>").appendTo('.alertando');
       $("td").each(function(){
//         $(this).off("click");
          jogador = 3;

     });

   }


   function empate(){

    $("<div class='teste alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='e'></span> <span class='sr-only'></span> Jogo Empatou, Reinicie o Jogo </div>").appendTo('.alertando');

    $('td').css({"background" : "red"});
      verificarVez();
}  
function novojogo(){
   $("td").each(function(){
  //     $(this).on("click");
       $(this).html('');
       $(this).css('background','white');

   });
   verificarVez();
   $(".jogador1").hide();
   $(".jogador2").hide();
   $(".teste").hide();
}

function verificarVez(){
     if (vencedor == 1) {
        jogador = 2;
       } else {
        vencedor = 1;
       }
}