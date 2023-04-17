import { ICard } from "../../models/ICars";
import {
  SET_ERROR,
  SET_SUPPLIER_CARDS,
  SET_CARDS_DETAILS,
  TCardsActions,
  SET_CARDS_PHOTO
} from "../actions/table";

type TCardsInitialState = {
  listId: Array<number>;
  list: Array<ICard>;
  listPhoto: Array<string>
  isError: boolean;
};

const cardsInitialState: TCardsInitialState = {
  listId: [],
  listPhoto: [],
  list: [],
  isError: false,
};

export const tableReducer = (
  state = cardsInitialState,
  action: TCardsActions
): TCardsInitialState => {
  switch (action.type) {
    case SET_SUPPLIER_CARDS: {
      return { ...state, listId: action.listId, isError: false };
    }

    case SET_ERROR: {
      return { ...state, isError: true };
    }

    case SET_CARDS_DETAILS: {
      return { ...state, list: action.list, isError: false };
    }

    case SET_CARDS_PHOTO:{
      return { ...state, listPhoto: action.listPhoto, isError: false };
    }

    default: {
      return state;
    }
  }
};
