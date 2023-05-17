import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form";
import { Button, TextInput, Pagination } from "@mantine/core";
import { v4 as uuid } from "uuid";
import { SettingsContext } from "../../Context/Settings";

import List from "../List/index";

const Todo = () => {
  const { settings } = useContext(SettingsContext);
  const [defaultValues] = useState({ difficulty: 4 });
  const [list, setList] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  console.log('TODO APP SETTINGS', settings);
  const paginate = (items, page, itemsPerPage) => {
    // calculate start and end index
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return items.slice(start, end);
  };

  const increasePagination = () => {
    setCurrentPosition(currentPosition + settings.itemsToDisplay);
  };

  const calculateTotal = () => {
    return Math.ceil(list.length / settings.itemsToDisplay);
  };

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item.text);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);
  const [incompleteItems, setIncompleteItems] = useState([]);

  useEffect(() => {
    setIncompleteItems(list.filter((item) => !item.complete));
  }, [list]);
  const sortedItems = [...incompleteItems].sort(
    (a, b) => b.difficulty - a.difficulty
  );

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>
        <TextInput
          onChange={handleChange}
          name="text"
          type="text"
          placeholder="Item Details"
          label="To Do Item"
          description="Enter in an item you want to add to your todo list"
          radius="lg"
          size="md"
          withAsterisk
        />

        <TextInput
          placeholder="Assignee Name"
          label="Assigned To"
          description="Who do you want to assign this task to?"
          radius="lg"
          size="md"
          withAsterisk
          name="assignee"
          onChange={handleChange} // Add this line
        />

        <label>
          <span>Difficulty</span>
          <input
            onChange={handleChange}
            defaultValue={defaultValues.difficulty}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </label>

        <label>
          <Button type="submit" color="teal" radius="md" size="lg">
            Add Item
          </Button>
        </label>
      </form>

      <List
        list={paginate(sortedItems, currentPosition, settings.itemsToDisplay)}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />

      <Pagination
        onChange={(page) => setCurrentPosition(page)}
        total={Math.ceil(sortedItems.length / settings.itemsToDisplay)}
        color="indigo"
        size="lg"
        radius="md"
        initialPage={currentPosition}
      />
    </>
  );
};

export default Todo;
