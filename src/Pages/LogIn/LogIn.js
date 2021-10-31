import React from 'react';
import './LogIn.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';


const LogIn = () => {
    const { signInWithGoogle,user,setUser,logOut, setIsLoading} = useAuth();
    const history= useHistory();
    const location = useLocation();

    const url= location.state?.from || "/home";
    const handleGoogleLogin = () => {
        signInWithGoogle()
          .then((res) => 
            {
              setIsLoading(true)
              setUser(res.user)
              swal("Sign in Successful!", "Welcome back !", "success")
              history.push(url)
            }
              )
          .catch((err) => swal("Something went wrong!", `${err.message}`, "error"))
          .finally(() => {
            setIsLoading(false)
          })
      };


    
    return (
        <>
            <div className="log-in-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mx-auto p-0">
                            <div className="login-form text-center">

                                {
                                    (!user?.displayName) ?
                                    <button onClick={handleGoogleLogin} className="btn mt-3 theme-bg text-white">
                                    Google Sign In
                                    </button>
                                    :
                                    <button onClick={logOut} className="btn mt-3 theme-bg text-white">
                                    Log Out
                                    </button>
                                
                                }
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div> 
        </>
    );
};

export default LogIn;