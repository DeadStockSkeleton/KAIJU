import img from '../../assets/icons/defaultAvi.png';
import Script from '../utils/script';
function Account() {
    function logout(){
        Script.Logout()
    }
  return (
    <>
      <button onClick={() => logout()} className="btn text-light">
      Logout
      </button>
    </>
  );
}

export default Account;

