let megoldas="";
let leutottbetuk= [];
let leutesekszama=0;
let hibakszama=0;
let eddigibetuk=[];
let talalatokszama=0;
$(document).ready(function(){
    Randomword();
    $("input").keyup(function(){
        if(leutottbetuk.includes($(this).val())){
            $(".betuMezo").val("")
            return;
        }
        leutottbetuk.push(
            $(".betuMezo").val()
        )
        $(".betuMezo").val("")
        if(megoldas.includes(leutottbetuk[leutesekszama])){
            for(i=0;i<eddigibetuk.length;i++){
                if(eddigibetuk[i]==leutottbetuk[leutesekszama]){
                    $("#m"+i).html(`${leutottbetuk[leutesekszama]}`)
                    talalatokszama++;
                }
            }
        }
        else{
            hibakszama++
            $("#akasztofa").attr("src","f"+hibakszama+".png")
            $("#tippeltbetuk").append(`${leutottbetuk[leutesekszama]}`);
            if(leutesekszama==11){
                $("#Over").css("display","flex");
                $(".card").css("display","none");
            }
        }
        leutesekszama++;
        if(talalatokszama==eddigibetuk.length){
            alert("nyertel")
        }
    });
});
async function Randomword(){
    let response = await fetch("https://random-word-api.herokuapp.com/word");
    var data= await response.json();
    megoldas=data[0]
    console.log(megoldas)
    for(i=0;i<megoldas.length;i++){
        $(".megfejtes").append("<h1 id=m"+i+">-</h1>")
        eddigibetuk.push(megoldas[i]);
    }
}