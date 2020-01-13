import { useState, useEffect } from "react";
import { Subway } from "./subwayRef";

export const useObserveAggregateState = (
  aggregateName,
  nextStateParser,
  once = false
) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(">>>> useObserveAggregateState init");
    const productsAggregate = Subway.selectAggregate(aggregateName);
    const { currentState, unsubscribe } = productsAggregate.observeState({
      next: ({ nextState }) => {
        setData(nextStateParser(nextState));
        if (once) unsubscribe();
      }
    });
    setData(nextStateParser(currentState));
  }, []);

  return [data];
};

export const useObserveAggregateStateOnce = (aggregateName, nextStateParser) =>
  useObserveAggregateState(aggregateName, nextStateParser, true);
