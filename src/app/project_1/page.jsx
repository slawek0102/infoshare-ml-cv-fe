import { Collapse } from "antd";
import { P1Form } from "../../components/P1Form";
import ProjectOverview from "./ProjectOverview";

export default function Project1() {
  const items = [
    {
      key: "1",
      label: "Project Overview",
      children: <ProjectOverview />,
    },
    {
      key: "2",
      label: "Application Architecture",
      children: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="./schemat.svg"
            alt="Project1"
            style={{ width: "50%", textAlign: "center" }}
          />
        </div>
      ),
    },
  ];

  return (
    <main>
      <div style={{ maxWidth: "65rem" }}>
        <Collapse items={items} />
        <h3 style={{ marginTop: 32, marginBottom: 20 }}>Health Check</h3>
        <P1Form />
        <h3 style={{ marginTop: 28 }}>Jupiter Listing</h3>
        <iframe
          src="p1.html"
          width="100%"
          height="1200px"
          style={{ border: "none" }}
        />
      </div>
    </main>
  );
}
