# VeloTruck Deployment Guide

## Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `VeloTruck`
   - Make it **Public** (or Private if you prefer)
   - **Don't** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git push -u origin main
   ```

   If you get authentication errors, you may need to:
   - Use a Personal Access Token instead of password
   - Or set up SSH keys

## Step 2: Deploy to Vercel

### Option A: Via Vercel Web Interface (Recommended)

1. **Sign in to Vercel:**
   - Go to https://vercel.com
   - Sign in with your GitHub account

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Select your GitHub account
   - Find and import the `VeloTruck` repository

3. **Configure the project:**
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your app will be live at a URL like: `velotruck-xxxxx.vercel.app`

5. **Custom Domain (Optional):**
   - After deployment, go to Project Settings → Domains
   - Add your custom domain if you have one

### Option B: Via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
   (If you get permission errors, use `npx vercel` instead)

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts to log in
   - Link to your project or create a new one
   - Deploy!

3. **For production:**
   ```bash
   vercel --prod
   ```

## Step 3: Environment Variables (if needed)

If you add environment variables later:
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add any required variables (API keys, etc.)

## Troubleshooting

### Build Errors
- Make sure all dependencies are in `package.json`
- Check that `npm run build` works locally first
- Review build logs in Vercel dashboard

### Common Issues
- **Module not found**: Check that all imports are correct
- **Type errors**: Run `npm run build` locally to catch TypeScript errors
- **CSS not loading**: Ensure Tailwind is properly configured in `tailwind.config.ts`

## Post-Deployment

Your VeloTruck app will be live at:
- **Production URL**: `https://velotruck-xxxxx.vercel.app`
- **Preview URLs**: Created for each push/PR

Vercel automatically:
- ✅ Builds your Next.js app
- ✅ Optimizes images and assets
- ✅ Provides SSL certificates
- ✅ Deploys on every push to main branch
- ✅ Creates preview deployments for PRs

## Next Steps

1. **Set up automatic deployments:**
   - Already done! Every push to `main` auto-deploys

2. **Add a custom domain:**
   - Project Settings → Domains → Add Domain

3. **Monitor performance:**
   - Check Vercel Analytics (if enabled)
   - Review build logs for any issues

---

**Need help?** Check Vercel docs: https://vercel.com/docs
