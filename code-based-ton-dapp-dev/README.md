# TON Dev SDK

<p align="center">
  Build TON Full-stack, type-safe web3 applications on any TON-supported chain like TON, OpTON, and TON-Greenfield.
</p>

<p align="center">
  Get started with TON Dev SDK by running <code>npx ton-dev-sdk create my-ton-app</code>
</p>

## What is TON Dev SDK?

TON Dev SDK is a comprehensive web3 development stack created by [Kamal Singh](https://twitter.com/0xkamal7) and powered by [hardhat](https://hardhat.org). It is designed to help developers create full-stack web3 applications on TON-compatible chains with ease.

### Key Features:

- **TypeScript**: Ensures type-safe development throughout your project.
- **Modular Structure**: Divided into two main parts:
  1. **Contracts**: Utilizes [Solidity](https://docs.soliditylang.org/en/v0.8.20/), the [Hardhat](https://hardhat.org/) framework, and [hardhat](https://hardhat.org). Ready for deployment on all TON-supported chains including TON, OpTON, and TON-Greenfield.
  2. **Application**: Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), and [hardhat](https://hardhat.org).

This opinionated template focuses on developer experience, aiming to create performant, scalable, and secure web3 applications with elegant user interfaces.

## Why Use TON Dev SDK?

TON Dev SDK includes everything you need in a modern web3 development stack:

- **Type-Safe Environment**: Leverage TypeScript for consistency and reliability across your project.
- **Beautiful UI Components**: Utilize [shadcn/ui](https://ui.shadcn.com/) for pre-built components and customize your styles with [Tailwind CSS](https://tailwindcss.com/).
- **Smooth Onboarding**: Provide seamless onboarding experiences with support for local wallets and account abstraction.
- **Decentralized Services Integration**: Easily connect to decentralized services using the provided infrastructure.

## Getting Started

To start building your web3 application with TON Dev SDK, run the following command:

```sh
npx ton-dev-sdk create my-ton-app
```

This command sets up a new project with the necessary structure and dependencies to get you up and running quickly.

## Example Structure

```
my-ton-app/
├── contracts/
│   ├── hardhat.config.ts
│   ├── contracts/
│   └── scripts/
├── application/
│   ├── pages/
│   ├── styles/
│   ├── components/
│   └── public/
└── package.json
```

- **`/contracts`**: Contains your Solidity contracts, Hardhat configuration, and deployment scripts, ready for deployment on TON, OpTON, and TON-Greenfield.
- **`/application`**: Includes your Next.js application with styling and UI components.

## Contributing

Contributions are welcome! If you have suggestions or find any issues, please open an issue or submit a pull request on [GitHub](https://github.com/your-repo-url).

## License

TON Dev SDK is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Build your next web3 project with confidence using TON Dev SDK, and join the growing community of developers leveraging the power of TON-compatible chains.