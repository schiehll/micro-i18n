import test from 'ava'
import i18n from './index.js'

const enUS = {
  EASY: 'easy',
  HATE_SOMETHING: 'I hate {{something}}!',
  REALLY_HATE_SOMETHING: 'I hate {{something}}! I really hate {{something}}!',
  HATE_SOMETHING_LIKE_THING: 'I hate {{something}}! But I like {{thing}}!',
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

const ptBR = {
  EASY: 'fácil',
  HATE_SOMETHING: 'Eu odeio {{something}}!',
  REALLY_HATE_SOMETHING: 'Eu odeio {{something}}! Eu realmente odeio {{something}}!',
  HATE_SOMETHING_LIKE_THING: 'Eu odeio {{something}}! Mas eu gosto de {{thing}}!',
  QUANTITY: {
    0: 'nenhum {{what}}',
    1: '1 {{what}}',
    n: '{{n}} {{what}}'
  },
  MESSAGES: {
    0: 'mensagens',
    1: 'mensagem',
    n: 'mensagens'
  } 
}

test('should translate a key', t => {
  i18n.setLang(enUS)
  let actual = i18n.t('EASY')
  let expected = 'easy'
  t.same(actual, expected)
})

test('should translate a key with placeholders', t => {
  i18n.setLang(enUS)
  let actual = i18n.t('HATE_SOMETHING', {something: 'haters'})
  let expected = 'I hate haters!'
  t.same(actual, expected)

  actual = i18n.t('REALLY_HATE_SOMETHING', {something: 'haters'})
  expected = 'I hate haters! I really hate haters!'
  t.same(actual, expected)

  actual = i18n.t('HATE_SOMETHING_LIKE_THING', {something: 'haters', thing: 'pizza'})
  expected = 'I hate haters! But I like pizza!'
  t.same(actual, expected)
})

test('should translate a key with plural', t => {
  i18n.setLang(enUS)
  let actual = i18n.t('MESSAGES', {n: 10})
  let expected = 'messages'
  t.same(actual, expected)
})

test('should translate a key with plural and placeholders', t => {
  i18n.setLang(enUS)
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
  i18n.setLang(enUS)
  let actual = i18n.t('NO_KEY')
  let expected = 'NO_KEY'
  t.same(actual, expected)
})

test('should be possible to change the lang', t => {
  i18n.setLang(enUS)
  let actual = i18n.t('EASY')
  let expected = 'easy'
  t.same(actual, expected)

  i18n.setLang(ptBR)
  actual = i18n.t('EASY')
  expected = 'fácil'
  t.same(actual, expected)
})