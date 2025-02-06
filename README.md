---

# QR Code Generator

This is a simple QR Code Generator built using HTML, CSS, and JavaScript. Users can enter a URL, and the app generates a QR code using an API.

## Features

- **Generate QR Codes**: Enter a URL and get a QR code instantly.
- **API Integration**: Fetches QR code images from [Dub.co API](https://dub.co/).
- **User-Friendly Interface**: Simple and minimal design.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling for a clean UI.
- **JavaScript**: Handles API calls and QR code generation.

## API Endpoint

The app fetches QR codes from:
```
https://api.dub.co/qr?url=${inputUrl}
```

## Deployment

This web app is deployed using GitHub Pages by Tiger. You can access the live version here: [QR Code Generator](https://surajprojects.github.io/qr-code-generator)

## Getting Started

To run the project locally:

1. Clone this repository.
2. Navigate to the project folder.
3. Open `index.html` in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---