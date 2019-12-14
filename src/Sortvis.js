import React from 'react';
import './App.css';
import './Sortvis.css';
import './Sortingalgo.js';
import bubblesortalgo from './Sortingalgo.js';

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

    mergesort() {}

    quicksort() {}

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

