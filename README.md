It is a [Next.js](https://nextjs.org/) project built on React and TailwindCSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the code in `src`. The page auto-updates as you edit the file.

To learn more, take a look at the following resources:

- [React Documentation](https://react.dev/) - learn about React
- [TailwindCSS Documentation](https://tailwindcss.com/) - learn about TailwindCSS
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Babel Installation

To compile your code for older browsers, you need to install Babel and its dependencies. Run the following command:

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/cli
```

After installing Babel, you can add a Babel configuration file (`babel.config.json`) to your project root with the following content:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Now, you can use Babel to compile your code by running:

```bash
npx babel src --out-dir dist
```

## React Icons Installation

To use react-icons in your project, you need to install the `react-icons` package. Run the following command:

```bash
npm install react-icons
```

After installing the package, you can import and use the icons in your components. For example:

```jsx
import { FaBars, FaTimes, FaChevronLeft, FaChevronRight, FaWifi, FaLaptop, FaDumbbell, FaUtensils, FaTv, FaConciergeBell } from 'react-icons/fa';

// Usage in a component
function MyComponent() {
  return (
    <div>
      <FaBars />
      <FaTimes />
      <FaChevronLeft />
      <FaChevronRight />
      <FaWifi />
      <FaLaptop />
      <FaDumbbell />
      <FaUtensils />
      <FaTv />
      <FaConciergeBell />
    </div>
  );
}
```
