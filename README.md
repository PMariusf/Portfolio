# Portfolio

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/PMariusf/Portfolio)

## Publishing to GitHub with VS Code

1. Open this project in **Visual Studio Code**.
2. Go to the **Source Control** view (`Ctrl+Shift+G`).
3. If the repository isn't initialized, click **Initialize Repository**.
4. Stage your files and make a commit:
   - `git add .`
   - `git commit -m "Initial commit"`
5. Press **Publish to GitHub** in the Source Control view. VS Code will create a
   new repository on your GitHub account and push the local commits.

If you prefer the command line, you can create the repository on GitHub first,
then run:

```bash
git remote add origin https://github.com/<your-account>/<repo>.git
git push -u origin main
```
