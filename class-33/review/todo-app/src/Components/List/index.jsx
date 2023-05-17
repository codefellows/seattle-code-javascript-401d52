import React from "react";
import { Button, Stack, Checkbox } from "@mantine/core";

const List = ({ list, toggleComplete, deleteItem }) => {
  console.log(list);
  const incompleteItems = list.filter((item) => !item.complete);

  return (
    <Stack spacing="md">
      {incompleteItems.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <Checkbox
            checked={item.complete}
            onChange={() => toggleComplete(item.id)}
            label="Complete"
          />
          <Button
            type="button"
            onClick={() => deleteItem(item.id)}
            color="red"
            radius="xs"
            size="xs"
          >
            Delete Item
          </Button>
          <hr />
        </div>
      ))}
    </Stack>
  );
};

export default List;
