# Price Watch
PriceWatch is a Discord bot using the new [DexGuru](https://dex.guru) API for watching your favourite tokens and coins.

## Usage

To run it yourself, clone the bot like this:

```bash
git clone https://github.com/arenmarsden/PriceWatch
```

Create a `.env` file and enter your DexGuru API token, and then head to the [Discord Developer Portal](https://discord.com/developers),
and create a new application, and then enter your bot token in `config.json`. After this is done, execute the following commands:

```bash
yarn run tsc --build
docker build -t PriceWatch:1.0 .
docker run --name pricewatch -it PriceWatch  
```

## License

Copyright (c) Aren Marsden & Contributers 2021.

This application is licensed under the [MIT License](LICENSE.txt)
