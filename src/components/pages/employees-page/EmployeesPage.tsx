import { DepartmentSection } from "../../department-section/DepartmentSection";
import { AddEmployeeForm } from "../../add-employee-form/AddEmployeeForm";
import type { Department } from "../../../interfaces/Department";
import type { Employee } from "../../../interfaces/Employee";

export function EmployeesPage(
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
  return (
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
  );
}