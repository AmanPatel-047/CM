import './App.css';
import { Route, Routes} from 'react-router-dom';

import SignupCard from './Registration/Register';
import SimpleCard from './Registration/Login';
import SidebarWithHeader from './Components/Static/Sidebar';
import Dashoard from './Components/Dashboard/Dashoard';
import ProfilePage from './Components/Static/Profile';
import AllBlog from './Components/Blog/AllBlog';
import AddBlog from './Components/Blog/AddBlog';
import Comments from './Components/Comment/comments';
import AllPages from './Components/Pages/Allpages';
import AddPages from './Components/Pages/AddPages';
import AllUsers from './Components/Users/AllUsers';
import AddUser from './Components/Users/AddUsers';
import Roles from './Components/Roles/AllRoles';
import AddRole from './Components/Roles/AddRole';
import SiteConfiguration from './Components/Configuration/SiteConfiguration';
import SocialConfiguration from './Components/Configuration/SocialConfiguration';



function App() {

 

  return (
      <Routes>
        <Route path="/" element={<SignupCard/>}/>
        <Route path="/login" element= {<SimpleCard />}/>
        <Route path="/profile" element={<SidebarWithHeader><ProfilePage/></SidebarWithHeader>}/>
        <Route path="/home" element={<SidebarWithHeader><Dashoard/></SidebarWithHeader>}/>
        <Route path="/blog" element={<SidebarWithHeader><AllBlog/></SidebarWithHeader>}/>
        <Route path="/addblog" element={<SidebarWithHeader><AddBlog/></SidebarWithHeader>}/>
        <Route path="/comments" element={<SidebarWithHeader><Comments/></SidebarWithHeader>}/>
        <Route path="/pages" element={<SidebarWithHeader><AllPages/></SidebarWithHeader>}/>
        <Route path="/addpages" element={<SidebarWithHeader><AddPages/></SidebarWithHeader>}/>
        <Route path="/users" element={<SidebarWithHeader><AllUsers/></SidebarWithHeader>}/>
        <Route path="/adduser" element={<SidebarWithHeader><AddUser/></SidebarWithHeader>}/>
        <Route path="/roles" element={<SidebarWithHeader><Roles/></SidebarWithHeader>}/>
        <Route path="/addrole" element={<SidebarWithHeader><AddRole/></SidebarWithHeader>}/>
        <Route path="/configuration" element={<SidebarWithHeader><SiteConfiguration/></SidebarWithHeader>}/>
        <Route path="/socialconfig" element={<SidebarWithHeader><SocialConfiguration/></SidebarWithHeader>}/>
      
      </Routes>
    
  );
}
export default App;
