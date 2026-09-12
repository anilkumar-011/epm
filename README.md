# Epaphras Ministries Web

Welcome to the EPM project! This is a web application built with Next.js and Tailwind CSS, designed to serve as a platform for Evangelical Project Management, including features like library, magazine, message, and more.

## Features

- **Modern Next.js App Router**
- **Tailwind CSS for rapid UI development**
- **Organized file structure for scalability**
- **Admin and public pages**
- **Image and PDF asset management**
- **Scripts for image and PDF optimization**

## Project Structure

```
.
├── app/                # Main application pages and components
│   ├── about/          # About page
│   ├── admin/          # Admin dashboard and pages
│   ├── contact/        # Contact page
│   ├── library/        # Library section
│   ├── login/          # Login page
│   ├── message/        # Message section
│   └── ...             # Other feature pages
├── public/             # Static assets (images, PDFs, etc.)
├── scripts/            # Utility scripts for asset management
├── tailwind.config.ts  # Tailwind CSS configuration
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd epm
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server

## Folder Details

- **app/**: Contains all the main pages and components, organized by feature.
- **public/**: Static files served directly by Next.js (images, PDFs, etc.).
- **scripts/**: Utility scripts for optimizing and converting assets.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is monitored under the Epaphras Ministries.

---

For more information, contact the project maintainers.
