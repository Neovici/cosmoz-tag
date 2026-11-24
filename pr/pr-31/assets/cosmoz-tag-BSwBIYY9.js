import{A as O,w as gt,b as f,r as bt,D as it}from"./iframe-DmR-VUbM.js";const a=t=>t??O;function A(t,e,o){return t?e(t):o?.(t)}const ft=({slot:t,title:e,className:o,width:r="24",height:s="24",styles:i}={})=>f`
  <svg
    slot=${a(t)}
    class=${`x-close-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${s}
    style=${a(i)}
  >
    ${A(e,()=>gt`<title>${e}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`;const vt={CHILD:2},mt=t=>(...e)=>({_$litDirective$:t,values:e});class zt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}let F,at=0;function X(t){F=t}function J(){F=null,at=0}function yt(){return at++}const j=Symbol("haunted.phase"),D=Symbol("haunted.hook"),tt=Symbol("haunted.update"),et=Symbol("haunted.commit"),E=Symbol("haunted.effects"),L=Symbol("haunted.layoutEffects"),U="haunted.context";class xt{update;host;virtual;[D];[E];[L];constructor(e,o){this.update=e,this.host=o,this[D]=new Map,this[E]=[],this[L]=[]}run(e){X(this);let o=e();return J(),o}_runEffects(e){let o=this[e];X(this);for(let r of o)r.call(this);J()}runEffects(){this._runEffects(E)}runLayoutEffects(){this._runEffects(L)}teardown(){this[D].forEach(o=>{typeof o.teardown=="function"&&o.teardown(!0)})}}class wt extends Error{constructor(e){const o=e?` <${e}>`:"";super(`Infinite update loop detected in component${o}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const $t=100,kt=Promise.resolve().then.bind(Promise.resolve());function ct(){let t=[],e;function o(){e=null;let r=t;t=[];for(var s=0,i=r.length;s<i;s++)r[s]()}return function(r){t.push(r),e==null&&(e=kt(o))}}const _t=ct(),ot=ct();class Q{renderer;host;state;[j];_updateQueued;_active;_updateCount;_processing;static maxUpdates=$t;constructor(e,o){this.renderer=e,this.host=o,this.state=new xt(this.update.bind(this),o),this[j]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>Q.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new wt(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,_t(()=>{let e=this.handlePhase(tt);ot(()=>{this.handlePhase(et,e),ot(()=>{this.handlePhase(E),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,o){switch(this[j]=e,e){case et:this.commit(o),this.runEffects(L);return;case tt:return this.render();case E:return this.runEffects(E)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const Y=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ct=t=>t?.map(e=>typeof e=="string"?Y(e):e),Et=(t,...e)=>t.flatMap((o,r)=>[o,e[r]||""]).join(""),S=Et,At=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function St(t){class e extends Q{frag;renderResult;constructor(s,i,u){super(s,u||i),this.frag=i}commit(s){this.renderResult=t(s,this.frag)}}function o(r,s,i){const u=(i||s||{}).baseElement||HTMLElement,{observedAttributes:v=[],useShadowDOM:d=!0,shadowRootInit:x={},styleSheets:k}=i||s||{},h=Ct(r.styleSheets||k);class p extends u{_scheduler;static get observedAttributes(){return r.observedAttributes||v||[]}constructor(){if(super(),d===!1)this._scheduler=new e(r,this);else{const l=this.attachShadow({mode:"open",...x});h&&(l.adoptedStyleSheets=h),this._scheduler=new e(r,l,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(l,g,b){if(g===b)return;let z=b===""?!0:b;Reflect.set(this,At(l),z)}}function c(m){let l=m,g=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return l},set(b){g&&l===b||(g=!0,l=b,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(u.prototype,{getPrototypeOf(m){return m},set(m,l,g,b){let z;return l in m?(z=Object.getOwnPropertyDescriptor(m,l),z&&z.set?(z.set.call(b,g),b._scheduler?.update(),!0):(Reflect.set(m,l,g,b),b._scheduler?.update(),!0)):(typeof l=="symbol"||l[0]==="_"?z={enumerable:!0,configurable:!0,writable:!0,value:g}:z=c(g),Object.defineProperty(b,l,z),z.set&&z.set.call(b,g),!0)}});return Object.setPrototypeOf(p.prototype,w),p}return o}class T{id;state;constructor(e,o){this.id=e,this.state=o}}function Tt(t,...e){let o=yt(),r=F[D],s=r.get(o);return s||(s=new t(o,F,...e),r.set(o,s)),s.update(...e)}function P(t){return Tt.bind(null,t)}function lt(t){return P(class extends T{callback;lastValues;values;_teardown;constructor(e,o,r,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function dt(t,e){t[E].push(e)}const C=lt(dt),Pt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Lt=P(class extends T{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,dt(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Pt(this.state.host).dispatchEvent(new CustomEvent(U,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:s}=e;this.value=r?s:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function Rt(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(U,this)}disconnectedCallback(){this.removeEventListener(U,this)}handleEvent(r){const{detail:s}=r;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let s of this.listeners)s(r)}get value(){return this._value}},Consumer:t(function({render:r}){const s=Lt(o);return r(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const ut=P(class extends T{value;values;constructor(t,e,o,r){super(t,e),this.value=o(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),rt=(t,e)=>ut(()=>t,e);function Ot(t,e){t[L].push(e)}const ht=lt(Ot),Nt=P(class extends T{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});P(class extends T{reducer;currentState;constructor(t,e,o,r,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Mt=/([A-Z])/gu;P(class extends T{property;eventName;constructor(t,e,o,r){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Mt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r,!0))}update(t,e){return[this.state.host[this.property],this.updater]}resolve(t){const e=this.state.host[this.property],o=typeof t=="function"?t:void 0,r=o?o(e):t;return[e,r,o]}notify(t,e){const o=new CustomEvent(this.eventName,{detail:{value:t,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(o),o}updater(t,e=!1){const[o,r,s]=this.resolve(t),i=this.notify(r,s);!e&&i.defaultPrevented||Object.is(o,r)||(this.state.host[this.property]=r)}});function Dt(t){let e=t;return{get current(){return e},set current(o){e=o},get value(){return e},set value(o){e=o}}}function I(t){return ut(()=>Dt(t),[])}P(class extends T{update(){return this.state.host}});function It({render:t}){const e=St(t),o=Rt(e);return{component:e,createContext:o}}const R=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const r of o)r._$AO?.(e,!1),R(r,e);return!0},B=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},pt=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),jt(e)}};function Ft(t){this._$AN!==void 0?(B(this),this._$AM=t,pt(this)):this._$AM=t}function Bt(t,e=!1,o=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let i=o;i<r.length;i++)R(r[i],!1),B(r[i]);else r!=null&&(R(r,!1),B(r));else R(this,t)}const jt=t=>{t.type==vt.CHILD&&(t._$AP??=Bt,t._$AQ??=Ft)};class Ht extends zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,r){super._$AT(e,o,r),pt(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(R(this,e),B(this))}setValue(e){if(bt(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:N}=It({render:it}),M=Y(S`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),n=t=>`calc(var(--cz-spacing) * ${t})`,Gt=S`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-block;
		max-width: 100%;
		min-width: 0;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${n(1.5)};
		max-width: 100%;
		min-width: calc(var(--cz-spacing) * 2);
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid
			var(--cosmoz-badge-border-color, var(--cz-color-border-secondary));
		background-color: var(
			--cosmoz-badge-bg-color,
			var(--cz-color-bg-secondary)
		);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${n(.5)} ${n(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-bg-brand-subtle);
		color: var(--cz-color-text-brand);
		border-color: var(--cz-color-border-brand-subtle);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-border-error-subtle);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-border-warning-subtle);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-border-success-subtle);
	}

	:host([color='processing']) .badge {
		background-color: var(--cz-color-bg-processing);
		color: var(--cz-color-text-processing);
		border-color: var(--cz-color-border-processing-subtle);
	}

	/* Modern type: neutral bg/text/border regardless of color */
	:host([type='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
	}

	/* =========================================
	 * TYPE VARIANTS (shape)
	 * ========================================= */
	:host([type='color']) .badge,
	:host([type='modern']) .badge {
		border-radius: var(--cz-radius-sm);
		padding: ${n(.5)} ${n(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${n(.5)} ${n(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${n(1)};
	}

	:host([size='lg']) .badge {
		padding: ${n(1)} ${n(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${n(.5)} ${n(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${n(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${n(1)} ${n(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${n(2)};
		height: ${n(2)};
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-fg-quaternary);
		flex-shrink: 0;
	}
	:host(:not([dot])) .dot {
		display: none;
	}
	:host([color='brand']) .dot {
		background-color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) .dot {
		background-color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) .dot {
		background-color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) .dot {
		background-color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) .dot {
		background-color: var(--cz-color-fg-processing-secondary);
	}
	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${n(.5)} ${n(2.5)} ${n(.5)} ${n(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${n(.5)} ${n(2)} ${n(.5)} ${n(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${n(1)} ${n(3)} ${n(1)} ${n(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${n(.5)} ${n(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${n(.5)} ${n(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${n(1)} ${n(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${n(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${n(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${n(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${n(4)};
		height: ${n(4)};
	}

	:host([type='icon'][size='sm']) ::slotted(svg) {
		width: ${n(3)};
		height: ${n(3)};
	}
	:host([type='icon'][size='lg']) ::slotted(svg) {
		width: ${n(5)};
		height: ${n(5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${n(3)};
		height: ${n(3)};
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) ::slotted(svg) {
		color: var(--cz-color-fg-processing-secondary);
	}

	/* Compact counters keep a stable pill height around smaller metadata text. */
	:host([size='xs']) .badge,
	:host([size='xs'][dot]) .badge {
		box-sizing: border-box;
		min-height: ${n(5)};
		padding: 0 ${n(1)};
		font-size: var(--cz-text-2xs, var(--cz-text-xs));
		line-height: var(--cz-text-2xs-line-height, var(--cz-text-xs-line-height));
		font-weight: var(--cz-font-weight-regular);
		gap: ${n(1)};
	}

	:host([type='icon'][size='xs']) .badge {
		padding: ${n(.5)};
	}

	:host([type='icon'][size='xs']) ::slotted(svg) {
		width: ${n(3)};
		height: ${n(3)};
	}
`,Ut=()=>f`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",N(Ut,{styleSheets:[M,Gt]}));const H=new WeakMap,G=mt(class extends Ht{render(t){return O}update(t,[e]){const o=e!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),O}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=H.get(e);o===void 0&&(o=new WeakMap,H.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?H.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),qt=S`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;customElements.define("cosmoz-tooltip-content",N(()=>f`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[M,qt]}));const q=Y(S`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),st=(t,e,o)=>it(f`<cosmoz-tooltip-content>
			${A(e,()=>f`<strong slot="heading">${e}</strong>`)}
			${A(o,()=>f`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),Qt=(t,e)=>{const{for:o,heading:r,description:s,placement:i="top",delay:u=300,disabled:v=!1}=e,d=I(),k=!!(r||s)&&!v;C(()=>{if(!o||!k)return;const h=t.getRootNode(),p=h.adoptedStyleSheets??[];p.includes(q)||(h.adoptedStyleSheets=[...p,q]);const c=document.createElement("div");c.setAttribute("popover","manual"),c.setAttribute("role","tooltip"),c.classList.add("cosmoz-tooltip-popover"),t.after(c),d.current=c,st(c,r,s);const w=`[name="${o}"]`,m=`--tooltip-anchor-${o}`;let l;const g=$=>{v||(clearTimeout(l),$.style.anchorName=m,c.style.positionAnchor=m,c.style.positionArea=i,l=window.setTimeout(()=>c.showPopover(),u))},b=()=>{clearTimeout(l),c.hidePopover()},z=$=>{const _=$.target.closest?.(w);_&&g(_)},V=$=>{const _=$.target.closest?.(w);if(!_)return;const K=$.relatedTarget;K&&_.contains(K)||b()},W=$=>{const _=$.target.closest?.(w);_&&g(_)},Z=$=>{$.target.closest?.(w)&&b()};return h.addEventListener("pointerover",z),h.addEventListener("pointerout",V),h.addEventListener("focusin",W),h.addEventListener("focusout",Z),()=>{clearTimeout(l),h.removeEventListener("pointerover",z),h.removeEventListener("pointerout",V),h.removeEventListener("focusin",W),h.removeEventListener("focusout",Z),c.hidePopover(),c.remove(),d.current=void 0}},[o,i,u,k]),C(()=>{!o||!d.current||st(d.current,r,s)},[r,s,o]),C(()=>{!v||!d.current||d.current.hidePopover()},[v])},Yt=t=>{const[e,o]=Nt(!1);return C(()=>{const r=t.current;if(!r)return;const s=()=>{o(r.assignedElements().length>0)};return s(),r.addEventListener("slotchange",s),()=>r.removeEventListener("slotchange",s)},[t.current]),e},Vt=S`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,Wt=t=>{const{heading:e,description:o,for:r,placement:s="top",delay:i=300,disabled:u=!1}=t,v=I(),d=I(),x=I(),k=Yt(x),p=!!(e||o||k)&&!u,c=rt(()=>{p&&(clearTimeout(d.current),d.current=window.setTimeout(()=>{v.current?.showPopover()},i))},[i,p]);C(()=>{u&&(clearTimeout(d.current),v.current?.hidePopover())},[u]);const w=rt(()=>{clearTimeout(d.current),v.current?.hidePopover()},[]);return C(()=>{if(r)return;const m=l=>{const g=l.relatedTarget;g&&t.contains(g)||w()};return t.addEventListener("pointerover",c),t.addEventListener("pointerout",m),()=>{t.removeEventListener("pointerover",c),t.removeEventListener("pointerout",m)}},[r,c,w]),Qt(t,{for:r,heading:e,description:o,placement:s,delay:i,disabled:u}),r?O:p?f`
		<slot @focusin=${c} @focusout=${w}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${G(v)}
		>
			<cosmoz-tooltip-content>
				${A(e,()=>f`<strong slot="heading">${e}</strong>`)}
				${A(o,()=>f`<p slot="description">${o}</p>`)}
				<slot name="content" ${G(x)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:f`
			<slot></slot>
			<slot name="content" ${G(x)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",N(Wt,{styleSheets:[M,q,Vt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const nt=(t,e)=>{t.type="submit",t.hidden=!0,t.disabled=!!(e.disabled||e.formDisabled),t.name=e.name??"",t.value=e.value??"";for(const o of["form","formaction","formenctype","formmethod","formnovalidate","formtarget"])e.hasAttribute(o)?t.setAttribute(o,e.getAttribute(o)):t.removeAttribute(o)};class Zt extends HTMLElement{static formAssociated=!0;#o=this.attachInternals();#t;get form(){return this.#o.form}syncFormButton(){if(!this.isConnected||this.type!=="submit"||this.href!=null){this.#t?.remove(),this.#t=void 0;return}this.#t?nt(this.#t,this):(this.#t=document.createElement("button"),nt(this.#t,this),this.append(this.#t))}formAssociatedCallback(){this.syncFormButton()}formDisabledCallback(e){this.formDisabled=e,this.syncFormButton()}connectedCallback(){this.addEventListener("click",this.#e),this.syncFormButton()}disconnectedCallback(){this.removeEventListener("click",this.#e),this.#t?.remove(),this.#t=void 0}#e=e=>{this.#t&&e.composedPath().includes(this.#t)||setTimeout(()=>{if(e.defaultPrevented||!this.isConnected||this.disabled||this.formDisabled||this.href!=null)return;const o=this.form;o&&(this.type==="reset"?o.reset():this.type==="submit"&&(this.syncFormButton(),this.#t&&o.requestSubmit(this.#t)))},0)}}const Kt=S`
	:host {
		display: inline-flex;

		--_wash: var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		--_wash-strong: var(
			--cz-color-bg-glass-hover,
			var(--cz-color-bg-secondary-hover)
		);
		--_hairline: var(--cz-color-border-glass, var(--cz-color-border-primary));
		--_sheen: var(--cz-glass-action-sheen, var(--cz-action-sheen, none));
		--_lift: var(--cz-shadow-xs);
		--_pressed-bg: var(
			--cz-color-bg-glass-action-pressed,
			var(--cz-color-bg-action-solid-hover)
		);
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 6px;
		width: 100%;
		height: var(--cz-control-height-md);
		padding: 0 14px;
		border: 1px solid transparent;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: calc((var(--cz-text-sm) + var(--cz-text-xs)) / 2);
		font-weight: var(--cz-font-weight-regular);
		line-height: 1.25;
		letter-spacing: normal;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		outline: 2px solid transparent;
		outline-offset: 2px;
		transition:
			background-color 120ms ease-out,
			color 120ms ease-out,
			box-shadow 120ms ease-out,
			outline-color 120ms ease-out;

		background:
			var(
				--cz-glass-button-action-sheen,
				var(--cz-glass-action-sheen, var(--cz-action-sheen, none))
			),
			var(--cz-color-bg-glass-action, var(--cz-color-bg-action-solid));
		border-color: var(--cz-color-border-glass-action, transparent);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
		color: var(--cz-color-text-on-glass-action, var(--cz-color-text-on-action));
		box-shadow: var(
			--cz-shadow-glass-button-action,
			var(--cz-shadow-glass-action, var(--cz-shadow-action))
		);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-action-hover,
				var(--cz-color-bg-action-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(iron-icon) {
		pointer-events: none;
		width: 20px;
		height: 20px;
		flex: none;
	}

	::slotted(svg) {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 12px;
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 14px;
		height: 14px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 16px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 18px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: 18px;
		height: 18px;
	}

	:host([icon-only]) .button {
		border-radius: var(--cz-radius-full);
		width: var(--cz-control-height-md);
		padding: 0;
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
	}

	:host([icon-only]) ::slotted(svg) {
		margin: 0;
	}

	/* Preserve the supplied geometry of standalone icons. */
	:host([icon-only]) ::slotted(svg[width]) {
		width: auto;
	}

	:host([icon-only]) ::slotted(svg[height]) {
		height: auto;
	}

	/* Variants */

	:host([variant='secondary']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-pressed,
			var(--cz-color-bg-secondary-hover)
		);
		background:
			var(--cz-glass-button-sheen, var(--cz-glass-sheen, none)),
			var(
				--cz-color-bg-glass-button,
				var(--cz-color-bg-glass, var(--cz-color-bg-tertiary))
			);
		color: var(--cz-color-text-primary);
		border-color: var(
			--cz-color-border-glass-button,
			var(--cz-color-border-glass, var(--cz-color-border-primary))
		);
		box-shadow: var(
			--cz-shadow-glass-button,
			var(--cz-shadow-glass, var(--cz-shadow-xs))
		);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-hover,
				var(--cz-color-bg-secondary-hover)
			);
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--cz-color-bg-tertiary);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='tertiary']) .button:active {
		background: var(--cz-color-bg-quaternary);
		box-shadow: none;
	}

	:host([variant='destructive']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-destructive-pressed,
			var(--cz-color-bg-error-solid-hover)
		);
		background:
			var(--_sheen),
			var(--cz-color-bg-glass-destructive, var(--cz-color-bg-error-solid));
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-destructive-hover,
				var(--cz-color-bg-error-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-link);
		box-shadow: none;
		border-radius: var(--cz-radius-xs);
		outline-offset: 3px;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 3px;
		transition-property: color, text-decoration-color, outline-color;

		&:hover {
			color: var(--cz-color-text-link-hover);
			text-decoration-color: currentColor;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-primary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	:host(:not([variant='tertiary']):not([variant='link']))
		.button:active:not(:disabled) {
		background-color: var(--_pressed-bg);
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--cz-color-bg-quaternary);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button,
	:host(:disabled) .button,
	.button:disabled {
		opacity: var(--cz-opacity-disabled, 0.45);
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	@media (forced-colors: active) {
		:host .button,
		:host([variant]) .button {
			border-color: ButtonText;
			background: ButtonFace;
			color: ButtonText;
		}
		:host([aria-pressed='true']) .button {
			outline: 2px solid Highlight;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}
	}
`,Xt=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download","aria-expanded","aria-label","title","aria-pressed","aria-controls","aria-haspopup","aria-description","aria-busy","aria-current","control-role","tabindex","name","form","formaction","formenctype","formmethod","formnovalidate","formtarget"],Jt=t=>{const{disabled:e=!1,tooltip:o,tooltipPlacement:r,type:s="button",href:i,target:u,rel:v,download:d}=t,x=!!(e||t.formDisabled);C(()=>{t.syncFormButton()}),C(()=>{const p=c=>{(t.disabled||t.formDisabled)&&(c.preventDefault(),c.stopImmediatePropagation())};return t.addEventListener("click",p,{capture:!0}),()=>t.removeEventListener("click",p,{capture:!0})},[t.disabled,t.formDisabled]),ht(()=>{const p=t.shadowRoot?.querySelector(".button");p&&"ariaControlsElements"in p&&(p.ariaControlsElements=t.ariaControlsElements)});const k=f`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,h=A(i!=null,()=>f`
			<a
				role=${a(t.controlRole)}
				tabindex=${a(t.getAttribute("tabindex")??void 0)}
				aria-controls=${a(t.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${a(t.getAttribute("aria-haspopup")??void 0)}
				aria-description=${a(t.getAttribute("aria-description")??void 0)}
				aria-busy=${a(t.getAttribute("aria-busy")??void 0)}
				aria-current=${a(t.getAttribute("aria-current")??void 0)}
				href=${i}
				class="button"
				part="button"
				aria-disabled=${x?"true":O}
				aria-expanded=${a(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${a(t.getAttribute("aria-label")??(t.iconOnly&&t.title?t.title:void 0))}
				target=${a(u)}
				rel=${a(v)}
				download=${a(d)}
				>${k}</a
			>
		`,()=>f`
			<button
				role=${a(t.controlRole)}
				tabindex=${a(t.getAttribute("tabindex")??void 0)}
				aria-controls=${a(t.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${a(t.getAttribute("aria-haspopup")??void 0)}
				aria-description=${a(t.getAttribute("aria-description")??void 0)}
				aria-busy=${a(t.getAttribute("aria-busy")??void 0)}
				aria-current=${a(t.getAttribute("aria-current")??void 0)}
				type=${s}
				class="button"
				part="button"
				?disabled=${x}
				aria-expanded=${a(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${a(t.getAttribute("aria-label")??(t.iconOnly&&t.title?t.title:void 0))}
				aria-pressed=${a(t.getAttribute("aria-pressed")??void 0)}
			>
				${k}
			</button>
		`);return f`<cosmoz-tooltip
		heading=${a(o??void 0)}
		placement=${a(r??void 0)}
		?disabled=${x}
	>
		${h}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",N(Jt,{baseElement:Zt,observedAttributes:Xt,styleSheets:[M,Kt],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const y=t=>`calc(var(--cz-spacing) * ${t})`,te=S`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	:host([disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* =========================================
	 * REMOVE BUTTON
	 * ========================================= */
	cosmoz-button.close::part(button),
	.close:not(cosmoz-button) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		/* a little room so the hover reads as a round hit area; the
		   negative margin keeps the tag's size as it was */
		padding: ${y(.5)};
		margin: ${y(-.5)};
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition:
			opacity 0.1s,
			background-color 0.1s;
		flex-shrink: 0;
		border-radius: var(--cz-radius-full);
		line-height: 0;

		width: auto;
		height: auto;
	}
	cosmoz-button.close {
		display: inline-flex;
		flex-shrink: 0;
	}

	cosmoz-button.close::part(button):hover,
	.close:hover:not(cosmoz-button) {
		opacity: 1;
		/* tinted from the tag's own text color, so it suits every tag color */
		background: rgb(from currentColor r g b / 0.12);
	}

	cosmoz-button.close::part(button):focus-visible,
	.close:focus-visible:not(cosmoz-button) {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${y(2.5)};
		height: ${y(2.5)};
	}

	:host([size='xs']) .close svg {
		width: ${y(2)};
		height: ${y(2)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${y(3)};
		height: ${y(3)};
	}

	:host([size='lg']) .close svg {
		width: ${y(3.5)};
		height: ${y(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${y(3.5)};
		height: ${y(3.5)};
		color: var(--cosmoz-tag-color, var(--cz-color-fg-quaternary));
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`,ee=["gray","brand","error","warning","success","processing"],oe=t=>{const{color:e,type:o="color",size:r,disabled:s,removable:i,removeLabel:u="Remove"}=t;ht(()=>{const d=!!e&&!ee.includes(e)&&CSS.supports("color",e);t.style.setProperty("--cosmoz-tag-color",d?e:"")},[e]);const v=()=>{s||t.dispatchEvent(new CustomEvent("remove"))};return f`<cosmoz-badge
		color=${a(e)}
		size=${a(r)}
		?disabled=${s}
		type=${o}
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${A(i,()=>f` <cosmoz-button
					variant="tertiary"
					icon-only
					slot="suffix"
					class="close"
					aria-label=${u}
					@mousedown=${d=>d.preventDefault()}
					@click=${v}
				>
					${ft()}
				</cosmoz-button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",N(oe,{observedAttributes:["color","type","size","disabled","removable","remove-label"],styleSheets:[M,te]}));export{mt as e,zt as i,A as n,a as o,vt as t};
