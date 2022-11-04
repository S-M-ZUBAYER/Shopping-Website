/*
Auth setup..............
1.create firebase project
2.enable web 
3.enable sign in method
4.install firebase
5.get firebase config in your firebase.config.js file(it dangerous)
export app from firebase.config.js file
*/

/*
1.create userContext(Auth context)---> 
userContext is just a component context which provide AuthContext
2.create AuthContext
3.set AuthContext.Provider
4.Make sure you set the children
5.export AuthContext to be use in useContext hook
6.get from data
7.getAuth in the userContext
8.
*/


/*
Firebase Hosting.....
one time for each computer...
1.npm install -g firebase-tools
2. firebase login

//for each project on time
1.firebase init

make sure: for public directory : you select: build(type)
single page application : y
github deploy : y/n (as your wish)



for every deploy
npm run build
firebase deploy




*/