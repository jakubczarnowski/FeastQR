# FeastQR: Open Source SaaS Online Menu System 🌐

<a href="https://www.producthunt.com/posts/feastqr?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-feastqr" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=425852&theme=light" alt="FeastQR - Free Open Source Saas For Restaurants | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Overview 📖

FeastQR is a cutting-edge, open-source SaaS online menu system for restaurants. Based on this [template](https://github.com/jakubczarnowski/t3-starter-supabase-i18n/blob/main/README.md?plain=1). Made by [Tryhards Inc.](https://tryhards.space/)

## Key Features 🔑

- **QR Code Generation**: Facilitate ordering with unique QR codes.
- **Real-time Menu and Price Management**: Update menus and prices as needed.
- **Ready to print pdf templates**: Customize your own Menu QR Card!

## Technology Stack 💻

- **Frontend**: Next.js 14 with App Directory
- **Backend**: Supabase for Auth, Migrations, Multiple Environments, CI/CD, and Storage
- **Payments**: Integration with LemonSqueezy
- **Data Handling**: TRPC, Prisma, and Postgres
- **UI**: Tailwind CSS and Shadcn UI
- **Deployment**: Edge Ready with Vercel Edge
- **Analytics**: Umami
- **Internalization**: i18next

For more details, visit [FeastQR](https://feastqr.com).

## What's next? How do I start this? 🚀

- Clone this project
- Run

```
pnpm install
```

- Copy the .env.example into .env and fill out the envs

## If you want to develop on local supabase instance, follow the steps below: 👨‍💻

Then go to supabase/config.toml file and change your service name.

Link the project with your supabase instance:

- supabase link --project-ref *<*project-id*>*

#### If you want to create migrations by hand, go ahead and use this command: ✍️

- supabase migration new <_migration_name_>

Then go to supabase/migrations folder and add your SQL there.

#### If you want to make changes with studio, use 🎨

- pnpm db:diff <_migration_name_>

## Run these initial commands 🧑‍💻

Every time you change something on local instance:

```
pnpm prepare:local
```

- If you develop on cloud supabase run:

```
pnpm prepare:remote
```

- Run the project

```
pnpm dev
```

If you are not familiar with the different technologies used in this project, please refer to the respective docs. 📚

- [Next.js app router](https://nextjs.org/docs)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Supabase](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## Learn More 🧐

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this? 🚢

Follow deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Don't need Internalization? 🤔

I know, that's a rare request to have. Check out [this](https://github.com/Jaaneek/t3-supabase-app-router) repo for a more 'lightweight' version!

## Authors

👤 **Milosz Jankiewicz**

- Twitter: [@twitter.com/jaaneek/](https://twitter.com/jaaneek)
- Github: [@Jaaneek](https://github.com/Jaaneek)
- LinkedIn: [@https://www.linkedin.com/in/jaaneek](https://www.linkedin.com/in/mi%C5%82osz-jankiewicz-554562168/)

👤 **Jakub Czarnowski**

- Twitter: [@twitter.com/akubdev/](https://twitter.com/charnowsky)
- Github: [@jakubczarnowski](https://github.com/jakubczarnowski)
- LinkedIn: [@https://www.linkedin.com/in/czarnowskijakub/](https://www.linkedin.com/in/czarnowskijakub/)

👤 **Lukasz Cybulski**

- Twitter: [@twitter.com/akubdev/](https://twitter.com/_soib)
- Github: [@soib](https://github.com/soib)
- LinkedIn: [@https://www.linkedin.com/in/lukaszcybulski/](https://www.linkedin.com/in/lukaszcybulski/)

👤 **Patryk Szczurowski**
- Github: [@patryiku](https://github.com/patryiku)
