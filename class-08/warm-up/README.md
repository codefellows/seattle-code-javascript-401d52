# Warm Up - Decks

## Overview

One of the newest design patterns for modern websites is the use of "Cards" and "Decks"

A **Card** is the visual representation (markup) of structured content (data).

- Cards lay out content

A **Deck** is the visual representation of a group of cards

- Decks lay out cards

Decks are typically implemented as a container with a class name don't have content of their own, other than the cards that are there as it's children. However, some systems allow decks to have a title and even a navigation element, depending on the complexity of the system. The goal, as with cards, however, should be for a deck to be able to be styled with CSS to cover all cases (i.e. having a title or not)

- Title
- Nav

By default, decks should show their content (cards) vertically stacked, as shown below, so that they are "responsive" out of the box. As you discover more ways to lay out the deck elements and cards, you'll likely always revert to this core layout as your responsive base.

![DECK](deck.png)

## Challenge

1. Create a set of rules for describing the core deck content data as markup
   - e.g. What elements will you use for the deck container itself? The title? Image?
1. Using CSS (or SASS), implement styling rules to lay out a deck of cards in a stacked, responsive manner, similar to the example

### Notes

Decks can come in many shapes and sizes. Cards will often be arranged side by side, as tabs or accordions, and even have different positional styling. Consider the edge cases (and possibilities!) as you create your design.
