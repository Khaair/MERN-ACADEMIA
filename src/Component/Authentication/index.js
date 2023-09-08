import SignUp from "./SignUp";
import Login from "./Login";
function Auth() {
  return (
    <>
      <div className="login-area mt-5">
        <div className="container">
          <div className="login-card">
            <div className="row">
              <div className="col-lg-6">
                <Login />
              </div>
              <div class="col-lg-6">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
