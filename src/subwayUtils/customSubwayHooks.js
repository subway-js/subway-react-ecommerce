import { useState, useEffect } from "react";
import { Subway } from "./subwayRef";

export const useObserveAggregateState = (
  aggregateName,
  selector,
  once = false
) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(">>>> useObserveAggregateState init");
    const productsAggregate = Subway.selectAggregate(aggregateName);
    const { currentState, unsubscribe } = productsAggregate.observeState({
      next: ({ nextState }) => {
        setData(selector(nextState));
        if (once) unsubscribe();
      }
    });
    setData(selector(currentState));
  }, []);

  return [data];
};

export const useObserveAggregateStateOnce = (aggregateName, selector) =>
  useObserveAggregateState(aggregateName, selector, true);
