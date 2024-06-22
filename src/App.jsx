import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import SearchBar from './components/SearchBar';
import EmployeeDetail from './components/EmployeeDetail';
import EditEmployeeForm from './components/EditEmployeeForm';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => setEmployees(data.data))
      .catch(error => console.error('Error fetching employee data:', error));
  }, []);

  const handleSearch = () => {
    const employee = employees.find(emp => emp.id === parseInt(searchId));
    setSelectedEmployee(employee || null);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleSave = (updatedEmployee) => {
    setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
    setEditingEmployee(null);
    setSelectedEmployee(null);
  };

  const handleCancel = () => {
    setEditingEmployee(null);
  };

  return (
    <div>
      <div className='main-container'>
      <div className='heading-container'>
      <h1>Employee Dashboard</h1>
      </div>
      <div className='search-container'>
      <SearchBar searchId={searchId} setSearchId={setSearchId} handleSearch={handleSearch} />
      </div>
      {editingEmployee ? (
        <EditEmployeeForm employee={editingEmployee} onSave={handleSave} onCancel={handleCancel} />
      ) : selectedEmployee ? (
        <EmployeeDetail employee={selectedEmployee} onDelete={handleDelete} onEdit={handleEdit}/>
      ) : (
        <EmployeeList employees={employees} onDelete={handleDelete} onEdit={handleEdit} onSelect={setSelectedEmployee} />
      )}
    </div>
    </div>
  );
};

export default App;
