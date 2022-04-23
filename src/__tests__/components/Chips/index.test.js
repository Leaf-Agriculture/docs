import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Chips from "../../../components/Chips";

describe("Chips Component", () => {
  it("Should render Chips component with GET text", async () => {
    const { getByText } = render(
      <Chips backgroundColor="#61AFFE" textColor="white">
        GET
      </Chips>
    );
    const getChips = await getByText("GET");
    expect(getChips).toBeInTheDocument();
    expect(getChips).toHaveTextContent("GET");
    expect(getByText("GET")).toHaveStyle(`background-color: #61AFFE`);
    expect(getByText("GET")).toHaveStyle(`color: white`);
  });

  it("Should render Chips component with POST text", async () => {
    const { getByText } = render(
      <Chips backgroundColor="#49CC90" textColor="white">
        POST
      </Chips>
    );
    const getChips = await getByText("POST");
    expect(getChips).toBeInTheDocument();
    expect(getChips).toHaveTextContent("POST");
    expect(getByText("POST")).toHaveStyle(`background-color: #49CC90`);
    expect(getByText("POST")).toHaveStyle(`color: white`);
  });
});
