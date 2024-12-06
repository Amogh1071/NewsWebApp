# News Web App

## Overview
The **News Web App** is a simple project that demonstrates the application of APIs to dynamically fetch and display news articles. It allows users to view random news articles from various sources or search for specific topics of interest.

## Features
- Fetch random news articles from different sources.
- Search for news articles on specific topics using a search bar.
- Interactive user interface built using HTML, CSS, and JavaScript.
- Integration with a news API for real-time news updates.

## Project Structure
The project is organized into three main files:
1. **HTML**: Defines the structure of the web app and its content layout.
2. **CSS**: Styles the web app to create a clean and visually appealing user interface.
3. **JavaScript**: Handles API integration, dynamic content rendering, and user interactions.

## Key Functionalities
1. **Random News Fetching**:
   - Automatically fetches a set of random news articles on page load.
   - Uses the `fetch` API to request data from the news API.

2. **Search News by Topic**:
   - Allows users to search for news on specific topics using a search bar.
   - Dynamically updates the displayed news based on user input.

3. **Interactive Display**:
   - News articles are presented as clickable cards, including:
     - An image.
     - A truncated title.
     - A short description.
   - Clicking a card opens the full article in a new tab.

## How to Run
1. Clone the repository or download the files.
2. Open the `index.html` file in any modern web browser.
3. Make sure you have a valid API key from [NewsAPI](https://newsapi.org/), and replace the placeholder in the JavaScript file with your API key.
4. Use the search bar to find news articles or browse the default random articles.

## Dependencies
- A free or paid API key from [NewsAPI](https://newsapi.org/).

## Future Improvements
- Add pagination for more results.
- Implement additional filters (e.g., news categories, date range).
- Improve error handling and user feedback.

