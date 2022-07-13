import React from "react";
import { Typography, ListItemText, InputLabel } from "@mui/material";

import { Helper } from "../utils/helpers";
import { Align, IFont, IFormFont, ISubtextFont } from "../types/styles";
import { ColourConfigurations } from "../constants/colourConfigurations";

/*  We are using @mui (MaterialUI) for most of our UI elements.
    You can refer to the following documentation on how to use the elements imported:
    Typography: https://mui.com/material-ui/api/typography/
    ListItemText: https://mui.com/material-ui/api/list-item-text/
    InputLabel: https://mui.com/material-ui/api/input-label/
*/

const alignmentStyle = (align: Align | undefined): any => {
  if (!Helper.isValid(align)) return "inherit";

  switch (align) {
    case Align.Center:
      return "center";
    case Align.Left:
      return "left";
    case Align.Right:
      return "right";
    case Align.Justify:
      return "justify";
    default:
      return "inherit";
  }
};

export const Text = (input: IFont) => {
  return (
    <Typography
      classes="primary-text"
      variant="body1"
      component="div"
      align={alignmentStyle(input.align)}
      gutterBottom={input.gutterBottom}
    >
      {input.text}
    </Typography>
  );
};

export const HeadlineText = (input: IFont) => {
  return (
    <Typography
      classes="headline-text"
      variant="h2"
      component="div"
      align={alignmentStyle(input.align)}
      gutterBottom={input.gutterBottom}
    >
      {input.text}
    </Typography>
  );
};

export const SubText = (input: ISubtextFont) => {
  const colour = input.error
    ? Helper.getConstantColour(ColourConfigurations.warning)
    : Helper.getConstantColour(ColourConfigurations.secondary);

  return (
    <Typography
      classes="primary-text"
      variant="caption"
      component="div"
      color={colour}
      align={alignmentStyle(input.align)}
      gutterBottom={input.gutterBottom}
    >
      {input.text}
    </Typography>
  );
};

export const NavbarText = (input: IFont) => {
  return (
    <ListItemText
      primaryTypographyProps={{
        classes: "navbar-text",
        variant: "h4",
        component: "div",
      }}
      inset
    >
      {input.text}
    </ListItemText>
  );
};

export const TabText = (input: IFont) => {
  return (
    <Typography
      classes="tab-text"
      variant="h5"
      component="div"
      align={alignmentStyle(input.align)}
      gutterBottom={input.gutterBottom}
    >
      {input.text}
    </Typography>
  );
};

export const FormLabel = (input: IFormFont) => {
  return (
    <InputLabel htmlFor={input.htmlFor} className="form-text">
      {input.text}
    </InputLabel>
  );
};
