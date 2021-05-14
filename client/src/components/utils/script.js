// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signUp: function (email, username, password) {
    if (email && username && password) {
      fetch("/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        if (res.status === 200) {
          window.location.href = "/";
        }
      });
    }
  },

  getDashboard: function(){
      fetch('/', {
          method: 'GET'
      }).then((res) => {return res});
  }
};
