/*!
 * AnchorJS - v0.1.0 - 2014-08-17
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2014 Bryan Braun; Licensed MIT
 */

function showzhihuTable()
		{
			document.getElementById("tbltugua").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="none";
			document.getElementById("tblzhihu").style.display="";
		}
		function showPreviewTable()
		{
			document.getElementById("tbltugua").style.display="none";
			document.getElementById("tblzhihu").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="none";
			document.getElementById("tblPreview").style.display="";
		}
		function showCandTable()
		{
			document.getElementById("tbltugua").style.display="none";
			document.getElementById("tblzhihu").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblRot").style.display="none";
			document.getElementById("tblCand").style.display="";
		}
		function showRotTable()
		{
			document.getElementById("tbltugua").style.display="none";
			document.getElementById("tblzhihu").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="";
		}
		function showtuguaTable()
		{
			document.getElementById("tblzhihu").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="none";
			document.getElementById("tbltugua").style.display="";
		}
		function removeAllTable()
		{
			document.getElementById("tbltugua").style.display="none";
			document.getElementById("tblzhihu").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="none";
		}
