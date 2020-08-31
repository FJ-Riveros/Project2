import React from "react";
import Box from "@material-ui/core/Box";
import Menu from "@mui-treasury/components/menu/collapsible";
import { useJupiterCollapsibleMenuStyles } from "@mui-treasury/styles/collapsibleMenu/jupiter";
const JupiterCollapsibleMenuStyle = () => {
  const [index, setIndex] = React.useState(-1);
  const createOnClick = (idx) => () => setIndex(idx);
  return (
    <Box minWidth={343}>
      <Menu
        collapsed
        useStyles={useJupiterCollapsibleMenuStyles}
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem
              button
              selected={index === 0}
              onClick={createOnClick(0)}
            >
              Week Plan
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick} />
          </Menu.Row>
        )}
      >
        <Menu.List>
          <Menu.ListItem
            button
            selected={index === 1}
            onClick={createOnClick(1)}
          >
            Monday
          </Menu.ListItem>
          <Menu.ListItem
            button
            selected={index === 2}
            onClick={createOnClick(2)}
          >
            Tuesday
          </Menu.ListItem>
          <Menu.ListItem
            button
            selected={index === 3}
            onClick={createOnClick(3)}
          >
            Wednesday
          </Menu.ListItem>
          <Menu.ListItem
            button
            selected={index === 4}
            onClick={createOnClick(4)}
          >
            Thursday
          </Menu.ListItem>
          <Menu.ListItem
            button
            selected={index === 5}
            onClick={createOnClick(5)}
          >
            Friday
          </Menu.ListItem>
          <Menu.ListItem
            button
            selected={index === 6}
            onClick={createOnClick(6)}
          >
            Saturday
          </Menu.ListItem>
          <Menu.ListItem
            button
            selected={index === 7}
            onClick={createOnClick(7)}
          >
            Sunday
          </Menu.ListItem>
        </Menu.List>
      </Menu>
    </Box>
  );
};

export default JupiterCollapsibleMenuStyle;
