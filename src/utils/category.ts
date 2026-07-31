export const categoryNames = {
  trading: "Trading",
  tools: "工具人系列",
  notes: "随笔",
};


export type Category =
  keyof typeof categoryNames;


export function getCategoryName(
  category: Category
) {
  return categoryNames[category];
}