// document.addEventListener('DOMContentLoaded', function() {
//     updateStats();
    
//     document.getElementById('resetStats').addEventListener('click', function() {
//       chrome.storage.local.set({ totalTime: 0 }, function() {
//         updateStats();
//       });
//     });
//   });
function updateStats() {
    chrome.storage.local.get(['totalTime'], function(result) {
        const totalMinutes = Math.round((result.totalTime || 0) / 60000); // Convert ms to minutes
        document.getElementById('timeTotal').textContent = `${totalMinutes} min`;
        
        // You could add more sophisticated time tracking here, like daily/weekly stats
    });
}