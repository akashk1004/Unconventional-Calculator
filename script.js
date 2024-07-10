const userInput= document.getElementById('input-number');
const subBtn=document.getElementById('btn-sub')
const mulBtn=document.getElementById('btn-mul')
const divBtn=document.getElementById('btn-div')
const addBtn=document.getElementById('btn-add')

const currentResultOutput = document.getElementById('result');
const currentCalculationOutput=document.getElementById('current-calculation');

function outputResult(result,text){
    currentResultOutput.textContent=result;
    currentCalculationOutput.textContent=text;
}

const defaultResult=0;
let currentResult=defaultResult;


function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription =  `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}

function add(){
    const enterNumber=getUserNumberInput();
    const initialResult= currentResult;
    currentResult = currentResult + enterNumber;
    createAndWriteOutput('+',initialResult,enterNumber);

}
function sub(){
    const enterNumber=getUserNumberInput();
    const initialResult= currentResult;
    currentResult = currentResult - enterNumber;
    createAndWriteOutput('-',initialResult,enterNumber);

}
function mul(){
    const enterNumber=getUserNumberInput();
    const initialResult= currentResult;
    currentResult = currentResult * enterNumber;
    createAndWriteOutput('*',initialResult,enterNumber);

}
function div(){
    const enterNumber=getUserNumberInput();
    const initialResult= currentResult;
    currentResult = currentResult / enterNumber;
    createAndWriteOutput('/',initialResult,enterNumber);

}

addBtn.addEventListener('click',add);
subBtn.addEventListener('click',sub);
mulBtn.addEventListener('click',mul);
divBtn.addEventListener('click',div);
