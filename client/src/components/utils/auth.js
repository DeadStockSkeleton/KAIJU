// eslint-disable-next-line import/no-anonymous-default-export
export default {
   
    isLoggedIn: async function(){
       await fetch('/auth', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json()).then((auth) => {
         console.log(auth) 
         if (auth === true){
              return true
          }else{
              return false
          };
  
        }).catch(err => {
          return err;
        })
    }
  };
  