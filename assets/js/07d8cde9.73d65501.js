"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75791],{40506:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=i(24246),t=i(71670);const c={sidebar_position:0,slug:"/api/misc/create-docusaurus"},a="\ud83d\udce6 create-docusaurus",o={id:"api/misc/create-docusaurus",title:"\ud83d\udce6 create-docusaurus",description:"A scaffolding utility to help you instantly set up a functional Docusaurus app.",source:"@site/docs/api/misc/create-docusaurus.mdx",sourceDirName:"api/misc",slug:"/api/misc/create-docusaurus",permalink:"/docs/api/misc/create-docusaurus",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/create-docusaurus.mdx",tags:[],version:"current",lastUpdatedBy:"\uc815\ubcf4\ud604 Bohyun Jung",lastUpdatedAt:1721898761e3,sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/api/misc/create-docusaurus"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-mermaid",permalink:"/docs/api/themes/@docusaurus/theme-mermaid"},next:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docs/api/misc/@docusaurus/eslint-plugin"}},r={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>-t, --typescript</code>",id:"typescript",level:3},{value:"<code>-g, --git-strategy</code>",id:"git-strategy",level:3},{value:"<code>-p, --package-manager</code>",id:"package-manager",level:3},{value:"<code>-s, --skip-install</code>",id:"skip-install",level:3}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"-create-docusaurus",children:"\ud83d\udce6 create-docusaurus"}),"\n",(0,n.jsx)(s.p,{children:"A scaffolding utility to help you instantly set up a functional Docusaurus app."}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npx create-docusaurus@latest [name] [template] [rootDir]\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"name"})," argument will be used as the site's path as well as the ",(0,n.jsx)(s.code,{children:"name"})," field in the created app's package.json. It can be an absolute path, or a path relative to ",(0,n.jsx)(s.code,{children:"rootDir"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"template"})," argument can be one of the following:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"classic"}),": Uses the classic template (recommended)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"facebook"}),": Uses the Facebook/Meta template, which contains some Meta-specific setup"]}),"\n",(0,n.jsxs)(s.li,{children:["A git repo URL (beginning with ",(0,n.jsx)(s.code,{children:"https://"})," or ",(0,n.jsx)(s.code,{children:"git@"}),"), which can be cloned to the destination"]}),"\n",(0,n.jsx)(s.li,{children:"A local file path relative to CWD, which contains the files to be copied to destination"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"rootDir"})," will be used to resolve the absolute path to the site directory. The default is CWD."]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"This command should be preferably used in an interactive shell so all features are available."})}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(s.h3,{id:"typescript",children:(0,n.jsx)(s.code,{children:"-t, --typescript"})}),"\n",(0,n.jsxs)(s.p,{children:["Used when the template argument is a recognized name. Currently, only ",(0,n.jsx)(s.code,{children:"classic"})," provides a TypeScript variant."]}),"\n",(0,n.jsx)(s.h3,{id:"git-strategy",children:(0,n.jsx)(s.code,{children:"-g, --git-strategy"})}),"\n",(0,n.jsx)(s.p,{children:"Used when the template argument is a git repo. It needs to be one of:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"deep"}),": preserves full git history"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"shallow"}),": clones with ",(0,n.jsx)(s.code,{children:"--depth=1"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"copy"}),": does a shallow clone, but does not create a git repo"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"custom"}),": enter your custom git clone command. We will prompt you for it. You can write something like ",(0,n.jsx)(s.code,{children:"git clone --depth 10"}),", and we will append the repository URL and destination directory."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"package-manager",children:(0,n.jsx)(s.code,{children:"-p, --package-manager"})}),"\n",(0,n.jsxs)(s.p,{children:["Value should be one of ",(0,n.jsx)(s.code,{children:"npm"}),", ",(0,n.jsx)(s.code,{children:"yarn"}),", ",(0,n.jsx)(s.code,{children:"pnpm"}),", or ",(0,n.jsx)(s.code,{children:"bun"}),". If it's not explicitly provided, Docusaurus will infer one based on:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The lockfile already present in the CWD (e.g. if you are setting up website in an existing project)"}),"\n",(0,n.jsxs)(s.li,{children:["The command used to invoke ",(0,n.jsx)(s.code,{children:"create-docusaurus"})," (e.g. ",(0,n.jsx)(s.code,{children:"npm init"}),", ",(0,n.jsx)(s.code,{children:"npx"}),", ",(0,n.jsx)(s.code,{children:"yarn create"}),", ",(0,n.jsx)(s.code,{children:"bunx"}),", etc.)"]}),"\n",(0,n.jsx)(s.li,{children:"Interactive prompting, in case all heuristics are not present"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"skip-install",children:(0,n.jsx)(s.code,{children:"-s, --skip-install"})}),"\n",(0,n.jsxs)(s.p,{children:["If provided, Docusaurus will not automatically install dependencies after creating the app. The ",(0,n.jsx)(s.code,{children:"--package-manager"})," option is only useful when you are actually installing dependencies."]})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},71670:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>a});var n=i(27378);const t={},c=n.createContext(t);function a(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);