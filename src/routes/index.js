import { useRoutes,
    Link, 
    Outlet, 
    useParams, 
    NavLink,
    useNavigate,
    useLocation } from "react-router-dom";
import DashboardComponent from "../components/DashboardComponent";
import AuthComponent from "../components/Auth/AuthComponent";
import RequireAuth from "../components/RequireAuth";
import useAuth from "../hooks/useAuth";

const Learn = () => {
  const { auth } = useAuth();
  const {setAuth} = useAuth();
    return (
      <div>
        <h1>Learn Component! {auth.token}</h1>
        <ul><li><button onClick={()=>setAuth({'token':'sss'})}></button></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/learn/courses">Courses</Link></li>
        </ul>
        <Outlet/>
      </div>
    )
  }
  
  const Courses = () => {
    const courseList = ['angular','vue','react']
    const randomList = courseList[Math.floor(Math.random() * courseList.length)]
    return (
      <div>
        <h1>Courses Component!</h1>
        <ul>
          <li><NavLink 
          style={({isActive})=>{
            return {
             backgroundColor : isActive ? "pink" : "yellow"
            }
          }} 
          to="/learn">Courses</NavLink></li>
          <li><Link to={`/learn/courses/${randomList}`}>Select course</Link></li>
        </ul>
        <Outlet/>
      </div>
    )
  }
  
  const CourseId = () => {
    const navigate = useNavigate()
    const {courseid} = useParams()
    return (
      <div>
        <h2>url is : {courseid}</h2>
        <button 
        onClick={()=>{
          navigate('/home', {state:courseid})
        }}
        className='btn btn-primary'>Home</button>
        <Link to='/home' state={'Nodejs'}>
          Home link
        </Link>
      </div>
    )
  }
  
  const Home = () => {
    const location = useLocation()
    return (
      <div>
        <h1>Info that i got here is {location.state}</h1>
      </div>
    )
  }

export default function App() {
    const routes = useRoutes([
      {
        path: "/",
        element: (
              <DashboardComponent />  
        )
      },
      {
        path: "/dashboard",
        element:(
          <RequireAuth>
            <DashboardComponent />
           </RequireAuth>
        )
      },
      {
        path: "/login",
        element: (
            <AuthComponent />
        )
      },
      {
        path: "/learn",
        element: <Learn/>,
        children:[
            {
                path:'courses',
                element:<Courses/>,
                children:[
                    {
                        path:':courseid',
                        element:<CourseId/>
                    }
                    
                ]
            }
        ]
      },
      {
        path:'/home',
        element:<Home/>
      }
    ]);
    return routes;
  }

//   <Route path='/learn' element={<Learn/>}>
//   <Route path='courses' element={<Courses/>} >
//     <Route path=':courseid' element={<CourseId/>}/>
//   </Route>
// </Route>
// <Route path='/myapp' element={<Navigate replace to="/learn"/>}/>
// <Route path='home' element={<Home/>}/>
// </Routes> *