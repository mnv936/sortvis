export default function quicksortalgo(array, start,  end) {
    if(start<end)
    {
        let q = partition(array, start, end);
        quicksortalgo(array, start, q-1);
        quicksortalgo(array, q+1, end);
    }
    return array;
}

function partition(array, index, pivot_index) {
    if(index<pivot_index) {
        let pivot_value = array[pivot_index];
        let j = index - 1;
        for(let i = index;i<pivot_index;i++)
        {
            if(array[i]<pivot_value)
            {
                j+=1;
                swap(array, i, j);
            }
        }
        swap(array, pivot_index, j+1);
        return (j+1);
    }
}
function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}