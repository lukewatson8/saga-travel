# React + TypeScript + Vite

## Requirements

Node: v22.12 or higher

## Pull site

Pull site from Github

- SSH - `git clone git@github.com:lukewatson8/saga-travel.git {foldername}`
- HTTPS - `git clone https://github.com/lukewatson8/saga-travel.git {foldername}`

## Running the application

In the root of the folder run `npm install`

For development run: `npm run dev`

For production run:

- `npm run build`
- `npm run preview`

# Project comments

I decided on a custom React App due to the size of the task. However, if this were for a larger purpose and included dynamic pages I would have used Next.JS to take advantage of their built in features and quick set up.

I would also change to use a utility framework such as tailwind, allowing for the application styles to scale more efficiently and remain consistent across developers.

In terms of filters, I have not added any error handling for if these were to fail. My reasoning for this is that I don't feel showing a user an error message for this feature helps them in that moment and could potentially cause confusion.
