import { useState, useEffect } from "react";
import axios from "axios";
// import Pagination from "./Pagination";

export const EmployeesTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
      .then((response) => {
        setData(response.data.data);
        setFilteredData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelectChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    if (department === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(emp => emp.department === department);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", boxSizing:"border-box"}}>
        <select onChange={handleSelectChange} name="fil" id="fil">
          <option value="">Select Department</option>
          <option value="hr">HR</option>
          <option value="finance">Finance</option>
          <option value="marketing">Marketing</option>
          <option value="engineering">Engineering</option>
          <option value="operations">Operations</option>
        </select>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {filteredData.map((el, index) => (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.gender}</td>
                <td>{el.department}</td>
                <td>{el.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Add Pagination component here */}
      {/* <Pagination /> */}
    </div>
  );
};
