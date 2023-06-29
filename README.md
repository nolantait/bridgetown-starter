# Bridgetown Starter

This is a [bridgetown](https://www.bridgetownrb.com) starter for creating a new
site.

I use this for publishing on [Tainted Coders](https://taintedcoders.com).

This can also be used as a playground to design new themes using DaisyUI.

It comes preloaded with:

- Turbo with page transitions for a nicer browsing experience
- Bridgetown SEO plugin
- Bridgetown sitemap plugin
- Bridgetown feed plugin
- Tailwindcss
- DaisyUI
- A custom theme designer interface for designing your widgets
- Dynamically sized margin and padding sizes (p-sm, p-xs, etc)
- Buildpacks for deploying on [Render](https://render.com) or anything
  supporting them


## Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Development](#development)
- [Commands](#commands)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Prerequisites

- [GCC](https://gcc.gnu.org/install/)
- [Make](https://www.gnu.org/software/make/)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
  - `>= 2.7`
- [Bridgetown Gem](https://rubygems.org/gems/bridgetown)
  - `gem install bridgetown -N`
- [Node](https://nodejs.org)
  - `>= 12`
- [Yarn](https://yarnpkg.com)

## Install

```sh
cd bridgetown-site-folder
bundle install && yarn install
```
> Learn more: [Bridgetown Getting Started Documentation](https://www.bridgetownrb.com/docs/).

## Development

To start your site in development mode, run `bin/bridgetown start` and navigate to [localhost:4000](https://localhost:4000/)!

Use a [theme](https://github.com/topics/bridgetown-theme) or add some [plugins](https://www.bridgetownrb.com/plugins/) to get started quickly.

### Commands

```sh
# running locally
bin/bridgetown start

# build & deploy to production
bin/bridgetown deploy

# load the site up within a Ruby console (IRB)
bin/bridgetown console
```

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)

## Deployment

You can deploy Bridgetown sites on hosts like Render or Vercel as well as traditional web servers by simply building and copying the output folder to your HTML root.

> Read the [Bridgetown Deployment Documentation](https://www.bridgetownrb.com/docs/deployment) for more information.

## Contributing

If repo is on GitHub:

1. Fork it
2. Clone the fork using `git clone` to your local development machine.
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request
