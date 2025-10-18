# Deployment Guide

This guide explains how to deploy FriendFinder to production.

## Prerequisites

- Node.js v14 or higher
- MongoDB Atlas account (or MongoDB server)
- A hosting platform (Heroku, DigitalOcean, AWS, etc.)

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_string
CLIENT_URL=https://your-frontend-domain.com
NODE_ENV=production
```

## Backend Deployment

### Option 1: Heroku

1. Install Heroku CLI
2. Login to Heroku:
   ```bash
   heroku login
   ```

3. Create a new app:
   ```bash
   heroku create your-app-name
   ```

4. Set environment variables:
   ```bash
   heroku config:set MONGO_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_secret_key
   heroku config:set CLIENT_URL=your_frontend_url
   ```

5. Deploy:
   ```bash
   git subtree push --prefix backend heroku main
   ```

### Option 2: DigitalOcean App Platform

1. Connect your GitHub repository
2. Select the `backend` folder as the source
3. Set build command: `npm install`
4. Set run command: `npm start`
5. Add environment variables in the settings
6. Deploy

### Option 3: VPS (Ubuntu)

1. SSH into your server
2. Install Node.js and PM2:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

3. Clone your repository:
   ```bash
   git clone https://github.com/yourusername/FriendFinder.git
   cd FriendFinder/backend
   ```

4. Install dependencies:
   ```bash
   npm install --production
   ```

5. Create `.env` file with production variables

6. Start with PM2:
   ```bash
   pm2 start server.js --name friendfinder-api
   pm2 save
   pm2 startup
   ```

7. Setup Nginx as reverse proxy:
   ```nginx
   server {
       listen 80;
       server_name api.yourdomain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Frontend Deployment

### Option 1: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Set environment variable in Vercel dashboard:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

### Option 2: Netlify

1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Option 3: Static Hosting (Nginx)

1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```

2. Copy `dist` folder to your web server:
   ```bash
   scp -r dist/* user@server:/var/www/friendfinder
   ```

3. Configure Nginx:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/friendfinder;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       location /api {
           proxy_pass http://localhost:5000;
       }
   }
   ```

## MongoDB Setup

### MongoDB Atlas (Recommended for beginners)

1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create database user
4. Whitelist IP addresses (or use 0.0.0.0/0 for all - not recommended for production)
5. Get connection string and update MONGO_URI

### Self-hosted MongoDB

1. Install MongoDB on your server
2. Configure authentication
3. Update MONGO_URI to point to your server

## SSL/HTTPS Setup

### Using Let's Encrypt (Free)

1. Install Certbot:
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. Get certificate:
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

3. Certbot will automatically configure Nginx

## Post-Deployment Checklist

- [ ] Environment variables are set correctly
- [ ] MongoDB connection is working
- [ ] SSL/HTTPS is configured
- [ ] CORS is configured for your frontend domain
- [ ] Rate limiting is enabled
- [ ] Error logging is set up
- [ ] Backend health check endpoint is accessible
- [ ] Frontend connects to backend successfully
- [ ] User registration and login work
- [ ] Socket.io real-time features work
- [ ] All features are tested in production

## Monitoring

### Backend Monitoring

Use PM2 for process monitoring:
```bash
pm2 monit
pm2 logs
```

### Application Monitoring

Consider using:
- New Relic
- Datadog
- Sentry (for error tracking)

## Scaling

### Horizontal Scaling

1. Use a load balancer (Nginx, AWS ELB, etc.)
2. Deploy multiple backend instances
3. Use Redis for session storage and Socket.io adapter
4. Use MongoDB replica sets for database redundancy

### Vertical Scaling

- Increase server resources (CPU, RAM)
- Optimize database queries
- Implement caching (Redis)
- Use CDN for static assets

## Backup Strategy

1. Set up automated MongoDB backups
2. Regularly test backup restoration
3. Keep backups in multiple locations

## Security Recommendations

- Keep dependencies updated: `npm audit fix`
- Use strong JWT secrets (at least 32 characters)
- Enable MongoDB authentication
- Use environment variables, never commit secrets
- Implement proper CORS configuration
- Add HTTPS/SSL for all traffic
- Regular security audits
- Implement rate limiting (already included)
- Monitor for suspicious activity

## Troubleshooting

### Backend won't start
- Check MongoDB connection string
- Verify all environment variables are set
- Check Node.js version compatibility
- Review error logs

### Frontend can't connect to backend
- Verify API URL is correct
- Check CORS configuration
- Ensure backend is running
- Check network/firewall settings

### Socket.io not working
- Verify WebSocket support
- Check firewall/proxy settings
- Ensure Socket.io CORS is configured
- Test with Socket.io client debugger

## Support

For deployment issues, please:
1. Check the documentation
2. Search existing GitHub issues
3. Create a new issue with detailed information

## Updates and Maintenance

1. Regularly update dependencies
2. Monitor security advisories
3. Test updates in staging before production
4. Keep documentation updated
5. Maintain changelog

---

Remember to always test in a staging environment before deploying to production!
