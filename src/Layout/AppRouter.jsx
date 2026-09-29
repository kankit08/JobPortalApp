import { createBrowserRouter } from "react-router-dom";
import MainLayout from './MainLayout';
import HomePage from '../Components/HomePage'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import CandidateDashboard from '../Pages/CandidateDashboard'
import EmployerDashboard from '../Pages/EmployerDashboard'

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,

        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            },
            {
                path: 'candidate-dashboard',
                element: <CandidateDashboard/>
            },
            {
                path: 'employeer-dashboard',
                element: <EmployerDashboard/>
            },

        ]
    }
])

export default AppRouter