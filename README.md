# ar-meganefes

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

AR meganefes is a Three.js-based project that creates a pair of glasses (megane) for augmented reality (AR) applications.

## Features
- Creates a 3D model of a pair of glasses using Three.js
- Provides a customizable function `createMegane()` to generate the glasses
- Intended for use in AR applications

## Usage
To use the `ar-meganefes` project, follow these steps:

1. Import the `createMegane()` function from the `createMegane.js` file:

```javascript
import { createMegane } from './createMegane.js';
```

2. Call the `createMegane()` function to generate the glasses object. You can optionally pass a radius parameter (default is 0.1):

```javascript
const glasses = createMegane(0.5);
```

3. Add the glasses object to your Three.js scene:

```javascript
scene.add(glasses);
```

## License
MIT License — see [LICENSE](LICENSE).