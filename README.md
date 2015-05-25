# Task 2 - Coding Responsively

## Pre-requisites

- Ruby
- SASS
- npm
- Bower

## Instructions

- Install Ruby (http://sass-lang.com/install)
- `gem install sass`
- `npm install`
- `bower update`

## Building the app

- For debug mode run: `gulp build:debug`
	- Source files located /dist/debug/
- For release mode run: `gulp build:release`
	- Source files located /dist/release/

## Running the app on a local machine

- `gulp`
- `gulp watch`

## Task Description

Please create a small responsive web site that contains the following;

**Header & Footer**

Primary navigation bar with the following link titles;
- Link 1
- Link 2
- Awkward Long link
- Link 3
- Link 4

1. The menu bar should be displayed in a unbroken horizontal line, unless the screen width is too narrow, in which case an expanding container should be used
2. Create a secondary navigation bar with 8 links (Item 1 to Item 8)
3. The navigation should remain fixed on page as user scrolls
4. One of the navigation bars should be displayed off-canvas in a vertical list when it doesn’t fit viewport width

**Content area with:**

- A grid of images (at least 8, no upper limit) with random ‘feature’ images that are larger than the standard images
- 3 columns of text (lorem ipsum is fine for this) when screen width allows, and a suitable display when the screen width is too narrow

**Do not use a full framework (Bootstrap, foundation etc) for this task, we expect the candidate to show they can create the task using sass and compile it to css. Sass plugins such as Bourbon, Compass, Susy etc are allowed.**