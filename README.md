This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Time spend 2hrs & 14 min.

## Running the server

### Locally
First, run the development server:

Use node 22
```bash
nvm use
```


Install dependencies 
```bash
yarn install
# or
npm install
```

Run the project
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Docker
```bash
docker-compose up -d --build
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Tools used

TS
Docker

### UI
MUI

### Formating
Eslint
Prettier
Pending (Husky)

## Justification

I decided to initialize the project with create-next-app. It is really fast and allows several initial configurations like using TypeScript, ESLint, Next Router, etc.


Why MUI?

I picked [MUI](https://mui.com) because it is a really popular UI framework, and due to the time limitation, I think it was the most time-effective tool. (As a note, I prefer using Styled-Components and Storybook, but this was a small project). So with [MUI](https://mui.com), a small theme was set and some Typography settings that, honestly speaking, I found on the Internet. Besides that, everything else was set up using MUI official docs.


Why docker?

I think that nowadays having a non-dockerized app is a bad idea, especially in a team where environments can vary greatly between Windows, Mac, and Ubuntu or any other Linux distribution. So I always dockerize my projects from the beginning.


## Problems faced

MUI just released their new version 6 a couple of days ago, and I was facing issues using it, so I decided to use version 5 that I know how to use. This way, I didn't spend too much time configuring it.




