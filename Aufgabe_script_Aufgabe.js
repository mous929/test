
// Funktion zum Hinzufügen von Notizen
function addNote() {
      const noteInput = document.getElementById('noteInput');
      const notesContainer = document.getElementById('notesContainer');
      const noteText = noteInput.value;
      if (noteText) {
           const note = document.createElement('div');
           note.className = 'note';
           note.textContent = noteText;
           notesContainer.appendChild(note);
           noteInput.value = '';
     }
  // Funktion zum Sortieren der Notizen nach dem ersten Buchstaben
    function sortNotes() {
     const notesContainer = document.getElementById('notesContainer');
   const notes = Array.from(notesContainer.children);
     notes.sort((a, b) => a.textContent.localeCompare(b.textContent));
     notesContainer.innerHTML = '';
     notes.forEach(note => notesContainer.appendChild(note));
    }
      // Funktion zum Speichern der Notizen in einer Textdatei

function saveNotes() {

const notesContainer = document.getElementById('notesContainer');

const notes = Array.from(notesContainer.children);

const notesText = notes.map(note => note.textContent).join('\n')

}
       
