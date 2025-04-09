import { useState } from "react"
import RowCounter from '../components/RowCounter.jsx'

export default function Counter() {
    const [counters, setCounters] = useState([])

    const addCounter = () => {
        const name = prompt("Enter name for this counter:")
        if (name) {
            const newCounter = { id: Date.now() }
            //note to self: here I am setting the array of counters to be all previous counters
            // which is ...counters unpacked, and then adding this new counter to the end of the array
            setCounters([...counters, newCounter])
        }
    }

    const deleteCounter = (id) => {
        setCounters(counters.filter((counter) => counter.id != id))
    }

    return (

        <div className="counters-page">
            <button className="add-counter" onClick={addCounter}>Add Counter</button>
            <div className="counters-container">
                {counters.map((counter) => (
                    <RowCounter 
                        key={counter.id} 
                        id={counter.id} 
                        name={counter.name} 
                        onDelete={deleteCounter} />
                ))}
                    
            </div>
        </div>
    )
}
