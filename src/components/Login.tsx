import { useEffect, useReducer } from "react";

interface AuthState {
    validating: boolean,
    token: string | null,
    username: string,
    name: string,
}

type LoginPayload = {
    username: string,
    name: string
}

type AuthAction =
    | {type: 'login', payload: LoginPayload}
    | {type: 'logout'};

const initialState: AuthState = {
    validating: true,
    token: null,
    username: '',
    name: ''
};


const authReducer = (state: AuthState, action: AuthAction) : AuthState => {
    switch (action.type) {
        case 'login':
            const {username, name} = action.payload;
            return {
                validating: false,
                token: 'tokenTesting',
                username,
                name
            }

        case 'logout':
            return {
                validating: false,
                token: null,
                username: '',
                name: ''
            }
    
        default:
            return state;
    }
}

export const Login = () => {
  const [{validating, token, name, username}, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
        dispatch({type: 'logout'})
    }, 1500);
  }, [])

  if(validating) {
    return (
        <>
            <h3>Login</h3>
            <div className="alert alert-info">
                Validating...
            </div>
        </>
    )
  }
  
  const login = () => {
    dispatch({
        type: 'login',
        payload: {
            name: 'Emmanuel',
            username: 'EmmanuelTamburini'
        }
    });
  }

  const logout = () => {
    dispatch({
        type: 'logout'
    });
  }

  return (
    <>
        <h3>Login</h3>
        {(token)
            ?
                <div className="alert alert-success">Welcome {name}, you are authenticated as: {username}</div>
            :
                <div className="alert alert-danger">No authenticated</div>
        }
        {(token)
            ?
                (
                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        Logout
                    </button>
                )
            :
                (
                    <button
                        className="btn btn-primary"
                        onClick={login}
                    >
                        Login
                    </button>
                )
        }
    </>
  )
}
