# Gradient Bars Visualization

A React application that displays an artistic visualization of gradient bars with a smooth coral-pink gradient effect.

## Features

- 39 gradient bars positioned at various heights
- Smooth linear gradient from white → coral pink (#FF9292) → white
- Responsive component design
- Clean, modular code structure

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gradient-bars-visualization
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## Project Structure

```
gradient-bars-visualization/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GradientBars.js
│   │   └── GradientBars.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Component Usage

```jsx
import GradientBars from './components/GradientBars';

function App() {
  return <GradientBars />;
}
```

## Customization

To modify the gradient colors, edit the `background` property in `GradientBars.css`:

```css
.gradient-bar {
  background: linear-gradient(180deg, white 0%, #FF9292 49%, white 99%);
}
```

To adjust bar positions or dimensions, modify the `bars` array in `GradientBars.js`.

## License

MIT

## Technologies Used

- React 18.2.0
- Create React App
- CSS3 with Linear Gradients
