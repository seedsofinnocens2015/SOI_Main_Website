import ivfCostJson from '@/app/data/ivfcost.json';

export function getAllIvfCosts() {
  if (Array.isArray(ivfCostJson)) {
    return ivfCostJson;
  }
  return ivfCostJson?.ivfCosts || ivfCostJson?.costs || [];
}

export function getIvfCostBySlug(slug) {
  if (!slug) return null;
  const list = getAllIvfCosts();
  return list.find(
    (item) =>
      item.slug === slug ||
      item.id === slug ||
      (Array.isArray(item.aliases) && item.aliases.includes(slug))
  );
}
