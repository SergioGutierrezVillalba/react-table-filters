import React from "react";
import { Filters } from "../Filters";

export default function TableHeader({ elements, criterias }) {
  return (
    <div className="table-header-container">
      <div className="table-header-filters-wrapper">
        <Filters criterias={criterias} initialElements={elements} />
      </div>
    </div>
  );
}
