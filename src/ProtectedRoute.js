import { Route, Redirect } from "react-router-dom";
import _ from "lodash";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => { //our HOC takes a component as an argument
    let isAuthenticated = true;
    const state = useSelector((state) => state.user);
    if (_.isEmpty(state.user)) isAuthenticated = false; // check if user information is contained in our redux state
    //remember how we implemented our authetication function
    //each time a user is authenticated , we store their information in the redux store
    //if a user's information is not available in the redux store, that would ultimately mean that the user has not been authenticayed
    return (
        <Route{...rest}
            render={(props) =>
            !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />  // redirect the user to the login component if they are not autheticated , else give them access to whatever component they want
        }
        />
    );
};