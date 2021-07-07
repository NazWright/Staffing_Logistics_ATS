import React, { forwardRef, useState, cloneElement } from "react";
import CheckBox from "./CheckBox";

const CheckBoxGroup = forwardRef(
  (
    {
      name,
      childrenCheckBoxes,
      label,
      required,
      selectAll,
      other,
      onGroupChange,
    },
    ref
  ) => {
    const [allChecked, setAllChecked] = useState(false);

    const getRegisterValues = (state) => {
      const values = state
        .filter((checkbox) => checkbox.checked === true)
        .map((checkbox) => {
          return checkbox.value;
        });
      return values;
    };

    const selectAllOnChange = (isChecked) => {
      setAllChecked(isChecked);
      const newCheckState = childrenCheckBoxes.map((aCheckbox) => ({
        ...aCheckbox,
        checked: isChecked,
      }));
      const values = getRegisterValues(newCheckState);

      onGroupChange(newCheckState, name, values);
    };

    // check a single check box
    const checkboxOnChange = (isChecked, index) => {
      const newCheckState = childrenCheckBoxes.map((aCheckbox, i) =>
        index === i ? { ...aCheckbox, checked: isChecked } : aCheckbox
      );
      const values = getRegisterValues(newCheckState);

      onGroupChange(newCheckState, name, values);
    };

    const renderChildCheckBoxes = () => {
      if (!childrenCheckBoxes) {
        return null;
      }
      return childrenCheckBoxes.map((childCheckBox, index) => {
        return (
          <CheckBox
            key={index}
            {...childCheckBox}
            checkBoxOnChange={(status) => {
              checkboxOnChange(status, index);
            }}
          />
        );
      });
    };

    return (
      <div className="form-group">
        <label htmlFor={name} className="control-label">
          {required ? `${label}*` : label}
        </label>
        <div className="checkbox">
          {selectAll ? (
            <CheckBox
              label="Select All"
              name="All"
              value="All"
              checked={allChecked}
              checkBoxOnChange={(status) => {
                selectAllOnChange(status);
              }}
            />
          ) : undefined}
          {renderChildCheckBoxes()}
        </div>
      </div>
    );
  }
);

export default CheckBoxGroup;
