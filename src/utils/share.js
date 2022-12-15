import { sendShareEvent } from './analytics';

export default {
  getLink(type, customOptions = {}) {
    const options = {
      ...this.getDefault(),
      ...customOptions,
    };

    let link = '';
    if (customOptions.link) {
      options.url = customOptions.link;
    }

    const text = `${options.title} ${options.description}`;

    switch (type) {
      case 'fb':
        link = `https://www.facebook.com/sharer/sharer.php?u=${
          options.url
        }&quote=${encodeURIComponent(text)}`;
        break;
      case 'vk':
        link = `https://vk.com/share.php?url=${options.url}&title=${
          options.title
        }&description=${options.description}`;
        break;
      case 'tw':
        link = `https://twitter.com/intent/tweet?url=${options.url}&text=${encodeURIComponent(
          options.title,
        )}`;
        break;
      case 'tg':
        link = `https://t.me/share/url?url=${options.url}&text=${encodeURIComponent(text)}`;
        break;
      case 'wa':
        link = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${options.url}`;
        break;
      case 'vb':
        link = `viber://pa?text=${encodeURIComponent(text)}%20${options.url}`;
        break;
      default:
        break;
    }

    return link;
  },

  open(type, customOptions = {}) {
    const windowParams = 'width=630&height=340&personalbar=0&toolbar=no&scrollbars=no&resizable=yes&location=no';
    const left = Math.floor(window.screen.width / 2 - 630 / 2);
    const right = Math.floor(window.screen.height / 5);
    const link = this.getLink(type, customOptions);

    if (link) {
      window.open(
        link,
        'share_dialog',
        `${windowParams.replace(/&/g, ',')},left=${left},top=${right}`,
      );

      sendShareEvent({
        socialNetwork: type,
      });
    }
  },

  getDefault() {
    return {
      url: window.location.href,
      title: 'title',
      description: 'description',
    };
  },
};
