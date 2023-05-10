# Code Challenge

Implement several array sorting comparators and an array filter.

## Specifications

- Read all of these instructions carefully.
- Name things exactly as described.
- Do all your work in a your `data-structures-and-algorithms` public repository.
- Create a new branch in your repo named as noted below.
- Follow the language-specific instructions for the challenge type listed below.
- Update the "Table of Contents" - in the README at the root of the repository - with a link to this challenge's README file.

### Challenge Setup & Execution

**Branch Name:** `sort-and-filter-movies`

**Challenge Type:** Code Challenge / Algorithm

## Feature Tasks

### Part 1

- Implement the functions `sortYear` and `sortTitle` in the file `sort.js`.

  - Execute your tests while developing using `npm run watch`
  - Execute your tests in CI using `npm test`

- Functions:
  - sortYear
    - Arguments: `movies` array
    - Sorts the input array by year, in ascending order.
  - sortTitle
    - Arguments: `movies` array
    - Sorts the input array by title, ignoring `"The "` at the beginning of titles.

### Part 2

- Refactor your `sortYear` and `sortTitle` functions so that the comparator callback is a stand-alone function. Export these functions.
- Import the stand-alone callback functions in `test.js`, and write tests for each.

## Example

See tests.ts

## Requirements

Ensure your complete solution follows the standard requirements.

1. Write additional [unit tests](../../Challenge_Testing){:target="\_blank"}
1. Follow the [template for a well-formatted README](../../Challenge_Documentation){:target="\_blank"}
1. Submit the assignment following [these instructions](../../Challenge_Submission){:target="\_blank"}
