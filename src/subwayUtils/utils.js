import { Subway } from "./";

export const initHandlers = (aggregate, cmdHandlers, evtHandlers) => {
  cmdHandlers &&
    cmdHandlers.forEach(({ command, handler, onError = null }) => {
      aggregate.setCommandHandler(command, handler, onError);
    });
  evtHandlers &&
    evtHandlers.forEach(({ command, handler, onError = null }) => {
      aggregate.setEventHandler(command, handler, onError);
    });
};

// NOTE provide helper in the library itself?
export const initAggregates = aggregates => {
  aggregates.forEach(
    ({ name, initialState = {}, cmdHandlers = [], evtHandlers = []}) => {
      const _agg = Subway.createAggregate(name, initialState);
      initHandlers(_agg, cmdHandlers, evtHandlers);
    }
  );
  aggregates.forEach(({ bootstrap = () => {} }) => bootstrap());
};
