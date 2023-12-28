# Welcome to My Personal Website :smile:

This repository contains the source code and assets for my personal website.
It showcases my technical skills, projects, and provides a platform for me to connect with other developers, employers, HRs or anyone who are interested. :grin:

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Get Started](#get-started)

## About

This website serves as a digital portfolio and a platform to showcase my work, skills, and experiences. It includes sections including multiple pages, projects, resume, and contact information. I have designed and developed this website to reflect my personality and highlight my achievements.

## Features

## Technologies Used

This website is purely built by [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/) as building tool. [TailwindCSS](https://tailwindcss.com/) is used as the UI library / framework. Please visit the /app/web for more information.
For backend, please visit the /app/api directory for more information. It is built with [NodeJS](https://nodejs.org/en) and [ExpressJS](https://expressjs.com/). Its main functionality is to redirect email to my personal email address.
For the building system, [TurboRepo](https://turbo.build/repo) is used to build this monorepo. Since I have done 90% of the project and found that I require an api endpoint to be called in my application, and I am too lazy to migrate the application to a NextJS application, I choose to build the entire application using TurboRepo.
For more packages, please visit the package.json file.

## Get Started

1. Make sure that you have installed pnpm.
2. ```cd personal_website```
3. ```pnpm install```
4. ```pnpm dev``` (for local development)

PS: 
For local development, port will be 3000.
For production, port will be 5678.