export default function quicksortalgo(array, start,  end) {
    if(start<end)
    {
        let q = partition(array, start, end);
        quicksortalgo(array, start, q-1);
        quicksortalgo(array, q+1, end);
    }
    //return array;
}

async function partition(array, index, pivot_index) {
    if(index<pivot_index) {
        let pivot_value = array[pivot_index];
        let j = index - 1;
        let k = index - 1;
        document.getElementsByClassName('array_bar')[pivot_index].style.backgroundColor = "red";
        for(let i = index;i<pivot_index;i++)
        {
            await timer(100);
            document.getElementsByClassName('array_bar')[i].style.backgroundColor = "rgb(208, 21, 255)";
            if(array[i]<pivot_value)
            {
                k+=1;
            }
            if(k>=0)
            {
                await timer(100);
                document.getElementsByClassName('array_bar')[k].style.backgroundColor = "rgb(208, 21, 255)";
            }
            if(array[i]<=pivot_value)
            {
                j+=1;
                swap(array, i, j);
                await timer(100);
                document.getElementsByClassName('array_bar')[i].style.height = `${array[j]}px`;
                document.getElementsByClassName('array_bar')[j].style.height = `${array[i]}px`;
            }
        }
        swap(array, pivot_index, j+1);
        await timer(100);
        document.getElementsByClassName('array_bar')[pivot_index].style.height = `${array[j+1]}px`;
        document.getElementsByClassName('array_bar')[j+1].style.height = `${array[pivot_index]}px`;
        return (j+1);
    }
}
function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    //document.getElementsByClassName('array_bar')[a].style.height = `${array[b]}px`;
    //document.getElementsByClassName('array_bar')[b].style.height = `${array[a]}px`;
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }