// cookie = a small text file stored on your computer
//                 used to remember information about the user
//                 data wihin a cookie is saved in name=value pairs

//to check is you have cookies enabled
// console.log(navigator.cookieEnabled);

//to add a cookie. you need to use a name value pair. add semicolon within your string
// document.cookie = "firstName=Spongebob;";
 

//you can also add an expirtion date. when the current time is passed a certain expiration date. the cookie will be deleted
//you can also set a path. we used defailt path

document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/;";

document.cookie = "lastName=Star; expires=Sun, 1 January 2030 12:00:00 UTC; path=/;";

// the cookie property of our document can hold more than 1 cookie. but to access it you just write cookie
console.log(document.cookie)


//https://www.youtube.com/watch?v=i7oL_K_FmM8 - FINISH LATER