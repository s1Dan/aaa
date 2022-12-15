const isDev = import.meta.env.BASE_URL?.indexOf('/demo/') > -1 || import.meta.env.DEV;

function printToConsole(message) {
  console.log(
    message,
    'color: blue; font-size: 14px',
    'color: red; font-size: 18px',
  );
}

export function sendEvent({
  action = null,
  category = null,
  label = null,
  value = null,
  property = {},
}) {
  const data = {
    event: 'analyticsEvent',
    eventAction: action,
    eventCategory: category,
    eventLabel: label,
    eventProperty: property,
    eventValue: value,
  };

  window.dataLayer.push(data);

  if (isDev) {
    const message = `%cSended analytics %ceventAction: ${action} 
eventCategory: ${category}
eventLabel: ${label}
eventProperty: ${JSON.stringify(property)}
eventValue: ${value}`;

    printToConsole(message);
  }
}

export function sendShareEvent({
  socialNetwork = null,
}) {
  const data = {
    event: 'analyticsSocialInteraction',
    socialAction: 'share',
    socialNetwork,
  };

  window.dataLayer.push(data);

  if (isDev) {
    const message = `%cSended analytics %csocialAction: share 
socialNetwork: ${socialNetwork}`;

    printToConsole(message);
  }
}
