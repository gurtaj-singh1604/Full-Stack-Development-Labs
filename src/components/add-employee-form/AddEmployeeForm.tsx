import { useState } from "react";
import type { Department } from "../../interfaces/Department";
import type { Employee } from "../../interfaces/Employee";
import "./AddEmployeeForm.css";

export function AddEmployeeForm(
  {
    departments,
    addEmployee,
  }: {
    departments: Department[];
    addEmployee: (
      employee: Employee,
      departmentName: string
    ) => void;
  }
) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [departmentError, setDepartmentError] = useState("");

  function handleSubmit() {
    setFirstNameError("");
    setDepartmentError("");

    let isValid = true;

    if (firstName.length < 3) {
      setFirstNameError(
        "First Name must contain at least three characters."
      );
      isValid = false;
    }

    if (departmentName === "") {
      setDepartmentError("Please select a department.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const newEmployee: Employee = {
      firstName: firstName,
      lastName: lastName,
    };

    addEmployee(newEmployee, departmentName);

    setFirstName("");
    setLastName("");
    setDepartmentName("");
  }

  return (
    <section className="add-employee-form">
      <h2>Add Employee</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label htmlFor="first-name">First Name</label>

          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(event) =>
              setFirstName(event.target.value)
            }
          />

          {firstNameError !== "" && (
            <p className="validation-message">
              {firstNameError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="last-name">Last Name</label>

          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(event) =>
              setLastName(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="department">Department</label>

          <select
            id="department"
            value={departmentName}
            onChange={(event) =>
              setDepartmentName(event.target.value)
            }
          >
            <option value="">Select a department</option>

            {departments.map((department) => (
              <option
                key={department.name}
                value={department.name}
              >
                {department.name}
              </option>
            ))}
          </select>

          {departmentError !== "" && (
            <p className="validation-message">
              {departmentError}
            </p>
          )}
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
}