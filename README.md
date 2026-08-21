# St. Moses Community Hospital

## About the Website

This is the website for **St. Moses Community Hospital** in Pokuase, Ghana.

The website helps patients and visitors learn about the hospital, its services, leaders, and how to contact the hospital.

## Website Pages

### Home

The home page gives a quick view of the hospital. It shows the main message, key services, and ways to get help.

### About

The About page tells visitors about the hospital, its work, mission, vision, and values.

### Services

The Services page shows the health services offered by the hospital.

Each service has a **Read More** button. The button opens a separate page with more information about that service.

### Service Pages

Every service has its own page. These pages give more details about the service, what patients can expect, common questions, and how to contact the hospital.

### Leadership

The Leadership page introduces the hospital's Chief Executive Officer, **Rev. Roger Musah Langboung**, and shares his leadership story.

### Contact

The Contact page gives visitors the hospital's contact details and a way to send a message.

### Appointment

The Appointment page helps visitors request an appointment with the hospital.

### Privacy

The Privacy page explains how the website handles visitor information.

### Terms

The Terms page explains the rules for using the website.

## Website Structure

The website uses a simple page structure:

- The header has the main navigation.
- The home page introduces the hospital.
- The Services page links to all service pages.
- The footer gives quick links to important pages and services.
- Each service page has a link back to the main Services page.

## Technology

The website is built with:

- **React** for the website pages and user interface.
- **Vite** for development and production builds.
- **Tailwind CSS** for styling.
- **React Router** for page links and service pages.
- **GSAP** for some page animations.
- **Lucide React** for icons.

## Project Structure

The main website files are kept in simple folders:

```text
src/
├── components/   Reusable website parts
├── pages/        Main website pages
├── data/         Service and page information
├── assets/       Website images and other assets
└── App.jsx       Main page and route setup

public/
└── Website images and public files
```

## Running the Website

Install the project packages:

```bash
npm install
```

Start the website for development:

```bash
npm run dev
```

Build the website for production:

```bash
npm run build
```

## Project Goal

The goal of the website is to give patients and visitors a clear and simple way to learn about **St. Moses Community Hospital**, find health services, read service information, and contact the hospital.