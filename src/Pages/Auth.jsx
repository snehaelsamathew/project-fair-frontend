import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
                 <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=6c09b952ctryfyzr713c2eqb0kbfm1z62ylbe4v8xi4kbwcs&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                 width={'100%'} className='p-4' alt=""/>
        </div>
        <div className="col-lg-6">
          <form className='shadow bg-light m-3'>
                <h2 className='text-center mt-5'>Project Fair</h2>
                <h4 className='text-center'>
                {
                  register? 'Register Here...' : 'Login Here...'
                }
                </h4>
                <div className='mx-5 p-5 '>
                  {
                    register &&
                    <input type="text" placeholder='Username' className='form-control mb-2'/>
                  }
                  <input type="text" placeholder='email' className='form-control mb-2'/>
<input type="text" placeholder='password' className='form-control mb-2'/>
                </div>

           
                  <div>
{
  register?
  <div className='text-center m-4'>
    <button className='btn btn-dark m-4'>Register</button>
    <p>Already registerd? <Link to={'/login'}>Login here....</Link></p>
  </div>
  :
  <div className='text-center m-4'>
    <button className='btn btn-dark m-4'>Login</button>
    <p>New to here? <Link to={'/register'}>Register here....</Link></p>
  </div>
}
                  </div>
                
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth