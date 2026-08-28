## For running code

* for running locally
* cd tab
* npm run dev





# To clone a existing repo from GitHub (Git commands)



Step 1: Open a terminal .Go to the folder where you want to save the project.

&#x09;**cd tab**

Step 2: Clone the repository

&#x09;**git clone <repo Link>**



# To update the code and push to GitHub



Step 1: Setting global flags

&#x09;**git config --global user.name "Rajat Ohri"**

&#x09;**git config --global user.email "rajatkumarohri04@email.com"**

Step 2: checking status(red all the files means untracked)

&#x09;**git status**

Step 3: Tracking changes and update it

&#x09;**git add .**

Step 4: Giving name to the version"

&#x09;**git commit -m "first commit"** 

Step 5: Now checking the files again now green files will shown declare the files is updated

&#x09;**git status(now saying to push)**

Step 6: Pushing the code to GitHub

&#x09;**git push**



# To Pushing the existing project into GitHub (Git commands)

# 

Step 1: Open Terminal in Your Project Folder. 

&#x09;**cd "C:\\Users\\YourName\\Desktop\\CSS Project"**

Step 2: Initialize Git (only once)

&#x09;**git init**

Step 3: Add all files

&#x09;**git add .**

Step 4: Commit

&#x09;**git commit -m "Initial commit"**

Step 5: Create a GitHub repository

&#x09;Go to GitHub and click New Repository.

Step 6: Connect your local folder to GitHub. Copy the repository URL from GitHub, then run:

&#x09;**git remote add origin https://github.com/USERNAME/css-project.git**

Step 7: Show changed files/track changes

&#x09;**git status**

Step 8: Push the project. If your default branch is main:

&#x09;**git branch -M main**

&#x09;**git push -u origin main**

&#x09;Now your code is on GitHub.





