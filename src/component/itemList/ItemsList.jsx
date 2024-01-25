import React, { useEffect, useState } from "react";

// กำหนดฟังก์ชั่นคอมโพเนนต์ ItemsList
function ItemsList() {
  // กำหนดสถานะเริ่มต้นสำหรับ items, isLoading, และ error โดยใช้ useState
  const [items, setItems] = useState([]); // State to store the items
  const [isLoading, setIsLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle any errors

  // ฟังก์ชั่นสำหรับดึงข้อมูล items จากเซิร์ฟเวอร์
  const fetchItems = async () => {
    try {
      // ทำการเรียก API ด้วย fetch ที่มี URL เป็น "http://localhost:5000/items"
      const response = await fetch("http://localhost:5000/items");

      // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
      if (!response.ok) {
        throw new Error(`HTTP error! status :${response.status}`);
      }

      // แปลงข้อมูลที่ได้เป็น JSON และกำหนดให้เป็นสถานะของ items
      const data = await response.json();
      setItems(data); // Update the state with the fetched items data into the items array
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดขึ้น และกำหนดให้เป็นสถานะของ error
      setError(error.message);
    } finally {
      // ตั้งค่าสถานะ isLoading เป็น false เมื่อกระบวนการดึงข้อมูลเสร็จสิ้น
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ส่วนของ JSX ที่ใช้ในการแสดงผล
  return (
    <>
      <h1>Items List</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map((item) => (
          <li key={item.ID}>
            Name = {item.Name} Price = {item.Price}
          </li>
        ))}
      </ul>
    </>
  );
}

// ส่งออก ItemsList เป็นค่าเริ่มต้นของโมดูล
export default ItemsList;
