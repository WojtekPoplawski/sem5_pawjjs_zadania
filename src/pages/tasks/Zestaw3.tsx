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

  function getRandom() {
    return Math.floor(Math.random() * colors.length);
  }

  function getTextLength(text: string) {
    return text.length.toString();
  }

  function defaultStyle(e: EventTarget | null) {
    console.log("defaultStyle");
    if (e !== new HTMLParagraphElement()) {
      var elements = document.getElementsByTagName("p");
      for (var elementsKey = 0; elementsKey < elements.length; elementsKey++) {
        elements[elementsKey].style.border = "";
        elements[elementsKey].style.borderColor = "";
        elements[elementsKey].style.backgroundColor = "";
      }
    }
  }

  function clickStyle(elementId: string) {
    console.log("clickStyle" + elementId);
    var elements = document.getElementsByTagName("p");
    for (var elementsKey = 0; elementsKey < elements.length; elementsKey++) {
      if (elements[elementsKey].id === elementId) {
        if (elementsKey - 1 >= 0) {
          elements[elementsKey - 1].style.border = "double";
          elements[elementsKey - 1].style.borderColor = "blue";
        }
        if (elementsKey + 1 < elements.length) {
          elements[elementsKey + 1].style.border = "double";
          elements[elementsKey + 1].style.borderColor = "orange";
        }
        elements[elementsKey].style.border = "double";
        elements[elementsKey].style.borderColor = "green";
        elementsKey % 2 === 0
          ? (elements[elementsKey].style.backgroundColor = "lightgrey")
          : (elements[elementsKey].style.backgroundColor = "darkgrey");
      }
    }
    return 1;
  }

  return (
    <div>
      <header>paragraf 1</header>
      <p
        id={"p1"}
        style={{
          color: colors[getRandom()],
        }}
        title={getTextLength(P1)}
        onClick={() => clickStyle("1Line")}
      >
        {P1}
      </p>
      <header>paragraf 2</header>
      <p
        id={"2Line"}
        style={{ color: colors[getRandom()] }}
        title={getTextLength(P2)}
        onClick={() => clickStyle("2Line")}
      >
        {P2}
      </p>
      <header>paragraf 3</header>
      <p
        id={"3Line"}
        style={{ color: colors[getRandom()] }}
        title={getTextLength(P3)}
        onClick={() => clickStyle("3Line")}
      >
        {P3}
      </p>
      <header>paragraf 4</header>
      <p
        id={"4Line"}
        style={{ color: colors[getRandom()] }}
        title={getTextLength(P4)}
        onClick={() => clickStyle("4Line")}
      >
        {P4}
      </p>
      <header>paragraf 5</header>
      <p
        id={"5Line"}
        style={{ color: colors[getRandom()] }}
        title={getTextLength(P5)}
        onClick={() => clickStyle("5Line")}
      >
        {P5}
      </p>
      <script>
        <>
          {
            (document.onclick = function (e) {
              defaultStyle(e.target);
            })
          }
        </>
      </script>
    </div>
  );
};
export default Zestaw3;
