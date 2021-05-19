import avi from "../../assets/icons/defaultAvi.png";
import Script from "../utils/script";
function Account() {
  function logout() {
    Script.Logout();
  }
  return (
    <>
      <label class=" account-wrapper rounded p-0 position-relative d-flex">
        <img width="35px" height="35px" src={avi} /><p>Name</p>
      </label>

      <button onClick={() => logout()} className="btn text-light">
        Logout
      </button>
    </>
  );
}

export default Account;
