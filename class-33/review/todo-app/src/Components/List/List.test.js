// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import List from './index';
// import '@testing-library/jest-dom/extend-expect';


// describe('List Component', () => {
//   let mockToggleComplete;
//   let mockDeleteItem;
//   let list;

//   beforeEach(() => {
//     mockToggleComplete = jest.fn();
//     mockDeleteItem = jest.fn();
//     list = [
//       { id: '1', text: 'Test todo item', assignee: 'John Doe', difficulty: 'Medium', complete: false },
//       { id: '2', text: 'Another todo item', assignee: 'Jane Doe', difficulty: 'High', complete: false }
//     ];
//   });

//   it('renders without crashing', () => {
//     const { getByText } = render(
//       <List 
//         list={list} 
//         toggleComplete={mockToggleComplete} 
//         deleteItem={mockDeleteItem} 
//       />
//     );

//     expect(getByText('Test todo item')).toBeInTheDocument();
//     expect(getByText('Another todo item')).toBeInTheDocument();
//   });

//   it('calls toggleComplete when checkbox is clicked', () => {
//     const { getAllByLabelText } = render(
//       <List 
//         list={list} 
//         toggleComplete={mockToggleComplete} 
//         deleteItem={mockDeleteItem} 
//       />
//     );

//     const checkboxes = getAllByLabelText('Complete');
//     fireEvent.click(checkboxes[0]);
//     expect(mockToggleComplete).toHaveBeenCalledWith('1');
//   });

//   it('calls deleteItem when Delete Item button is clicked', () => {
//     const { getAllByText } = render(
//       <List 
//         list={list} 
//         toggleComplete={mockToggleComplete} 
//         deleteItem={mockDeleteItem} 
//       />
//     );

//     const deleteButtons = getAllByText('Delete Item');
//     fireEvent.click(deleteButtons[0]);
//     expect(mockDeleteItem).toHaveBeenCalledWith('1');
//   });
// });
