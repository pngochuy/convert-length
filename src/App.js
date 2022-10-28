import { useRef, useState } from "react";
import "./style.css";
import { meterConvert, toMeter } from "./convertObject.js";
import { flushSync } from "react-dom";
function App() {
  /**
   * - Lấy đc giá trị 2 ô input
   * - Lấy đc giá trị 2 ô select
   */
  const [object1, setObject1] = useState({
    inputValue: "",
    selectValue: "km",
  });

  const [object2, setObject2] = useState({
    inputValue: "",
    selectValue: "km",
  });
  const inputRef = useRef();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  /* LÀM SWITCH CASE: 7 đơn vị */
  const handleConvert = () => {
    // (km -> hm); (hm -> dam); (dam -> m); (m -> km; m -> dm); (dm -> hm; dm -> cm); (cm -> dam; cm -> mm); (mm -> km; mm -> m)
    // convert từ value 1 -> value 2
    if (isNaN(object1.inputValue) === false) {
      if (object1.inputValue > 0) {
        switch (object1.selectValue) {
          case "km":
            switch (object2.selectValue) {
              case "km":
                setObject2({
                  ...object2,
                  inputValue: parseFloat(object1.inputValue).toFixed(3),
                });
                break;
              case "hm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10).toFixed(3),
                });
                break;
              case "dam":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 100).toFixed(3),
                });
                break;
              case "m":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 1000).toFixed(
                    3
                  ),
                });
                break;
              case "dm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10000).toFixed(
                    3
                  ),
                });
                break;
              case "cm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 100000).toFixed(
                    3
                  ),
                });
                break;
              case "mm":
                setObject2({
                  ...object2,
                  inputValue: (
                    parseFloat(object1.inputValue) * 1000000
                  ).toFixed(3),
                });
                break;
              default:
                break;
            }
            break;
          case "hm":
            switch (object2.selectValue) {
              case "km":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10).toFixed(3),
                });
                break;
              case "hm":
                setObject2({
                  ...object2,
                  inputValue: parseFloat(object1.inputValue).toFixed(3),
                });
                break;
              case "dam":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10).toFixed(3),
                });
                break;
              case "m":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 100).toFixed(3),
                });
                break;
              case "dm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 1000).toFixed(
                    3
                  ),
                });
                break;
              case "cm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10000).toFixed(
                    3
                  ),
                });
                break;
              case "mm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 100000).toFixed(
                    3
                  ),
                });
                break;
              default:
                break;
            }
            break;
          case "dam":
            switch (object2.selectValue) {
              case "km":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 100).toFixed(3),
                });
                break;
              case "hm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10).toFixed(3),
                });
                break;
              case "dam":
                setObject2({
                  ...object2,
                  inputValue: parseFloat(object1.inputValue).toFixed(3),
                });
                break;
              case "m":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10).toFixed(3),
                });
                break;
              case "dm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 100).toFixed(3),
                });
                break;
              case "cm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 1000).toFixed(
                    3
                  ),
                });
                break;
              case "mm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10000).toFixed(
                    3
                  ),
                });
                break;
              default:
                break;
            }
            break;
          case "m":
            switch (object2.selectValue) {
              case "km":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 1000).toFixed(
                    3
                  ),
                });
                break;
              case "hm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 100).toFixed(3),
                });
                break;
              case "dam":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10).toFixed(3),
                });
                break;
              case "m":
                setObject2({
                  ...object2,
                  inputValue: parseFloat(object1.inputValue).toFixed(3),
                });
                break;
              case "dm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10).toFixed(3),
                });
                break;
              case "cm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 100).toFixed(3),
                });
                break;
              case "mm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 1000).toFixed(
                    3
                  ),
                });
                break;
              default:
                break;
            }
            break;
          case "dm":
            switch (object2.selectValue) {
              case "km":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10000).toFixed(
                    3
                  ),
                });
                break;
              case "hm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 1000).toFixed(
                    3
                  ),
                });
                break;
              case "dam":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 100).toFixed(3),
                });
                break;
              case "m":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10).toFixed(3),
                });
                break;
              case "dm":
                setObject2({
                  ...object2,
                  inputValue: parseFloat(object1.inputValue).toFixed(3),
                });
                break;
              case "cm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10).toFixed(3),
                });
                break;
              case "mm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 100).toFixed(3),
                });
                break;
              default:
                break;
            }
            break;
          case "cm":
            switch (object2.selectValue) {
              case "km":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 100000).toFixed(
                    3
                  ),
                });
                break;
              case "hm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10000).toFixed(
                    3
                  ),
                });
                break;
              case "dam":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 1000).toFixed(
                    3
                  ),
                });
                break;
              case "m":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 100).toFixed(3),
                });
                break;
              case "dm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10).toFixed(3),
                });
                break;
              case "cm":
                setObject2({
                  ...object2,
                  inputValue: parseFloat(object1.inputValue).toFixed(3),
                });
                break;
              case "mm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) * 10).toFixed(3),
                });
                break;
              default:
                break;
            }
            break;
          case "mm":
            switch (object2.selectValue) {
              case "km":
                setObject2({
                  ...object2,
                  inputValue: (
                    parseFloat(object1.inputValue) / 1000000
                  ).toFixed(3),
                });
                break;
              case "hm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 100000).toFixed(
                    3
                  ),
                });
                break;
              case "dam":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10000).toFixed(
                    3
                  ),
                });
                break;
              case "m":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 1000).toFixed(
                    3
                  ),
                });
                break;
              case "dm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 100).toFixed(3),
                });
                break;
              case "cm":
                setObject2({
                  ...object2,
                  inputValue: (parseFloat(object1.inputValue) / 10).toFixed(3),
                });
                break;
              case "mm":
                setObject2({
                  ...object2,
                  inputValue: parseFloat(object1.inputValue).toFixed(3),
                });
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        handleButton();
        inputRef.current.focus();
      } else {
        alert("No input!");
        inputRef.current.focus();
      }
    } else {
      alert("Wrong input!");
      setObject1({
        ...object1,
        inputValue: "",
      });
      setObject2({
        ...object2,
        inputValue: "",
      });
      inputRef.current.focus();
    }

    // convert từ value 2 -> value 1
    // if (object2.selectValue !== "") {
    //   switch (object2.selectValue) {
    //     case "km":
    //       switch (object2.selectValue) {
    //         case "km":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue),
    //           });
    //           break;
    //         case "hm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10,
    //           });
    //           break;
    //         // --------------------------------------------------
    //         case "dam":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 100,
    //           });
    //           break;
    //         case "m":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 1000,
    //           });
    //           break;
    //         case "dm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10000,
    //           });
    //           break;
    //         case "cm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 100000,
    //           });
    //           break;
    //         case "mm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 1000000,
    //           });
    //           break;
    //         default:
    //           break;
    //       }
    //       break;
    //     case "hm":
    //       switch (object2.selectValue) {
    //         case "km":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10,
    //           });
    //           break;
    //         case "hm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue),
    //           });
    //           break;
    //         case "dam":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10,
    //           });
    //           break;
    //         case "m":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 100,
    //           });
    //           break;
    //         case "dm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 1000,
    //           });
    //           break;
    //         case "cm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10000,
    //           });
    //           break;
    //         case "mm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 100000,
    //           });
    //           break;
    //         default:
    //           break;
    //       }
    //       break;
    //     case "dam":
    //       switch (object2.selectValue) {
    //         case "km":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 100,
    //           });
    //           break;
    //         case "hm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10,
    //           });
    //           break;
    //         case "dam":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue),
    //           });
    //           break;
    //         case "m":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10,
    //           });
    //           break;
    //         case "dm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 100,
    //           });
    //           break;
    //         case "cm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 1000,
    //           });
    //           break;
    //         case "mm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10000,
    //           });
    //           break;
    //         default:
    //           break;
    //       }
    //       break;
    //     case "m":
    //       switch (object2.selectValue) {
    //         case "km":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 1000,
    //           });
    //           break;
    //         case "hm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 100,
    //           });
    //           break;
    //         case "dam":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10,
    //           });
    //           break;
    //         case "m":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue),
    //           });
    //           break;
    //         case "dm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10,
    //           });
    //           break;
    //         case "cm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 100,
    //           });
    //           break;
    //         case "mm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 1000,
    //           });
    //           break;
    //         default:
    //           break;
    //       }
    //       break;
    //     case "dm":
    //       switch (object2.selectValue) {
    //         case "km":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10000,
    //           });
    //           break;
    //         case "hm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 1000,
    //           });
    //           break;
    //         case "dam":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 100,
    //           });
    //           break;
    //         case "m":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10,
    //           });
    //           break;
    //         case "dm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue),
    //           });
    //           break;
    //         case "cm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10,
    //           });
    //           break;
    //         case "mm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 100,
    //           });
    //           break;
    //         default:
    //           break;
    //       }
    //       break;
    //     case "cm":
    //       switch (object2.selectValue) {
    //         case "km":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 100000,
    //           });
    //           break;
    //         case "hm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10000,
    //           });
    //           break;
    //         case "dam":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 1000,
    //           });
    //           break;
    //         case "m":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 100,
    //           });
    //           break;
    //         case "dm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10,
    //           });
    //           break;
    //         case "cm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue),
    //           });
    //           break;
    //         case "mm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) * 10,
    //           });
    //           break;
    //         default:
    //           break;
    //       }
    //       break;
    //     case "mm":
    //       switch (object2.selectValue) {
    //         case "km":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 1000000,
    //           });
    //           break;
    //         case "hm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 100000,
    //           });
    //           break;
    //         case "dam":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10000,
    //           });
    //           break;
    //         case "m":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 1000,
    //           });
    //           break;
    //         case "dm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 100,
    //           });
    //           break;
    //         case "cm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue) / 10,
    //           });
    //           break;
    //         case "mm":
    //           setObject1({
    //             ...object1,
    //             inputValue: parseFloat(object2.inputValue),
    //           });
    //           break;
    //         default:
    //           break;
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    // }
  };
  const handlePressEnter = (e) => {
    if (e.code === "Enter") handleConvert();
  };
  const handleButton = () => {
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
      return "Done";
    }, 2000);
  };
  /* LÀM HÀM CHECK INPUT NHẬP VÀO LÀ SỐ HAY CHUỖI (isNaN(string)) */
  /* NẾU SAI THÌ LÀM HÀM TỰ XÓA KHI NHẬP SAI INPUT, NẾU ĐÚNG THÌ DÙNG HÀM handleConvert(c) */
  const handleClick = () => {
    let meter = 0;
    const option1 = object1.selectValue;
    meter = +object1.inputValue * toMeter[option1];
    // meter = meter.toFixed(2);
    console.log(meter);
    let result = 0;
    const option2 = object2.selectValue;
    console.log(meterConvert[option2]);
    result = meter * meterConvert[option2];
    setObject2({
      ...object2,
      inputValue: result,
    });
  };
  return (
    <>
      <div className="title">
        <h3>Length Converter Tool</h3>
      </div>
      <div className="wrapper">
        <div className="convert-left">
          <input
            type="text"
            placeholder="--"
            value={object1.inputValue}
            onChange={(e) => {
              setObject1({ ...object1, inputValue: e.target.value });
              console.log(e.target.value);
            }}
            onKeyDown={(e) => handlePressEnter(e)}
            ref={inputRef}
          />
          <select
            id="u"
            value={object1.selectValue}
            onChange={(e) => {
              setObject1({ ...object1, selectValue: e.target.value });
              console.log(e.target.value);
            }}
          >
            <option value="km">km</option>
            <option value="hm">hm</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
          <h4>Selected unit: {object1.selectValue}</h4>
        </div>
        <div className="button">
          <button className="btn" onClick={() => handleConvert()}>
            Convert
          </button>
        </div>

        <div className="convert-right">
          <input
            type="text"
            placeholder="--"
            value={object2.inputValue}
            onChange={(e) => {
              setObject2({ ...object2, inputValue: e.target.value });
              console.log(e.target.value);
            }}
            onKeyDown={(e) => handlePressEnter(e)}
          ></input>

          <select
            name="Đơn vị"
            id="u"
            value={object2.selectValue}
            onChange={(e) => {
              setObject2({ ...object2, selectValue: e.target.value });
              console.log(e.target.value);
            }}
          >
            <option value="km">km</option>
            <option value="hm">hm</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
          <h4>Selected unit: {object2.selectValue}</h4>
        </div>
      </div>
      {isAlertVisible && (
        <div className="alert-container">
          <div class="line">
            <h2 class="lineUp">Done</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
