# 

# YAML from matter

This is description of the custom YAML front matter tags used in Wizcorp presentations.

For detailed information see [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) and [YAML front matter[(https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter)

## Required

All following YAML variables are required:

- layout: dark. LAyout tag must be present and should be set to 'dark' 
- title: 
- subtitle: 
- location: 
- author: 
- date: 
- description: used in HTML meta 'description'

See index.html file, for the details of variable usage.

## Optional

Optional tags are only renedered if present.

- twitter: 
- email: 

### Example

Example of the YAML section from Ally's presentation.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~yaml
layout: dark
title: HTML5 Gaming With PhoneGap (+plugins)
subtitle: PhoneGap Meetup 
location: |
  @Microsoft Tokyo Japan
description: |
  ゲームエクスペリエンスをもっと豊かにするためにPhoneGap & PhoneGap pluginsを使用する方法について説明します。 PhoneGapとNode.jsを使ったHTML5ゲーム設計のための技術についてや、WebView間のデータのやりとについても説明します。
author: Ally Ogilvie
date: April 3rd 2013
twitter: allyogilvie
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


# Testing

There are rspec tests created in `./spec` directory for testing basic complaince of YAML structures to what described above.

To be able to use Rspec, you need Ruby installed, steps below assume that use have Ruby installed.

## Install necessary packgases

Run `bundle install` at the top of presentations directory.

## Test

Run `bundle exec rspec spec`, in case if you have all necessary gems installed at the system level, you simply need to run `rspec`.
