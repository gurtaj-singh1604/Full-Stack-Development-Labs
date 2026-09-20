import rolesData from "../../../data/roles.json";
import type { Role } from "../../../interfaces/Role";
import "./OrganizationPage.css";

export function OrganizationPage() {
  const roles: Role[] = rolesData;

  return (
    <main className="organization-page">
      <section className="organization-section">
        <h2>Organization</h2>

        <ul>
          {roles.map((role) => (
            <li key={`${role.firstName}-${role.lastName}-${role.role}`}>
              <span>
                {role.firstName} {role.lastName}
              </span>

              <span>{role.role}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}