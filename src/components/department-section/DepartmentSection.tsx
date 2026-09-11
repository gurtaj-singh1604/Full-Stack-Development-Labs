import type { Department } from "../../interfaces/Department";
import "./DepartmentSection.css";

export function DepartmentSection(
  { department }: { department: Department }
) {
  return (
    <section className="department-section">
      <h2>{department.name}</h2>

      <ul>
        {department.employees.map((employee) => (
          <li key={`${employee.firstName}-${employee.lastName}`}>
            {employee.firstName} {employee.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
}