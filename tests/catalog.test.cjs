const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const rows = JSON.parse(fs.readFileSync(path.join(root,'data/resources.json'),'utf8'));
class Element {
  constructor(tag='div') { this.tag=tag;this.children=[];this.listeners={};this.value='';this.checked=false;this.type='';this.textContent='';this.attrs={}; }
  append(...items) { this.children.push(...items); }
  replaceChildren(...items) { this.children=items; }
  setAttribute(name,value) { this.attrs[name]=value; }
  addEventListener(name,callback) { this.listeners[name]=callback; }
}
function setup(query='', storageDisabled=false) {
  const ids = Object.fromEntries(['search','category','kind','card','reviewed','favorites','count','results','message','reset','share'].map(id => [id,new Element()]));
  ids.reviewed.type=ids.favorites.type='checkbox';ids.reviewed.checked=true;
  const context = {window:{AI_RESOURCES:rows},document:{getElementById:id => ids[id],createElement:tag => new Element(tag)}, URLSearchParams,location:{search:query,pathname:'/catalog.html',hash:'',href:'https://example.test/catalog.html'+query},history:{replaceState(_a,_b,url){this.url=url;}},localStorage:{getItem(){if(storageDisabled)throw Error('disabled');return null;},setItem(){if(storageDisabled)throw Error('disabled');}},navigator:{clipboard:{writeText:async()=>{}}}};
  vm.runInNewContext(fs.readFileSync(path.join(root,'assets/catalog.js'),'utf8'),context);
  return {ids,context};
}
test('default lists only documentation-reviewed entries',()=>{
  const {ids}=setup();assert.equal(ids.results.children.length,rows.filter(r=>r.verification==='docs-reviewed').length);
});
test('Arabic query and category URL filters work',()=>{
  const {ids}=setup('?search=arabic&category=audio&reviewed=1');assert.equal(ids.results.children.length,1);assert.equal(ids.results.children[0].children[1].children[0].textContent,'Qwen3-ASR');
});
test('unreviewed entries are discoverable when requested',()=>{
  const {ids}=setup('?reviewed=0');assert.equal(ids.results.children.length,rows.length);
});
test('search treats text as data and reports no matches',()=>{
  const {ids,context}=setup();ids.search.value='<script>alert(1)</script>';ids.search.listeners.input();assert.equal(ids.results.children[0].className,'empty');assert.match(context.history.url,/%3Cscript%3E/);
});
test('saved-only filter follows save/un-save and reset',()=>{
  const {ids}=setup();const first=ids.results.children[0];first.children.at(-1).children[1].listeners.click();ids.favorites.checked=true;ids.favorites.listeners.change();assert.equal(ids.results.children.length,1);ids.results.children[0].children.at(-1).children[1].listeners.click();assert.equal(ids.results.children[0].className,'empty');ids.reset.listeners.click();assert.equal(ids.results.children.length,35);
});
test('disabled browser storage does not stop the directory',()=>{
  const {ids}=setup('',true);ids.results.children[0].children.at(-1).children[1].listeners.click();assert.match(ids.message.textContent,/unavailable/);assert.equal(ids.results.children.length,35);
});
