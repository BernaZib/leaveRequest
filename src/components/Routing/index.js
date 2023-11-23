import {Routes, Route} from 'react-router-dom'
import Request from '../Request';
import Response from '../Response';
import PickUser from '../PickUser';




function Routing(){
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path='/Profile' element={<Profile user={user}/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/SignIn' element={<SignIn/>}/> */}
      <Route path="/" element={<PickUser />} />
      <Route path="/User" element={<Request />} />
      <Route path="/Admin" element={<Response />} />
    </Routes>
    </>
  );
}

export default Routing