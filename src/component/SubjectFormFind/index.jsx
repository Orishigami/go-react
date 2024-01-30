import React, { useEffect, useState } from "react";
import Subject from "../Subject";

function SubjectFormFind() {
  const [inputId, setInputId] = useState("");
  const [subjectId, setStudentId] = useState(null);

  useEffect(() => {
    console.log("Updated itemId=" + subjectId);
  }, [subjectId]); // This effect will run whenever subjectId changes

  const handleSubmit = (event) => {
    event.preventDefault();
    // print inputId to console
    console.log("inputId=" + inputId);
    setStudentId(Number(inputId)); // Convert inputId to a number
    console.log("subjectId=" + subjectId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Subject ID:
          <input
            type="number"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* Render the Item component if subjectId is not null */}
      {subjectId !== null && <Subject id={subjectId} />}
    </div>
  );
}

export default SubjectFormFind;
