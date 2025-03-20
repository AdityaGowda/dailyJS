import { useEffect } from "react";
import { Component, useState } from "react";
import Tab2 from "./tab2";
import Tab1 from "./tab1";
import Tab3 from "./tab3";

export default function TabForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    hobbies: [],
    gender: "",
  });
  const [tab, setTab] = useState(0);
  const [tabDetails, setTabDetails] = useState("");

  const Tabs = [
    {
      tab: "Tab 1",
      component: <Tab1 setFormData={setFormData} />,
    },
    {
      tab: "Tab 2",
      component: <Tab2 setFormData={setFormData} />,
    },
    {
      tab: "Tab 3",
      component: <Tab3 setFormData={setFormData} formData={formData} />,
    },
  ];

  function handleTab(index) {
    setTab(index);
  }
  console.log(Object.values(formData));

  useEffect(() => {
    setTabDetails(Tabs[tab].component);
  }, [tab]);
  return (
    <div className="center-div align-start flex-col">
      <div className="flex tabName gap10 mb-20 ">
        {Tabs.map((v, i) => {
          return (
            <span
              className="button-2"
              onClick={() => {
                handleTab(i);
              }}
            >
              {v.tab}
            </span>
          );
        })}
      </div>
      {tabDetails}
    </div>
  );
}
