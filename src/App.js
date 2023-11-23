import './App.css';
import {useState, useEffect} from 'react';
import Axios from "axios";
import PickUser from './components/PickUser';
import Routing from './components/Routing';



function App(){
  return(
    <>
    <Routing></Routing>
    </>

  );
}

// function App() {
//   const [listoflrequests, setlistoflrequests]=useState([]);
//   useEffect(()=>{
//     Axios.get("http://localhost:3001/getLRequests").then((response)=>{
//       setlistoflrequests(response.data)
//     });
//   },[])

//   const createLRequest=()=>{
//     Axios.post("http://localhost:3001/createLRequest",{name,lastname,id,reason}).then((response)=>{
//       alert("Leave request created");
//       setlistoflrequests([...listoflrequests,{name,lastname,id,reason}])

//     });
//   }

//   const [name,setName]=useState("");
//   const [lastname,setLastName]=useState("");
//   const [id,setId]=useState(0);
//   const [reason,setReason]=useState("");




//   return (
//     <div className="App">
//       <div>
//         {listoflrequests.map((lrequest)=>{
//           return(
//             <div>
//               <h1>Name:{lrequest.name}</h1>
//               <h1>Last Name:{lrequest.lastname}</h1>
//               <h1>Id:{lrequest.id}</h1>
//               <h1>Reason:{lrequest.reason}</h1>


//             </div>
          
//           );
//         })}

//       </div>





//       <div>
//         <input type="text" placeholder='name...' onChange={(event)=>{{setName(event.target.value)}}}/>
//         <input type="text" placeholder='Lastname...' onChange={(event)=>{{setLastName(event.target.value)}}}/>
//         <input type="number" placeholder='id...' onChange={(event)=>{setId(event.target.value)}}/>
//         <input type="text" placeholder='reason...' onChange={(event)=>{setReason(event.target.value)}}/>
//         <button onClick={createLRequest}>Create Leave Request</button>



//       </div>
//     </div>
//   );
// }

export default App;
