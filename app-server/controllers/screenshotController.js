const fs = require('fs');

const imgClientLink = 'app-client/src/assets/img/';
const imgServerLink = 'app-server/dist/assets/img/';
let response = true;


module.exports.saveScreenshot = function (req, res) { 

   let fileName = req.body.fileName;
   let imgFile = req.body.imgFile;
   let base64Data = imgFile.replace(/^data:image\/png;base64,/, "");
   
   let imgSaveLinkClient = createFilePath(imgClientLink, fileName);
   let imgSaveLinkServer = createFilePath(imgServerLink, fileName);

   writeFile(imgSaveLinkClient)
      .then(() => {
         return writeFile(imgSaveLinkServer);
      })
      .then(() => {
         res.send(true);
      })
      .catch(() => {
         res.send(false);
         return res.send(500);
      })

   function writeFile (imgSaveLink) {
       return new Promise(function(resolve, reject) {
        fs.writeFile(imgSaveLink, base64Data, 'base64', (err) => {
            if (err) {
               let err = new Error('Server Error');
               err.statusCode = 400;
               reject(err);
            } else {
               resolve(true);
            }
         });
       })
   }
}

module.exports.removeScreenshot = function (req, res) { 
   let resultFileDeleting = [];
   let fileName = req.params.prev;
   let imgDelLinkClient = createFilePath(imgClientLink, fileName);
   let imgDelLinkServer = createFilePath(imgServerLink, fileName);

   deleteFile(imgDelLinkClient);
   deleteFile(imgDelLinkServer);
   getResultToResponse(resultFileDeleting);
   
   res.send(response);
   
   function deleteFile (imgDelLink) {
      fs.unlink(imgDelLink, (err) => {
         if (err) {
            resultFileDeleting.push(false);
            let err = new Error('Server Error');
            err.statusCode = 400;
         } else {
            resultFileDeleting.push(response);
         }
      });
   }
}
   
function createFilePath (link, fileName) {
   let filePath = link + fileName;
   return filePath
}

function getResultToResponse (resultFileWriting) {
   for (let file of resultFileWriting) {
      if (!file) {
         response = false;
      }
   }
}



















// const fs = require('fs');

// const imgClientLink = 'app-client/src/assets/img/';
// const imgServerLink = 'app-server/dist/assets/img/';

// module.exports.saveScreenshot = function (req, res) { 
//    let result = [];
//    let response = true;
//    let imgFile = req.body.imgFile;
//    let base64Data = imgFile.replace(/^data:image\/png;base64,/, "");
//    let imgName = req.body.fileName;
//    console.log(imgName);

//    const imgSaveLinkClient = imgClientLink + imgName;
//    const imgSaveLinkServer = imgServerLink + imgName;

//    fs.writeFile(imgSaveLinkClient, base64Data, 'base64', (err, res) => {
//       if(err) {
//          result.push(false);
//          let err = new Error('Server Error');
//          err.statusCode = 400;
//          throw err;
//       } else {
//          result.push(true);
//       }
//    });

//    fs.writeFile(imgSaveLinkServer, base64Data, 'base64', (err, res) => {
//       if(err) {
//          result.push(false);
//          let err = new Error('Server Error');
//          err.statusCode = 400;
//          throw err;
//       } else {
//          result.push(true);
//       }
//    });

//    for (let writeFile of result) {
//       if (!writeFile) {
//          response = false;
//       }
//    }

//    res.send(response);
// }

// module.exports.removeScreenshot = function (req, res) { 
//     const imgDelLinkClient =  imgClientLink + req.params.prev;
//     const imgDelLinkServer =  imgServerLink + req.params.prev;
//     console.log(imgDelLinkClient);

//     fs.unlink(imgDelLinkClient, (err) => {
//        if (err) throw err;
//        console.log('successfully deleted');
//     });

//     fs.unlink(imgDelLinkServer, (err) => {
//       if (err) throw err;
//       console.log('successfully deleted');
//    });

//     res.sendStatus(200);
// }