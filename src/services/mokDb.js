const array = [{ eamil: "effi9@gmail.com", password: "123456" ,name:"effi"}];
let indxeUser=null;
function add(user) {

}

function getUser(){
       return array[indxeUser];
}

function login(eamil, password) {
       let login = false;
       array.forEach((user) => {
              if (user.eamil === eamil && user.password === password) {
                     indxeUser=array.indexOf(user);
                     login = true;
                     return login;
              }
       })

       if (login) {
              alert("hlloe " + eamil);
              
       }else{
              alert("flide to cont");
              
       }


}


const mockDb = {
       add,
       login,
       getUser
}

export default mockDb;