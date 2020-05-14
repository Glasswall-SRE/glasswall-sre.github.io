(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(127)),r={title:"SRE Software Standards",description:"Standards for software development in SRE"},l={id:"standards/software",title:"SRE Software Standards",description:"Standards for software development in SRE",source:"@site/docs\\standards\\software.md",permalink:"/docs/standards/software",editUrl:"https://dev.azure.com/glasswall/Glasswall%20Cloud/_git/Glasswall.SRE.Documentation?path=%2F/docs/standards/software.md",sidebar:"docs",previous:{title:"Data Management",permalink:"/docs/products/filetrust-email/security-policy/data-management"}},s=[{value:"Style guides",id:"style-guides",children:[{value:"Python",id:"python",children:[]}]},{value:"Code documentation",id:"code-documentation",children:[]},{value:"READMEs",id:"readmes",children:[]},{value:"API documentation",id:"api-documentation",children:[]},{value:"User interface documentation",id:"user-interface-documentation",children:[]},{value:"Config documentation",id:"config-documentation",children:[]},{value:"Other documentation",id:"other-documentation",children:[]},{value:"Branch naming",id:"branch-naming",children:[]},{value:"Commit messages",id:"commit-messages",children:[]},{value:"Pull requests",id:"pull-requests",children:[]},{value:"Ignoring files",id:"ignoring-files",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Building (CI)",id:"building-ci",children:[{value:"Gated build",id:"gated-build",children:[]},{value:"CI build",id:"ci-build",children:[]}]},{value:"Releasing (CD)",id:"releasing-cd",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"In order to function effectively as a primarily engineering-focused team,\nwe need to have stringent standards for how our engineering is done.\nThis is to remove all ambiguity when it comes to how to go about engineering\nwork, as well as to make it easier for existing engineers and new joiners\nto get used to the way we write/manage/maintain software."),Object(o.b)("p",null,"This document will give an overview of our standards, and will evolve over\ntime as we expand our remit in terms of engineering work that we do."),Object(o.b)("p",null,"Please note that standards outlined here are ",Object(o.b)("strong",{parentName:"p"},"ONLY")," for SRE-related\nengineering projects, and shouldn't necessarily be enforced on non-SRE\nprojects (unless there are any fans of these processes, of course!)."),Object(o.b)("p",null,"We have standards for the following areas:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#project-folder-structure-standards"}),"Project folder structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#readme-standards"}),"README files")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#code-style-standards"}),"Code style")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#documentation-standards"}),"Documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#testing-standards"}),"Testing")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#source-control-standards"}),"Source control")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#work-tracking-standards"}),"Work tracking")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#ci-and-cd-standards"}),"CI/CD")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#configuration-standards"}),"Configuration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#code-review-standards"}),"Code review")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#logging-standards"}),"Logging"))),Object(o.b)("h1",{id:"project-folder-structure-standards"},"Project folder structure standards"),Object(o.b)("p",null,"All project repositories should roughly follow this format. Obviously it\ncan vary on a case by case basis, but if it varies too far make sure it's\nclearly documented."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Glasswall.SRE.{project name}/")," : The repo should be given a descriptive name."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  A namespace must be provided for the project. For example, a FileTrust\n  project should reside within `Glasswall.SRE.FileTrust.{project name}` .\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"src/")," : This folder is where the source code lives. Subfolders here are"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  optional, and can be added to/removed based on project needs.\n  Folder names can optionally be prefixed with namespaces in things\n  that require it, for example in C# projects.\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"business/")," : The application business logic should be in here.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"common/")," : Common functionality (that can be reused elsewhere) should"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  be in here.\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"database/")," : Any DDL or other database related things should be"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  stored in here.\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"initialisation/")," : Application entry point(s) and init code should be"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  here.\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"service/")," : For microservices, the ",Object(o.b)("inlineCode",{parentName:"p"},"main()")," method, dockerfiles, helm"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  charts etc should be in here.\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"config/")," : For projects with lots of config, they should all be in"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  this folder, otherwise a single config file in place of this\n  will work fine.\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"test/")," : This folder is where code for tests lives. Obviously if no tests"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  of a certain type exist subfolders for them should not be present\n  in the project. As with the `src/` folder, test folders can\n  optionally be prefixes with namespaces.\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"l0/")," : This is where L0 tests should be stored."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"l1/")," : L1 tests."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"l2/")," : L2 tests."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"l3/")," : L3 tests."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"common/")," : Common test functionality can be stored here."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},".gitignore")," : All projects should have a gitignore.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"README.md")," : All projects should have a markdown README.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"{...}")," : Any other files that make sense being in the root, for example"))))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," , C# ",Object(o.b)("inlineCode",{parentName:"p"},".sln")," files, ",Object(o.b)("inlineCode",{parentName:"p"},"setup.py")," , ",Object(o.b)("inlineCode",{parentName:"p"},"Pipfile")," , etc."),Object(o.b)("p",null,"A good case for customising this project structure would be if you're making\nsomething that implicitly needs a different structure, for example if you're\nwriting a Python package, where client usage is tied to folder structure.\nIn cases like this, simply make sure the structure is logical and well\ndocumented. An example of this would be:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Glasswall.SRE.Common.coolpythonpackage/")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"coolpythonpackage/")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"__init__.py")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"common.py")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"coolfunctionality.py")," "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config/")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config.yml")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"log-config.yml")," "))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"test/")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"__init__.py")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"l0/")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"__init__.py")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"test_common.py")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"test_coolfunctionality.py")," "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"common/")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"__init__.py")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"common_setup.py")," "))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},".gitignore")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"README.md")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Pipfile")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setup.py")," ")))),Object(o.b)("p",null,"Some projects may have subprojects. In this case, subprojects should be stored\nin folders in the root directory of the repo, and subproject structure within\nthese folders should match regular project structure as outlined in this\nsection."),Object(o.b)("h1",{id:"readme-standards"},"README standards"),Object(o.b)("p",null,"All projects must have a README in the root of the project repository. This\nREADME serves to give people interested in the project a quick way of grokking\neverything they'll need to know about it."),Object(o.b)("p",null,"The structure should be as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markdown"}),"# {Project title}\nOne paragraph description of project.\n\n## Getting started\n\nInstructions to clone the repo and get started with developing the project.\n\n### Prerequisites\n\nA list of things you need to install to develop the project.\n\n### Quick start\n\nA (quick!) guide to getting the project up and running.\n\n### Testing\n\nA guide to running tests that should (and can be) run locally. Think L0s and L1s.\n\n### Deployment\n\nA guide on how to deploy the project.\n\n## Folder structure\n\nExplain the folder structure of your project in a hierarhical way with bullet points.\n\nAny other useful information you can think of.\n")),Object(o.b)("p",null,"All projects need to have a README. If a project does not have a README this is\nconsidered a bug. If a project has an empty README this is a bug. If a project\nhas an incomplete README this is a bug."),Object(o.b)("h1",{id:"code-style-standards"},"Code style standards"),Object(o.b)("p",null,"Generally code should follow Google style guides. If a Google style guide\ndoesn't exist for a particular language then follow the most commonly used\npublic style guide available. Do not write a new style guide for a language if\nyou can find a perfectly good one online, as it's a huge undertaking and\nthere's a lot that can and will be missed out on the first few iterations of\nwriting."),Object(o.b)("p",null,"If there is any conflicting sections in a style guide you find online (for\nexample, if an online style guide has a section that is also listed in these\nstandards), then please give these standards priority over the style guide."),Object(o.b)("p",null,"Below you can find our accepted style guides for each language that we use.\nIf in the future we start using a language that isn't listed here, please add\nit to this section and note the style guide that you have decided to use so\nfuture projects in this new language can keep their standards uniform."),Object(o.b)("h2",{id:"style-guides"},"Style guides"),Object(o.b)("h3",{id:"python"},"Python"),Object(o.b)("p",null,"Google's style guide: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://google.github.io/styleguide/pyguide.html"}),"https://google.github.io/styleguide/pyguide.html")),Object(o.b)("p",null,"There's a good example of usage here: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html"}),"https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/google/yapf"}),"YAPF")," to automatically format your code."),Object(o.b)("p",{parentName:"li"},"We recommend binding this to happen every time you save."))),Object(o.b)("h4",{id:"overrides"},"Overrides"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The character limit we use is 120, not Google's suggested 80.")),Object(o.b)("h1",{id:"documentation-standards"},"Documentation standards"),Object(o.b)("p",null,"We want to write documentation for almost everything we do as SREs. Whether it\nis code, processes, playbooks, incidents, postmortems, whatever. This section\nwill specifically cover documentation for things related to engineering."),Object(o.b)("h2",{id:"code-documentation"},"Code documentation"),Object(o.b)("p",null,"Documentation for code should be written in line with the style guide that is\nbeing used. If the style guide for some reason omits documentation, then you\nstill need to write docstrings and comments for code. A suggestion for if\ndocumentation is omitted from the style guide would be to write docstrings in\na format that can be read by some docstring generation tool (like\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.doxygen.nl/"}),"Doxygen"),"). The aim is for API references to be\nautomatically generated for any code that we write."),Object(o.b)("p",null,"All public and private interfaces ",Object(o.b)("strong",{parentName:"p"},"MUST")," have docstrings."),Object(o.b)("p",null,"Inline/block comments should be used where code needs it. Use your common\nsense. Don't over comment."),Object(o.b)("h2",{id:"readmes"},"READMEs"),Object(o.b)("p",null,"READMEs should be written in line with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#readme-standards"}),"README standards"),"."),Object(o.b)("h2",{id:"api-documentation"},"API documentation"),Object(o.b)("p",null,"If your application exposes any APIs be it HTTP, REST, RPC, or any other, then\nit must be documented. Documentation should be generated from some kind of spec\nusing something like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://swagger.io/"}),"Swagger")," for example."),Object(o.b)("h2",{id:"user-interface-documentation"},"User interface documentation"),Object(o.b)("p",null,"If your app has a user interface (for example, a CLI or a GUI) then the usage\nof this should be documented."),Object(o.b)("p",null,"This could be as simple as a 'Usage' section in the README (see\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/kubectl/overview/#syntax"}),"here")," for example), or 'how-to' guides if your app has a GUI."),Object(o.b)("h2",{id:"config-documentation"},"Config documentation"),Object(o.b)("p",null,"If your application uses config files, you must provide example config files,\nas well as documentation of ",Object(o.b)("strong",{parentName:"p"},"EVERY")," field that can be used in the config."),Object(o.b)("h2",{id:"other-documentation"},"Other documentation"),Object(o.b)("p",null,"If your application uses any other things that can be documented (for example,\nit has DDL for a database or helm charts or anything) comments should be used\nwithin these files explaining anything that is not immediately clear."),Object(o.b)("h1",{id:"testing-standards"},"Testing standards"),Object(o.b)("p",null,"Testing standards can be found here: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.azure.com/glasswall/Glasswall%20Cloud/_wiki/wikis/Glasswall-Cloud.wiki?pagePath=%2FTest%20Level%20Definitions"}),"https://dev.azure.com/glasswall/Glasswall%20Cloud/_wiki/wikis/Glasswall-Cloud.wiki?pagePath=%2FTest%20Level%20Definitions")),Object(o.b)("h1",{id:"source-control-standards"},"Source control standards"),Object(o.b)("p",null,"In order for our CI/CD pipelines to function effectively, we as a team need to\nhave well-defined guidelines for how we use source control. Good source control\npractice also helps organise/track work items effectively."),Object(o.b)("p",null,"All source control repositories must be Git repositories."),Object(o.b)("p",null,"All repositories adhere to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"}),"feature branch workflow"),"."),Object(o.b)("h2",{id:"branch-naming"},"Branch naming"),Object(o.b)("p",null,"Branches should be named in the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{initials}/{issue-number}-{issue-description}\n")),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"sg/98765-fix-queue-bug\n")),Object(o.b)("p",null,"The reason for this is so that you can identify whose branch it is, the\nbacklog item it's related to, and a short description of the feature."),Object(o.b)("h2",{id:"commit-messages"},"Commit messages"),Object(o.b)("p",null,"Commit messages should be in the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"#{issue-number}: {message}\n")),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"#98765: Add error checking to queue pushing code\n")),Object(o.b)("p",null,"The reason for this is so that you can see which issue it's related to\n(and Azure DevOps will automatically pick this up and link it for you)."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://chris.beams.io/posts/git-commit/"}),"Here is"),' some good advice for\nwriting for writing commit messages. The commit message should read as\n"this commit will {message}". For example, "this commit will add error\nchecking to queue pushing code". Writing the commit as "added error checking\nto queue pushing code" would be incorrect, as it would read "this commit will\nadded error checking to queue pushing code".'),Object(o.b)("p",null,"This seems pedantic, but it really helps out when reading the git log."),Object(o.b)("p",null,"Another good source of information for writing commit messages is\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://google.github.io/eng-practices/review/developer/cl-descriptions.html"}),"Google's advice"),".\nPlease note that Google refers to these as a 'CL', or 'change list'."),Object(o.b)("h2",{id:"pull-requests"},"Pull requests"),Object(o.b)("p",null,"Feature branches are pushed to master, and when the feature is complete, a\npull request is created to request that the feature changes are 'pulled' into\nthe master branch."),Object(o.b)("p",null,"Pull requests will need to be reviewed and approved by 2 other members of the\nteam before they are able to be merged. Additionally, a gated CI build should\nbe run and only allow the PR to be merged if it builds successfully. For more\ninformation please see the section on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#ci-and-cd-standards"}),"CI/CD standards"),"."),Object(o.b)("p",null,"If possible and realistic, it is preferable to rebase the changes in the\nfeature branch onto the master branch, as this keeps the graph clean and\neasy to understand.",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.atlassian.com/git/tutorials/merging-vs-rebasing"}),"Here is some advice"),"\non rebasing versus merging. In particular, follow the advice in the 'The\nGolden Rule of Rebasing' section."),Object(o.b)("h2",{id:"ignoring-files"},"Ignoring files"),Object(o.b)("p",null,"All repos should have ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore")," files in order to ignore any files that\nshould not be put in source control. A very easy way to generate these is by\nusing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://gitignore.io/"}),"http://gitignore.io/"),"."),Object(o.b)("h2",{id:"secrets"},"Secrets"),Object(o.b)("p",null,"Secrets ",Object(o.b)("strong",{parentName:"p"},"SHOULD NOT")," be stored in source control. Under any circumstances.\nIf you're ever thinking of putting one in source control, have a long walk,\ntake a breather, and then find an alternate solution to whatever it is you\nthink you're doing. Because it's not right."),Object(o.b)("p",null,"If you accidentally commit a secret to source control, deleting the file and\ncommitting again will not remove it. With access to the repo, someone can still\nroll back and find the secret. You will need to go back and remove this file\nfrom the cache. This is a massive pain to do, and takes up a lot of time. So\nthe simple solution is to ",Object(o.b)("strong",{parentName:"p"},"NOT STORE SECRETS IN SOURCE CONTROL"),"."),Object(o.b)("p",null,"If you ever need to remove a secret you've accidentally committed, see\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/en/articles/removing-sensitive-data-from-a-repository"}),"the advice here"),". But you shouldn't need to, right?"),Object(o.b)("h1",{id:"work-tracking-standards"},"Work tracking standards"),Object(o.b)("p",null,"All work needs to be tracked on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.azure.com/glasswall/Glasswall%20Cloud/_boards/board/t/Glasswall%20DevOps%20Team/Backlog%20items"}),"our issue board"),".\nWhen a piece of work is being planned, create a product backlog item (PBI) on\nthe board under the 'New' column. Ask someone in charge to look over this piece\nof work and see if it aligns with our current goals, and if they sign off on it\nthen move it into the approved column."),Object(o.b)("p",null,'Issue names should be descriptive enough for someone to get a good impression\nof what a piece of work will entail at a glance. For example, this is the\ndifference between "Helm - Tag Filetrust Releases" and "Tag Releases". Within an issue, there should be a description that gives a more detailed\ndescription of the backlog item. This should be where you propose how to\npotentially do it, as well as link to useful sources if necessary.'),Object(o.b)("p",null,"Tasks should be given to PBIs delineating the steps to complete the work item,\nbut be careful not to make them too granular, as that could get ridiculous."),Object(o.b)("p",null,"When picking up work, you check the 'Approved' column of the board, assign\nyourself to the task, and move it to the 'In Development' column. From here\nyou can comment on the issue to give updates and tick off tasks as you go.\nWhen you've completed the work you can move it into the 'Done' column and start\nthe process over."),Object(o.b)("p",null,"In any work that you do related to the issue, you should refer back to the\nissue ID as much as possible, for example in branch names/commit messages."),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#source-control-standards"}),"source control standards section")," for more\ndetailed guidelines."),Object(o.b)("h1",{id:"ci-and-cd-standards"},"CI and CD standards"),Object(o.b)("p",null,"All source controlled code projects need to have Azure DevOps pipelines for\nboth building and releasing the code. Standards won't get too specific here,\nas a lot of the actions that occur in a pipeline are quite bespoke and will\nvary a lot depending on what is being built and where it's being deployed\nto."),Object(o.b)("h2",{id:"building-ci"},"Building (CI)"),Object(o.b)("p",null,"Code builds are done when there are new commits on a certain branch. The type\nof the build depends on which branch has commits."),Object(o.b)("h3",{id:"gated-build"},"Gated build"),Object(o.b)("p",null,"This pipeline builds code from pull requests onto the master branch. Any code\nthat is requested to be merged onto the master branch must trigger a gated\nbuild to run, which runs tests and validation on the repository to make sure\nbroken code/invalid config isn't being merged into master."),Object(o.b)("p",null,"This build is set up on the master branch's branch policy to run as a build\nvalidation step. If the build fails then the code will not be allowed to be\nmerged into master."),Object(o.b)("h3",{id:"ci-build"},"CI build"),Object(o.b)("p",null,"This pipeline builds code off of new commits to the master branch. Any time\nthere are new commits available in the master branch it should automatically\ntrigger and generate an artifact for the project with everything that will be\nneeded to deploy it."),Object(o.b)("p",null,"These artifacts are kept in storage so that we can release new deployments and\nroll back to old ones at whim."),Object(o.b)("h2",{id:"releasing-cd"},"Releasing (CD)"),Object(o.b)("p",null,"When an artifact is ready after the CI build, it needs to be deployed\nsomewhere -- this is what release pipelines are for. Due to the fact that\nprojects are going to vary so much in terms of where they're being deployed to\nas well as how they should be deployed, it's difficult to write standards for\nthis currently."),Object(o.b)("p",null,"In general:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Automation scripts must be written in Python and source controlled")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Releases should be triggered automatically wherever it makes sense to do so, "),Object(o.b)("p",{parentName:"li"},"for example a release should be automatically created and rolled out to a\ndevelopment/testing environment as soon as an artifact is available."))),Object(o.b)("h1",{id:"configuration-standards"},"Configuration standards"),Object(o.b)("p",null,"A lot of the software we write will require configuration files. It's important\nthat these configuration files are standardised among all of our projects, so\nthings don't start to get too different."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Configuration files should be in YAML wherever possible"),Object(o.b)("li",{parentName:"ul"},"All configuration values should be well documented"),Object(o.b)("li",{parentName:"ul"},"Example configuration files must be provided")),Object(o.b)("h1",{id:"code-review-standards"},"Code review standards"),Object(o.b)("p",null,"We will follow Google's standards for how to do code reviews: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://google.github.io/eng-practices/review/reviewer/"}),"https://google.github.io/eng-practices/review/reviewer/")),Object(o.b)("p",null,"If you need some advice on how to have your code reviewed, again, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://google.github.io/eng-practices/review/developer/handling-comments.html"}),"Google has\nus covered"),"."),Object(o.b)("h1",{id:"logging-standards"},"Logging standards"),Object(o.b)("p",null,"The general accepted format for a log string is the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{UTC-timestamp} [{log-level}] <{file}:{line-number}> {message}\n")),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-log"}),"2019-09-06 10:47:50.099Z [DEBUG] <mailsend.py:13> Hello world!\n")))}b.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(r,".").concat(p)]||d[p]||u[p]||o;return n?i.a.createElement(m,l({ref:t},c,{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);