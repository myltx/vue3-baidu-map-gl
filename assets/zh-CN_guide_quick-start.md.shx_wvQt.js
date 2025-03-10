import{_ as n,c as p,j as a,a as s,I as e,al as i,D as l,o as h}from"./chunks/framework.n6hqIsqL.js";const B=JSON.parse('{"title":"快速开始","description":"","frontmatter":{"title":"快速开始","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/guide/quick-start.md","filePath":"zh-CN/guide/quick-start.md","lastUpdated":1734979674000}'),k={name:"zh-CN/guide/quick-start.md"},r=i(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>本节将介绍如何在项目中使用 Vue3 BaiduMap GL。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><h3 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-label="Permalink to &quot;完整引入&quot;">​</a></h3><p>失去 Tree Shaking 的功能，打包有冗余代码。如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue3BaiduMapGL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue3-baidu-map-gl&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue3BaiduMapGL)</span></span></code></pre></div>`,6),d={id:"volar-支持",tabindex:"-1"},o=a("a",{class:"header-anchor",href:"#volar-支持","aria-label":'Permalink to "Volar 支持 <Badge type="tip" text="^0.0.21" />"'},"​",-1),E=i(`<p>如果你在使用 <code>Volar</code>，那么可以在 <code>tsconfig.json</code> 中配置 <code>compilerOptions.types</code> 来指定全局组件类型，从而获得更好的类型提示。如下图：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tsconfig.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue3-baidu-map-gl/volar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2),c={id:"按需导入",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#按需导入","aria-label":'Permalink to "按需导入 <Badge type="tip" text="推荐" />"'},"​",-1),u=i(`<p>Vue3 BaiduMap GL 提供了基于 ES Module 开箱即用的 Tree Shaking 功能。你可以直接导入组件并使用它。这种情况下，只有导入的组件才会被打包。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">BMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">BZoom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- ... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">BMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BMap, BZoom } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue3-baidu-map-gl&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="申请-ak-密钥" tabindex="-1">申请 ak 密钥 <a class="header-anchor" href="#申请-ak-密钥" aria-label="Permalink to &quot;申请 ak 密钥&quot;">​</a></h2><p>在开始使用前，您还需在百度地图开发者后台申请百度地图 ak 密钥，然后在项目中<a href="./config">配置 ak 密钥</a>后，才能正确的渲染地图。详细请阅读下面两个链接的内容：</p><blockquote><p><a href="https://lbs.baidu.com/index.php?title=jspopularGL/guide/getkey" target="_blank" rel="noreferrer">官方密钥 ak 申请指引</a></p><p><a href="https://lbsyun.baidu.com/apiconsole/key?application=key" target="_blank" rel="noreferrer">申请开发者密钥 ak</a></p></blockquote><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>参考<a href="./config">配置</a></p><h2 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h2><p>您可以从现在起启动您的项目。对于每个组件或 hooks 的用法，请参考对应的文档。</p>`,9);function y(_,b,m,F,A,C){const t=l("Badge");return h(),p("div",null,[r,a("h4",d,[s("Volar 支持 "),e(t,{type:"tip",text:"^0.0.21"}),s(),o]),E,a("h3",c,[s("按需导入 "),e(t,{type:"tip",text:"推荐"}),s(),g]),u])}const v=n(k,[["render",y]]);export{B as __pageData,v as default};
