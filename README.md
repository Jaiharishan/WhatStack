
# WhatStack

Tired of searching for right tools for your project? What stack to use? Then try WhatStack...

WhatStack is a website consists of various tools, technologies, languages and Frameworks which you can find useful for your project or business.




## Features

- Full Text Search implemented for searching.
- OAuth for authentication.
- Client and Server Components used to build.
- Like and Share options.
- Light/Dark theme.


## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Fork the repository and clone the repo to your local.

   ```bash
   git clone https://github.com/[YOUR_GITHUB_NAME]/WhatStack
   ```

3. Open it in your editor of choice. (I used VSCode)

4. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The application should now be running on [localhost:3000](http://localhost:3000/)
    
## Running in Docker

You can also use Docker Containers to run the application.




## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Appendix

The application is still under development and more features are yet to be added.


