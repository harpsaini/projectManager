
import './styles.css'
import { useState } from 'react'


const ToDo = ()=>{

    const [ToDoList, setToDoList] = useState([])

// function that adds a new item to the list. 
    const handleAddingListItem = () =>{
        setToDoList(current=>[...current,{type:"text", value: ""}] )
    }

    const handleDragStart = (e) => {
        e.preventDefault();
        //keep track of the item being dragged
        let indexOfItemDragged = e.target.id;
        console.log(indexOfItemDragged);
        // keep track  of dragging initial and final place
            //remove from inital
           
<<<<<<< HEAD
        const newArr = ToDoList.filter((item)=>{ 
=======
     const newArr = ToDoList.filter((item)=>{ 
>>>>>>> routing
            console.log(item.key)
            item.key = indexOfItemDragged
        })

        // setToDoList(newArr)
        //add to destination
        // console.log(ToDoList)
    }
    

   // this function is takes the value of the input and enters it at the correct index in the state object
    const handleChange = (e) => {
        e.preventDefault()
        const index = e.target.id;
        setToDoList((current) => {
            const newArr = [...current];
            newArr[index].value = e.target.value;
            return newArr;
        });
    }

    return(
        <div className='bucketStyles'>
            <div className='bucketHeading'>
                <h2>To Do</h2>
                <button onClick={handleAddingListItem}>+</button>
            </div>
            <ul className='listStyles'>
                {
                  ToDoList.map((item,index)=>{
                    return(
                        <li draggable="true" onDragStart={handleDragStart} id={index}  key={index}> 
                            <label htmlFor={item.value}></label>
                            <input 
                            type="text" 
                            name={item.value} 
                            id= {index} 
                            value={item.value} 
                            onChange={handleChange}/>
                        </li>
                    )
                  })  
                }  
            </ul>
        </div>
    )
}

export default ToDo;

