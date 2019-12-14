
export default function bubblesortalgo(array) {
    if (array.length <= 1) return array;
    const sortedarray = array.slice();
    const n = array.length;
    for(let i = 0;i<n-1;i++)
    {
        for(let j = 0;j<n-i-1;j++)
        {
            const bar1 = document.getElementsByClassName('array_bar')[j];
            const bar2 = document.getElementsByClassName('array_bar')[j+1];
            setTimeout(() => {
                bar1.style.backgroundColor = "red";
                bar2.style.backgroundColor = "red"; 
                if(sortedarray[j] > sortedarray[j+1])
                {
                    var temp = sortedarray[j];
                    sortedarray[j] = sortedarray[j+1];
                    sortedarray[j+1] = temp;
                }
                setTimeout(() => {
                    bar1.style.backgroundColor = 'green';
                    bar2.style.backgroundColor = 'green'; 
                    bar1.style.height = `${sortedarray[j]}px`;
                    bar2.style.height = `${sortedarray[j+1]}px`;
                }, j * 1);
            }, j*1);
            
            
        }
    }
}