async function merge(ele,l,mid,r)
{
    let n1=mid-l+1;
    let n2=r-mid;
    let a= new Array(n1);
    let b= new Array(n2);
    for(let i=0;i<n1;i++)
    {
       await waitforme(delay);
       ele[l+i].style.background='orange'; 
       a[i]=ele[l+i].style.height; 
    }
    for(let j=0;j<n2;j++)
    {
       await waitforme(delay);
       ele[mid+1+j].style.background='yellow'; 
       b[j]=ele[mid+1+j].style.height; 
    }
    let k=l;
    let i=0;
    let j=0;
    await waitforme(delay);
    while(i<n1&&j<n2)
    {
        await waitforme(delay);
        if(parseInt(a[i])<=parseInt(b[j]))
        {
            if((n1 + n2) === ele.length){
                ele[k].style.background = '#A239EA';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            ele[k].style.height=a[i];
            i++;
            k++;
        }
        else
        {
          if((n1 + n2) === ele.length){
                ele[k].style.background = '#A239EA';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }  
          ele[k].style.height=b[j];
          j++;
          k++;
        }
    }
    while(i<n1)
    {
       await waitforme(delay);
       if((n1 + n2) === ele.length){
                ele[k].style.background = '#A239EA';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }   
       ele[k].style.height=a[i];
       i++;
       k++; 
    }
    while(j<n2)
    {
       await waitforme(delay);
       if((n1 + n2) === ele.length){
                ele[k].style.background = '#A239EA';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }    
       ele[k].style.height=b[j];
       j++;
       k++; 
    }
}



async function mergesort(ele,l,r)
{
    if(l<r)
    {
       let mid=parseInt((l+r)/2);
       console.log(mid);
       await mergesort(ele,l,mid);
       await mergesort(ele,mid+1,r);
       await merge(ele,l,mid,r); 
    }
}




const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
	let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergesort(ele,l,r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});