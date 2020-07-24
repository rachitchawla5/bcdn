var apiKeyBCDN = '----------Your API Key Here----------------';
var url = 'https://bunnycdn.com/api/pullzone/----your Pull Zone ID here-----/purgeCache';
document.addEventListener( 'DOMContentLoaded', function() {
document.getElementById( 'wp-admin-bar-purgeCDN' ).onclick = () =>{
 var xhr = new XMLHttpRequest();

xhr.open('POST', url);

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Accept', 'application/json');
xhr.setRequestHeader('AccessKey', apiKeyBCDN);
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
alert("CDN Cache Cleared!!");
  }
};

xhr.send();
}
});