
import './styles.css'


   
const InProgress = ()=>{

   const handleAddingListItme = () =>{
    console.log("added")
   }
    return(
        <div className='bucketStyles'>
            <div className='bucketHeading'>
                <h2>In Progress</h2>
                <button onClick={handleAddingListItme}>+</button>
            </div>
            <ul className='listStyles'>
                <li><p>sups</p></li>
                <li><p>sups</p></li>
                <li><p>sups</p></li>  
            </ul>
        </div>
    )
}

export default InProgress;