export type Project = {
  id: string;
  title: string;
  image: string;
  description?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Lumnia",
    image:
      "https://plus.unsplash.com/premium_photo-1723489242223-865b4a8cf7b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0",
    description:
      "A modern product design focusing on accessibility and delightful interactions.",
    tags: ["Design", "Accessibility", "React"],
  },
  {
    id: "2",
    title: "Prism",
    image:
      "https://i.pinimg.com/1200x/99/ca/5c/99ca5cf82cf12df8801f7b2bef38d325.jpg",
    description: "A marketing landing designed for conversion and speed.",
    tags: ["Marketing", "Performance"],
  },
  {
    id: "3",
    title: "Vertex",
    image:
      "https://i.pinimg.com/736x/7c/15/39/7c1539cf7ff0207cb49ce0d338de1e5f.jpg",
    description: "An experimental visualization toolkit for data-heavy apps.",
    tags: ["Data", "Visualization"],
  },
];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id) || null;
}
