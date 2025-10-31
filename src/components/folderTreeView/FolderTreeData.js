const folderTreeData = [
  {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      {
        id: 2,
        name: "assets",
        type: "folder",
        children: [
          {
            id: 3,
            name: "images",
            type: "folder",
            children: [
              { id: 4, name: "logo.png", type: "file" },
              { id: 5, name: "banner.jpg", type: "file" },
            ],
          },
          {
            id: 6,
            name: "styles",
            type: "folder",
            children: [
              { id: 7, name: "global.css", type: "file" },
              { id: 8, name: "theme.css", type: "file" },
            ],
          },
        ],
      },
      {
        id: 9,
        name: "components",
        type: "folder",
        children: [
          { id: 10, name: "Header.jsx", type: "file" },
          { id: 11, name: "Footer.jsx", type: "file" },
          {
            id: 12,
            name: "UI",
            type: "folder",
            children: [
              { id: 13, name: "Button.jsx", type: "file" },
              { id: 14, name: "Card.jsx", type: "file" },
              {
                id: 15,
                name: "modals",
                type: "folder",
                children: [
                  { id: 16, name: "LoginModal.jsx", type: "file" },
                  { id: 17, name: "SignupModal.jsx", type: "file" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 18,
        name: "context",
        type: "folder",
        children: [
          { id: 19, name: "AuthContext.jsx", type: "file" },
          { id: 20, name: "ThemeContext.jsx", type: "file" },
        ],
      },
      {
        id: 21,
        name: "hooks",
        type: "folder",
        children: [
          { id: 22, name: "useAuth.js", type: "file" },
          { id: 23, name: "useFetch.js", type: "file" },
        ],
      },
      {
        id: 24,
        name: "pages",
        type: "folder",
        children: [
          {
            id: 25,
            name: "Home",
            type: "folder",
            children: [
              { id: 26, name: "Home.jsx", type: "file" },
              { id: 27, name: "Home.css", type: "file" },
            ],
          },
          {
            id: 28,
            name: "About",
            type: "folder",
            children: [
              { id: 29, name: "About.jsx", type: "file" },
              { id: 30, name: "About.css", type: "file" },
            ],
          },
          {
            id: 31,
            name: "Dashboard",
            type: "folder",
            children: [
              { id: 32, name: "Dashboard.jsx", type: "file" },
              {
                id: 33,
                name: "components",
                type: "folder",
                children: [
                  { id: 34, name: "Sidebar.jsx", type: "file" },
                  { id: 35, name: "StatsCard.jsx", type: "file" },
                  {
                    id: 36,
                    name: "charts",
                    type: "folder",
                    children: [
                      { id: 37, name: "BarChart.jsx", type: "file" },
                      { id: 38, name: "PieChart.jsx", type: "file" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 39,
        name: "utils",
        type: "folder",
        children: [
          { id: 40, name: "constants.js", type: "file" },
          { id: 41, name: "helpers.js", type: "file" },
        ],
      },
      { id: 42, name: "App.jsx", type: "file" },
      { id: 43, name: "main.jsx", type: "file" },
    ],
  },
  {
    id: 44,
    name: "public",
    type: "folder",
    children: [
      { id: 45, name: "index.html", type: "file" },
      { id: 46, name: "favicon.ico", type: "file" },
      { id: 47, name: "manifest.json", type: "file" },
    ],
  },
  {
    id: 48,
    name: "config",
    type: "folder",
    children: [
      { id: 49, name: "vite.config.js", type: "file" },
      { id: 50, name: "tailwind.config.js", type: "file" },
      { id: 51, name: "eslint.config.js", type: "file" },
    ],
  },
  { id: 52, name: ".gitignore", type: "file" },
  { id: 53, name: "package.json", type: "file" },
  { id: 54, name: "README.md", type: "file" },
];

export default folderTreeData;
