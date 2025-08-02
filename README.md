# Chrome Extension Development Template

A modern Chrome extension development template with **Vite**, **React**, and **Material-UI** that provides a solid baseline for building any Chrome extension app with hot reload capabilities and professional UI components.

## 🚀 **What This Template Provides**

- ⚡ **Vite** for fast development and building
- ⚛️ **React** for modern UI components
- 🎨 **Material-UI (MUI)** for professional, accessible components
- 📱 **Side panel functionality** ready to use
- 🔄 **Hot reload development** (fastest possible for Chrome extensions)
- 🏗️ **Production-ready build system**
- 📋 **Clean project structure** for scaling
- 🎯 **Pre-configured theme** with Material Design

## 🎯 **Perfect For Building**

- **Chrome Extension Apps** - Any type of extension with UI
- **Side Panel Tools** - Utilities, dashboards, widgets
- **Browser Extensions** - Productivity tools, integrations
- **React-based Extensions** - Modern UI with component architecture
- **Development Tools** - Debuggers, inspectors, helpers
- **Professional Extensions** - Enterprise-grade UI with Material-UI

## 🏗️ **Architecture Overview**

```
my-chrome-extension/
├── src/
│   ├── background.js      # Service worker (extension logic)
│   ├── sidepanel.html     # HTML entry point
│   ├── sidepanel.jsx      # React component with MUI (main UI)
│   └── sidepanel.css      # Styles (minimal, MUI handles most styling)
├── dist/                  # Built files (generated)
├── manifest.json          # Extension configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🚀 **Quick Start**

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
1. **Clone or use this template:**
   ```bash
   git clone <your-repo>
   cd my-chrome-extension
   npm install
   ```

2. **Start development:**
   ```bash
   npm run dev-fast
   ```

3. **Load in Chrome:**
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the **`dist`** folder

## 🔄 **Development Workflow**

### Fast Development (Recommended)
```bash
npm run dev-fast
```
- **Auto-rebuilds** files instantly when you save
- **Close/reopen side panel** to see changes (1-2 seconds)
- **Perfect for extension development**

### Alternative: Browser Tab Development
```bash
npm run dev
```
- **True hot reload** in browser tab
- **Open:** `http://localhost:5173/src/sidepanel.html`
- **Instant feedback** for rapid UI development

### Production Build
```bash
npm run build
```
- **Optimized production files**
- **Ready for Chrome Web Store**

## 🎨 **Material-UI Integration**

This template includes **Material-UI (MUI)** for professional, accessible components:

### **Pre-configured Components:**
- ✅ **AppBar** - Professional header with navigation
- ✅ **Cards** - Organized content sections
- ✅ **Buttons** - Consistent action buttons
- ✅ **TextFields** - Form inputs with validation
- ✅ **Lists** - Feature lists with icons
- ✅ **Typography** - Consistent text styling
- ✅ **Icons** - Material Design icons

### **Customizing the Theme:**
```jsx
const theme = createTheme({
  palette: {
    primary: {
      main: '#your-color',
    },
    secondary: {
      main: '#your-secondary-color',
    },
  },
  // Customize component styles
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          // Your custom styles
        },
      },
    },
  },
})
```

## 🎨 **Customizing Your App**

### 1. **Update the UI Component**
Edit `src/sidepanel.jsx` to build your app's interface with MUI:

```jsx
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent 
} from '@mui/material'

function YourApp() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Your App Name
            </Typography>
            <Button variant="contained">
              Your Action
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
```

### 2. **Add MUI Components**
Import and use any Material-UI component:

```jsx
import { 
  TextField, 
  Select, 
  MenuItem, 
  Switch, 
  Slider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material'
```

### 3. **Customize the Theme**
Update the theme in `src/sidepanel.jsx`:

```jsx
const theme = createTheme({
  palette: {
    primary: {
      main: '#your-brand-color',
    },
  },
  typography: {
    fontFamily: 'Your Font, sans-serif',
  },
})
```

### 4. **Configure Extension**
Update `manifest.json` for your app:

```json
{
  "name": "Your App Name",
  "description": "Your app description",
  "permissions": ["your-permissions"],
  "side_panel": {
    "default_path": "sidepanel.html"
  }
}
```

### 5. **Add Background Logic**
Edit `src/background.js` for extension functionality:

```javascript
// Your extension logic
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
```

## 📦 **Project Structure**

```
src/
├── background.js      # Service worker (extension logic)
├── sidepanel.html     # HTML entry point
├── sidepanel.jsx      # React component with MUI (main UI)
└── sidepanel.css      # Styles (minimal, MUI handles most styling)

dist/                  # Built files (generated)
├── manifest.json      # Extension manifest
├── background.js      # Built service worker
├── sidepanel.html     # Built HTML
├── sidepanel.js       # Built React app
└── sidepanel.css      # Built styles
```

## 🛠️ **Development Scripts**

- `npm run dev-fast` - **Fast development** (recommended)
- `npm run dev` - **Browser tab development** (instant hot reload)
- `npm run build` - **Production build**
- `npm run preview` - **Preview production build**

## 🎯 **Chrome Extension Limitations**

**Important:** Chrome extensions have inherent limitations with hot reload:
- **Side panels require close/reopen** to see changes
- **This is normal** - all Chrome extension developers face this
- **1-2 second delay** is the fastest possible
- **Your setup is optimal** for Chrome extension development

## 🚀 **Scaling Your App**

### Adding Features
- **New MUI components** - Import from `@mui/material`
- **Additional pages** - Create new HTML files
- **Background services** - Extend `src/background.js`
- **Custom themes** - Modify the theme object

### Adding Dependencies
```bash
npm install your-package
```

### Chrome Extension APIs
- **Side Panel API** - Already configured
- **Storage API** - Add to manifest permissions
- **Tabs API** - Add to manifest permissions
- **Runtime API** - Add to manifest permissions

## 📋 **Best Practices**

- ✅ **Use MUI components** for consistent, accessible UI
- ✅ **Customize the theme** to match your brand
- ✅ **Keep styles minimal** - let MUI handle most styling
- ✅ **Test in both dev modes** (fast and browser)
- ✅ **Use keyboard shortcuts** for side panel
- ✅ **Build for production** before publishing

## 🎉 **Ready to Build!**

This template gives you everything you need to build any Chrome extension app:
- **Modern development tools** (Vite + React)
- **Professional UI components** (Material-UI)
- **Fast development workflow** (auto-rebuild)
- **Clean architecture** (scalable structure)
- **Production-ready** (optimized builds)

Start building your Chrome extension app today with professional Material-UI components! 🚀 