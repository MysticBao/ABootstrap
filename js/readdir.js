/*!
 * AnchorJS - v0.1.0 - 2014-08-17
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2014 Bryan Braun; Licensed MIT
 */

(function () {
  'use strict';


function ShowFolderFileList(folderspec){

      var s = "";
      var f = fso.GetFolder(folderspec);

    	// recurse subfolders
    	var subfolders = new Enumerator(f.SubFolders);
    	for(; !subfolders.atEnd(); subfolders.moveNext()){s+=ShowFolderFileList((subfolders.item()).path);}  

    	// display all file path names.
    	var fc = new Enumerator(f.files);
      for (; !fc.atEnd(); fc.moveNext()){s += fc.item() + "<br>";}

      return s; 
}

function listFiles(){
    	document.getElementById('files').innerHTML = ShowFolderFileList('C:\inetpub\wwwroot\js');
}


})();