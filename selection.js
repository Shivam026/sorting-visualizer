async function selection(){
	const ele=document.querySelectorAll(".bar");
	for(let i=0;i<ele.length;i++)
	{
		let min=i;
		ele[i].style.background='blue';
		for(let j=i+1;j<ele.length;j++)
		{
		  ele[j].style.background='blue';
		  await waitforme(delay);
		  if(parseInt(ele[min].style.height)>parseInt(ele[j].style.height)){
		  	if(min!=i)
		  	{
             ele[min].style.background='cyan';
		  	}
		  	min=j;
		  }
		   else{
		  	
             ele[j].style.background='cyan';
		  	}
		  	
		 }  
		  
		  await waitforme(delay);
		  swap(ele[min],ele[i]);
		  ele[min].style.background='cyan';
		  ele[i].style.background='#FB9300';	
		
		
	}
}	

const selectionsortbtn=document.querySelector(".selectionSort");
selectionsortbtn.addEventListener('click',async function(){
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
	await selection();
	enableSortingBtn();
	enableSizeSlider();
	enableNewArrayBtn();
});