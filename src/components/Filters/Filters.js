import React, { useState } from "react";
import { useFilters } from "./hooks";
import "./Filters.css";

export default function Filters({ initialElements, criterias }) {
  const { reverse, orderByField, filterBy } = useFilters();

  const [elements, setElements] = useState(initialElements);

  function reverseElements() {
    setElements([...reverse(elements)]);
  }

  function orderElementsByField(field, type) {
    setElements([...orderByField(elements, field, type)]);
  }

  function filterElementsPerCriteria(checked, criteria) {
    if (checked) setElements([...filterBy(elements, criteria)]);
    else reset();
  }

  return (
    <div>
      {criterias.length > 0 &&
        criterias.map((criteria, iC) =>
          criteria.value === "" ? (
            <React.Fragment key={iC}></React.Fragment>
          ) : (
            <div key={iC}>
              <input
                type="checkbox"
                id={criteria.value}
                name={criteria.value}
                onChange={(e) =>
                  filterElementsPerCriteria(e.target.checked, criteria)
                }
              />
              <label htmlFor={criteria.value}> {criteria.value}</label>
              <br></br>
            </div>
          )
        )}
    </div>
  );
}
