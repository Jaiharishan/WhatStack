
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

![whatstack-login](https://github.com/user-attachments/assets/ca2b244f-94eb-4135-94a7-531c53add151)

![whatstack-home-light](https://github.com/user-attachments/assets/ea00a679-8875-4cd6-a89a-0628f31bc892)

![whatstack-home-dark](https://github.com/user-attachments/assets/22e15478-9d47-41e6-bbf3-8ed9d7f959ce)

![whatstack-search](https://github.com/user-attachments/assets/fbef2805-d8fa-492e-9521-46457fab624e)






## Appendix

The application is still under development and more features are yet to be added.


