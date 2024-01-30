import React, { useEffect, useState } from "react";

function StudentList() {
  const [students, setstudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      // ทำการเรียก API ด้วย fetch ที่มี URL เป็น "http://localhost:5000/items"
      const response = await fetch("http://localhost:5000/students");

      // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
      if (!response.ok) {
        throw new Error(`HTTP error! status :${response.status}`);
      }

      // แปลงข้อมูลที่ได้เป็น JSON และกำหนดให้เป็นสถานะของ items
      const data = await response.json();
      setstudents(data); // Update the state with the fetched items data into the items array
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดขึ้น และกำหนดให้เป็นสถานะของ error
      setError(error.message);
    } finally {
      // ตั้งค่าสถานะ isLoading เป็น false เมื่อกระบวนการดึงข้อมูลเสร็จสิ้น
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <div>Student List</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student.ID}>
            Name = {student.Name} Age = {student.Age}
          </li>
        ))}
      </ul>
    </>
  );
}

export default StudentList;
