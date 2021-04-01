import React, { useState } from "react";
import withHead from "components/hoc/withHead";
function countPage() {
  const [count, setCount] = useState(0);

  const minus = () => {
    setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };
  const onChange = (e) => {
    var reg = new RegExp("^[0-9]+$");
    let value = e.target.value;
    if (reg.test(value)) {
      setCount(Number(value));
    } else {
      setCount(0);
    }
  };
  return (
    <div>
      <button onClick={minus}>-</button>

      <input type="text" value={count} onChange={onChange} />
      <button onClick={plus}>+</button>
    </div>
  );
}

export default withHead(countPage, "카운트", "카운트 페이지 입니다.");
