import { useState, useEffect } from "react";
import { Subway } from "./subwayRef";

export const useObserveAggregateState = (aggregateName, selector = d => d) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(">>>> useObserveAggregateState init");
    const productsAggregate = Subway.selectAggregate(aggregateName);
    const stopObserving = productsAggregate.observeState(nextState => {
      setData(selector(nextState));
    });
    return () => {
      stopObserving();
    };
  }, []);

  return [data];
};


export const useConsumeEvent = (consumerAggregateName, eventName) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(">>>> useConsumeEvent init");
    const consumer = Subway.selectAggregate(consumerAggregateName);
    const unsubscribe = consumer.consumeEvent(eventName, (type, payload) => {
      setData(payload);
    });
    return () => {
      unsubscribe();
    };
  });
  return [data];
};

/*
export const useSpyAggregateEvent = (aggregateName, eventID, selector) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = Subway.selectAggregate(aggregateName).spy(eventID, {
      next: eventPayload => {
        setData(selector(eventPayload));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [aggregateName, eventID, selector]);

  return [data];
};
*/
