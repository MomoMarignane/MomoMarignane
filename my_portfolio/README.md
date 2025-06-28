# Mohamed Mansour's Portfolio

This project is a personal portfolio developed with [Next.js](https://nextjs.org), React Three Fiber, and Framer Motion.

## Deployment with Docker

This project can be easily deployed using Docker, ensuring all dependencies are properly installed and the runtime environment is consistent.

### Prerequisites

- Docker
- Docker Compose

### Start in Development Mode

To start the application in development mode with hot reloading:

```bash
docker-compose up portfolio-dev
```

The application will be available at: http://localhost:3000

### Deploy in Production

To deploy the application in production:

```bash
docker-compose up -d portfolio
```

The application will be available at: http://localhost:3000

### Build the Image without Docker Compose

If you prefer to use Docker directly without Docker Compose:

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

### Stop Containers

```bash
docker-compose down
```

## Local Development (without Docker)

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm run start
```

## Technical Features

- Next.js 15+
- React 19+
- Three.js with React Three Fiber
- Framer Motion
- Tailwind CSS
- TypeScript

## Project Structure

The project is organized in a modular way with the following sections:

- Components
  - 3D: Three.js components and 3D animations
  - Sections: Different sections of the portfolio
  - UI: Reusable user interface components
- Data: Static data for skills, projects, etc.
- Hooks: Custom React hooks

## Contact Form Configuration

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the front-end without a backend server.

### EmailJS Setup

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `from_name`: Sender's name
   - `from_email`: Sender's email
   - `message`: Message from the form
   - `reply_to`: Reply-to email (same as from_email)
4. Copy your Service ID, Template ID, and public API key
5. Create a `.env` file at the root of the project using the `.env.example` template

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Emails will be sent to the address configured in your EmailJS template.
