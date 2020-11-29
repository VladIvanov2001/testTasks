import {createStore} from "redux";


export function LoginForm(props) {

    const store = createStore();
    return(
        <form>
            <input type='text' placeholder='login'/>
            <input type='text' placeholder='password'/>
            <button type='submit'>Send</button>
        </form>
    )
}
