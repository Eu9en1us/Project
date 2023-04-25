function askPermission() {
    return new Promise(function(resolve, reject) {
      const permissionResult = Notification.requestPermission(function(result) {
      resolve(result);
      });
  
      if (permissionResult) {
      permissionResult.then(resolve, reject);
      }
    })
    .then(function(permissionResult) {
      if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.');
      }
    });
  }
    if ('serviceWorker' in navigator){
      navigator.serviceWorker 
      .register('/sw.js')
      .then(function() {
        console.log('Service worker registered!');
      });
  
      navigator.serviceWorker.ready.then(registration => {
        if ('PushManager' in window) { 
          document.querySelector('button.subscribe-for-push')
            .addEventListener('click', () => { 
              askPermission()
            });
        }
      });
    }