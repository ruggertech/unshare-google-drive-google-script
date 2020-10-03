/**
 * Google Apps Script to completely unshare files/folders with someone 
 */

// Enter the email of the user to remove
var userEmail = ''

function main () {
  var files = DriveApp.getFiles();
  var folders = DriveApp.getFolders();

  while (files.hasNext()) {
    var file = files.next()
    var docs = DriveApp.getFileById(file.getId());

    var editors = docs.getEditors();
    var viewers = docs.getViewers();
    var email;

    for (i in editors) {
      email = editors[i].getEmail();
      if (email == userEmail) {
        Logger.log('file: ' + docs.getName() + ' removing editor email: ' + email)
        docs.removeEditor(email);
      }
    }
    for (i in viewers) {
      email = viewers[i].getEmail();
      if (email == userEmail) {
        Logger.log('file: ' + docs.getName() + ' removing viewer email: ' + email)
        docs.removeViewer(email);
      }
    }
  }
    while (folders.hasNext()) {
    var folder = folders.next()
    var docs = DriveApp.getFolderById(folder.getId());

    var editors = docs.getEditors();
    var viewers = docs.getViewers();
    var email;

    for (i in editors) {
      email = editors[i].getEmail();
      if (email == userEmail) {
        Logger.log('folder: ' + docs.getName() + ' removing editor email: ' + email)
        //docs.removeEditor(email);
      }
    }
    for (i in viewers) {
      email = viewers[i].getEmail();
      if (email == userEmail) {
          Logger.log('folder: ' + docs.getName() + ' removing viewer email: ' + email)
          docs.removeViewer(email);
      }
    }
  }
}
