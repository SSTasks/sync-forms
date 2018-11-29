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


   Promise.all([
      writeFile(imgSaveLinkClient),
      writeFile(imgSaveLinkServer),
   ])
   .then(() => {
      res.send(true);
   })
   .catch(() => {
      res.status(500).send(false);
   })

   function writeFile (imgSaveLink) {
      return new Promise((resolve, reject) => {
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

