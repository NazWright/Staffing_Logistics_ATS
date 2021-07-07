import React, { useState } from "react";
import Tag from "./Tag";

const TagInput = ({ autocomplete, tags, callback }) => {
  const handleTagClose = (isSelected, index) => {
    const newState = tags.map((tag, i) =>
      index === i ? { ...tag, selected: isSelected } : tag
    );
    callback(newState);
  };

  const addTag = (e) => {
    if (e && e.target && e.key === " ") {
      const newState = [...tags, { name: e.target.value, selected: true }];
      callback(newState);
      e.target.value = "";
    }
  };

  const removeTag = () => {};

  return (
    <div className="form-control" style={{ display: "flex" }}>
      <ul>
        {tags.map((tag, index) => {
          return (
            <Tag
              key={index}
              label={tag.name}
              selected={tag.selected}
              callback={(selected) => handleTagClose(selected, index)}
            />
          );
        })}
      </ul>
      <input onKeyUp={addTag} />
    </div>
  );
};

export default TagInput;
