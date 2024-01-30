import React, { useEffect, useState } from "react";
import Student from "../Student";

function StudentFormFind() {
  const [inputId, setInputId] = useState("");
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    console.log("Updated itemId=" + studentId);
  }, [studentId]); // This effect will run whenever studentId changes

  const handleSubmit = (event) => {
    event.preventDefault();
    // print inputId to console
    console.log("inputId=" + inputId);
    setStudentId(Number(inputId)); // Convert inputId to a number
    console.log("studentId=" + studentId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Student ID:
          <input
            type="number"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* Render the Item component if studentId is not null */}
      {studentId !== null && <Student id={studentId} />}
    </div>
  );
}

export default StudentFormFind;
