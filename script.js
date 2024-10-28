// Sample storage data for 10 trashcans (percentage values)
const trashcans = [
    { id: 1, storage: 45 },
    { id: 2, storage: 78 },
    { id: 3, storage: 32 },
    { id: 4, storage: 85 },
    { id: 5, storage: 62 },
    { id: 6, storage: 95 },
    { id: 7, storage: 55 },
    { id: 8, storage: 40 },
    { id: 9, storage: 76 },
    { id: 10, storage: 20 }
];

// Function to display trashcan storage status
function displayStorageStatus() {
    const trashcanList = document.getElementById('trashcan-list');
    
    // Loop through trashcan data and create list items
    trashcans.forEach(trashcan => {
        const listItem = document.createElement('li');
        listItem.textContent = `Trashcan ${trashcan.id}: ${trashcan.storage}% full`;

        // Add alert styling if storage >= 75%
        if (trashcan.storage >= 75) {
            listItem.classList.add('alert');
            listItem.textContent += ' - REMOVE TRASH!';
        }
        
        trashcanList.appendChild(listItem);
    });
}

// Run function on page load
document.addEventListener('DOMContentLoaded', displayStorageStatus);
