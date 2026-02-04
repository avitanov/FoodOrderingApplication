import styles from "./AuthForm.module.css";
import { useContext, useRef, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import AuthContext from "../../dataStorage/Auth-context";
const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const userName = useRef();
  const password = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError] = useState(undefined);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = userName.current.value;
    const enteredPassword = password.current.value;
    
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwVXqD3xNN0dZwC0ftoPuK9cWTUkuiicg",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredUsername,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            //   console.log('errorMessage',errorMessage);
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
      })
      .catch((error) => {
          setError(error.message);
      });
       
  };
  return (
    <div className={styles.loginBox}>
      {!isLoading && (
        <form onSubmit={onSubmitHandler}>
          <div className={styles.userBox}>
            <input type="text" required="" ref={userName} />
            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input type="password" required="" ref={password} />
            <label>Password</label>
            {error && error.length > 0 && (
              <p className="text-red-500 font-semibold">{error}</p>
            )}
          </div>
          <center>
            <button>
              SEND
              <span></span>
            </button>
          </center>
        </form>
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default AuthForm;
