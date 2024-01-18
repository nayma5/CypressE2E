
describe("handel dropdowns",()=>{

    it('Dropdown with select', ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.wait(200)
        cy.get("#zcf_address_country")
        .select('Bangladesh')
        .should("have.value","Bangladesh")
    })
    it("Dprodown without select", ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.wait(500)
        cy.get(".select2-search__field").type("Nepal").type("{enter}")

    })
})
