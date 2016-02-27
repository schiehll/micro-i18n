# micro-i18n [![npm](https://badge.fury.io/js/micro-i18n.svg)](http://badge.fury.io/js/micro-i18n) [![Build Status](https://travis-ci.org/schiehll/micro-i18n.svg?branch=master)](https://travis-ci.org/schiehll/micro-i18n)

Basic js micro library for i18n, with support for placeholders and multiple plural forms.

~1.8kb

## Installation

```bash
$ npm install micro-i18n
```

## Usage

Just import it:

```js
import i18n from 'micro-i18n'
```

If you are using it directly in the browser, you can access it with th i18n global.

## Api

We have just two static methods:

```js
const enUs = {
  EASY: 'easy',
  HATE_SOMETHING: 'I hate {{something}}!',
  REALLY_HATE_SOMETHING: 'I hate {{something}}! I really hate {{something}}!',
  QUANTITY: {
    0: 'no {{what}}',
    1: '1 {{what}}',
    n: '{{n}} {{what}}'
  },
  MESSAGES: {
    0: 'messages',
    1: 'message',
    n: 'messages'
  } 
}

i18n.setLang(enUs)
i18n.t('EASY') //easy
```
## Placeholders

```js
i18n.t('HATE_SOMETHING', {something: 'haters'}) //I hate haters!
i18n.t('REALLY_HATE_SOMETHING', {something: 'haters'}) //I hate haters! I really hate haters!
```

## Plural

```js
i18n.t('MESSAGES', {n: 0}) //messages
i18n.t('MESSAGES', {n: 1}) //message
i18n.t('MESSAGES', {n: 10}) //messages
```

## Placeholders + plural

```js
i18n.t('QUANTITY', {n: 0, what: 'ducks'}) //no ducks
i18n.t('QUANTITY', {n: 1, what: 'duck'}) //1 duck
i18n.t('QUANTITY', {n: 10, what: 'ducks'}) //10 ducks
i18n.t('QUANTITY', {n: 10, what: i18n.t('MESSAGES', {n: 10})}) //10 messages
```