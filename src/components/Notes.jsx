import { useState, useEffect } from "react";
import { database, auth } from "../firebase";
import { ref, push, onValue } from "firebase/database";



const Notes = () => {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  const handleAddNote = () => {
    const notesRef = ref(database, "notes/" + auth.currentUser.uid);
    push(notesRef, {
      message: note,
      timestamp: Date.now(),
    });
    setNote("");
  };

  useEffect(() => {
    if (!auth.currentUser) return;
    const notesRef = ref(database, "notes/" + auth.currentUser.uid);
    onValue(notesRef, (snapshot) => {
      const data = snapshot.val() || {};
      setNotesList(Object.values(data));
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-pink-600">🛍 Notes / Orders</h2>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write something about your order..."
        className="border px-2 py-1 rounded mr-2"
      />
      <button onClick={handleAddNote} className="bg-pink-500 text-white px-4 py-1 rounded">
        Add Note
      </button>

      <ul className="mt-4 space-y-2">
        {notesList.map((n, i) => (
          <li key={i} className="p-2 bg-yellow-100 rounded">
            📝 {n.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
