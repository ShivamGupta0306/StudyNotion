import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/common/Navbar";
import ForgotPassword from "./pages/ForgotPassword";
import OpenRoute from "./components/core/Auth/OpenRoute";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact_us from "./pages/Contact_us";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error";
import Settings from "./components/core/Dashboard/Settings/index";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useSelector } from "react-redux";
import AddCourse from "./components/core/Dashboard/AddCourse";

function App() {

  const {user} = useSelector((state) => state.profile)

  return (
    <div className="min-h-screen w-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
          path="/about"
          element={
              <About />
          }
        />
        <Route
          path="/contact"
          element={
              <Contact_us />
          }
        />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            path="/dashboard/my-profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
           <Route path="dashboard/Settings" element={<Settings />} />
           
           {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>} />
                <Route path="dashboard/cart" element={<Cart/>} />
              </>
            )
           }

            {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/add-course" element={<AddCourse />} />
                {/* <Route path="dashboard/cart" element={<Cart/>} /> */}
              </>
            )
           }
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
