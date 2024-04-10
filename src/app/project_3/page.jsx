import { Collapse } from "antd";
import { P1Form } from "../../components/P1Form";
import ProjectOverview from "./ProjectOverview";

export default function Project3() {
  const items = [
    {
      key: "1",
      label: "Project Overview",
      children: <ProjectOverview />,
    },
  ];

  return (
    <main>
      <div style={{ maxWidth: "65rem" }}>
        <Collapse items={items} />
        <h3 style={{ marginTop: 28 }}>Jupiter Listing</h3>
        <iframe
          src="p3.html"
          width="100%"
          height="9500px"
          style={{ border: "none" }}
        />
      </div>
    </main>
  );
}
