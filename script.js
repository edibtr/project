// JavaScript Document
function doCheck(status) {
	var arr=document.forms[0].elements;
	for (i=0;i<arr.length;i++) {
		if (arr[i].name=='chk[]') {
			arr[i].checked=status;
		}
	}
}