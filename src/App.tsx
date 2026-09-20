import { useState } from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { DepartmentSection } from "./components/department-section/DepartmentSection";
import { AddEmployeeForm } from "./components/add-employee-form/AddEmployeeForm";
import departmentsData from "./data/departments.json";
import type { Department } from "./interfaces/Department";
import type { Employee } from "./interfaces/Employee";

function App() {
  const [departments, setDepartments] =
    useState<Department[]>(departmentsData);

  function addEmployee(
    employee: Employee,
    departmentName: string
  ) {
    const updatedDepartments = departments.map((department) => {
      if (department.name === departmentName) {
        return {
          name: department.name,
          employees: [...department.employees, employee],
        };
      }

      return department;
    });

    setDepartments(updatedDepartments);
  }

  return (
    <>
      <Header />

      <main className="employee-directory">
        {departments.map((department) => (
          <DepartmentSection
            key={department.name}
            department={department}
          />
        ))}

        <AddEmployeeForm
          departments={departments}
          addEmployee={addEmployee}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;