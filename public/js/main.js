if ('serviceWorker' in navigator) {
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('sw.js').then(function(reg) {
   console.log(':^)', reg);
   main_update();
 }).catch(function(err) {
   console.log(':^(', err);
 });
}

function main_update(){
  var body = document.getElementsByTagName('body')[0];
//  body.style.backgroundImage = 'url(/images/online_image.png)';
  body.className="online";
  console.log('main_update', body.style.backgroundImage);

}
