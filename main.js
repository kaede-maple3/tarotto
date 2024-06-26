var CardExplain = [
        ["自由、冒険心、可能性、楽観","無計画、無謀、翻弄、空回り"],
        ["想像力、自信、才能","迷い、不安定、嘘、力不足"],
        ["洞察、直感、聡明、神秘","批判、硬い思想、過剰意識"],
        ["豊かさ、母性、包容、実り","依存、わがまま、感情的"],
        ["リーダーシップ、安定、信頼","傲慢、虚勢、無責任、独断的"],
        ["モラル、慈悲、関係の中継ぎ","反伝統的、詐欺、狡猾、独善"],
        ["恋の幸せ、安心、魅了","誘惑、不貞、関係の破綻"],
        ["勇猛果敢、勝利、野望","空回り、行き詰まり、敗北"],
        ["信念、不屈、自制、忍耐","現実逃避、挫折、疲労困憊"],
        ["自己発見、悟り、思慮深さ","悲観、卑屈、引きこもり"],
        ["状況の好転、好機、幸運","翻弄、急激な変化、不運"],
        ["正当性、公正公平、平等","不正、矛盾、不平等"],
        ["試練、修行、受容、献身","報われない、徒労、不自由"],
        ["終止符、終焉、再誕、離別","執着、もがき、未練"],
        ["調和、柔軟性、循環","浪費、不和、惰性"],
        ["誘惑、堕落、依存、快楽主義","開放、立ち直り、再生"],
        ["激変、災害、ショック","小さな失敗、緊迫、後悔"],
        ["可能性、成就、希望","失意、幻滅、自己否定"],
        ["不安、秘密、中途半端、曖昧","現実が見える、調和、安定"],
        ["成功、解決、栄光","執着、もがき、未練"],
        ["復活、再生、報われる","手遅れ、贖罪、後悔"],
        ["統合、完成、達成、完璧","未完成、完全燃焼、手抜き"],
]
var fortune_result = [
        ["新しい出来事が始まっている。自由気ままに行動すると思わぬいいことがあるかも","今の自分の楽観的な部分がマイナスの方向に向いている。しっかり計画を立てて行動するとよいかも"],
        ["積極的にチャレンジするとよいことがあるかも","やる気や自信を失って、悪循環から抜け出せなくなっている。新しいことにチャレンジするといいかも"],
        ["とても思慮深いが、それが祟ってしまい行動力に欠ける。思い切ってやるといいかも","慎重すぎるが故に、融通が利かなくなり、落ち着かなくなってしまう。周りをよく見渡すとよいかも"],
        ["すべての面で満足できるでしょう","豊かさが仇となり、意思が弱くなってしまってる。自己を保ちましょう"],
        ["リーダーシップを発揮でき、物事がうまく行くかも","自信が悪い形として出てしまっているかも。自分を客観的に見てみよう"],
        ["あなたはとても優しい人です。寛大な精神を持ち、あなたには味方がいる","保守的な考え方になってしまっている。他の意見も聞いてみよう"],
        ["恋愛関係のなど、精神的充足感が得られる","誘惑に惑わされているかも。自制心を養おう"],
        ["持ち前の自信と強い意思で、積極的に行動、実行できるかも","周りを見れなくなって、トラブルが起こるかも。周りをよく見よう"],
        ["強い意志でどんなこともやり遂げられるでしょう","グダグダになってしまっているかも。意思を強く、自信を持とう"],
        ["自分自身の内面の内面を見つめ直し、思考を重ねるとよいかも","警戒心が強くなって閉鎖的になってしまっている"],
        ["思いがけないチャンスが到来し、転換期が訪れるかも","一時的だが、思いがけないトラブルにより、状況が悪くなってしまっている"],
        ["決断力が高く、合理的に物事が進んでいくかも","優柔不断になってしまう"],
        ["今までの苦労が報われ、精神的に強くなれるかも","自分にとって得がないトラブルに巻き込まれるかも。注意！！"],
        ["新たに動き出せるかも","状況が１８０度変化するかも"],
        ["物事が滞りなく進展するかも","順調に進んでいたものが停滞してしまうかも"],
        ["誘惑に惑わされてしまっているかも","依存から抜け出し、悪循環から抜け出せるかも"],
        ["思いもよらないトラブルが起きてしまうかも","不安や緊張状態が続いてしまうかも"],
        ["ひらめきや直感によって素晴らしい希望に満ち溢れるかも","気持ちがしずんで現実逃避してしまうかも"],
        ["先が見えない状況に不安になり、憂鬱になってしまうかも","不安が解消され視界がよくなり、物事が順調に進むかも"],
        ["チャンスが巡ってきて、物事が成功するかも","物事がうまくいかなくて、萎えちゃうかも"],
        ["自分の行いが評価され、物事が良い方向に流れるかも","努力が報われず、物事が停滞しちゃうかも。吹っ切れて気持ちを入れ替えてみよう"],
        ["物事の調和がとれ、完璧な状態になるかも","不完全で納得できない状態になるかも"]
]

var select_kind

var TOCard1
var TOC1
var TOLoc1
var TOL1
var TOCard2
var TOC2
var TOLoc2
var TOL2
var TOmeaning1
var TOmeaning2
var TOresult

window.onload = function(){
        select_kind = document.getElementById("kind")

        TOCard1 = document.getElementById("card1")
        TOLoc1 = document.getElementById("loc1")
        TOCard2 = document.getElementById("card2")
        TOLoc2 = document.getElementById("loc2")
        TOmeaning1 = document.getElementById("TOmeaning1")
        TOmeaning2 = document.getElementById("TOmeaning2")
        TOresult = document.getElementById("TOresult")
        TOC1 = false
        TOL1 = false
        TOC2 = false
        TOL2 = false
}

function click_kind(){
        location.reload()
}

function change_TOC1(){
        TOC1 = TOCard1.selectedIndex
        change_TO1()
}
function change_TOL1(){
        TOL1 = TOLoc1.selectedIndex
        change_TO1()
}

function change_TO1(){
        if(!TOC1==false && !TOL1 == false){
                TOmeaning1.textContent = CardExplain[TOC1-1][TOL1-1]
        }
}

function change_TOC2(){
        TOC2 = TOCard2.selectedIndex
        change_TO2()
}
function change_TOL2(){
        TOL2 = TOLoc2.selectedIndex
        change_TO2()
}

function change_TO2(){
        if(!TOC2==false && !TOL2 == false){
                TOmeaning2.textContent = CardExplain[TOC2-1][TOL2-1]
        }
}

function FResultTO(){
        if(!TOC1==false && !TOL1 == false && !TOC2==false && !TOL2 == false){
                console.log("OK")
                TOresult.textContent = fortune_result[TOC1-1][TOL1-1] + "/" + fortune_result[TOC2-1][TOL2-1]
        }else{
                TOresult.textContent = "未入力の項目があります"
        }
}