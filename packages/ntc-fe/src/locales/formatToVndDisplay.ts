export function formatToVndDisplay(moneyCount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(moneyCount);
}
