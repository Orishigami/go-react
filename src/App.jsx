import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignIn from "./component/SignIn";
import ItemsList from "./component/itemList/ItemsList";
import ItemFormFind from "./component/ItemFormFind";
import Signup from "./component/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <h3>My Project</h3>
        <nav>
          <Link to="/">หน้าหลัก</Link>
          <hr />
          {!isLoggedIn && <Link to="/signin">เข้าสู่ระบบ</Link>}
          <br />
          {!isLoggedIn && <Link to="/signup">สมัครสมาชิก</Link>}
        </nav>

        {/* Add the Routes component to the App */}
        {/* <> xxx </>คือตำแหน่งที่ข้อมูลจาก Component คือค่ามา */}
        <Routes>
          <Route
            path="/signin"
            element={<SignIn onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <div className="card">
                  {isLoggedIn ? (
                    <>
                      <p>ยินดีต้อนรับ</p>
                      <p>
                        <ItemsList />
                      </p>
                      <hr />
                      <p>
                        <ItemFormFind />
                      </p>
                    </>
                  ) : (
                    <p>กรุณา Login </p>
                  )}
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
