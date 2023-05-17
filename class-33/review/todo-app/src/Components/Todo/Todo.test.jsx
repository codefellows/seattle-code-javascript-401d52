// import { render, fireEvent } from '@testing-library/react';
// import Todo from './index';
// import { SettingsContext } from '../../Context/Settings';
// import '@testing-library/jest-dom/extend-expect';


// describe('Todo Component', () => {
//   const mockSettings = {
//     itemsToDisplay: 5,
//   };

//   it('renders without crashing', () => {
//     const { getByTestId } = render(
//       <SettingsContext.Provider value={mockSettings}>
//         <Todo />
//       </SettingsContext.Provider>
//     );
//     expect(screegetByTestId('todo-h1')).toBeInTheDocument();
//   });

//   it('adds a new todo item', () => {
//     const { getByPlaceholderText, getByText } = render(
//       <SettingsContext.Provider value={mockSettings}>
//         <Todo />
//       </SettingsContext.Provider>
//     );

//     const input = getByPlaceholderText('Item Details');
//     fireEvent.change(input, { target: { value: 'Test todo item' } });

//     const addButton = getByText('Add Item');
//     fireEvent.click(addButton);

//     expect(getByText('Test todo item')).toBeInTheDocument();
//   });


//   it('deletes a todo item', () => {
//     const { getByPlaceholderText, getByText, queryByText } = render(
//       <SettingsContext.Provider value={mockSettings}>
//         <Todo />
//       </SettingsContext.Provider>
//     );

//     const input = getByPlaceholderText('Item Details');
//     fireEvent.change(input, { target: { value: 'Test todo item' } });

//     const addButton = getByText('Add Item');
//     fireEvent.click(addButton);

//     const deleteButton = getByText('Delete Item');
//     fireEvent.click(deleteButton);

//     expect(queryByText('Test todo item')).not.toBeInTheDocument();
//   });
// });
