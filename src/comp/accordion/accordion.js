import { useState } from "react";

export default function Accordion() {
  return (
    <div className=" flex flex-col justify-center align-center  mt-30">
      <h1>Accordion</h1>
      <AccordionContainer
        title="Accordion Title"
        desc="  Lorem ipsum odor amet, consectetuer adipiscing elit. Sed purus nibh
        sagittis quisque ridiculus posuere tortor. Himenaeos condimentum finibus
        eu; nulla habitant pellentesque. Per netus hendrerit cras quisque amet
        sollicitudin nam. Egestas dignissim nullam porta, dis commodo integer
        non. Lacus finibus nullam vehicula torquent nostra lacinia. Taciti cras
        maximus tempus justo sollicitudin cubilia turpis luctus massa. Neque
        dignissim dui parturient duis torquent sociosqu cras. Iaculis imperdiet
        vitae proin ex vehicula."
      />
      <AccordionContainer
        title="Accordion Title"
        desc="  Lorem ipsum odor amet, consectetuer adipiscing elit. Sed purus nibh
        sagittis quisque ridiculus posuere tortor. Himenaeos condimentum finibus
        eu; nulla habitant pellentesque. Per netus hendrerit cras quisque amet
        sollicitudin nam. Egestas dignissim nullam porta, dis commodo integer
        non. Lacus finibus nullam vehicula torquent nostra lacinia. Taciti cras
        maximus tempus justo sollicitudin cubilia turpis luctus massa. Neque
        dignissim dui parturient duis torquent sociosqu cras. Iaculis imperdiet
        vitae proin ex vehicula."
      />
    </div>
  );
}

function AccordionContainer({ title, desc }) {
  const [showAccordionDesc, setShowAccordionDesc] = useState(false);
  function handleAccordionShow() {
    setShowAccordionDesc((prev) => !prev);
  }

  return (
    <>
      <AccordionTitle
        onclick={handleAccordionShow}
        title={title}
        showAccordionDesc={showAccordionDesc}
      />

      <AccordionDescription desc={desc} showAccordionDesc={showAccordionDesc} />
    </>
  );
}
function AccordionTitle({ onclick, title, showAccordionDesc }) {
  return (
    <div
      className="accordionContainer justify-spacebetween mt-10"
      onClick={onclick}
    >
      <p>{title}</p>
      <div
        className={`pointer font-xl ${
          showAccordionDesc ? "accordionPlus" : "accordionPlusShow"
        } `}
      >
        {showAccordionDesc ? "-" : "+"}
      </div>
    </div>
  );
}

function AccordionDescription({ desc, showAccordionDesc }) {
  return (
    <div
      className={` accordionDescContainer mt-10 ${
        showAccordionDesc ? "accordionDescContainerOpen" : ""
      }`}
    >
      <p className="p-10">{desc}</p>
    </div>
  );
}
