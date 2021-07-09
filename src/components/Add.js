import { useState } from 'react';

const Add = ({ onAdd }) => {
    const [txt, setTxt] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if(!txt) {
            alert("Add Task");
            return
        }

        onAdd({ txt, date, reminder })

        setTxt("")
        setDate("")
        setReminder(false)
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input 
                type="text" 
                placeholder="Add Task" 
                value={txt}
                onChange={(e) => setTxt(e.target.value)}/>
            </div>
            <div>
                <label>Day & Time</label>
                <input 
                type="text" 
                placeholder="Add Day & Time"
                value={date}
                onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div>
                <label>Set reminder</label>
                <input 
                checked={reminder}
                type="checkbox"
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className="btn" type="submit" value="Add Task"/>
        </form>
    )
}

export default Add;