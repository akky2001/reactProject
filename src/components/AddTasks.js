import { useState } from "react"

const AddTasks = ({onAdd}) => {

  const [text,setText] = useState('')
  const [day,setDay] = useState('')
  const [reminder,setReminder] = useState(false)
 
  const onSubmit =(e) => {
    e.preventDefault()


    if(!text) {
      alert('please add task')
      return
    }

    onAdd({text,day,reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
   <form className='add-form' onSubmit={onSubmit}>

    <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='add Task' value={text} onChange={(e) => setText(e.target.value)} />
    </div>

    <div className='form-control'>
        <label>Day and Time</label>
        <input type='text' placeholder='add Day&Time' value={day} onChange={(e) => setDay(e.target.value)} />
    </div>

    <div className='form-control form-control-check'>
        <label>SetReminder</label>
        <input type='checkbox'  checked={reminder}
        value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
    </div>

    <input type='Submit' value='Save' className='btn btn-block'/>

   </form>
  )
}

export default AddTasks
