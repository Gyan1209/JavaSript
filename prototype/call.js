// function getname(name) {
//   this.name = name;
//   console.log(this); //refer to global object
// }
// function setname() {
//   console.log(this.name); // output- Rohan //access form global object.
// }
// getname("rohan");
// setname();
// console.log(this); //refer to {} object.

function SetUsername(username) {
  this.username = username; // this is refering to window object in browser and global in node.
  //console.log(this);
  //console.log("call1");
  //return this.username;  //returning to Creatuser
}
function creatUser(name, email, password) {
  SetUsername.call(this.name); // call--> explicitly call the method and passing its own this to that function  now we can access all the property and method of another function using this pointer.
  this.email = email;
  this.password = password;
  console.log("call2");
  //return [this.username, this.email, this.password]; //returning to where the function is called
}
// console.log(creatUser.call("roha", "rohan@1gmail.com", 213));  // it will console the array of values.
// console.log(creatUser("rohan", "rohan@1gmail.com", 213));
// console.log(this.SetUsername);  // here it is undefined but in browser it console the whole Setusername function since it is in global context

const coffi = new creatUser("roha", "rohan@1gmail.com", 213);
console.log(coffi);
