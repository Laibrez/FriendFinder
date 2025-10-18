# Contributing to FriendFinder

Thank you for your interest in contributing to FriendFinder! This document provides guidelines and instructions for contributing to the project.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Detailed steps to reproduce the issue
- Expected behavior vs. actual behavior
- Screenshots if applicable
- Your environment (OS, Node version, browser, etc.)

### Suggesting Enhancements

We welcome suggestions for new features! Please create an issue with:
- A clear, descriptive title
- Detailed description of the proposed feature
- Use cases and benefits
- Any relevant examples or mockups

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes following our coding standards:
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Follow existing code style
   - Write clean, readable code

4. Test your changes:
   - Ensure backend builds and runs without errors
   - Ensure frontend builds successfully
   - Test all affected features manually
   - Add tests if adding new functionality

5. Commit your changes:
   ```bash
   git commit -m "Brief description of your changes"
   ```

6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

7. Create a Pull Request with:
   - Clear title and description
   - Link to related issues
   - Screenshots/GIFs for UI changes
   - Testing steps

## Development Guidelines

### Code Style

- **JavaScript**: Use ES6+ features, consistent indentation (2 spaces)
- **React**: Functional components with hooks
- **CSS**: Use existing CSS variables, keep styles modular
- **Backend**: Follow RESTful conventions, handle errors properly

### Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests when relevant

### Testing

Before submitting a PR:
- Test all authentication flows
- Verify friend discovery works
- Test event creation and joining
- Test messaging functionality
- Check responsive design on mobile

## Project Structure

```
backend/
├── config/         # Database configuration
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Mongoose models
└── routes/         # API routes

frontend/
├── src/
│   ├── components/ # Reusable components
│   ├── context/    # Context providers
│   └── pages/      # Page components
```

## Areas for Contribution

We especially welcome contributions in these areas:

### Backend
- Additional test coverage
- API documentation
- Performance optimization
- Additional security features
- Error handling improvements

### Frontend
- UI/UX improvements
- Accessibility enhancements
- Mobile responsiveness
- Loading states and animations
- Error handling

### Features
- Email notifications
- Profile pictures upload
- Group events
- Event categories filtering
- Advanced search functionality
- User blocking/reporting
- Privacy settings

### Documentation
- API documentation
- Setup guides
- User guides
- Video tutorials
- Architecture diagrams

## Community

- Be respectful and inclusive
- Help others when you can
- Provide constructive feedback
- Stay on topic in discussions

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

## Questions?

Feel free to create an issue for questions or reach out to the maintainers.

Thank you for contributing to FriendFinder! 🎉
