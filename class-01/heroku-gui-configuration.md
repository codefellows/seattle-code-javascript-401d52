# Heroku GUI Deployment

With Heroku, you are going to configure two deployments. One deployment will have your main branch and be your production site. The other will use your development branch and serve as a testing area to ensure your code is correct. As you check in code, you should be able to see Heroku instantly deploy from GitHub if your GitHub Actions criteria are met!

1. Log in to your Heroku account
1. Create a new Heroku app, called `yourname-server-deploy-dev`
   1. Go to the deployment tab
   1. Choose "GitHub"
   1. Connect to your repository
   1. Choose the "dev" branch
   1. Choose the "Wait for CI to pass before deploy" option
   1. Choose the "enable automatic deploys" option
1. Create a new Heroku app, called `yourname-server-deploy-prod`
   1. Go to the deployment tab
   1. Choose "GitHub"
   1. Connect to your repository
   1. Choose the "main" branch
   1. Choose the "Wait for CI to pass before deploy" option
   1. Choose the "enable automatic deploys" option

Once your code is pushed to GitHub and meets GitHub Actions criteria, your code will automatically deploy to your Heroku development environment.

Once your development branch has been merged to main and your GitHub Actions criteria has been met, your code will automatically deploy to your Heroku production environment.
