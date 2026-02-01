# Contributing Guidelines

## 🙋‍ Welcome!

Thank you for considering contributing to the IT BGITU website! This document provides guidelines and standards to follow.

---

## 💹 Coding Standards

### HTML Standards

1. **Semantic HTML5**
   ```html
   ✅ GOOD
   <header>...</header>
   <nav>...</nav>
   <main>...</main>
   <section id="features">...</section>
   <footer>...</footer>
   
   ❌ BAD
   <div id="header">...</div>
   <div class="navigation">...</div>
   <div id="container">...</div>
   ```

2. **Proper Nesting**
   ```html
   ✅ Lists inside list containers
   <ul>
     <li>Item 1</li>
     <li>Item 2</li>
   </ul>
   ```

3. **Alt Text for Images**
   ```html
   ✅ GOOD
   <img src="image.jpg" alt="Sports programming team">
   
   ❌ BAD
   <img src="image.jpg">
   <img src="image.jpg" alt="image">
   ```

4. **Proper Heading Hierarchy**
   ```html
   ✅ GOOD
   <h1>Page Title</h1>
   <h2>Section Title</h2>
   <h3>Subsection Title</h3>
   
   ❌ BAD
   <h1>Page Title</h1>
   <h3>Subsection Title</h3>  <!-- Skip h2 -->
   ```

5. **Section IDs for Navigation**
   ```html
   <section id="unique-name">
     <h2>Section Title</h2>
     <!-- Content -->
   </section>
   ```

### CSS Standards

1. **Use CSS Variables**
   ```css
   ✅ GOOD
   color: var(--primary);
   margin: var(--spacing-md);
   transition: var(--transition-base);
   
   ❌ BAD
   color: #0072F5;
   margin: 1.5rem;
   transition: 0.3s ease;
   ```

2. **Organized Structure**
   ```css
   /* Root Variables */
   :root { ... }
   
   /* Global Styles */
   * { ... }
   body { ... }
   
   /* Typography */
   h1, h2, h3 { ... }
   
   /* Components */
   .button { ... }
   .card { ... }
   
   /* Media Queries */
   @media (max-width: 768px) { ... }
   ```

3. **Mobile-First Approach**
   ```css
   /* Mobile (default) */
   .element {
     font-size: 14px;
   }
   
   /* Tablet and up */
   @media (min-width: 768px) {
     .element {
       font-size: 16px;
     }
   }
   ```

4. **Naming Conventions**
   ```css
   /* Use descriptive names */
   .primary-button { }
   .section-title { }
   .navigation-menu { }
   
   /* Avoid generic names */
   .button1 { }   /* Bad */
   .text { }      /* Bad */
   .div { }       /* Bad */
   ```

5. **Comments and Organization**
   ```css
   /* ========================================
      SECTION NAME
      ======================================== */
   
   /* Subsection */
   .element { ... }
   ```

### JavaScript Standards

1. **Use Modular Pattern**
   ```javascript
   ✅ GOOD
   const myModule = (() => {
     // Private variables
     const privateVar = 'private';
     
     // Private functions
     function privateFunc() { }
     
     // Public API
     return {
       init() { },
       publicMethod() { }
     };
   })();
   
   ❌ BAD
   // Global variables
   var globalVar = 'global';
   function globalFunc() { }
   ```

2. **Use Modern JavaScript**
   ```javascript
   ✅ GOOD
   const element = document.querySelector('.element');
   const items = document.querySelectorAll('.item');
   const value = obj.prop ?? 'default';
   const { name, age } = user;
   
   ❌ BAD
   var element = document.getElementById('element');
   var items = document.getElementsByClassName('item');
   var value = obj.prop ? obj.prop : 'default';
   var name = user.name;
   var age = user.age;
   ```

3. **Error Handling**
   ```javascript
   ✅ GOOD
   if (!element) {
     console.warn('Element not found');
     return;
   }
   
   ❌ BAD
   element.addEventListener('click', handler);  // May crash
   ```

4. **Comments**
   ```javascript
   ✅ GOOD
   // This function toggles the menu state
   function toggleMenu() { }
   
   /**
    * Initialize the navigation module
    * @returns {void}
    */
   function init() { }
   
   ❌ BAD
   function tglMnu() { }  // Unclear name
   var x = 5;             // Unclear variable
   ```

5. **Event Handling**
   ```javascript
   ✅ GOOD
   element.addEventListener('click', (e) => {
     e.preventDefault();
     handleClick();
   });
   
   ❌ BAD
   element.onclick = function() { ... }  // Old style
   <button onclick="handleClick()">        <!-- Inline -->
   ```

---

## 📋 Pull Request Process

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make Your Changes**
   - Follow coding standards above
   - Keep changes focused
   - Write clear commit messages

3. **Test Thoroughly**
   - Test on desktop and mobile
   - Test in multiple browsers
   - Check console for errors
   - Verify accessibility

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: descriptive commit message"
   git push origin feature/feature-name
   ```

5. **Open Pull Request**
   - Write clear PR description
   - List changes made
   - Include screenshots if UI changes
   - Reference related issues

6. **Address Feedback**
   - Respond to review comments
   - Make requested changes
   - Push updates

---

## 📋 Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code refactoring
- `style:` Style changes (no logic change)
- `docs:` Documentation changes
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Examples
```
feat: add dark mode toggle
fix: correct menu closing on escape key
refactor: reorganize CSS variables
docs: update README with new API
perf: optimize image loading
```

---

## 🚠 Development Workflow

### Local Setup
```bash
# Clone repository
git clone https://github.com/BinaryBard7279/Bgitu-test.git
cd Bgitu-test

# Checkout development branch
git checkout develop

# Create feature branch
git checkout -b feature/your-feature

# Start local server
python -m http.server 8000

# Open browser
http://localhost:8000
```

### During Development
```bash
# Make changes
# Test thoroughly
# Commit regularly
git add .
git commit -m "type: description"

# Push branch
git push origin feature/your-feature
```

### After Review
```bash
# Merge into develop
git checkout develop
git pull origin develop
git merge feature/your-feature

# Delete feature branch
git branch -d feature/your-feature
git push origin --delete feature/your-feature
```

---

## 🧪 Code Review Checklist

When reviewing code, check:

- [ ] Code follows standards
- [ ] No console errors/warnings
- [ ] Mobile responsive
- [ ] Accessibility compliant
- [ ] Performance not degraded
- [ ] Proper error handling
- [ ] Clear variable/function names
- [ ] Comments where needed
- [ ] No hardcoded values
- [ ] Proper git history

---

## 👻 Reporting Issues

### Bug Report
1. Describe the bug clearly
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Screenshots/videos
6. Browser/device info
7. Console errors

### Feature Request
1. Describe the feature
2. Use case/motivation
3. Possible implementation
4. Related issues

---

## 🏆 Getting Help

- Check existing issues
- Review documentation
- Ask in discussions
- Contact team members

---

## 📄 License

By contributing, you agree your code will be under the same license as the project.

---

## 🙏 Thank You!

We appreciate your contributions to making IT BGITU better!

**Happy coding!** 🚀💻
