// // function User(firstName,lastName, avatar){
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this. avatar = avatar;

// //     this.getName = function(){
// //         return `${this.firstName} ${this.lastName}`;
// //     }
// // }

// // User.prototype.className ='F8'
// // User.prototype.getClassName = function(){
// //     return this.className;
// // }

// // var author = new User('Tran', 'Thinh', 'img1');
// // var user = new User('Tran', 'Nghia', 'img2');

// // author.title = 'Share f8';
// // user.title = 'Comment';

// // console.log(author.className);
// // console.log(user.getClassName());

// var element = document.createElement('h2');
// element.textContent = 'Hello world';
// document.body.appendChild(element);

// var langguage = [
//     'javascript',
//     'php',
//     'python',
//     'ruby',
// ];

var langguage ='javascript';

for(var key in langguage){
    console.log(langguage[key]);
}