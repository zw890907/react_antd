/** 
 * 路由配置
*/
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from '@/utils/loadable';

const Home = Loadable(() => import('@/pages/home'));
const Login = Loadable(() => import('@/pages/login'));
const NotFound = Loadable(() => import('@/pages/exception/404.js'));

const defaultRoutes = [
    <Route key="toHome" exact path="/" component={Home} />,
    <Route key="home" exact path="/home" component={Home} />,
    <Route key="login" exact path="/login" component={Login} />,
    <Route key="404" exact component={NotFound} />,
    <Redirect key="redirect" to={"/home"} />
]

export default defaultRoutes
