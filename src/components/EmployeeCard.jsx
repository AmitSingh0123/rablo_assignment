import React from "react";

const EmployeeCard = ({ employee, onDelete, onEdit, onSelect }) => {
  return (
    <div className="employee-card" onClick={() => onSelect(employee)}>
      <div>
        <h4 className="card-title">
          <span>Employee Name : </span>
          {employee.employee_name}
        </h4>
        <p><span>Employee ID : </span>{employee.id}</p>
        <p>
          <span>Employee Age : </span> {employee.employee_age}
        </p>
        
        <p><span>Employee Salary:</span> {employee.employee_salary}</p>
        <div className="btn-container">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(employee.id);
            }}
            className="btn"
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(employee);
            }}
          >
            Edit
          </button>
        </div>
      </div>
      <div>
        <img src="https://placehold.co/100" alt="image" />
      </div>
    </div>
  );
};

export default EmployeeCard;
