


var countNumber = 5;
const randomNumber = Math.floor(Math.random() * 101);
var userNumber;

document.getElementById("count").innerHTML = "시도횟수 : " + countNumber;

function alertNumber(){
userNumber = document.getElementById('inputNumber').value;



if(userNumber < 1 || userNumber > 100){
alert("1부터 100까지만 입력하세요");
}

else{

document.getElementById("script2").style.fontSize = "20px";
if(userNumber == randomNumber){
    document.getElementById("script2").innerHTML = "정답입니다 :)";
    document.getElementById("count").innerHTML = "남은횟수 : " + countNumber;
    document.getElementById("submitNumber").style.display = "none";
    document.getElementById("inputNumber").style.display = "none";
}
else{
 
    if(userNumber>randomNumber){
    document.getElementById("script2").style.color = "red";
    document.getElementById("script2").innerHTML = "DOWN!";
    countNumber -= 1;
    document.getElementById("count").innerHTML = "남은횟수 : " + countNumber;
    }
    else{
    document.getElementById("script2").style.color = "blue";
    document.getElementById("script2").innerHTML = "UP!";
    countNumber -= 1;
    document.getElementById("count").innerHTML = "남은횟수 : " + countNumber;
    }


    if(countNumber == 0){
        document.getElementById("count").innerHTML = "5번만에 맞추기 실패";
        document.getElementById("script2").innerHTML = "DOWN!";
        document.getElementById("submitNumber").style.display = "none";
        document.getElementById("inputNumber").style.display = "none";
    }
}
}
}
