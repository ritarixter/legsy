import React, { useEffect, useMemo, useState } from "react";
import styles from "./app.module.scss";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useAppDispatch, useAppSelector } from "../services/hooks";
import { getCards } from "../utils/api";
import { graph } from "../utils/constants";

const App = () => {
  const dispatch = useAppDispatch();
  const listId = useAppSelector((state) => state.table.listId);
  const list = useAppSelector((state) => state.table.list);
  const listPhoto = useAppSelector((state) => state.table.listPhoto);
  const [rowdata, setrowData] = useState<Array<any>>([])
  useEffect(() => {
    dispatch(getCards());
  }, []);


  let data = useMemo(
    () =>
      list.map((item) => {
       return{
        'Номенклатура': item.id,
        'Бренд': item.brand,
        'Цена': item.priceU / 100,
        'Название': item.name,
        'Фото': '',
        'График заказов': graph,}
      }),
    [list]
  );

  useMemo(()=>data.forEach((item) => {
    Object.keys(listPhoto).forEach((itemPhoto) => {
      if (item.Номенклатура === Number(itemPhoto)) {
        item.Фото = listPhoto[Number(itemPhoto)];
      }
    });
  }),[list])

  console.log(data);

  const [columnDefs] = useState([
    { field: "Фото" },
    { field: "Номенклатура", filter: true },
    { field: "Название", filter: true },
    { field: "Бренд",filter: true },
    { field: "Цена",filter: true },
    { field: "График заказов" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact rowData={data} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default App;
