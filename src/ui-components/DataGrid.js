import React from "react";
import DrinkInfo from "./DrinkInfo";
import "./DataGrid.css";

const DataGrid = ({ data }) => {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.idDrink}>
              <td>{item.strDrink}</td>
              <td>
                <DrinkInfo key={item.idDrink} drink={item} />
              </td>
              <td>
                <img src={item.strDrinkThumb} alt={item.strDrink} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default DataGrid;
