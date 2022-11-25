//Wojciech Popławski,105685
import React from "react";

const Zestaw3 = () => {
  const P1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const P2 =
    "Pellentesque ac nisi quis nulla consequat tempor sed sit amet enim.";
  const P3 = "Quisque ornare ex arcu, ultrices commodo risus mattis eget.";
  const P4 = "Morbi id augue pharetra, pretium diam vel, sollicitudin magna.";
  const P5 = "Nulla eget metus in justo tincidunt semper";

  const colors = ["red", "orange", "green", "blue", "brown"];
  let customP = Array<JSX.Element>();

  function getRandom() {
    return Math.floor(Math.random() * colors.length);
  }

  function getTextLength(text: string) {
    return text.length.toString();
  }

  function clickStyle(elementId: string) {
    var elements = document.getElementsByTagName("p");
    for (var elementsKey = 0; elementsKey < elements.length; elementsKey++) {
      elements[elementsKey].style.border = "";
      elements[elementsKey].style.borderColor = "";
      elements[elementsKey].style.backgroundColor = "";
    }
    for (elementsKey = 0; elementsKey < elements.length; elementsKey++) {
      if (elements[elementsKey].id === elementId) {
        elements[elementsKey].style.border = "double";
        elements[elementsKey].style.borderColor = "green";
        elementsKey % 2 === 0
          ? (elements[elementsKey].style.backgroundColor = "lightgrey")
          : (elements[elementsKey].style.backgroundColor = "darkgrey");

        if (elementsKey - 1 >= 0) {
          elements[elementsKey - 1].style.border = "double";
          elements[elementsKey - 1].style.borderColor = "blue";
        }

        if (elementsKey + 1 < elements.length) {
          elements[elementsKey + 1].style.border = "double";
          elements[elementsKey + 1].style.borderColor = "orange";
        }
      }
    }
    return 1;
  }

  function hideParagraph(id: string) {
    var element = document.getElementById(id);
    var hiddentState = element!.hidden;
    element!.hidden = !hiddentState;
  }

  function newHeader(PId: string, headerText: string) {
    return <h1 onClick={() => hideParagraph(PId)}>{headerText}</h1>;
  }

  function newParagrapgh(PId: string, paragraphText: string) {
    return (
      <p
        id={PId}
        style={{
          color: colors[getRandom()],
        }}
        title={getTextLength(paragraphText)}
        onClick={() => clickStyle(PId)}
      >
        {paragraphText}
      </p>
    );
  }

  function addNewParagraph() {
    var count = document.getElementsByTagName("p").length + 1;
    var PId = count + "Line";
    var headerText = "paragraf " + count;
    var paragraphText = (
      document.getElementById("newParagraphInput") as HTMLInputElement
    ).value;
    customP.concat(newHeader(PId, headerText));
    customP.concat(newParagrapgh(PId, paragraphText));
  }

  return (
    <div>
      <div id="view">
        <h1 onClick={() => hideParagraph("1Line")}>paragraf 1</h1>
        <p
          id={"1Line"}
          style={{
            color: colors[getRandom()],
          }}
          title={getTextLength(P1)}
          onClick={() => clickStyle("1Line")}
        >
          {P1}
        </p>
        <h1 onClick={() => hideParagraph("2Line")}>paragraf 2</h1>
        <p
          id={"2Line"}
          style={{ color: colors[getRandom()] }}
          title={getTextLength(P2)}
          onClick={() => clickStyle("2Line")}
        >
          {P2}
        </p>
        <h1 onClick={() => hideParagraph("3Line")}>paragraf 3</h1>
        <p
          id={"3Line"}
          style={{ color: colors[getRandom()] }}
          title={getTextLength(P3)}
          onClick={() => clickStyle("3Line")}
        >
          {P3}
        </p>
        <h1 onClick={() => hideParagraph("4Line")}>paragraf 4</h1>
        <p
          id={"4Line"}
          style={{ color: colors[getRandom()] }}
          title={getTextLength(P4)}
          onClick={() => clickStyle("4Line")}
        >
          {P4}
        </p>
        <h1 onClick={() => hideParagraph("5Line")}>paragraf 5</h1>
        <p
          id={"5Line"}
          style={{ color: colors[getRandom()] }}
          title={getTextLength(P5)}
          onClick={() => clickStyle("5Line")}
        >
          {P5}
        </p>
        {customP}
      </div>
      <div>
        <form id="newParagraph">
          <input type="text" id="newParagraphInput" />
          <input
            type="submit"
            value="Add paragraph"
            onClick={() => addNewParagraph()}
          />
        </form>
      </div>
    </div>
  );
};
export default Zestaw3;
