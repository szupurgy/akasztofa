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
            $("#nyeresujragomb").css("display","inline-block");
            var count = 200;
            var defaults = {
            origin: { y: 0.7 }
            };

            function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
            }

            fire(0.25, {
            spread: 26,
            startVelocity: 55,
            });
            fire(0.2, {
            spread: 60,
            });
            fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
            });
            fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
            });
            fire(0.1, {
            spread: 120,
            startVelocity: 45,
            });
            var end = Date.now() + (15 * 1000);

            // go Buckeyes!
            var colors = ['#bb0000', '#ffffff'];
            
            (function frame() {
              confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
              });
              confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
              });
            
              if (Date.now() < end) {
                requestAnimationFrame(frame);
              }
            }());
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