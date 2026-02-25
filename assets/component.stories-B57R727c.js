import{D as M,b as O}from"./iframe-D5iCFVhD.js";import"./preload-helper-PPVm8Dsz.js";let _,z=0;function x(t){_=t}function k(){_=null,z=0}function $(){return z++}const S=Symbol("haunted.phase"),w=Symbol("haunted.hook"),P=Symbol("haunted.update"),R=Symbol("haunted.commit"),d=Symbol("haunted.effects"),f=Symbol("haunted.layoutEffects"),v="haunted.context";class G{update;host;virtual;[w];[d];[f];constructor(e,s){this.update=e,this.host=s,this[w]=new Map,this[d]=[],this[f]=[]}run(e){x(this);let s=e();return k(),s}_runEffects(e){let s=this[e];x(this);for(let n of s)n.call(this);k()}runEffects(){this._runEffects(d)}runLayoutEffects(){this._runEffects(f)}teardown(){this[w].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Q=Promise.resolve().then.bind(Promise.resolve());function F(){let t=[],e;function s(){e=null;let n=t;t=[];for(var r=0,h=n.length;r<h;r++)n[r]()}return function(n){t.push(n),e==null&&(e=Q(s))}}const U=F(),B=F();class K{renderer;host;state;[S];_updateQueued;_active;constructor(e,s){this.renderer=e,this.host=s,this.state=new G(this.update.bind(this),s),this[S]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(U(()=>{let e=this.handlePhase(P);B(()=>{this.handlePhase(R,e),B(()=>{this.handlePhase(d)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[S]=e,e){case R:this.commit(s),this.runEffects(f);return;case P:return this.render();case d:return this.runEffects(d)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Y=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Z=t=>t?.map(e=>typeof e=="string"?Y(e):e),q=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function J(t){class e extends K{frag;renderResult;constructor(r,h,m){super(r,m||h),this.frag=h}commit(r){this.renderResult=t(r,this.frag)}}function s(n,r,h){const m=(h||r||{}).baseElement||HTMLElement,{observedAttributes:A=[],useShadowDOM:L=!0,shadowRootInit:N={},styleSheets:D}=h||r||{},C=Z(n.styleSheets||D);class E extends m{_scheduler;static get observedAttributes(){return n.observedAttributes||A||[]}constructor(){if(super(),L===!1)this._scheduler=new e(n,this);else{const a=this.attachShadow({mode:"open",...N});C&&(a.adoptedStyleSheets=C),this._scheduler=new e(n,a,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(a,u,o){if(u===o)return;let i=o===""?!0:o;Reflect.set(this,q(a),i)}}function I(c){let a=c,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return a},set(o){u&&a===o||(u=!0,a=o,this._scheduler&&this._scheduler.update())}})}const W=new Proxy(m.prototype,{getPrototypeOf(c){return c},set(c,a,u,o){let i;return a in c?(i=Object.getOwnPropertyDescriptor(c,a),i&&i.set?(i.set.call(o,u),!0):(Reflect.set(c,a,u,o),!0)):(typeof a=="symbol"||a[0]==="_"?i={enumerable:!0,configurable:!0,writable:!0,value:u}:i=I(u),Object.defineProperty(o,a,i),i.set&&i.set.call(o,u),!0)}});return Object.setPrototypeOf(E.prototype,W),E}return s}class l{id;state;constructor(e,s){this.id=e,this.state=s}}function X(t,...e){let s=$(),n=_[w],r=n.get(s);return r||(r=new t(s,_,...e),n.set(s,r)),r.update(...e)}function p(t){return X.bind(null,t)}function H(t){return p(class extends l{callback;lastValues;values;_teardown;constructor(e,s,n,r){super(e,s),t(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function j(t,e){t[d].push(e)}H(j);const V=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,tt=p(class extends l{Context;value;_ranEffect;_unsubscribe;constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,j(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};V(this.state.host).dispatchEvent(new CustomEvent(v,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:r}=e;this.value=n?r:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function et(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(v,this)}disconnectedCallback(){this.removeEventListener(v,this)}handleEvent(n){const{detail:r}=n;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let r of this.listeners)r(n)}get value(){return this._value}},Consumer:t(function({render:n}){const r=tt(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}p(class extends l{value;values;constructor(t,e,s,n){super(t,e),this.value=s(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}});function st(t,e){t[f].push(e)}H(st);const nt=p(class extends l{args;constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});p(class extends l{reducer;currentState;constructor(t,e,s,n,r){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const rt=/([A-Z])/gu;p(class extends l{property;eventName;constructor(t,e,s,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(rt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function at({render:t}){const e=J(t),s=et(e);return{component:e,createContext:s}}const{component:ot}=at({render:M}),it=t=>{const[e,s]=nt(0),{greeting:n="Hello"}=t;return O`
		<p>${n}, World! Count: ${e}</p>
		<button @click=${()=>s(e+1)}>Increment</button>
	`};customElements.define("cosmoz-component",ot(it,{observedAttributes:["greeting"]}));const{waitFor:T}=__STORYBOOK_MODULE_TEST__,ht={title:"CosmozComponent",component:"cosmoz-component",tags:["autodocs"],argTypes:{greeting:{control:"text",description:"Greeting text"}},args:{greeting:"Hello"}},b={render:t=>O`<cosmoz-component greeting=${t.greeting}></cosmoz-component>`,play:async({canvas:t,step:e,userEvent:s})=>{await e("Renders with default greeting",async()=>{await t.findByShadowText(/Hello, World!/u)}),await e("Clicking increment updates counter",async()=>{const n=t.getByShadowRole("button",{name:/Increment/u});await s.click(n),await T(()=>{t.getByShadowText(/Count: 1/u)})}),await e("Clicking increment again updates counter",async()=>{const n=t.getByShadowRole("button",{name:/Increment/u});await s.click(n),await T(()=>{t.getByShadowText(/Count: 2/u)})})}},g={args:{greeting:"Hi there"},play:async({canvas:t,step:e})=>{await e("Renders with custom greeting",async()=>{await t.findByShadowText(/Hi there, World!/u)})}},y={args:{greeting:""},play:async({canvas:t,step:e})=>{await e("Renders with empty greeting",async()=>{await t.findByShadowText(/, World!/u)})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => html\`<cosmoz-component greeting=\${args.greeting}></cosmoz-component>\`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Renders with default greeting', async () => {
      await canvas.findByShadowText(/Hello, World!/u);
    });
    await step('Clicking increment updates counter', async () => {
      const button = canvas.getByShadowRole('button', {
        name: /Increment/u
      });
      await userEvent.click(button);
      await waitFor(() => {
        canvas.getByShadowText(/Count: 1/u);
      });
    });
    await step('Clicking increment again updates counter', async () => {
      const button = canvas.getByShadowRole('button', {
        name: /Increment/u
      });
      await userEvent.click(button);
      await waitFor(() => {
        canvas.getByShadowText(/Count: 2/u);
      });
    });
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    greeting: 'Hi there'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders with custom greeting', async () => {
      await canvas.findByShadowText(/Hi there, World!/u);
    });
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    greeting: ''
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders with empty greeting', async () => {
      await canvas.findByShadowText(/, World!/u);
    });
  }
}`,...y.parameters?.docs?.source}}};const dt=["Default","CustomGreeting","NoGreeting"];export{g as CustomGreeting,b as Default,y as NoGreeting,dt as __namedExportsOrder,ht as default};
