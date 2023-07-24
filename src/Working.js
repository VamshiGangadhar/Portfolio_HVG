import { collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

function Working() {
  const [todos, setTodos] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "experience ")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <div>
        <h2>Experiences</h2>
        {todos?.map((todo, i) => (
          <p key={i}>{todo.Title}</p>
        ))}
      </div>
    </div>
  );
}

export default Working;
