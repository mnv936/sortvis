import React from 'react';
import './App.css';
import './Sortvis.css';
import quicksortalgo from './sortingalgorithms/Quickalgo.js';
import bubblesortalgo from './sortingalgorithms/Bubblealgo.js';
//import mergesortalgo from './sortingalgorithms/Mergealgo.js';
import {getMergeSortAnimations} from './sortingalgorithms/Mergealgo.js';

export default class sortvis extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const newArray = [];
        for(let i = 0;i<70;i++)
        {
            let x = Math.floor(Math.random() * (800 - 10 + 1) + 10);
            newArray.push(x); 
        }
        this.setState({array: newArray});
    }

    render() {
        const disArray = this.state.array;

        return (
            <div className="array_container">
                {disArray.map((val, i) => (
                    <div className="array_bar" key={i} style={{height: `${val}px`}}>
                           
                    </div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New array</button>
                <button onClick={() => this.mergesort()}>Merge Sort</button>
                <button onClick={() => this.quicksort()}>Quick Sort</button>
                <button onClick={() => this.heapsort()}>Heap Sort</button>
                <button onClick={() => this.bubblesort()}>Bubble Sort</button>
            </div>
        );
    }

    mergesort() {
        /*console.log("called mergesortalgo from mergesort");
        mergesortalgo(this.state.array);
        
        console.log("done");
        */
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array_bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? "red" : "turquoise";
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * 10);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * 10);
        }
        }
    }

    quicksort() {
        const n = this.state.array.length;
        //const test_array  = this.state.array.slice();
        for(let i = 0;i<n;i++)
        {
            //console.log(test_array[i]);
        }
        //const quicksortedarray = quicksortalgo(this.state.array, 0, n-1);
        quicksortalgo(this.state.array, 0, n-1);
        console.log("sorted array");
       /* for(let i = 0;i<n;i++)
        {
            console.log(quicksortedarray[i]);
            //document.getElementsByClassName('array_bar')[i].style.height = `${quicksortedarray[i]}px`;
        }*/
    }

    heapsort() {}
    
    bubblesort() {
        //const sortedarray = bubblesortalgo(this.state.array);
        //or(let i = 0;i<sortedarray.length;i++)
        //{

        //    document.getElementsByClassName('array_bar')[i].style.height = `${sortedarray[i]}px`;
        //}
        bubblesortalgo(this.state.array);
    }
}

