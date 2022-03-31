# Bootcamp - Session 4

- Components
- state vs props
  | State | Props |
  |-----------------------------------|----------------------------------------------------|
  | Inmutables | Created at component level |
  | Are passsed from parent component | Mutable |
  | | Can be private or public to their child components |
- components communication
- React lifecycle
  - Mount
  - Update
  - Unmount
    ![](assets/image.png)
    [Image](https://miro.medium.com/max/1400/1*6X_7HKFdQoh9eXqWgwQuvQ.png)
- Context API
  - [Context – React](https://es.reactjs.org/docs/context.html)

## Useful

- [tailwindcss](https://tailwindcss.com/)

* [date-fns](https://date-fns.org/)

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- tailwind.config.js

```javascript
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

- styles.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
