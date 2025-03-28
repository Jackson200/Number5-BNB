# Number 5 B&B Website

A professional website for Number 5, a boutique Bed & Breakfast located in Portstewart, Northern Ireland. The site features modern design with responsive layout, booking functionality, and rich visual storytelling about the B&B and local attractions.

## Features

- Modern React/TypeScript frontend with responsive design
- Elegant UI inspired by high-end boutique hotels
- Virtual booking experience
- Interactive location maps
- Detailed information about rooms, breakfast offerings, and local attractions
- Special sections for the Daily Dip sea swimming experience and NW200 race accommodation

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS, shadcn UI components
- **Backend**: Express.js server
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query (React Query)
- **Build Tools**: Vite, TSX

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- npm (v9 or later)

## Environment Variables

The project requires the following environment variables:

```
SMTP_PASS=your_smtp_password
```

For booking functionality integration (optional):
```
BOOKING_PROPERTY_ID=your_booking_property_id
BOOKING_API_KEY=your_booking_api_key
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/number5-bnb-website.git
   cd number5-bnb-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your environment variables.

## Development

To run the project in development mode:

```bash
npm run dev
```

This will start both the backend Express server and the frontend Vite development server. The application will be available at `http://localhost:5000`.

### Platform-Specific Commands

#### On macOS/Linux:
```bash
NODE_ENV=development npm run dev
```

#### On Windows (Command Prompt):
```bash
set NODE_ENV=development && npm run dev
```

#### On Windows (PowerShell):
```bash
$env:NODE_ENV="development"; npm run dev
```

Setting the NODE_ENV environment variable explicitly can help resolve some common connectivity issues.

### Cross-Platform Development

For local development on macOS, Windows, and Linux machines, the server is configured to use `localhost` as the host in development mode. If you encounter any issues with port binding on macOS (such as an `ENOTSUP` error), the application will automatically use the appropriate configuration.

For production environments, the server will bind to all network interfaces (0.0.0.0) by default.

### Troubleshooting

#### 403 Forbidden Errors
If you encounter a 403 "Access Denied" error when accessing localhost:5000, try these solutions:

1. **Clear browser cache and cookies**: Browser security features might block localhost access based on previous sessions.

2. **Try a different browser**: Some browsers have stricter security settings than others.

3. **Disable browser extensions**: Security or ad-blocking extensions can sometimes interfere with local development servers.

4. **Run with elevated permissions**: On Windows, try running your terminal/command prompt as Administrator. On macOS/Linux, you could use `sudo` (though this is generally not recommended for npm).

5. **Check firewall settings**: Ensure your firewall is not blocking localhost connections.

6. **Use the IP address directly**: 
   - Try accessing `http://127.0.0.1:5000` instead of `http://localhost:5000`
   - You can force the server to bind to the IP address by setting the USE_IP environment variable:
     ```bash
     # On macOS/Linux
     USE_IP=true npm run dev
     
     # On Windows (Command Prompt)
     set USE_IP=true && npm run dev
     
     # On Windows (PowerShell)
     $env:USE_IP="true"; npm run dev
     ```

The server has CORS configured to allow cross-origin requests in development mode, which should help prevent most access issues.

## Project Structure

```
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and data
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main application component
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── public/                # Static assets
├── server/                # Backend Express server
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── index.ts           # Server entry point
├── shared/                # Shared code between frontend and backend
│   └── schema.ts          # Data schema definitions
└── attached_assets/       # Images and other media assets
```

## Deployment

This project is configured to be deployed on Replit. For other deployment options:

1. Build the production-ready frontend:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images sourced from Number 5 B&B
- Design inspired by boutique hotels like Soho House and The Hoxton