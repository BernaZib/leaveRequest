import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const PickUser = () => {
  return (
    <div class="screen">
        <button class="btn btn-info" type="button" onClick={()=>window.location.href = '/User'}><h1>USER</h1></button>
        <button class="btn btn-danger" type="button" onClick={()=>window.location.href = '/Admin'}><h1>ADMIN</h1></button>
    </div>
  )
}

export default PickUser

