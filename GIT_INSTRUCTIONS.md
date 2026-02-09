# Git Setup & Deployment

Since `git` is not installed or configured in your terminal's PATH, I couldn't automatically initialize the repository. Please follow these manual steps.

## 1. Install Git
If you haven't already, download and install Git from [git-scm.com](https://git-scm.com/downloads).

## 2. Initialize Repository
Open your terminal in the project folder (`c:\Users\rohit\OneDrive\Desktop\AntiGravity\Todo App`) and run:

```bash
git init
git add .
git commit -m "Initial commit: Todo App"
```

## 3. Push to GitHub
1.  Go to [GitHub.com](https://github.com/new) and **create a new repository**.
2.  Copy the URL of your new repository (e.g., `https://github.com/your-username/todo-app.git`).
3.  Run the following commands in your terminal:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 4. Deploy to Netlify (Alternative)
If you want to deploy the `dist` folder:
1.  Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2.  Drag and drop the `dist` folder from your project into the browser window.
