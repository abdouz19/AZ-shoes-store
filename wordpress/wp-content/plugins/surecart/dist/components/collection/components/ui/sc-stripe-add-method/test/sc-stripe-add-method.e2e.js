import{newE2EPage}from"@stencil/core/testing";describe("sc-stripe-add-method",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-stripe-add-method></sc-stripe-add-method>");const t=await e.find("sc-stripe-add-method");expect(t).toHaveClass("hydrated")}))}));