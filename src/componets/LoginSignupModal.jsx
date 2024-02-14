import React from 'react';
import Login from './Login-page/Login';
import Sign from './Sign-up-page/Sign';

const LoginSignupModal = ({ loginSignup, loginSignupClose , loginSignupOpen}) => {
        const handleContentClick = (e) => {
          // Prevent the click event from reaching the parent div and triggering the close action
          e.stopPropagation();
        };
      

  return (
    <div id="myModal" className={`modal ${loginSignup?'block':'hidden'}`} onClick={loginSignupClose} >
    <div className="modal-content space-y-10 w-1/3 p-5" onClick={handleContentClick}  >
        <div className='flex justify-between p-5'>
        <div></div>
        <ul className='flex p-2 rounded-full space-x-2 bg-white shadow-xl'>
            <li onClick={()=>loginSignupOpen('login')} className={`${loginSignup=="login"?'login-signup-active':'login-signup'} text-xl uppercase text-medium py-1 px-5 rounded-full`}> <a href="#">Login</a></li>
            <li onClick={()=>loginSignupOpen('signup')} className={`${loginSignup=="signup"?'login-signup-active':'login-signup'} text-xl uppercase  text-medium py-1 px-5 rounded-full`}> <a href="#">Signup</a></li>
        </ul>
        <button className='text-xl' onClick={loginSignupClose} >X</button>
        </div>

        {
            loginSignup=="login" &&(
                <div className='bg-white p-5'>
                    <Login loginSignupClose={loginSignupClose} />

                </div>
            )
        }

        {   
            loginSignup=="signup" &&(
                <div className='bg-white p-5'>
                    <Sign loginSignupClose={loginSignupClose} />

                </div>
            )
        }
    </div>

    </div>
  );
}

export default LoginSignupModal;
