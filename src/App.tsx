import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { DepartmentSection } from "./components/department-section/DepartmentSection";
import departmentsData from "./data/departments.json";
import type { Department } from "./interfaces/Department";

function App() {
  const departments: Department[] = departmentsData;

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
      </main>

      <Footer />
    </>
  );
}

export default App;