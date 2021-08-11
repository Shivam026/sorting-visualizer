async function partition(ele,low,high)
{
  let pivot=ele[high];
  let i=low-1;
  ele[high].style.background = 'red';
  for(j=low;j<=high-1;j++)
  {
  	ele[j].style.background = 'yellow';
  	await waitforme(delay);
  	if(parseInt(ele[j].style.height)<parseInt(pivot.style.height))
  	{
  		i++;
  		swap(ele[i],ele[j])
  		ele[i].style.background = 'orange';
        if(i != j) 
        {
         ele[j].style.background = 'orange';
        }
        await waitforme(delay);
  	}
  	 else
  	 {

       ele[j].style.background = 'pink';
      }
  }
  await waitforme(delay);
  swap(ele[i+1],ele[high]);
  ele[high].style.background = 'pink';
  ele[i+1].style.background = 'green';

    // pauseChamp
   await waitforme(delay);
    
    // color
   for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }
  return i+1;
}
async function quick(ele,l,r)
{
 if(l<r)
 {	
 let pi= await partition(ele,l,r);
 await quick(ele,l,pi-1);
 await quick(ele,pi+1,r);  
 }
 else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
      }
}













const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
	let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quick(ele,l,r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});