describe("Pizza order app", () => {
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })


    const orderBtn = () => cy.get(`button[id="order-button"]`);
    const nameInput = () => cy.get("input[name=name]")
    const sizeInput = () => cy.get(`select[id="size-dropdown"]`)
    const sizeOption = () => cy.get('select').select("Small")
    const pepperoni = () => cy.get("input[name=pepperoni]")
    const sausage = () => cy.get("input[name=sausage]")
    const peppers = () => cy.get("input[name=peppers]")
    const onions = () => cy.get("input[name=onions]")
    const special = () => cy.get("input[name=special]")
    const orderLink = () => cy.get(`a[id="order-pizza"]`)

    it("sanity check to make sure tests work", () => {
    
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); 
        expect({}).to.eql({}); 
    })

    it("name and special feild accept text", () => {
        orderLink()
            .should("exist")
            .click();
        nameInput()
            .should("exist")
            .type("Drew")
            .should("have.value", "Drew")
        special()
            .should("exist")
            .type("Special")
            .should("have.value", "Special")
    })

    it("can select multiple toppings", () => {
        orderLink()
            .click()
        pepperoni()
            .should("not.be.checked")
            .check()
            .should("be.checked")
        sausage()
            .should("not.be.checked")
            .check()
            .should("be.checked")
        peppers()
            .should("not.be.checked")
            .check()
            .should("be.checked")
        onions()
            .should("not.be.checked")
            .check()
            .should("be.checked")
    })

    it("can submit order form", () => {
        orderLink()
            .click()
        nameInput()
            .type("Drew")
        sizeInput()
            .select("Small")
        orderBtn()
            .should("not.be.disabled")
            .click()
    })

    it("order populates in cart", () => {
        orderLink()
            .click()
        nameInput()
            .type("Drew")
        sizeInput()
            .select("Small")
        orderBtn()
            .should("not.be.disabled")
            .click()
        cy.contains("Drew")
    })

})