import { Events } from "../verbs/events";

export const evtProductAddedToCartHandler = {
  command: Events.PRODUCT_ADDED_TO_CART,
  handler: (aggregateState, { product }) => {
    // TODO change to add products count and total
    // const items = aggregateState.items.concat(product);

    const { items } = aggregateState;
    if (items.has(product.id)) {
      const prod = items.get(product.id);
      items.set(product.id, { ...product, count: prod.count + 1 });
    } else {
      items.set(product.id, { ...product, count: 1 });
    }
    return {
      proposal: {
        ...aggregateState,
        items
      }
    };
  }
};

export const evtOrderProcessedHandler = {
  command: Events.ORDER_PROCESSED,
  handler: (aggregateState, { successful }) => {
    // TODO check successful = fakse
    return {
      proposal: {
        items: new Map()
      }
    };
  }
};

export const evtHandlers = [
  evtProductAddedToCartHandler,
  evtOrderProcessedHandler
];
