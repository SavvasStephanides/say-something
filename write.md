# Submit your own message on Say Something!

To submit your own message, you'll have to contribute to the Say Something repository on Github.

So, essentially you're contributing to open source! 🎉

Happy Hacktoberfest!

## Step 1: Create a Github account

If you don't have a Github account already, now's your chance! Go to the [Github signup page](https://github.com/signup) to begin! Should only take a couple of minutes!

## Step 2: Copy the project code on your profile

In order to make changes to someone's piece of code, you have to first create a copy of the code and put it on your own account. 

This new copy of the code is what we call a *fork*. 

Here's how you can create your own fork of the Say Something code:

First, go to the code of the Say Something project.

![](/write-page-assets/repo.png)

Next, on the top right of the page you'll see a link labelled "Fork" with a number next to it. Click on it.

![](/write-page-assets/fork-button.png)

You'll then be taken to a page titled *Create a new fork*. No need to change anything, just click the green *Create fork* button.

![](/write-page-assets/create-fork-page.png)

You now have a copy of the Say Something code in your profile. You'll see your profile picture and next to it, the name of your repository: `say-something`. Under that, you'll see "forked from SavvasStephanides/say-something".

![](/write-page-assets/forked-repo.png)

You're good to go!

## Step 3: Create a file with your message

Next step is to add your message to the code!

Now you need to make a decision:

Do you want to use the web interface or the Terminal?

The web interface is much easier because it's more visual, but if you're up to the challenge, you can go with the Terminal (or command prompt)!

<details>
    <summary>Web interface</summary>

On your repository, click on the "app" folder, and then "messages".

Then on the top right, click the "Add file" button. Click "Create new file" from the drop down menu.

![](/write-page-assets/create-new-file-menu.png)

On the next screen, you can now add your message. At the top "Name your file" box, enter an ID for your message, for example `just-saying-hello`. The ID must be unique from the other files in the "messages" folder.

In the big edit box below, enter your name followed by your message, in this format:

```
By: <your name>
<Your message>
```

For example:

```
By: John Doe

Just dropping by to say hello!
```

![](/write-page-assets/message-input.png)

Once you're done, click the green *Commit changes* button.

![](/write-page-assets/commit-button.png)

On the pop up dialog that appears, you can change the commit message, or you can leave it as is. You can also add a description. Make sure *Commit directly to the main branch* is selected, and click the green *Commit changes* button.

![](/write-page-assets/commit-changes-dialog.png)

You'll now see the *messages* folder which now has your new message!

</details>

<details>
    <summary>Terminal</summary>

To use the terminal, you first need to install Git on your computer. You can [download Git from its website](https://git-scm.com/).

Next, you'll need to download the code you've just copied to your computer.

Go to the page of your copied repository and click the green *Code* button. From the dropdown, you'll see a URL with a *copy* icon on the right. Click on that icon which will copy the URL to your clipboard.

Now, open your terminal.

In your terminal, choose a location and enter this command:

```
git clone <URL you just copied>
```

After a few seconds, you'll have all the code in your computer. Now you can make changes!

Go to the downloaded repository and then go to the `app/messages` folder:

```
cd say-something
cd apps/messages
```

Here you will create a file with your message. Create a new file on this folder, however way you like. Give a name for your file which will be the ID for your message. Something like `just-saying-hello`. Make sure it's unique from the other files in the folder.

Inside the file, write your name and message in this format:

```
By: <your name>
<Your message>
```

For example:

```
By: John Doe

Just dropping by to say hello!
```

Once you're done, go back to the `say-something` root directory:

```
cd ../..
```

Now for the last 3 steps: put our changed file to a stage, tell Git that it's safe to push the changes and then push them to your repository.

Firstly, we're going to "stage" our file. Think of it like putting the file in a box with a tag that says "please put these files in my code".

To do this, we're going to use the `git add` command:

```
git add -A
```

Next, we're going to say "definitely push these changes", or as we say, we're going to "commit our files". Think of it like putting a lid on the box because we're sure we want to put our changed files in our code. To do this, we're using the `git commit` command:

```
git commit -m "My message"
```

(`-m` basically means "what I write next is a message)

Finally, we're going to actually "push" our changes to our code on Github. To do this, we're going to use the `git push` command:

```
git push
```

Depending on your system, it will ask you to add your Github credentials. Enter your username and for your password, paste a token that you can create in [your token settings](https://github.com/settings/tokens).

⚠️ Don't enter your Github password in the password field. Generate a token and use that instead!

After a few seconds, your changes should show up on your copy of the Say Something code!

</details>

Lastly, we need to add your message to the main website, for the world to see! 👀

---