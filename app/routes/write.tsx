import { MetaFunction } from "@remix-run/node";
import * as fs from 'fs';
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
      { title: "Submit your own message on Say Something" },
      { name: "description", content: "Submit your own message on Say Something" },
    ];
  };

export const loader = async () => {

    let writeHtml = `<h1 id="submityourownmessageonsaysomething">Submit your own message on Say Something!</h1>
    <p>To submit your own message, you'll have to contribute to the Say Something repository on Github.</p>
    <p>So, essentially you're contributing to open source! 🎉</p>
    <p>Happy Hacktoberfest!</p>
    <h2 id="step1createagithubaccount">Step 1: Create a Github account</h2>
    <p>If you don't have a Github account already, now's your chance! Go to the <a href="https://github.com/signup">Github signup page</a> to begin! Should only take a couple of minutes!</p>
    <h2 id="step2copytheprojectcodeonyourprofile">Step 2: Copy the project code on your profile</h2>
    <p>In order to make changes to someone's piece of code, you have to first create a copy of the code and put it on your own account. </p>
    <p>This new copy of the code is what we call a <em>fork</em>. </p>
    <p>Here's how you can create your own fork of the Say Something code:</p>
    <p>First, go to the code of the Say Something project.</p>
    <p><img src="/write-page-assets/repo.png" alt="" /></p>
    <p>Next, on the top right of the page you'll see a link labelled "Fork" with a number next to it. Click on it.</p>
    <p><img src="/write-page-assets/fork-button.png" alt="" /></p>
    <p>You'll then be taken to a page titled <em>Create a new fork</em>. No need to change anything, just click the green <em>Create fork</em> button.</p>
    <p><img src="/write-page-assets/create-fork-page.png" alt="" /></p>
    <p>You now have a copy of the Say Something code in your profile. You'll see your profile picture and next to it, the name of your repository: <code>say-something</code>. Under that, you'll see "forked from SavvasStephanides/say-something".</p>
    <p><img src="/write-page-assets/forked-repo.png" alt="" /></p>
    <p>You're good to go!</p>
    <h2 id="step3createafilewithyourmessage">Step 3: Create a file with your message</h2>
    <p>Next step is to add your message to the code!</p>
    <p>Now you need to make a decision:</p>
    <p>Do you want to use the web interface or the Terminal?</p>
    <p>The web interface is much easier because it's more visual, but if you're up to the challenge, you can go with the Terminal (or command prompt)!</p>
    <p><details>
        <summary>Web interface</summary></p>
    <p>On your repository, click on the "app" folder, and then "messages".</p>
    <p>Then on the top right, click the "Add file" button. Click "Create new file" from the drop down menu.</p>
    <p><img src="/write-page-assets/create-new-file-menu.png" alt="" /></p>
    <p>On the next screen, you can now add your message. At the top "Name your file" box, enter an ID for your message, for example <code>just-saying-hello</code>. The ID must be unique from the other files in the "messages" folder.</p>
    <p>In the big edit box below, enter your name followed by your message, in this format:</p>
    <pre><code>By: &lt;your name&gt;
    
    &lt;Your message&gt;
    </code></pre>
    <p>For example:</p>
    <pre><code>By: John Doe
    
    Just dropping by to say hello!
    </code></pre>
    <p><img src="/write-page-assets/message-input.png" alt="" /></p>
    <p>Once you're done, click the green <em>Commit changes</em> button.</p>
    <p><img src="/write-page-assets/commit-button.png" alt="" /></p>
    <p>On the pop up dialog that appears, you can change the commit message, or you can leave it as is. You can also add a description. Make sure <em>Commit directly to the main branch</em> is selected, and click the green <em>Commit changes</em> button.</p>
    <p><img src="/write-page-assets/commit-changes-dialog.png" alt="" /></p>
    <p>You'll now see the <em>messages</em> folder which now has your new message!</p>
    <p></details></p>
    <p><details>
        <summary>Terminal</summary></p>
    <p>To use the terminal, you first need to install Git on your computer. You can <a href="https://git-scm.com/">download Git from its website</a>.</p>
    <p>Next, you'll need to download the code you've just copied to your computer.</p>
    <p>Go to the page of your copied repository and click the green <em>Code</em> button. From the dropdown, you'll see a URL with a <em>copy</em> icon on the right. Click on that icon which will copy the URL to your clipboard.</p>
    <p>Now, open your terminal.</p>
    <p>In your terminal, choose a location and enter this command:</p>
    <pre><code>git clone &lt;URL you just copied&gt;
    </code></pre>
    <p>After a few seconds, you'll have all the code in your computer. Now you can make changes!</p>
    <p>Go to the downloaded repository and then go to the <code>app/messages</code> folder:</p>
    <pre><code>cd say-something
    cd apps/messages
    </code></pre>
    <p>Here you will create a file with your message. Create a new file on this folder, however way you like. Give a name for your file which will be the ID for your message. Something like <code>just-saying-hello</code>. Make sure it's unique from the other files in the folder.</p>
    <p>Inside the file, write your name and message in this format:</p>
    <pre><code>By: &lt;your name&gt;
    
    &lt;Your message&gt;
    </code></pre>
    <p>For example:</p>
    <pre><code>By: John Doe
    
    Just dropping by to say hello!
    </code></pre>
    <p>Once you're done, go back to the <code>say-something</code> root directory:</p>
    <pre><code>cd ../..
    </code></pre>
    <p>Now for the last 3 steps: put our changed file to a stage, tell Git that it's safe to push the changes and then push them to your repository.</p>
    <p>Firstly, we're going to "stage" our file. Think of it like putting the file in a box with a tag that says "please put these files in my code".</p>
    <p>To do this, we're going to use the <code>git add</code> command:</p>
    <pre><code>git add -A
    </code></pre>
    <p>Next, we're going to say "definitely push these changes", or as we say, we're going to "commit our files". Think of it like putting a lid on the box because we're sure we want to put our changed files in our code. To do this, we're using the <code>git commit</code> command:</p>
    <pre><code>git commit -m "Adding my message to Say Something!"
    </code></pre>
    <p>(<code>-m</code> is basically where you describe your changes)</p>
    <p>Finally, we're going to actually "push" our changes to our code on Github. To do this, we're going to use the <code>git push</code> command:</p>
    <pre><code>git push
    </code></pre>
    <p>Depending on your system, it will ask you to add your Github credentials. Enter your username and for your password, paste a token that you can create in <a href="https://github.com/settings/tokens">your token settings</a>.</p>
    <p>⚠️ Don't enter your Github password in the password field. Generate a token and use that instead!</p>
    <p>After a few seconds, your changes should show up on your copy of the Say Something code!</p>
    <p><img src="/write-page-assets/updated-fork.png" alt="" /></p>
    <p></details></p>
    <p>Lastly, we need to add your message to the main website, for the world to see! 👀</p>
    <h2 id="step4askforyourchangestobeputonthemainrepository">Step 4: Ask for your changes to be put on the main repository</h2>
    <p>To ask for your changed file (and message) to be put on the main codebase and therefore the main website, you'll need to create what is called a <em>pull request</em>.</p>
    <p>To do this, go to your repository's page on Github and click the <em>Pull requests</em> tab at the top:</p>
    <p><img src="/write-page-assets/pull-request-tab-link.png" alt="" /></p>
    <p>In the <em>Pull requests</em> page, you'll see a green "New pull request" button.</p>
    <p><img src="/write-page-assets/new-pull-request-button.png" alt="" /></p>
    <p>Click the button and you'll be taken to the <em>Comparing changes</em> page.</p>
    <p>This page essentially compares your repository with the main repository you copied from at the beginning. </p>
    <p><img src="/write-page-assets/file-changes.png" alt="" /></p>
    <p>In this case:</p>
    <blockquote>
      <p>Showing 1 changed file with 3 additions and 0 deletions.</p>
    </blockquote>
    <p>Basically this means that there's 1 file that has changed (or created) with 3 lines added.</p>
    <p>Now that you've seen your changes, click the green <em>Create pull request</em> button at the top right.</p>
    <p><img src="/write-page-assets/create-pull-request-button.png" alt="" /></p>
    <p>Finally, click the <em>Create pull request</em> button.</p>
    <p>You have now successfully created a <em>pull request</em>! In other words, you have created a <em>request</em> for your message to show up on the main Say Something site!</p>
    <p><img src="/write-page-assets/pull-request.png" alt="" /></p>
    <p>Now you have to wait for a bit for the request to be approved, and once that's done, your message will show up on the website! 🎉🎉🎉🎉</p>
    <p><img src="/write-page-assets/message.png" alt="" /></p>
    <p>That's it! You've contributed to open source and you're message can be read by the whole world! </p>
    <p>Well done! 👏👏👏👏</p>`

    return json({
        writeHtml
      })
}

export default function Write(){
  const {writeHtml} = useLoaderData<typeof loader>()
    return(
        <article className="fixed-width-wrapper fixed-padding" dangerouslySetInnerHTML={{__html: writeHtml}}>
            
        </article>
    )
}