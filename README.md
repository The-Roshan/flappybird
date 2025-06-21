# 🐦 Flappy Bird Clone

## Overview
The Flappy Bird Clone is a fun, web-based arcade game created by Roshan Kumar Prajapati. Built with HTML, CSS, and JavaScript, it replicates the classic Flappy Bird gameplay where players navigate a bird through a series of pipes by tapping the spacebar to flap its wings. The game features a canvas-based rendering, random pipe generation, collision detection, score tracking, and a restart button. It is optimized for desktop browsers and provides an engaging, nostalgic gaming experience.

## Features
- **Gameplay** 🎮:
  - Players control a yellow bird using the spacebar to apply lift and avoid green pipes.
  - Pipes are generated with random gap sizes (150–200 pixels) and heights, moving left at a constant speed.
- **Physics** ⚙️:
  - Gravity (0.5) pulls the bird downward, with a lift force (-10) applied on keypress.
  - Boundary checks prevent the bird from exiting the canvas top or bottom.
- **Scoring** 📊:
  - Score increases by 1 each time a pipe moves off-screen.
  - Score is displayed in the top-left corner.
- **Game Over** 🏁:
  - Collisions with pipes or the ground trigger a "Game Over!" message in red.
  - A restart button (`restartButton`) enables restarting the game.
- **Pipe Management** 🌐:
  - Pipes are spaced at least 50 pixels apart horizontally to ensure playable gaps.
  - Pipes are removed once they move off-screen to optimize performance.
- **Visuals** 🎨:
  - Simple 2D graphics with a yellow bird, green pipes, and black score text on a clear canvas.
  - Customizable styles via `styles.css` for potential enhancements.

## Tech Stack
- **HTML5**: Structure of the game, including the canvas and restart button.
- **CSS3**: Styling for the canvas and button (`styles.css`).
- **JavaScript**: Game logic, including bird movement, pipe generation, collision detection, and rendering (`game.js`).
- **Canvas API**: Used for rendering the bird, pipes, score, and game over text.

## Project Structure
```
flappy-bird-clone/
├── index.html         # Main HTML file
├── styles.css        # CSS styles for canvas and button
├── game.js           # JavaScript for game logic
├── LICENSE.md        # MIT License
└── README.md         # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) with Canvas and JavaScript support.
- A code editor (e.g., VS Code) for customization.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/flappy-bird-clone.git
cd flappy-bird-clone
```

### 2. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 3. Customize (Optional)
- Edit `styles.css` to modify the canvas background, button styles, or add visual effects.
- Update `game.js` to enhance gameplay (e.g., add sound effects, adjust gravity/lift, or include high score tracking).
- Modify `index.html` to add UI elements like a start screen, pause button, or score display outside the canvas.

## Usage
1. **Start Game** 🚀: Load the page to begin the game automatically.
2. **Control Bird** 🐦: Press the spacebar to make the bird flap and avoid pipes.
3. **Score Points** 📊: Gain 1 point for each pipe cleared.
4. **Game Over** 🏁: Collide with a pipe or ground to end the game and see "Game Over!".
5. **Restart** 🔄: Click the "Restart" button to reset the bird, pipes, and score.
6. **Desktop Only** 🖥️: The game relies on keyboard input (spacebar), so it’s best played on desktop.

## Deployment
- **Static Hosting**:
  1. Upload `index.html`, `styles.css`, and `game.js` to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/flappy-bird-clone`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **JavaScript Logic**: The `game.js` file handles:
  - Bird movement with gravity and lift.
  - Random pipe generation with constrained gaps and spacing.
  - Collision detection between the bird and pipes/ground.
  - Score tracking and rendering.
  - Game loop using `requestAnimationFrame` for smooth animation.
- **Styling**: The `styles.css` file should define styles for the canvas and restart button (e.g., centering, colors, or hover effects).
- **Enhancements**: Consider adding:
  - Sound effects for flapping, scoring, or collisions.
  - High score storage using `localStorage`.
  - Mobile support with touch/click input for flapping.
  - Background images or sprites for the bird and pipes.
  - A start screen or difficulty settings.
- **SEO**: Add meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility, e.g., "Flappy Bird clone by Roshan Kumar Prajapati".
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).
- **Performance**: The game is lightweight but could benefit from sprite-based graphics for a polished look.

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with HTML, CSS, and JavaScript for a nostalgic arcade experience.
- Inspired by the classic Flappy Bird game with simple canvas-based graphics.
- Created by Roshan Kumar Prajapati.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- 📧 Email: roshanjsr5555@gmail.com
- 📞 Phone: +91 7061126213
- 🌐 GitHub: [The-Roshan](https://github.com/The-Roshan)
