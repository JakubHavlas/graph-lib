import React from "react";
import General from "../General/General";

// Define the ViewBox type
import { getFunctionDataByExpression } from "../utils/SessionStorage";
import { FunctionData, ViewBox } from "../types/types";

let Picker = React.memo(function Picker(props: {
  expressions: FunctionData[];
  params?: ViewBox;
}) {
  const {
    expressions,
    params = { x: -2, y: -2, width: 4, height: 4 }, // set your default ViewBox value here
  } = props;

  let data: React.ReactElement[] = [];

  for (let i = 0; i < expressions.length; i++) {
    let storedExpression: FunctionData | undefined =
      getFunctionDataByExpression(expressions[i].expression);

    if (storedExpression) {
      data[i] = (
        <General
          key={i}
          expression={expressions[i].expression}
          viewBox={params}
          storedExpression={storedExpression}
          color={expressions[i].color}
        />
      );
    } else {
      data[i] = (
        <General
          key={i}
          expression={expressions[i].expression}
          viewBox={params}
          color={expressions[i].color}
        />
      );
    }
  }

  return <>{data}</>;
});

export default Picker;
