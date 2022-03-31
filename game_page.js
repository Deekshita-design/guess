player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1").innerHTML=player1+": " ;
document.getElementById("player2").innerHTML=player2+": " ;
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;
document.getElementById("playerQuestion").innerHTML="question turn= "+player1;
document.getElementById("playerAnswer").innerHTML="answer turn= "+player2;
function send(){
    word=document.getElementById("text").value;
    word=word.toLowerCase();
    a1=word.charAt(1);
    num=Math.floor(word.length/2);
    a2=word.charAt(num);
    a3=word.charAt(word.length-1);
    remove1=word.replace(a1,"_");
    remove2=remove1.replace(a2,"_");
    remove3=remove2.replace(a3,"_");
    console.log(remove3);
    question="<h4 id='display word'> Q. "+remove3+"</h4>";
    inputpart="<br> answer: <input type='text' id='inputbox' >";
    check_button = "<br> <br> <button class='btn btn-info' onlclick='check()'>check</button>";
    combine=question+inputpart+check_button;
    document.getElementById("output").innerHTML=combine;
    document.getElementById("text").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    answer=document.getElementById("inputbox").value;
    answer=answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2score").innerHTML=player2_score;
        }
    }
    if (question_turn=="player1"){
        question_turn="player2";
        document.getElementById("playerQuestion").innerHTML="question_turn= "+player2;
    }
    else{
        question_turn="player1";
        document.getElementById("playerQuestion").innerHTML="question_turn= "+player1;
    }
    if (answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("playerAnswer").innerHTML="answer_turn= "+player2;
    }
    else{
        answer_turn="player1";
        document.getElementById("playerAnswer").innerHTML="answer_turn= "+player1;
    }
    document.getElementById("output").innerHTML="";
}
