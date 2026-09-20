import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { EmployeesPage } from "./components/pages/employees-page/EmployeesPage";
import { OrganizationPage } from "./components/pages/organization-page/OrganizationPage";
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <EmployeesPage
              departments={departments}
              addEmployee={addEmployee}
            />
          }
        />

        <Route
          path="employees"
          element={
            <EmployeesPage
              departments={departments}
              addEmployee={addEmployee}
            />
          }
        />

        <Route
          path="organization"
          element={<OrganizationPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;