import { Input } from "antd";
import React, { FC } from "react";
import { SearchInputProps } from "./SearchInput.types";
import { SearchOutlined } from "@ant-design/icons";
import classes from "./SearchInput.module.scss";

const SearchInput: FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <Input
    size="large"
      placeholder="search student"
      prefix={<SearchOutlined />}
      onChange={onChange}
      className={classes.searchInput}
      value={value}
    />
  );
};

export default SearchInput;
