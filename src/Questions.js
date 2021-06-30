

const Questions=({lenghthQuestion,QusetionIndex})=>{


    //  <img  src={"https://einbuergengstestbackend.herokuapp.com/" + "images/" + propsQuestion.image} alt="pic" />
    return(
        <div className="Questions">
 <h1 className="count">Count: {QusetionIndex+1} /{lenghthQuestion}</h1>
            <p className="text"></p>
         
               <div className="imageTestDiv">
                   <img  src="" alt="pic" />
               </div> 
               
        

          
        </div>
    )
}

export default Questions