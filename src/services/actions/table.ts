import { ICard } from "../../models/ICars";

export const SET_SUPPLIER_CARDS = "SET_SUPPLIER_CARDS";
export const SET_ERROR = "SET_ERROR";
export const SET_CARDS_DETAILS = "SET_CARDS_DETAILS";
export const SET_CARDS_PHOTO = 'SET_CARDS_PHOTO'

interface IGetSupplierCards {
  readonly type: typeof SET_SUPPLIER_CARDS;
  readonly listId: Array<number>;
}

interface IGetCardsFailed {
  readonly type: typeof SET_ERROR;
}

interface IGetCardsDetails {
  readonly type: typeof SET_CARDS_DETAILS;
  readonly list: Array<ICard>;
}

interface IGetCardsPhoto {
  readonly type: typeof SET_CARDS_PHOTO;
  readonly listPhoto: Array<string>;
}


export type TCardsActions =
  | IGetSupplierCards
  | IGetCardsFailed
  | IGetCardsDetails
  | IGetCardsPhoto;

export function getSupplierCardsAction(list: Array<number>): IGetSupplierCards {
  return { type: SET_SUPPLIER_CARDS, listId: list };
}

export function getCardsFailedAction(): IGetCardsFailed {
  return { type: SET_ERROR };
}

export function getCardsDetailsAction(list: Array<ICard>): IGetCardsDetails {
  return { type: SET_CARDS_DETAILS, list: list };
}

export function getCardsPhotoAction(list: Array<string>): IGetCardsPhoto {
  return { type: SET_CARDS_PHOTO, listPhoto: list };
}
