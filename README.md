# Conference Ticket Generator

A React application that allows users to generate conference tickets by submitting their details through a form. The application includes form validation, state persistence, and generates a visual ticket upon successful submission.

## 🚀 Features

- **Form Elements**
  - Full Name input
  - Email Address validation
  - Avatar image upload (via Cloudinary URL)
  - Submit functionality

- **Form Validation**
  - Required field checks
  - Email format validation
  - Image URL validation
  - Clear error messaging

- **State Persistence**
  - Form data persists through page refreshes
  - Uses IndexedDB/Local Storage

- **Accessibility**
  - Screen-reader compatible
  - Keyboard navigation support
  - Clear focus states
  - ARIA-compliant form elements

- **Ticket Generation**
  - Displays user's full name
  - Shows email address
  - Renders avatar image
  - Generated upon successful validation

- **Responsive Design**
  - Mobile-friendly layout
  - Optimized for all screen sizes
  - Proper spacing and element stacking

## 🛠️ Technologies Used

- React/React Framework
- Tailwind CSS
- IndexedDB/Local Storage
- Cloudinary (for image hosting)

## 🔧 Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
cd conference-ticket-generator
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 💻 Usage

1. Fill out the form with your details:
   - Enter your full name
   - Provide a valid email address
   - Upload an avatar image to Cloudinary and paste the URL

2. Submit the form to generate your conference ticket

3. View and save your generated ticket

## ✅ Acceptance Criteria

- [x] Complete form validation
- [x] Data persistence across page refreshes
- [x] Successful ticket generation
- [x] Full accessibility compliance
- [x] Responsive design implementation
- [x] Clean, modular code structure

## 🧪 Testing

```bash
npm run test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Your Name - [Your GitHub Profile]

## 🙏 Acknowledgments

- HNG Internship Program
- React Documentation
- Tailwind CSS Team