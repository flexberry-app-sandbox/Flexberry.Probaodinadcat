import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProbaodinadcatГостьLForm from './forms/i-i-s-probaodinadcat-гость-l';
import IISProbaodinadcatДолжностиLForm from './forms/i-i-s-probaodinadcat-должности-l';
import IISProbaodinadcatКартаLForm from './forms/i-i-s-probaodinadcat-карта-l';
import IISProbaodinadcatКомнатаLForm from './forms/i-i-s-probaodinadcat-комната-l';
import IISProbaodinadcatРегистрацВходаLForm from './forms/i-i-s-probaodinadcat-регистрац-входа-l';
import IISProbaodinadcatСотрудникLForm from './forms/i-i-s-probaodinadcat-сотрудник-l';
import IISProbaodinadcatГостьEForm from './forms/i-i-s-probaodinadcat-гость-e';
import IISProbaodinadcatДолжностиEForm from './forms/i-i-s-probaodinadcat-должности-e';
import IISProbaodinadcatКартаEForm from './forms/i-i-s-probaodinadcat-карта-e';
import IISProbaodinadcatКомнатаEForm from './forms/i-i-s-probaodinadcat-комната-e';
import IISProbaodinadcatРегистрацВходаEForm from './forms/i-i-s-probaodinadcat-регистрац-входа-e';
import IISProbaodinadcatСотрудникEForm from './forms/i-i-s-probaodinadcat-сотрудник-e';
import IISProbaodinadcatВходГостяModel from './models/i-i-s-probaodinadcat-вход-гостя';
import IISProbaodinadcatВходСотрудникаModel from './models/i-i-s-probaodinadcat-вход-сотрудника';
import IISProbaodinadcatГостьModel from './models/i-i-s-probaodinadcat-гость';
import IISProbaodinadcatДолжностиModel from './models/i-i-s-probaodinadcat-должности';
import IISProbaodinadcatКартаModel from './models/i-i-s-probaodinadcat-карта';
import IISProbaodinadcatКомнатаModel from './models/i-i-s-probaodinadcat-комната';
import IISProbaodinadcatРегистрацВходаModel from './models/i-i-s-probaodinadcat-регистрац-входа';
import IISProbaodinadcatСотрудникModel from './models/i-i-s-probaodinadcat-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probaodinadcat-вход-гостя': IISProbaodinadcatВходГостяModel,
    'i-i-s-probaodinadcat-вход-сотрудника': IISProbaodinadcatВходСотрудникаModel,
    'i-i-s-probaodinadcat-гость': IISProbaodinadcatГостьModel,
    'i-i-s-probaodinadcat-должности': IISProbaodinadcatДолжностиModel,
    'i-i-s-probaodinadcat-карта': IISProbaodinadcatКартаModel,
    'i-i-s-probaodinadcat-комната': IISProbaodinadcatКомнатаModel,
    'i-i-s-probaodinadcat-регистрац-входа': IISProbaodinadcatРегистрацВходаModel,
    'i-i-s-probaodinadcat-сотрудник': IISProbaodinadcatСотрудникModel
  },

  'application-name': 'Probaodinadcat',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probaodinadcat',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probaodinadcat',
          title: 'Probaodinadcat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-probaodinadcat-комната-l': {
            caption: 'Комнаты',
            title: ''
          },
          'i-i-s-probaodinadcat-карта-l': {
            caption: 'Карты',
            title: ''
          },
          персонал: {
            caption: 'Персонал',
            title: 'Персонал',
            'i-i-s-probaodinadcat-должности-l': {
              caption: 'Должности',
              title: 'Должности'
            },
            'i-i-s-probaodinadcat-сотрудник-l': {
              caption: 'Сотрудники',
              title: 'Сотрудник'
            }
          },
          клиенты: {
            caption: 'Клиенты',
            title: 'Клиенты',
            'i-i-s-probaodinadcat-гость-l': {
              caption: 'Гости',
              title: 'Гость'
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-probaodinadcat-регистрац-входа-l': {
              caption: 'Регистрация входа в номер',
              title: 'Регистрац входа'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probaodinadcat-гость-l': IISProbaodinadcatГостьLForm,
    'i-i-s-probaodinadcat-должности-l': IISProbaodinadcatДолжностиLForm,
    'i-i-s-probaodinadcat-карта-l': IISProbaodinadcatКартаLForm,
    'i-i-s-probaodinadcat-комната-l': IISProbaodinadcatКомнатаLForm,
    'i-i-s-probaodinadcat-регистрац-входа-l': IISProbaodinadcatРегистрацВходаLForm,
    'i-i-s-probaodinadcat-сотрудник-l': IISProbaodinadcatСотрудникLForm,
    'i-i-s-probaodinadcat-гость-e': IISProbaodinadcatГостьEForm,
    'i-i-s-probaodinadcat-должности-e': IISProbaodinadcatДолжностиEForm,
    'i-i-s-probaodinadcat-карта-e': IISProbaodinadcatКартаEForm,
    'i-i-s-probaodinadcat-комната-e': IISProbaodinadcatКомнатаEForm,
    'i-i-s-probaodinadcat-регистрац-входа-e': IISProbaodinadcatРегистрацВходаEForm,
    'i-i-s-probaodinadcat-сотрудник-e': IISProbaodinadcatСотрудникEForm
  },

});

export default translations;
