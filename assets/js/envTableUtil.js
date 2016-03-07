// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
/*!
 * Copyright 2014 Twitter, Inc.
 *
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
// Intended to prevent false-positive bug reports about Bootstrap not working properly in old versions of IE due to folks testing using IE's unreliable emulation modes.
(function () {
  'use strict';

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
})();
