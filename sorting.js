function swap(el1,el2)
{
 console.log('swapping');
 let temp=el1.style.height;
 el1.style.height=el2.style.height;
 el2.style.height=temp;	
}
function disableSortingBtn()
{
 document.querySelector(".bubbleSort").disabled=true;
 document.querySelector(".selectionSort").disabled=true;
 document.querySelector(".insertionSort").disabled=true;
 document.querySelector(".quickSort").disabled=true;
 document.querySelector(".mergeSort").disabled=true;	
}
function enableSortingBtn()
{
 document.querySelector(".bubbleSort").disabled=false;
 document.querySelector(".selectionSort").disabled=false;
 document.querySelector(".insertionSort").disabled=false;
 document.querySelector(".quickSort").disabled=false;
 document.querySelector(".mergeSort").disabled=false;	
}
function disableSizeSlider()
{
 document.querySelector('#arr_sz').disabled=true;	
}
function enableSizeSlider()
{
 document.querySelector('#arr_sz').disabled=false;	
}
function disableNewArrayBtn()
{
 document.querySelector('.newarray').disabled=true;	
}
function enableNewArrayBtn()
{
 document.querySelector('.newarray').disabled=false;	
}
function waitforme(milisec){
	return new Promise(resolve=>{
		setTimeout(()=>{resolve('')},milisec);
	})
}
let arraysize=document.querySelector("#arr_sz");
arraysize.addEventListener('input',function(){
	console.log(arraysize.value,typeof(arraysize.value));
	createnewarray(parseInt(arraysize.value));
});
let delay=160;
let delayelement=document.querySelector('#speed_input');
delayelement.addEventListener('input',function(){
	console.log(delayelement.value,typeof(delayelement.value));
	delay=420-parseInt(delayelement.value);
})
let array=[];
createnewarray();
function createnewarray(noofbars=60)
{
 deletechild();
 array=[];
 for(let i=0;i<noofbars;i++)
 {
 	array.push(Math.floor(Math.random()*250)+1);
 }
 console.log(array);
 const bars=document.querySelector('#bars');
 for(let i=0;i<noofbars;i++)
 {
 	const bar=document.createElement("div");
 	bar.style.height=`${array[i]*2}px`;
 	bar.classList.add('bar');
 	bar.classList.add('Flex-item');
 	bar.classList.add(`barNo${i}`);
 	bars.appendChild(bar);
 }	
}
function deletechild(){
	const bar=document.querySelector('#bars');
	bar.innerHTML=" ";
}
const newArray=document.querySelector('.newarray');
newArray.addEventListener('click',function(){
console.log(arraysize.value);
console.log(delay);
enableSortingBtn();
enableSizeSlider();
createnewarray(arraysize.value);
});