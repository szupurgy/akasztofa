let megoldas="";
let leutottbetuk= [];
let leutesekszama=0;
let hibakszama=0;
let eddigibetuk=[];
$(document).ready(function(){
    Randomword();
    $("input").keyup(function(){
        leutottbetuk.push(
            $(".betuMezo").val()
        )
        $(".betuMezo").val("")
        if(megoldas.includes(leutottbetuk[leutesekszama])){
            for(i=0;i<eddigibetuk.length;i++){
                if(eddigibetuk[i]==leutottbetuk[leutesekszama]){
                    $("#m"+i).html(`${leutottbetuk[leutesekszama]}`)
                }
            }
        }
        else{
            hibakszama++
            $("#akasztofa").attr("src","f"+hibakszama+".png")
            $("#tippeltbetuk").append(`${leutottbetuk[leutesekszama]}`);
        }
        leutesekszama++;
    });
});
async function Randomword(){
    let response = await fetch("https://random-word-api.herokuapp.com/word");
    var data= await response.json();
    megoldas=data[0]
    for(i=0;i<megoldas.length;i++){
        $(".megfejtes").append("<h1 id=m"+i+">-</h1>")
        eddigibetuk.push(megoldas[i]);
    }
}