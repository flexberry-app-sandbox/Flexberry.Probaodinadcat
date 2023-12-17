import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-probaodinadcat-комната-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probaodinadcat-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probaodinadcat-комната-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-probaodinadcat-карта-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probaodinadcat-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probaodinadcat-карта-l.title'),
            icon: 'building',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.персонал.caption'),
            title: i18n.t('forms.application.sitemap.отель.персонал.title'),
            children: [{
              link: 'i-i-s-probaodinadcat-должности-l',
              caption: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-probaodinadcat-должности-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-probaodinadcat-должности-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-probaodinadcat-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-probaodinadcat-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-probaodinadcat-сотрудник-l.title'),
              icon: 'list',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.клиенты.caption'),
            title: i18n.t('forms.application.sitemap.отель.клиенты.title'),
            children: [{
              link: 'i-i-s-probaodinadcat-гость-l',
              caption: i18n.t('forms.application.sitemap.отель.клиенты.i-i-s-probaodinadcat-гость-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.клиенты.i-i-s-probaodinadcat-гость-l.title'),
              icon: 'archive',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.документы.caption'),
            title: i18n.t('forms.application.sitemap.отель.документы.title'),
            children: [{
              link: 'i-i-s-probaodinadcat-регистрац-входа-l',
              caption: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probaodinadcat-регистрац-входа-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probaodinadcat-регистрац-входа-l.title'),
              icon: 'archive',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})