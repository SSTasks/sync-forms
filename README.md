# SyncForms 

## Download & Get started
1. Open `Git Bash`.
2. Change the current working directory to the location where you want the cloned directory to be made.
3. Type git clone, and then paste the URL:
```
  git clone -b develop https://gitlab.com/Dp-142WebUI/syncforms
```
4. Move to the application folder
```
 cd syncforms
```
5. Сommand to install dependencies from `package.json`
```
 npm install
```
6. Сommand to run the application
```
 npm start
```
7. Open in your browser address [localhost:3000](http://localhost:3000)

8. To stop the application, press `CTRL+C`

## Enable real-time development environment
1. Open `Git Bash`.
2. Change the current working directory to app-client
```
  git cd app-client
```
3. Сommand to install dependencies from `package.json`
```
 npm install
```
4. Сommand to run changes-watcher in app-client and keep it running
```
 ng build --watch
```
5. Open second terminal, run app-server changes watcher from root project folder
and keep it running
```
 npx nodemon
```
6. Open in your browser address [localhost:3000](http://localhost:3000)
7. To stop the application, press `CTRL+C`