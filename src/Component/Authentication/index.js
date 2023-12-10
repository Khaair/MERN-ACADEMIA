import SignUp from "./SignUp";
import Login from "./Login";
function Auth() {
  return (
    <>
      <div className="login-area">
          <div className="container pt-[100px] pb-[200px] bg-[#F8F8F8]">
            <div className="row">
              <div className="col-lg-6 pt-[76px]">
                <Login />
              </div>
              <div class="col-lg-6">
                <SignUp />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Auth;
