const { useState } = require("react");

let [counter, setCounter] = useState(15)

// let counter = 15

const addValue = () =>
    {
        setCounter(counter + 1) // interviewer ask you what will be the value of value after copy pasting it more > 3 || 4
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)

        //Answer::
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
    }
    
// the fibre or diffing algo of react recognizes the

const removeValue = () =>
    {
        setCounter(counter -1)
    }






  
/*
    In this example, each setCounter call uses the functional form, ensuring that it references the latest state value. This aligns with how React Fiber schedules and batches updates:

    Each setCounter(prevCounter => prevCounter + 1) schedules a new state update based on the latest state.
    React batches these updates and processes them together, ensuring that each increment is based on the most current state, leading to the expected final value.

    **Summary**
    The behavior you observed with state updates is indeed influenced by React's Fiber architecture and its batching of state updates. The reconciliation process, or diffing algorithm, plays a role in efficiently updating the DOM based on the virtual DOM changes resulting from state updates. By using the functional form of setCounter, you ensure that each update references the most recent state, thus achieving the expected result. */