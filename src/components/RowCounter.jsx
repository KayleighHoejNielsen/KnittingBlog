import { useState } from 'react'


export default function RowCounter({ id, onDelete }) {
    const [counter, setCounter] = useState(0)

    function add() {
        //note to self, ++ should not be used in react. do not write over when it comes to states just tell it what the new state is
        setCounter(prevCounter=> prevCounter + 1)
    }

    function subtract() {
        setCounter(prevCounter=> prevCounter - 1)
    }

    function reset() {
        setCounter(0)
    }

    function deleteCounter() {
        onDelete(id)
    }


    return (
        <>
            <div className="counter">
                <h2 className="current-count">{counter}</h2>
                <button className="add" onClick={add}>+</button>
                <button ClassName="subtract" onClick={subtract}>-</button>
                <button ClassName="reset" onClick={reset}>Reset</button>
                <button ClassName="delete" onClick={deleteCounter}>Delete</button>
            </div>
        </>
    )
}

