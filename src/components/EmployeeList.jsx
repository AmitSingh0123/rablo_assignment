import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, onDelete, onEdit, onSelect }) => {
  return (
    <div className='employee-list-container'>
      {employees.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
          onEdit={onEdit}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
