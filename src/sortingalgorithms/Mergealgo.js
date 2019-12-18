
/*export default async function mergesortalgo(array) {
    //console.log("in mergesortalgo");
    const A = array.slice();
    //console.log(A);
    let start = 0;
    let n = A.length;
    let end = n-1;
    //console.log("calling merge_sort for first time");
    const A1 = merge_sort(A, start, end);
    return A1;
}

async function merge_sort(A, start, end)
{
    //console.log("recursive calls for merge_sort");
    //console.log("start=" + start);
    //console.log("end=" + end);
    if(start<end)
    {
        let mid = Math.floor((start+end)/2);
        merge_sort(A, start, mid);
        merge_sort(A, mid+1, end);
        //console.log("calling merge for first time");
        merge(A, start, mid, end);
    }
    return A;
}

async function merge(A, start, mid, end)
{
    //console.log("remaining merge calls");
    let p = start; let q = mid + 1;
    let Arr = []; let k=0;
    for(let i = start;i<end;i++)
    {
        if(p>mid)
        {
            Arr[k++] = A[q++];
        }
        else if(q>end)
        {
            Arr[k++] = A[p++];
        }
        else if(A[p] < A[q])
        {
            Arr[k++] = A[p++];
        }
        else
        {
            Arr[k++] = A[q++];
        }
    }
    for(let i = 0;i<k;i++)
    {
        //console.log("changing height");
        A[start] = Arr[i];
        //await timer(0.5);
        //document.getElementsByClassName('array_bar')[start].style.height = `${A[start]}px`;
        //console.log(i);
        start++;
    }
    return A;
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
*/

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }