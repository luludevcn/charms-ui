# Charms UI

Charms UI is a modern React component library built with TypeScript and TailwindCSS. It supports on-demand imports and full type definitions for seamless integration in React projects.

## Installation

```bash
npm install charms-ui
```

## Quick Start

Import and use components in your React project:

```tsx
import { Badge } from 'charms-ui';
// Or import on demand
import { Badge } from 'charms-ui/Badge';

export default function App() {
  return <Badge title={'visiters'} count={20003} leftBg='bg-gray-600' rightBg='bg-red-600' href='http://luludev.cn'></Badge>;
}
```

## Components

- Badge
- More components coming soon...

## On-demand Import

You can import components directly:

```tsx
import { Badge } from 'charms-ui/Badge';
```

## TypeScript Support

All components come with auto-generated TypeScript type definitions for better IDE experience.

## Styling

Charms UI uses TailwindCSS for styling. You can customize Tailwind configuration in your own project.

## Contributing

Contributions are welcome! Please submit issues and pull requests.

```bash
git clone https://github.com/your-org/charms-ui.git
npm install
npm run dev
```

## License

MIT