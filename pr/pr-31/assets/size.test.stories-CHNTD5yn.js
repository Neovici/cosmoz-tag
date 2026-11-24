import{b as i}from"./iframe-DmR-VUbM.js";import"./cosmoz-tag-BSwBIYY9.js";import"./preload-helper-PPVm8Dsz.js";const{expect:e,waitFor:n}=__STORYBOOK_MODULE_TEST__,d={title:"Tests/Size"},s=t=>t.shadowRoot?.querySelector("cosmoz-badge")?.shadowRoot?.querySelector(".badge"),a=t=>t.shadowRoot?.querySelector(".close svg"),l={render:()=>i`
        <cosmoz-tag size="xs" removable>Extra small</cosmoz-tag>
        <cosmoz-tag size="sm" removable>Small</cosmoz-tag>
    `,play:async({canvasElement:t})=>{const[o,c]=t.querySelectorAll("cosmoz-tag");await n(()=>e(s(o)).toBeTruthy()),e(s(o).getBoundingClientRect().height).toBe(20),e(getComputedStyle(s(o)).fontSize).toBe("11px"),e(s(c).getBoundingClientRect().height).toBe(24),e(a(o).getBoundingClientRect().width).toBe(8),e(a(c).getBoundingClientRect().width).toBe(10)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tag size="xs" removable>Extra small</cosmoz-tag>
        <cosmoz-tag size="sm" removable>Small</cosmoz-tag>
    \`,
  play: async ({
    canvasElement
  }) => {
    const [xs, sm] = canvasElement.querySelectorAll('cosmoz-tag');
    await waitFor(() => expect(pill(xs)).toBeTruthy());
    expect(pill(xs)!.getBoundingClientRect().height).toBe(20);
    expect(getComputedStyle(pill(xs)!).fontSize).toBe('11px');
    expect(pill(sm)!.getBoundingClientRect().height).toBe(24);
    expect(closeIcon(xs)!.getBoundingClientRect().width).toBe(8);
    expect(closeIcon(sm)!.getBoundingClientRect().width).toBe(10);
  }
}`,...l.parameters?.docs?.source}}};const p=["XsIsTheSmallestPill"];export{l as XsIsTheSmallestPill,p as __namedExportsOrder,d as default};
