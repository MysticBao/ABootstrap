/*!
 * AnchorJS - v0.1.0 - 2014-08-17
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2014 Bryan Braun; Licensed MIT
 */

function showPatchTable()
		{
			document.getElementById("tblPdu").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="none";
			document.getElementById("tblPatch").style.display="";
		}
		function showPreviewTable()
		{
			document.getElementById("tblPdu").style.display="none";
			document.getElementById("tblPatch").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="none";
			document.getElementById("tblPreview").style.display="";
		}
		function showCandTable()
		{
			document.getElementById("tblPdu").style.display="none";
			document.getElementById("tblPatch").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblRot").style.display="none";
			document.getElementById("tblCand").style.display="";
		}
		function showRotTable()
		{
			document.getElementById("tblPdu").style.display="none";
			document.getElementById("tblPatch").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="";
		}
		function showPduTable()
		{
			document.getElementById("tblPatch").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="none";
			document.getElementById("tblPdu").style.display="";
		}
		function removeAllTable()
		{
			document.getElementById("tblPdu").style.display="none";
			document.getElementById("tblPatch").style.display="none";
			document.getElementById("tblPreview").style.display="none";
			document.getElementById("tblCand").style.display="none";
			document.getElementById("tblRot").style.display="none";
		}
