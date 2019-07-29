var nowNum = -1
var symbol;

function numClick(num){
    document.getElementById('result').innerHTML = 
    document.getElementById('result').innerHTML + num;
}

function count(str){
    if (nowNum == -1){
        nowNum = document.getElementById('result').innerHTML;
    }else{
        formula();
    }
    symbol = str;
    document.getElementById('result').innerHTML = ""
}
function sum(){
    formula();
    document.getElementById('result').innerHTML = nowNum;
}

function clearNum(){
    document.getElementById('result').innerHTML = "";
    nowNum = 0;
    nowNum += num;
}

function formula(){
    switch (symbol){
        case '+':
            nowNum = parseInt(nowNum) + parseInt(document.getElementById('result').innerHTML)
            break;
        case '-':
            nowNum = parseInt(nowNum) - parseInt(document.getElementById('result').innerHTML)
            break;
        case '×':
            nowNum = parseInt(nowNum) * parseInt(document.getElementById('result').innerHTML)
            break;
        case '÷':
            nowNum = parseInt(nowNum) / parseInt(document.getElementById('result').innerHTML)
            break;
        }
}