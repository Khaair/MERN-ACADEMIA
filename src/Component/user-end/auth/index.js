import Login from "./login";
import Layout from "../Layout";
function UserAuth() {
  return (
    <>
      <Layout>
        <div className="login-area bg-[white] pt-[100px]  pb-[100px]">
          <div className="bootstrap-container flex justify-center">
            <div className="shadow-lg p-4 w-1/2  bg-[#F0FBFC] rounded">
              <div className="row">
                <div className="col-lg-12">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default UserAuth;

//login
