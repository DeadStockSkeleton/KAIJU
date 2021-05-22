

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
          localStorage.setItem('token', "token");
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
,
  Login: function(email, pass){
    if (email&& pass){
        fetch('/login', {
            method: "POST",
            body: JSON.stringify({ email, pass }),
            headers: { "Content-Type": "application/json" },
          }).then((res) => {
            if (res.status === 200) {
              localStorage.setItem('token', "token");
              return window.location.href = "/";
            }
            localStorage.removeItem('token');
            return 0;
          });
    }
  },
  deleteProject: async function(id){
    await fetch('/delete/project/'+id, {
      method: 'GET'
    }).then((res) => {
      if (res.status === 200) {
        return res.json()
      }
    }).then(async (data)=>{
      if (data){
await fetch('/delete/project/'+id,{
  method: 'DELETE'
}).then(()=>{
  return window.location.href = "/";
})
      }
    });
  },

  Logout: function(){
      fetch ('/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
      }).then(() => {
        localStorage.removeItem('token');
          return window.location.href = "/login";
      });
  }
,
  isLoggedIn: async function(){
     await fetch('/auth', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
      }).then((response) => response.json()).then((auth) => {
       if (auth === true){
            return true
        }else{
            return false
        };

      }).catch(err => {
        return err;
      })
  }
  , createProject: async function(body, file){
    await fetch('/project', {
      method: 'POST',
      body:JSON.stringify({body, file}),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      
      return window.location.href = '/'
    })
  },

  createFile: async function(file, id){
    await fetch('/file', {
      method: 'POST',
      body: JSON.stringify({file, id}),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      
      return window.location.reload();
    })
  },
  saveFile: async function(file, type, content){
    await fetch('/saving', {
      method: 'POST',
      body: JSON.stringify({file, type, content}),
      headers: { 'Content-Type': 'application/json' }
    })
  },

  getProjects: async function(){
    await fetch('/projects', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
  }
,
  searchProjects: async function(query){
    await fetch('/search/projects', {
      method: 'POST',
      body: JSON.stringify({query}),
      headers: { 'Content-Type': 'application/json' },
    }).then((res)=>{
      return res
    })
  }
};
