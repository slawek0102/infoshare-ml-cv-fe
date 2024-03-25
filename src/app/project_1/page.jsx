// import styles from "../page.module.css";
import { Collapse } from "antd";

export default function Project1() {
  const items = [
    {
      key: "1",
      label: "Project Overview",
      children: <p>text</p>,
    },
    {
      key: "2",
      label: "Application Architecture",
      children: <p>text</p>,
    },
  ];

  return (
    <main>
      <div style={{ maxWidth: "65rem" }}>
        <h3 style={{ marginBottom: 16 }}>Project1</h3>
        <Collapse items={items} />
        <h3 style={{ marginTop: 28 }}>Running Application</h3>
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
