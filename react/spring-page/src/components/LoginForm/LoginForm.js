import {createStore} from "redux";


export function LoginForm(props) {

    //const [login, setLogin] = useState('');
   // const [password, setPassword] = useState('');

    // function checkData() {
    //     if(login === 'admin' && password === '1234'){
    //
    //     }
    // }

    return(
        <form>
            {/*<input type='text' placeholder='login' onChange={e => setLogin(e.target.value)}/>*/}
            {/*<input type='text' placeholder='password' onChange={e => setPassword(e.target.value)}/>*/}
            <button type='submit'>Send</button>
        </form>
    )
}
