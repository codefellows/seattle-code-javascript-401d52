# Heroku CLI Configuration and Deployment

With Heroku, you are going to configure two deployments. One deployment will have your main branch and be your production site. The other will use your development branch and serve as a testing area to ensure your code is correct. After you push code to GitHub, you should also push it to Heroku where it will automatically build and deploy. You can then confirm your deployment and be confident your site works when you merge in GitHub! 

> Note: This is a slightly different process than CI/CD (as assigned in lab-01).  GitHub Actions have not been run and confirmed passing before deploying.  Run `npm test` to confirm before pushing code to Heroku and potentially breaking deployment.
 
1. Log in to Heroku via the command line with the command `heroku login`.  
1. Create a new Heroku staging environment. 
   1. run the command `heroku create --remote staging -a yourname-server-deploy-dev`. 
   Note: at this point, you've created your staging environment and can push code to Heroku.
   1. Push the dev branch to your staging environment `git push staging dev:main`.
   1. Let's dissect that command.  
      - `git push` we understand.  
      - the `staging` remote was created in the previous command with the `--remote` flag, giving us a reference point. 
      - To deploy code to Heroku from a non-main branch of your local repository (for example, dev), use the following syntax to push it to the remote’s main branch: `dev:main`.
      - once the command is run, our code has now been deployed to the staging remote on heroku.
   1. Confirm deployment.
   1. Once deployment is confirmed, the dev branch on GitHub can be merged with the confidence that your production branch will perform as expected.
1. After PR is merged on GitHub, `git pull origin main` like normal.
1. Create a new Heroku production environment. 
   1. run the command `heroku create --remote production -a yourname-server-deploy-prod`. Note: at this point, you've created your production environment and can push code to Heroku.
   1. Push the main branch to your production environment: `git push production main`.
   1. Note the differences with the production push command compared to the staging deployment above.
      - `git push` is the same.
      - `production`  points to our remote, the Heroku prod app.
      - the code exists in the main branch after merge, so we can push directly from `main`.
1. run the command `git remote -v` to see your remotes.  You'll see your origin, aka where your code lives on GitHub, and Heroku's staging & production environments.  

**Congratulations** your code is now deployed to Heroku!

### CI/CD

The only gift you have not given yourself at this point is true CI/CD.  Although using the command line is powerful, it is also recommended that you log into the Heroku GUI, go to both the staging and prod deployments and enable automatic deployments from the appropriate branches in your GitHub repo.  By doing this, every time you push code to GitHub, deployment will happen automatically if you have satisfied the GitHub Action requirements (passing tests and possibly more).

