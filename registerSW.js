if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/tacticboard/service-worker.js', { scope: '/tacticboard/' })})}