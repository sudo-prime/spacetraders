// import { useState } from "react";
// import { useAppSelector, useAppDispatch } from '../../../hooks/stateHooks'
// import { logIn, selectAuth } from "../../../redux/reducers/authReducer";


// const LoginWindow = () => {
//     const { isLoggedIn, authToken } = useAppSelector(selectAuth);
//     const dispatch = useAppDispatch()
//     const [mode, setMode] = useState("login");

//     const onSubmitLogin = () => {
//         // TODO: React hook form maybe
//         const inputElement: HTMLInputElement | null = document.getElementById("authTokenInput") as HTMLInputElement;
//         const inputValue: string = inputElement?.value ?? "";
//         if (!inputValue) return;
//         dispatch(logIn(inputValue));
//     }

//     const onSubmitRegister = () => {
//         const symbolInputElement: HTMLInputElement | null = document.getElementById("symbolInput") as HTMLInputElement;
//         const factionInputElement: HTMLInputElement | null = document.getElementById("factionInput") as HTMLInputElement;
//         const symbolValue: string = symbolInputElement?.value ?? "";
//         const factionValue: string = factionInputElement?.value ?? "";
//         if (!symbolValue || !factionValue) return;
//         dispatch(register(symbolValue, factionValue));
//     }

//     console.log(isLoggedIn);

//     return !isLoggedIn ? <Window
//         hideControls={true}
//         visible={!isLoggedIn}
//         spreadProps={{
//             title: mode === 'login' ?  'Log In' : 'New User',
//             modal: true,
//             // x: '50%',
//             // y: 'center',
//             // width: '33%',
//             // height: '33%'
//         }}
//     >
        
//         { mode === 'login' ? 
//             <div>
//                 <h2>Log in</h2><hr />
//                 <input id="authTokenInput" placeholder="Auth Token" type="password" />
//                 <button onClick={() => onSubmitLogin()}>
//                     Go
//                 </button><hr />
//                 <button onClick={() => setMode('register')}>
//                     Register
//                 </button>
//                 <p>{authToken}</p>
//             </div>
//             :
//             <div>
//                 <h2>Register</h2><hr />
//                 <input id="symbolInput" placeholder="Symbol" /><hr />
//                 <input id="factionInput" placeholder="Faction" /><hr />
//                 <button onClick={() => onSubmitLogin()}>
//                     Go
//                 </button><hr />
//                 <button onClick={() => setMode('login')}>
//                     Log In
//                 </button>
//                 <p>{authToken}</p>
//             </div>
//         }
//     </Window> : null;
// }

// export default LoginWindow;