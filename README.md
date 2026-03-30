# Ranga Traders - Building Materials Supplier Website

A simple, modern HTML/CSS/JavaScript website for Ranga Traders with an admin dashboard for managing products.

## 📁 Project Structure

```
ranga-traders/
├── index.html          # Public homepage
├── admin.html          # Admin dashboard
├── style.css           # All styling
├── script.js           # All functionality
└── README.md           # This file
```

## ✨ Features

### Public Website
- **Hero Section** - Eye-catching introduction
- **Product Categories** - Displays Cement, Steel, Tiles, Paint
- **Pricing Table** - Real-time product listing
- **Search functionality** - Find products quickly
- **Mobile Responsive** - Works on all devices
- **Professional Design** - Industrial theme with Slate & Orange colors

### Admin Dashboard
- **Secure Login** - Email/Password authentication
- **Add Products** - Create new products easily
- **Edit Products** - Modify existing products
- **Delete Products** - Remove old items
- **Live Updates** - Changes appear instantly on homepage

## 🚀 How to Run

### Option 1: Simple File Server (Python)

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

### Option 2: Simple File Server (Node.js)

```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Then open http://localhost:8080
```

### Option 3: Use Live Server (VS Code)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

### Option 4: Direct File Opening

Simply open `index.html` in your browser:
- Double-click `index.html`
- Or drag it into your browser window

⚠️ **Note:** Local file protocol might have CORS issues. Using a local server is recommended.

## 🔐 Admin Dashboard

### Login
- Go to `/admin.html`
- Enter any email and password (it's demo mode with local storage)
- Click Login

### Add Products
1. Fill in the product details
2. Select a category (Cement, Steel, Tiles, Paint)
3. Click "Add Product"
4. Changes appear instantly on the homepage

### Edit Products
1. In the "Manage Products" table, click "Edit"
2. Update the details in the modal
3. Click "Save Changes"
4. Homepage updates in real-time

### Delete Products
1. Click the "Delete" button next to a product
2. Confirm deletion
3. Product is removed immediately

## 📊 Data Storage

Products are stored in **browser's localStorage**:
- Data persists between browser sessions
- No server needed
- Works offline

## 🎨 Customization

### Colors
Edit `/style.css` and change the color variables at the top:

```css
:root {
    --color-slate-600: #475569;
    --color-orange-600: #ea580c;
    /* ... other colors ... */
}
```

### Logo/Title
Edit the `<h1 class="logo">` text in `index.html` and `admin.html`

### Default Products
Edit the `defaultProducts` array in `/script.js` to change sample data

## 📱 Responsive Breakpoints

- **Desktop** - Full width table and layout
- **Tablet (768px)** - 2 column product grid
- **Mobile (480px)** - Single column, optimized for small screens

## 🌐 Deployment

### Deploy to GitHub Pages (Free)

1. Create a GitHub repository
2. Upload these files
3. Go to Settings > Pages
4. Set branch to "main"
5. Website goes live at `https://username.github.io/repo-name`

### Deploy to Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the project folder
3. Get a live URL instantly

### Deploy to a Custom Domain

1. Buy a domain (GoDaddy, Namecheap, etc.)
2. Deploy to GitHub Pages or Netlify
3. Point domain DNS to your hosting provider
4. Website is live!

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Free to use and modify for Ranga Traders business purposes.

## 📞 Support

For modifications or questions, contact your developer.

---

**Made with ❤️ for Ranga Traders**
