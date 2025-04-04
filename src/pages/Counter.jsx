import { useState } from "react"
import RowCounter from '../components/RowCounter.jsx'

export default function Counter() {
    const [counters, setCounters] = useState([])

    const addCounter = () => {
        const newCounter = { id: Date.now() }
        setCounters([...counters, newCounter])
    }

    const deleteCounter = (id) => {
        setCounters(counters.filter((counter) => counter.id != id))
    }

    return (

        <div className="counters-page">
            <button onClick={addCounter}>Add Counter</button>
            <div className="counters-container">
                {counters.map((counter) => (
                    <RowCounter key={counter.id} id={counter.id} onDelete={deleteCounter} />
                ))}
                    
            </div>
        </div>
    )
}
