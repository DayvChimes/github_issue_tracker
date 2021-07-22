<h1>About The Project</h1>
GitHub Issue Tracker is a simple mobile applicaiton made with  the React Native Javascript Library to help you track issues on your github repositories. The app is available on Google Playstore and is currently in Version: 1.0.1.

<h1>Usage</h1>

As said above the app can be used to track issues in different repositories and also issues connected to a specific user. The screenshots of the apps usage are as follows.

<table>
<thead>
<tr>
<th align="center"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/loginPage.png"><img src="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/loginPage.png" width="200/" style="max-width:100%;" data-stories_space_upload_el_handled="1"></a></th>
<th align="center"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/IssuesDescription.png"><img src="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/IssuesDescription.png" width="200/" style="max-width:100%;" data-stories_space_upload_el_handled="1"></a></th>
<th align="center"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/IssuesPageLabels.png"><img src="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/IssuesPageLabels.png" width="200/" style="max-width:100%;" data-stories_space_upload_el_handled="1"></a></th>
<th align="center"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/LogInInstructions.png"><img src="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/LogInInstructions.png" width="200/" style="max-width:100%;" data-stories_space_upload_el_handled="1"></a></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/IssusePage.png"><img src="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/IssusePage.png" width="200/" style="max-width:100%;" data-stories_space_upload_el_handled="1"></a></td>	
<td align="center"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/FilterModal.png"><img src="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/FilterModal.png" width="200/" style="max-width:100%;" data-stories_space_upload_el_handled="1"></a></td>
<td align="center"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/LoadMore.png"><img src="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/LoadMore.png" width="200/" style="max-width:100%;" data-stories_space_upload_el_handled="1"></a></td>
<td align="center"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/search.png"><img src="https://github.com/DayvChimes/github_issue_tracker/blob/main/screenshots/search.png" width="200/" style="max-width:100%;" data-stories_space_upload_el_handled="1"></a></td>
</tr>
</tbody>
</table>

<h1>Built With</h1>
The app is built entirely using the Javascript Library of React Native infused with typescript.


<h1>Getting Started</h1>

1. Get a github access token <a href="https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token">here.</a>

2. Clone the project repository from github to your preffered desktop folder.

<pre>git clone https://github.com/DayvChimes/github_issue_tracker.git</pre>

3. Install Node Modules that are crucial for the app to run.

<pre>yarn install</pre>

4. Enter your API in <code>src/graphql/client.js</code>

<pre>const token = 'place-github-access-token-here';</pre>

5. Start project

<pre>expo start</pre>


<h1>File Structure</h1>
<div class="snippet-clipboard-content position-relative"><pre><code>
github_issues_tracker/
|- .expo
|- .expo-shared
|- assests
|- src/
    |- actions/
 	|- index.js
        |- main.js
        |- repository.js
        |- search.js
        |- username.js
    |- components
 	|- Issue/
 	     	|- index.js
        	|- styles.js
        |- IssueComment/
 	     	|- index.js
        	|- styles.js
 	|- IssueDescriptionPage/
 	     	|- index.js
        	|- styles.js
        |- IssueList/
 	     	|- index.js
        	|- styles.js
 	|- IssuePage/
 	     	|- index.js
        	|- styles.js
        |- Label/
 	     	|- index.js
        	|- styles.js
 	|- Login/
 	     	|- index.js
        	|- styles.js
        |- Status/
 	     	|- index.js
        	|- styles.js
        |- TextInputField/
 	     	|- index.js
        	|- styles.js
    |- constants/
        |- index.js
        |- main.js
        |- repository.js
        |- search.js
	|- username.js
    |- graphql/
        |- client.js
        |- repository.js
        |- search.js
        |- username.js
    |- middleware/
        |-index.js
        |-logger.js
    |- reducers/
        |-index.js
        |-main.js
        |-repository.js
        |-search.js
        |-username.js
    |- routes/
        |-stacks.js
    |- Store/
        |-index.js
    |- types/
        |-anything.d.ts
    |- utils/
        |-stringUtils.js
        |-stringUtils.test.js
        |-user.js
|- .babelrc
|- .gitignore
|- App.js
|- app.json
|- PrivacyPolicy
|- babel.config.js
|- package.json
|- yarn-error.log
|- yarn.lock
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="github_issues_tracker/

" tabindex="0" role="button">
<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-clippy js-clipboard-clippy-icon m-2">
<path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>
</svg>
<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check js-clipboard-check-icon color-text-success m-2 d-none">
<path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
</clipboard-copy>

  </div></div>
  
<h1>Contributing</h1>
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch (git checkout -b feature/AmazingFeature).
2. Commit your Changes (git commit -m 'Add some AmazingFeature').
3. Push to the Branch (git push origin feature/AmazingFeature).
4. Open a Pull Request, <a href="https://github.com/DayvChimes/github_issue_tracker/pulls">request pull here<a>.

<h1>License</h1>
Distributed under the MIT License. See <code>LICENSE</code> for more information.

<h1>Contact</h1>
Your Name - <a href="https://twitter.com/dayvchimes">@dayvchimes<a> - dnjagah@gmail.com

Project Link: https://github.com/DayvChimes/github_issue_tracker
