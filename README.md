# vue-node-hide-api-key

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Backend Setup

For this project, you need both the fron-end and back-end running at the same time. You will also need an API key:

- In the `backend` folder, rename `.env.sample` to `.env`
- Generate an API key at https://openweathermap.org/
- Add your API key to `backend/.env`

### Install dependencies
```
cd backend
npm install 
```

### Launch the backend
```
npx nodemon
```