import React,{useState} from "react";




function App() {

  

  const [fullName,setfullName] = useState({
      fName:"" ,
      lName:""
  });
  
  function handleChange(event){
   

    const { value, name} = event.target;

     setfullName ( prevValue => {
      if(name === "fName"){
        return({
          fName:value,
          lName:prevValue.fName
        })
      }
      else if(name === "lName"){
        return(
         {
          fName:prevValue.lName,
          lName:value
         }
        )
      }
      else{

      }
      
        
       
    }
    );
    
  };

 

  return (
    <div className="container">
      <h1> Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input value = {fullName.fName}  onChange = { handleChange} name="fName" placeholder="First Name" />
        <input value = {fullName.lName}  onChange = { handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
