console.log('test');
const electron =require("electron");
const app =electron.app;
const browserWindow=electron.browserWindow;
const path=require("path");
const url=require("url");
let win;
function createWindow(){
    win = new browserWindow();
    win.loadURL(url.format({pathname:path.join(__dirname,'index.html'),
    protocol:'file',
    slashes:true



}));
win.on('closed',()=>{win=null;})
}
app.on('ready',createWindow);





