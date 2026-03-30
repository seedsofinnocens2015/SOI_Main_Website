export function cityNameToSlug(cityName) {
  return cityName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/** Resolves India (non-international) centre from URL segment `best-ivf-centre-in-*` */
export function resolveIndiaCenterFromCenterSlug(cleanSlug, indiaCentresData) {
  const citySlug = cleanSlug.replace(/^best-ivf-centre-in-/, '');
  let center;
  if (
    cleanSlug === 'best-ivf-centre-in-delhi' ||
    cleanSlug === 'best-ivf-centre-in-malviyanagar'
  ) {
    center = indiaCentresData.find((c) => {
      return (
        c.name === 'Malviya Nagar, Delhi' &&
        c.stateSlug === 'delhi' &&
        !c.isInternational
      );
    });
  } else {
    center = indiaCentresData.find((c) => {
      if (c.isInternational) {
        return false;
      }
      const cityName = c.name.split(',')[0].trim();
      const centerCitySlug = cityNameToSlug(cityName);
      return centerCitySlug === citySlug;
    });
  }
  return center;
}
