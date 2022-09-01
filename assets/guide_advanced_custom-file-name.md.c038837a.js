import{_ as i,c as e,o as l,a}from"./app.7b821e25.js";const m=JSON.parse('{"title":"\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D","description":"","frontmatter":{},"headers":[{"level":2,"title":"bilibili.name.format","slug":"bilibili-name-format","link":"#bilibili-name-format","children":[]},{"level":2,"title":"bilibili.name.date.favTime.pattern","slug":"bilibili-name-date-favtime-pattern","link":"#bilibili-name-date-favtime-pattern","children":[]},{"level":2,"title":"bilibili.name.date.cTime.pattern","slug":"bilibili-name-date-ctime-pattern","link":"#bilibili-name-date-ctime-pattern","children":[]},{"level":2,"title":"avId","slug":"avid","link":"#avid","children":[]},{"level":2,"title":"numAvId","slug":"numavid","link":"#numavid","children":[]},{"level":2,"title":"pAv","slug":"pav","link":"#pav","children":[]},{"level":2,"title":"pAv[0-9]","slug":"pav-0-9","link":"#pav-0-9","children":[]},{"level":2,"title":"pDisplay","slug":"pdisplay","link":"#pdisplay","children":[]},{"level":2,"title":"pDisplay[0-9]","slug":"pdisplay-0-9","link":"#pdisplay-0-9","children":[]},{"level":2,"title":"qn","slug":"qn","link":"#qn","children":[]},{"level":2,"title":"avTitle","slug":"avtitle","link":"#avtitle","children":[]},{"level":2,"title":"clipTitle","slug":"cliptitle","link":"#cliptitle","children":[]},{"level":2,"title":"UpName","slug":"upname","link":"#upname","children":[]},{"level":2,"title":"UpId","slug":"upid","link":"#upid","children":[]},{"level":2,"title":"listName","slug":"listname","link":"#listname","children":[]},{"level":2,"title":"listOwnerName","slug":"listownername","link":"#listownername","children":[]},{"level":2,"title":"favTime","slug":"favtime","link":"#favtime","children":[]},{"level":2,"title":"cTime","slug":"ctime","link":"#ctime","children":[]}],"relativePath":"guide/advanced/custom-file-name.md","lastUpdated":1662005507000}'),d={name:"guide/advanced/custom-file-name.md"},t=a('<h1 id="\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D" tabindex="-1">\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D" aria-hidden="true">#</a></h1><ul><li><p>\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00<code>config/app.config</code></p></li><li><p>\u627E\u5230<code>bilibili.name.format</code>\uFF0C\u4FEE\u6539\u5B83\u7684\u503C</p></li></ul><h2 id="bilibili-name-format" tabindex="-1">bilibili.name.format <a class="header-anchor" href="#bilibili-name-format" aria-hidden="true">#</a></h2><ul><li>\u9ED8\u8BA4\u503C: <code>(:listName 0_listName\\)UpName\\avTitle-(:favTime favTime-)pAv2-clipTitle-qn</code></li><li>\u91CA\u4E49:<br> \u6587\u4EF6\u540D\u53EF\u4EE5\u5206\u4E3A4\u79CD\u7EC4\u6210\u90E8\u5206\uFF1A \u5185\u7F6E\u7684\u5173\u952E\u8BCD\u3001\u8DEF\u5F84\u5206\u9694\u7B26\u3001\u6761\u4EF6\u8BED\u53E5\u3001\u5176\u5B83\u5185\u5BB9 <ul><li><strong>\u5185\u7F6E\u7684\u5173\u952E\u8BCD</strong><ul><li>\u7A0B\u5E8F\u4F1A\u5C06\u5176\u66FF\u6362\u4E3A\u76F8\u5E94\u5185\u5BB9</li></ul></li><li><strong>\u8DEF\u5F84\u5206\u9694\u7B26</strong> <code>/</code>\u6216<code>\\</code><ul><li>\u7A0B\u5E8F\u4F1A\u5C06\u5206\u9694\u7B26\u5DE6\u8FB9\u7684\u5185\u5BB9\u5EFA\u7ACB\u4E3A\u6587\u4EF6\u5939\uFF0C\u53F3\u8FB9\u7EE7\u7EED\u5904\u7406</li></ul></li><li><strong>\u6761\u4EF6\u8BED\u53E5</strong><ul><li>\u5F53\u6761\u4EF6\u6210\u7ACB\u65F6\uFF08\u5373\u7ED3\u679C\u5305\u542B\u8BE5\u5B57\u6BB5\uFF09\uFF0C\u7A0B\u5E8F\u8FD4\u56DE\u5904\u7406\u540E\u7684\u683C\u5F0F\u5B57\u7B26\u4E32</li><li>\u5F53\u6761\u4EF6\u4E0D\u6210\u7ACB\u65F6\uFF0C\u7A0B\u5E8F\u8FD4\u56DE\u7A7A</li><li><code>(:\u6761\u4EF6 \u683C\u5F0F\u5B57\u7B26\u4E32)</code> \u6216 <code>[:\u6761\u4EF6 \u683C\u5F0F\u5B57\u7B26\u4E32]</code> \u8868\u793A\u6B63\u5411\u6761\u4EF6\uFF08\u5373\u7ED3\u679C\u5305\u542B\u6761\u4EF6\u5B57\u6BB5\uFF09</li><li><code>(!\u6761\u4EF6 \u683C\u5F0F\u5B57\u7B26\u4E32)</code> \u6216 <code>[!\u6761\u4EF6 \u683C\u5F0F\u5B57\u7B26\u4E32]</code> \u8868\u793A\u53CD\u5411\u6761\u4EF6\uFF08\u5373\u7ED3\u679C\u4E0D\u5305\u542B\u6761\u4EF6\u5B57\u6BB5\uFF09</li><li><code>()</code>\u6761\u4EF6\u5185\u4E0D\u80FD\u542B\u6709\u53F3\u62EC\u53F7<code>)</code></li><li><code>[]</code>\u6761\u4EF6\u5185\u4E0D\u80FD\u542B\u6709\u53F3\u4E2D\u62EC\u53F7<code>]</code></li></ul></li><li><strong>\u5176\u5B83\u5185\u5BB9</strong><ul><li>\u4E0D\u5C5E\u4E8E\u4E0A\u8FF0\u5185\u5BB9\u7684\u5185\u5BB9\uFF0C\u79F0\u4E4B\u4E3A\u5176\u5B83\u5185\u5BB9\uFF0C\u7A0B\u5E8F\u539F\u6837\u8FD4\u56DE</li></ul></li></ul></li><li>\u793A\u4F8B <ul><li><code>avTitle-pAv2-qn</code><ul><li>\u4E0D\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u4E0D\u5305\u542B\u6761\u4EF6\u683C\u5F0F\u7684\u6700\u7B80\u5355\u793A\u4F8B</li><li><code>\u5996\u59EC\uFF1A\u62FF\u4E86\u4E2A\u4EBA\u5934\u6211\u5C31\u5D29\u4E86\uFF1F\u8D5B\u6069\u6253\u5996\u59EC\u592A\u5FEB\u4E50\u4E86\u5427\uFF01-p01-80.mp4</code></li></ul></li><li><code>(:favTime favTime-)avTitle-pAv2-qn</code><ul><li>\u6DFB\u52A0\u4E86\u6536\u85CF\u65F6\u95F4\u5B57\u6BB5\uFF0C\u5E76\u4F7F\u7528\u4E86\u6761\u4EF6\u8BED\u53E5</li><li>\u5982\u679C\u662F\u901A\u8FC7\u6536\u85CF\u5939\u94FE\u63A5\u4E0B\u8F7D\uFF0C\u90A3\u4E48<br><code>220831-\u5996\u59EC\uFF1A\u62FF\u4E86\u4E2A\u4EBA\u5934\u6211\u5C31\u5D29\u4E86\uFF1F\u8D5B\u6069\u6253\u5996\u59EC\u592A\u5FEB\u4E50\u4E86\u5427\uFF01-p01-80.mp4</code></li><li>\u5982\u679C\u662F\u901A\u8FC7\u5176\u5B83\u94FE\u63A5\u4E0B\u8F7D\uFF0C\u56E0\u4E3A\u4E0D\u5B58\u5728\u6536\u85CF\u65F6\u95F4\u5B57\u6BB5\uFF0C\u90A3\u4E48<br><code>\u5996\u59EC\uFF1A\u62FF\u4E86\u4E2A\u4EBA\u5934\u6211\u5C31\u5D29\u4E86\uFF1F\u8D5B\u6069\u6253\u5996\u59EC\u592A\u5FEB\u4E50\u4E86\u5427\uFF01-p01-80.mp4</code></li></ul></li><li><code>UpName\\(:favTime favTime-)avTitle-pAv2-qn</code><ul><li>\u4E0B\u8F7D\u7684\u89C6\u9891\u592A\u591A\uFF0C\u653E\u540C\u4E00\u4E2A\u6587\u4EF6\u5939\u5F88\u4E71\uFF0C\u6309up\u4E3B\u7684\u540D\u5B57\u5206\u7C7B\u521B\u5EFA\u6587\u4EF6\u5939</li><li>\u6587\u4EF6\u540D\u540C\u4E0A\uFF0C\u6587\u4EF6\u4F4D\u7F6E\u5728<code>{\u4E0B\u8F7D\u4FDD\u5B58\u76EE\u5F55}/\u6211\u624D\u662F\u718A\u732B\u5927G</code></li></ul></li></ul></li></ul><h2 id="bilibili-name-date-favtime-pattern" tabindex="-1">bilibili.name.date.favTime.pattern <a class="header-anchor" href="#bilibili-name-date-favtime-pattern" aria-hidden="true">#</a></h2><ul><li>\u9ED8\u8BA4\u503C: <code>yyMMdd</code></li><li>\u91CA\u4E49:<br> \u683C\u5F0F\u5316\u6536\u85CF\u65F6\u95F4<br> \u4E0D\u4F1A\u53EF\u4EE5\u767E\u5EA6 <code>java \u683C\u5F0F\u5316\u65F6\u95F4 SimpleDateFormat</code></li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>220831</code></li></ul><h2 id="bilibili-name-date-ctime-pattern" tabindex="-1">bilibili.name.date.cTime.pattern <a class="header-anchor" href="#bilibili-name-date-ctime-pattern" aria-hidden="true">#</a></h2><ul><li>\u9ED8\u8BA4\u503C: <code>yyMMdd</code></li><li>\u91CA\u4E49:<br> \u683C\u5F0F\u5316\u53D1\u5E03\u65F6\u95F4<br> \u4E0D\u4F1A\u53EF\u4EE5\u767E\u5EA6 <code>java \u683C\u5F0F\u5316\u65F6\u95F4 SimpleDateFormat</code></li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>220831</code></li></ul><h1 id="\u5185\u7F6E\u5173\u952E\u8BCD" tabindex="-1">\u5185\u7F6E\u5173\u952E\u8BCD <a class="header-anchor" href="#\u5185\u7F6E\u5173\u952E\u8BCD" aria-hidden="true">#</a></h1><h2 id="avid" tabindex="-1">avId <a class="header-anchor" href="#avid" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> bv\u53F7\u3002\u7531\u4E8E\u5386\u53F2\u539F\u56E0\uFF0C\u8FD9\u91CC\u4E0D\u53EBbvId</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>BV1BJ411E7uM</code></li></ul><h2 id="numavid" tabindex="-1">numAvId <a class="header-anchor" href="#numavid" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> av\u53F7\u4E2D\u7684\u6570\u5B57</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>av1234567</code> \u4E2D\u7684 <code>1234567</code></li></ul><h2 id="pav" tabindex="-1">pAv <a class="header-anchor" href="#pav" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> av \u7684\u7B2C\u51E0\u4E2A\u89C6\u9891</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>p1</code> / <code>p2</code></li></ul><h2 id="pav-0-9" tabindex="-1">pAv[0-9] <a class="header-anchor" href="#pav-0-9" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> av \u7684\u7B2C\u51E0\u4E2A\u89C6\u9891\u7684\u683C\u5F0F\u5316\u5B57\u7B26\u4E32, \u540E\u9762\u7684\u6570\u5B57n\u8868\u793An\u4F4D\u6570\uFF0C\u4E0D\u8DB3\u8865\u96F6</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>pAv2</code> \u5BF9\u5E94 <code>p01</code> / <code>p99</code> / <code>p100</code></li></ul><h2 id="pdisplay" tabindex="-1">pDisplay <a class="header-anchor" href="#pdisplay" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> \u5408\u96C6\u7684\u7B2C\u51E0\u4E2A\u89C6\u9891</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>pn1</code> / <code>pn2</code></li></ul><h2 id="pdisplay-0-9" tabindex="-1">pDisplay[0-9] <a class="header-anchor" href="#pdisplay-0-9" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> \u5408\u96C6\u7684\u7B2C\u51E0\u4E2A\u89C6\u9891\u7684\u683C\u5F0F\u5316\u5B57\u7B26\u4E32, \u540E\u9762\u7684\u6570\u5B57n\u8868\u793An\u4F4D\u6570\uFF0C\u4E0D\u8DB3\u8865\u96F6</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>pDisplay2</code> \u5BF9\u5E94 <code>pn01</code> / <code>pn99</code> / <code>pn100</code></li></ul><h2 id="qn" tabindex="-1">qn <a class="header-anchor" href="#qn" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> \u6E05\u6670\u5EA6\u503C</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>32</code> / <code>64</code> / <code>80</code> / <code>120</code></li></ul><h2 id="avtitle" tabindex="-1">avTitle <a class="header-anchor" href="#avtitle" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> av\u6807\u9898</li></ul><h2 id="cliptitle" tabindex="-1">clipTitle <a class="header-anchor" href="#cliptitle" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> \u89C6\u9891\u5C0F\u6807\u9898</li></ul><h2 id="upname" tabindex="-1">UpName <a class="header-anchor" href="#upname" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> up\u7684\u540D\u5B57</li></ul><h2 id="upid" tabindex="-1">UpId <a class="header-anchor" href="#upid" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> up\u7684id</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>https://space.bilibili.com/267776898/</code> \u5BF9\u5E94\u7684 <code>267776898</code></li></ul><h2 id="listname" tabindex="-1">listName <a class="header-anchor" href="#listname" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> \u96C6\u5408\u540D\u79F0</li><li>\u6CE8\u610F\u4E8B\u9879:<br> \u56E0\u4E3A\u4E0D\u662F\u6240\u6709\u94FE\u63A5\u89E3\u6790\u7ED3\u679C\u90FD\u5B58\u5728\u8BE5\u503C\uFF0C\u6240\u4EE5\u9700\u8981\u914D\u5408<strong>\u6761\u4EF6\u8BED\u53E5</strong>\uFF0C\u4EE5\u514D\u4EA7\u751F\u672A\u77E5\u9519\u8BEF</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br> \u6536\u85CF\u5939<code>https://space.bilibili.com/492744983/favlist?fid=933034683</code> \u5BF9\u5E94\u7684 <code>\u8A79\u59AE\u5F17.\u5EB7\u7EB3\u5229</code><br> UP\u89C6\u9891\u5217\u8868<code>https://space.bilibili.com/378034/channel/seriesdetail?sid=918669</code> \u5BF9\u5E94\u7684 <code>\u5FA1\u59D0\u98CE</code><br> UP\u6240\u6709\u89C6\u9891<code>https://space.bilibili.com/267776898/video</code> \u5BF9\u5E94\u7684 <code>\u6211\u624D\u662F\u718A\u732B\u5927G\u7684\u89C6\u9891\u5217\u8868</code></li></ul><h2 id="listownername" tabindex="-1">listOwnerName <a class="header-anchor" href="#listownername" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> \u96C6\u5408\u7684\u62E5\u6709\u8005</li><li>\u6CE8\u610F\u4E8B\u9879:<br> \u56E0\u4E3A\u4E0D\u662F\u6240\u6709\u94FE\u63A5\u89E3\u6790\u7ED3\u679C\u90FD\u5B58\u5728\u8BE5\u503C\uFF0C\u6240\u4EE5\u9700\u8981\u914D\u5408<strong>\u6761\u4EF6\u8BED\u53E5</strong>\uFF0C\u4EE5\u514D\u4EA7\u751F\u672A\u77E5\u9519\u8BEF</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br> \u6536\u85CF\u5939<code>https://space.bilibili.com/492744983/favlist?fid=933034683</code> \u5BF9\u5E94\u7684 <code>\u827E\u4F26\u548C\u827E\u8587</code><br> UP\u6240\u6709\u89C6\u9891<code>https://space.bilibili.com/267776898/video</code> \u5BF9\u5E94\u7684 <code>\u6211\u624D\u662F\u718A\u732B\u5927G</code></li></ul><h2 id="favtime" tabindex="-1">favTime <a class="header-anchor" href="#favtime" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> \u6536\u85CF\u65F6\u95F4\uFF0C\u9700\u8981\u4E0E\u683C\u5F0F\u5316\u65E5\u671F\u914D\u5408\uFF0C\u4EC5\u5728\u6536\u85CF\u5939\u6709\u6548</li><li>\u6CE8\u610F\u4E8B\u9879:<br> \u56E0\u4E3A\u4E0D\u662F\u6240\u6709\u94FE\u63A5\u89E3\u6790\u7ED3\u679C\u90FD\u5B58\u5728\u8BE5\u503C\uFF0C\u6240\u4EE5\u9700\u8981\u914D\u5408<strong>\u6761\u4EF6\u8BED\u53E5</strong>\uFF0C\u4EE5\u514D\u4EA7\u751F\u672A\u77E5\u9519\u8BEF</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>bilibili.name.date.favTime.pattern = yyMMdd</code> \u5BF9\u5E94\u7684 <code>220831</code></li></ul><h2 id="ctime" tabindex="-1">cTime <a class="header-anchor" href="#ctime" aria-hidden="true">#</a></h2><ul><li>\u91CA\u4E49:<br> \u53D1\u5E03?\u66F4\u65B0?\u65F6\u95F4\uFF0C\u9700\u8981\u4E0E\u683C\u5F0F\u5316\u65E5\u671F\u914D\u5408</li><li>\u6CE8\u610F\u4E8B\u9879:<br> \u56E0\u4E3A\u4E0D\u662F\u6240\u6709\u94FE\u63A5\u89E3\u6790\u7ED3\u679C\u90FD\u5B58\u5728\u8BE5\u503C\uFF0C\u6240\u4EE5\u9700\u8981\u914D\u5408<strong>\u6761\u4EF6\u8BED\u53E5</strong>\uFF0C\u4EE5\u514D\u4EA7\u751F\u672A\u77E5\u9519\u8BEF</li><li>\u5BF9\u5E94\u5185\u5BB9\u4E3E\u4F8B:<br><code>bilibili.name.date.cTime.pattern = yyMMdd</code> \u5BF9\u5E94\u7684 <code>220831</code></li></ul>',39),c=[t];function r(n,o,h,s,p,u){return l(),e("div",null,c)}const v=i(d,[["render",r]]);export{m as __pageData,v as default};
