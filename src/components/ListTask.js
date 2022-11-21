import React from 'react'

const ListTask = ({task,index,removeTask}) => {
  return (
    <>

        <div className='listTask'>
            {task.title}
            <button className='deleteButton' 
            onClick={()=>{
                removeTask(index);
            }}
            >Delete</button>
        </div>

    </>
  )
}

export default ListTask