import test from 'ava'
import i18n from './index.js'

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

test('should translate a key', t => {
  i18n.setLang(enUs)
  let actual = i18n.t('EASY')
  let expected = 'easy'
  t.same(actual, expected)
})

test('should translate a key with placeholders', t => {
  i18n.setLang(enUs)
  let actual = i18n.t('HATE_SOMETHING', {something: 'haters'})
  let expected = 'I hate haters!'
  t.same(actual, expected)

  actual = i18n.t('REALLY_HATE_SOMETHING', {something: 'haters'})
  expected = 'I hate haters! I really hate haters!'
  t.same(actual, expected)
})

test('should translate a key with plural', t => {
  i18n.setLang(enUs)
  let actual = i18n.t('MESSAGES', {n: 10})
  let expected = 'messages'
  t.same(actual, expected)
})

test('should translate a key with plural and placeholders', t => {
  i18n.setLang(enUs)
  let actual = i18n.t('QUANTITY', {n: 5, what: 'ducks'})
  let expected = '5 ducks'
  t.same(actual, expected)

  actual = i18n.t('QUANTITY', {n: 0, what: 'ducks'})
  expected = 'no ducks'
  t.same(actual, expected)

  actual = i18n.t('QUANTITY', {n: 1, what: i18n.t('MESSAGES', {n: 1})})
  expected = '1 message'
  t.same(actual, expected)
})

test('should fallback to key', t => {
  i18n.setLang(enUs)
  let actual = i18n.t('NO_KEY')
  let expected = 'NO_KEY'
  t.same(actual, expected)
})