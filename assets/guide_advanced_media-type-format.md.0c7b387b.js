import{_ as a,c as s,o as l,a as n}from"./app.7b821e25.js";const C=JSON.parse('{"title":"\u8BBE\u7F6E\u89C6\u9891\u683C\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"bilibili.format","slug":"bilibili-format","link":"#bilibili-format","children":[]}],"relativePath":"guide/advanced/media-type-format.md","lastUpdated":1662005507000}'),e={name:"guide/advanced/media-type-format.md"},i=n(`<h1 id="\u8BBE\u7F6E\u89C6\u9891\u683C\u5F0F" tabindex="-1">\u8BBE\u7F6E\u89C6\u9891\u683C\u5F0F <a class="header-anchor" href="#\u8BBE\u7F6E\u89C6\u9891\u683C\u5F0F" aria-hidden="true">#</a></h1><ul><li><p>\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00<code>config/app.config</code></p></li><li><p>\u627E\u5230<code>bilibili.format</code>\uFF0C\u4FEE\u6539\u5B83\u7684\u503C</p></li></ul><h2 id="bilibili-format" tabindex="-1">bilibili.format <a class="header-anchor" href="#bilibili-format" aria-hidden="true">#</a></h2><ul><li><p>\u53D6\u503C\u8303\u56F4: <code>0 | 1 | 2</code></p></li><li><p>\u9ED8\u8BA4\u503C: <code>0</code></p></li><li><p>\u91CA\u4E49:</p><ul><li>\u5F53\u503C\u4E3A<code>0</code>\u65F6, \u4F18\u5148\u4E0B\u8F7D\u5206\u79BB\u7684\u97F3\u89C6\u9891, \u7136\u540E\u901A\u8FC7ffmpeg\u5408\u5E76\u6210MP4\u3002\u67D0\u4E9B\u6781\u7AEF\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u76F4\u63A5\u4E0B\u8F7DFLV\u3002</li></ul><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6E05\u6670\u5EA6\u793A\u4F8B\uFF1A \u67D0BV \u5B58\u5728 4K\u30011080P+\u30011080P\uFF0C\u67D0\u7528\u6237\u662F\u5927\u4F1A\u5458\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42 8K     -&gt; \u8FD4\u56DE 4K</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42 4K     -&gt; \u8FD4\u56DE 4K</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42 1080P+ -&gt; \u8FD4\u56DE 1080P+ </span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42 1080P  -&gt; \u8FD4\u56DE 1080P</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5F53\u503C\u4E3A<code>1</code>\u65F6, \u8BF7\u6C42\u4E0B\u8F7DFLV\u8D44\u6E90\u3002\u8FD9\u65F6\uFF0C\u9AD8\u6E05\u8D44\u6E90\u7684\u6E05\u6670\u5EA6\u8BF7\u6C42\u4E0EMP4\u6709\u6240\u4E0D\u540C\u3002</li></ul><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4F8B\u5982\uFF1A \u67D0BV \u5B58\u5728 4K\u30011080P+\u30011080P\uFF0C\u67D0\u7528\u6237\u662F\u5927\u4F1A\u5458\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42 8K     -&gt; \u8FD4\u56DE 1080P</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42 4K     -&gt; \u8FD4\u56DE 4K</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42 1080P+ -&gt; \u8FD4\u56DE 1080P+ </span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42 1080P  -&gt; \u8FD4\u56DE 1080P</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5F53\u503C\u4E3A<code>2</code>\u65F6, \u8BF7\u6C42\u4E0B\u8F7DMP4\u8D44\u6E90\u3002\u8FD9\u65F6\uFF0C\u6E05\u6670\u5EA6\u4E0D\u53EF\u9009\u62E9\uFF0C\u5927\u6982\u7387\u662F1080P\u3002</li></ul></li></ul>`,4),t=[i];function p(o,c,d,r,A,_){return l(),s("div",null,t)}const f=a(e,[["render",p]]);export{C as __pageData,f as default};
