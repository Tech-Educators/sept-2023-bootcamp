# Setting up a mono repo

This guide is for creating a mono repo with a client (react) and server (express)

In your terminal:

1. `mkdir yourproject` make your project folder
2. `cd yourproject` change directory into the project folder
3. `npm create vite@latest` to create the react App. Call it `client`
4. `mkdir server` create the server folder
5. `cd server` change directory into the server folder
6. `touch server.js` create a server.js file (will effect what the next step does)
7. `npm init -y` will create a package.json
8. `npm i express cors dotenv` you can also add `axios mongoose nodemon` if you need them
9. `cd ..` to go back into the main project folder
10. `git init` to make this a repository
11. `git remote add origin yourrepolink` to link the projects
12. `code .` and you will now have the entire project open in one VSCode window
