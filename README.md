
# Marvel Comics Search App

This project is a web application built with React that allows users to search for Marvel Comics and characters using the [Marvel API](https://developer.marvel.com/). It provides an intuitive interface to explore Marvel's extensive library, letting users look up information on their favorite comics and characters with ease.

## Features

- **Comic and Character Search**: Search for any comic or character in the Marvel Comics universe.
- **Responsive Design**: Works across various screen sizes, providing an optimized user experience on mobile, tablet, and desktop devices.
- **API Integration**: Utilizes the Marvel API for up-to-date information on comics and characters, including summaries, images, and publication details.
- **Detailed Views**: Each search result links to more detailed information, such as character backgrounds and comic specifics.

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).
- **Marvel API Key**: Sign up on the [Marvel Developer Portal](https://developer.marvel.com/) to obtain a public API key.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jexxer/MarvelDB.git
   cd MarvelDB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Marvel API key:
   ```env
   REACT_APP_MARVEL_API_KEY=your_marvel_api_key_here
   ```

4. Start the app:
   ```bash
   npm start
   ```

   The app will run on [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter the name of a Marvel character or comic in the search bar.
2. Browse through the results displayed and click on a character or comic to view detailed information.

## Project Structure

- **`src/components`**: Contains reusable components such as the search bar, result cards, and detailed views.
- **`src/pages`**: Contains the main pages, such as the search and detail views.
- **`src/services`**: Handles API requests to the Marvel API.

## Technologies Used

- **React**: Core framework for building the app.
- **Marvel API**: Provides access to Marvel Comics data.
- **Axios**: For handling API requests.
- **CSS/SCSS**: For styling and responsive design.

## Future Enhancements

- **Favorite Feature**: Allow users to save their favorite characters or comics.
- **Advanced Filtering**: Add filters for comics based on release year, series, or genre.
- **Infinite Scrolling**: Implement pagination for a seamless browsing experience.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with a detailed description of the changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Enjoy exploring the Marvel Universe!
