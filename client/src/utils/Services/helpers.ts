import type { ServiceInterface } from "../../features/BookingConsole/types";

interface GroupedService {
  name: string,
  items: ServiceInterface[]
}

export function groupServices({
  categories, 
  services
}: {
  categories: string[], 
  services: ServiceInterface[]
}): GroupedService[] {

  const allCategoriesInData = Array.from(new Set(services.map(s => s.category)));
  const remainingCategories = allCategoriesInData.filter(c => !categories.includes(c));

  const finalCategoryList = [...categories, ...remainingCategories];

  return finalCategoryList 
    .map((category) => {
      const items = services.filter((s) => s.category === category);

      return {
        name: category,
        items: items
      };
    })
    .filter((group) => group.items.length > 0);
}