import React from "react";

const EmployeeDetail = ({ employee, onDelete, onEdit }) => {
  return (
    <div className="employee-detail">
      <div>
        <h2>
          <span>Employee Name : </span>
          {employee.employee_name}
        </h2>
        <p>
          <span>Employee ID : </span>
          {employee.id}
        </p>
        <p>
          <span>Employee Age : </span> {employee.employee_age}
        </p>
        <p>
          <span>Employee Salary : </span>
          {employee.employee_salary}
        </p>
        <div className="btn-container">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(employee.id);
            }}
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
        <img src="https://placehold.co/100" alt="im" />
      </div>
    </div>
  );
};

export default EmployeeDetail;
