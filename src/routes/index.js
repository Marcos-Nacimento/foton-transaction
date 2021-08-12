import { Route, Switch } from 'react-router-dom';
import { SignIn } from '../pages/signIn';
//import { Home } from '../pages/home';

export const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={SignIn}/>
        </Switch>
    );
};