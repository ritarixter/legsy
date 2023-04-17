import axios from "axios";
import { baseUrl, supplier_id } from "./constants";
import {
  getCardsDetailsAction,
  getSupplierCardsAction,
  getCardsFailedAction,
  getCardsPhotoAction
} from "../services/actions/table";
import { AppDispatch } from "../services/store";

export const getCards = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `${baseUrl}/get_supplier_cards?supplier_id=${supplier_id}`
      );
      dispatch(getSupplierCardsAction(response.data));
      dispatch(getCardsDetails(response.data))
      dispatch(getCardsPhoto(response.data))
      
    } catch (e) {
      dispatch(getCardsFailedAction());
    }
  };
};

export const getCardsDetails = (list: Array<number>) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/cards_detail`, {
        nm_ids: list
        });
      dispatch(getCardsDetailsAction(response.data))
    } catch (e) {
      dispatch(getCardsFailedAction());
    }
  };
};

export const getCardsPhoto = (list: Array<number>) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/cards_photo`, {
        nm_ids: list
        });
      dispatch(getCardsPhotoAction(response.data))
    } catch (e) {
      dispatch(getCardsFailedAction());
    }
  };
};
