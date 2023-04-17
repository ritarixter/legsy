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
  useEffect(() => {
    dispatch(getCards());
  }, []);

  const data = useMemo(
    () =>
      list.map((item) => ({
        id: item.id,
        brand: item.brand,
        price: item.priceU / 100,
        name: item.name,
        photo: "",
        graph: graph,
      })),
    [list]
  );
  console.log(data);

  const [rowData, setRowData] = useState([
    { Фото: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "Фото" },
    { field: "make" },
    { field: "Номенклатура" },
    { field: "Бренд" },
    { field: "Цена" },
    { field: "График заказов" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default App;
