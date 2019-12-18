
export default async function bubblesortalgo(array) {
    const sortedarray = array.slice();
    const n = array.length;
    for(let i = 0;i<n-1;i++)
    {
        for(let j = 0;j<n-i-1;j++)
        {
            const bar1 = document.getElementsByClassName('array_bar')[j];
            const bar2 = document.getElementsByClassName('array_bar')[j+1];
            await timer(13.9);
            //setTimeout(() => {
                bar1.style.backgroundColor = "red";
                bar2.style.backgroundColor = "red"; 
                if(sortedarray[j] > sortedarray[j+1])
                {
                    var temp = sortedarray[j];
                    sortedarray[j] = sortedarray[j+1];
                    sortedarray[j+1] = temp;
                }
                await timer(13.9);
               // setTimeout(() => {
                    bar1.style.backgroundColor = 'rgb(0, 167, 150)';
                    bar2.style.backgroundColor = 'rgb(0, 167, 150)'; 
                    bar1.style.height = `${sortedarray[j]}px`;
                    bar2.style.height = `${sortedarray[j+1]}px`;
                //}, j * 1);
            //}, j*1);    
        }
        document.getElementsByClassName('array_bar')[n-i-1].style.backgroundColor = "lightgreen";
        if(i === n-2)
        {
            document.getElementsByClassName('array_bar')[0].style.backgroundColor = "lightgreen";
        }
    }
    for(let i = 0;i<n;i++)
    {
        await timer(13.9);
        document.getElementsByClassName('array_bar')[i].style.backgroundColor = "white";
        await timer(13.9);
        document.getElementsByClassName('array_bar')[i].style.backgroundColor = "rgb(0, 167, 150)";
    }
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
