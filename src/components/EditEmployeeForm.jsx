import React, { useState } from 'react';

const EditEmployeeForm = ({ employee, onSave, onCancel }) => {
  const [name, setName] = useState(employee.employee_name);
  const [age, setAge] = useState(employee.employee_age);
  const [salary, setSalary] = useState(employee.employee_salary);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...employee,
      employee_name: name,
      employee_age: age,
      employee_salary: salary
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Employee</h2>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Salary: </label>
        <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditEmployeeForm;
