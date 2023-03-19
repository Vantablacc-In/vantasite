This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


```
vantasite-in
└─ Vantablacc
   ├─ .babelrc
   ├─ .env.local
   ├─ .eslintrc.json
   ├─ .next
   │  ├─ build-manifest.json
   │  ├─ cache
   │  │  ├─ images
   │  │  │  ├─ A8F3jQpfvQVEmjxNbn-Eh0MO6kKQZ8HnMXtPTKLdlMU=
   │  │  │  │  └─ 60.1679239319521.MVgxfX-5dESEq5Qy6kg-qdAj5jTMarrETqJ3p141rg0=.webp
   │  │  │  └─ Nltjxrge87imvagW1TbF82FisCw8tlx8YYXt3qrpC4s=
   │  │  │     └─ 0.1679239315758.EGaAGMPXFvT+6FmkZKLI1WT8OdvTnDVMyLlThYKXuNY=.gif
   │  │  └─ webpack
   │  │     ├─ client-development
   │  │     │  ├─ 0.pack
   │  │     │  ├─ 1.pack
   │  │     │  ├─ 2.pack
   │  │     │  ├─ 3.pack
   │  │     │  ├─ 4.pack
   │  │     │  ├─ 5.pack
   │  │     │  ├─ index.pack
   │  │     │  └─ index.pack.old
   │  │     ├─ client-development-fallback
   │  │     │  ├─ 0.pack
   │  │     │  └─ index.pack
   │  │     └─ server-development
   │  │        ├─ 0.pack
   │  │        ├─ 1.pack
   │  │        ├─ 2.pack
   │  │        ├─ 3.pack
   │  │        ├─ index.pack
   │  │        └─ index.pack.old
   │  ├─ package.json
   │  ├─ react-loadable-manifest.json
   │  ├─ server
   │  │  ├─ middleware-manifest.json
   │  │  ├─ pages
   │  │  │  ├─ index.js
   │  │  │  ├─ _app.js
   │  │  │  ├─ _document.js
   │  │  │  └─ _error.js
   │  │  ├─ pages-manifest.json
   │  │  └─ webpack-runtime.js
   │  ├─ static
   │  │  ├─ chunks
   │  │  │  ├─ amp.js
   │  │  │  ├─ main.js
   │  │  │  ├─ pages
   │  │  │  │  ├─ index.js
   │  │  │  │  ├─ _app.js
   │  │  │  │  └─ _error.js
   │  │  │  ├─ polyfills.js
   │  │  │  ├─ react-refresh.js
   │  │  │  └─ webpack.js
   │  │  ├─ development
   │  │  │  ├─ _buildManifest.js
   │  │  │  ├─ _middlewareManifest.js
   │  │  │  └─ _ssgManifest.js
   │  │  └─ webpack
   │  │     ├─ 0171578d3f91f5a4.webpack.hot-update.json
   │  │     └─ webpack.0171578d3f91f5a4.hot-update.js
   │  └─ trace
   ├─ components
   │  ├─ admin
   │  │  ├─ Dashboard.js
   │  │  ├─ OrderManagement.js
   │  │  └─ ProductManagement.js
   │  ├─ cart
   │  │  ├─ Cart.js
   │  │  ├─ CartItem.js
   │  │  ├─ CartSummary.js
   │  │  └─ MiniCart.js
   │  ├─ checkout
   │  │  ├─ OrderSummary.js
   │  │  ├─ PaymentForm.js
   │  │  └─ ShippingForm.js
   │  ├─ common
   │  │  ├─ Button.js
   │  │  ├─ Footer.js
   │  │  ├─ Header.js
   │  │  └─ Layout.js
   │  ├─ earlysignup(old)
   │  │  ├─ ContactForm.js
   │  │  ├─ EmptyPopup.js
   │  │  ├─ ExistingPopup.js
   │  │  ├─ Footer.js
   │  │  ├─ Gooey.js
   │  │  ├─ Logo.js
   │  │  ├─ SuccessPopup.js
   │  │  └─ Timer.js
   │  ├─ product
   │  │  ├─ ProductCard.js
   │  │  ├─ ProductDetails.js
   │  │  ├─ ProductFilter.js
   │  │  └─ ProductList.js
   │  └─ user
   │     ├─ AddressForm.js
   │     ├─ ForgotPassword.js
   │     ├─ LoginForm.js
   │     ├─ OrderDetails.js
   │     ├─ RegisterForm.js
   │     ├─ ResetPassword.js
   │     └─ UserProfile.js
   ├─ context
   │  ├─ CartContext.js
   │  ├─ ProductsContext.js
   │  └─ UserContext.js
   ├─ dbschema.txt
   ├─ gold-scorpion
   │  ├─ .eslintrc
   │  ├─ .sanity
   │  │  └─ runtime
   │  │     ├─ app.js
   │  │     └─ index.html
   │  ├─ package-lock.json
   │  ├─ package.json
   │  ├─ plugins
   │  │  └─ sanity-plugin-tutorial
   │  │     ├─ CustomDefaultLayout.tsx
   │  │     ├─ GetStartedTutorial.tsx
   │  │     └─ index.ts
   │  ├─ postcss.config.js
   │  ├─ README.md
   │  ├─ sanity.cli.ts
   │  ├─ sanity.config.ts
   │  ├─ schemas
   │  │  └─ index.ts
   │  ├─ static
   │  └─ tsconfig.json
   ├─ jsconfig.json
   ├─ lib
   │  ├─ sanityClient.js
   │  ├─ stripeClient.js
   │  └─ supabaseClient.js
   ├─ next.config.js
   ├─ package-lock.json
   ├─ package.json
   ├─ pages
   │  ├─ account
   │  │  ├─ addresses.js
   │  │  ├─ index.js
   │  │  ├─ orders.js
   │  │  └─ profile.js
   │  ├─ admin
   │  │  ├─ index.js
   │  │  ├─ orders.js
   │  │  └─ products.js
   │  ├─ api
   │  │  └─ sendgrid.js
   │  ├─ cart.js
   │  ├─ checkout.js
   │  ├─ index.js
   │  ├─ login.js
   │  ├─ product
   │  │  └─ [id].js
   │  ├─ register.js
   │  ├─ _app.js
   │  └─ _document.js
   ├─ postcss.config.js
   ├─ public
   │  ├─ emailtemplate.html
   │  ├─ eyes.gif
   │  ├─ eyescropped.gif
   │  ├─ favicon.ico
   │  ├─ logo.png
   │  ├─ next.svg
   │  ├─ thirteen.svg
   │  └─ vercel.svg
   ├─ README.md
   ├─ structure.txt
   ├─ styles
   │  └─ globals.css
   └─ tailwind.config.js

```