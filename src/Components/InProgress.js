
import './styles.css'
import { useState } from 'react'

const InProgress = ()=>{

    const [InProgressList, setInpregressList] = useState([1,2,3,4,5])

// function that adds a new item to the list 
   const handleAddingListItem = () =>{
    console.log(InProgressList)
   }

    const handleDragging = () => {
        console.log("dragged")
   }

    return(
        <div className='bucketStyles'>
            <div className='bucketHeading'>
                <h2>In Progress</h2>
                <button onClick={handleAddingListItem}>+</button>
            </div>
            <ul className='listStyles'>
                {
                  InProgressList.map((item,index)=>{
                    return(
                        <li draggable="true" onDrag={()=>console.log("dragged")} key={index}> 
                            <p>{item}</p>
                        </li>
                    )
                  })  
                }  

            </ul>
        </div>
    )
}

export default InProgress;