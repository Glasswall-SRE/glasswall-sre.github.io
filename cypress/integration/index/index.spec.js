

describe("Test Home Screen Buttons", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Renders Front Screen", () => {
        cy.visit("/");
        cy.contains("Glasswall SRE");        
    });
    it("Front Screen Docs Button Goes to What is SRE Screen", () => {
        cy.visit("/");
        cy.get(".navbar__link").contains("Docs").click()
        cy.get("article").contains("What is SRE");        
    });
    it("Front Screen Products Button Goes to FileTrust Email Screen", () => {
        cy.visit("/");
        cy.get(".navbar__link").contains("Products").click()
        cy.get("article").contains("Introduction");        
    });
    it("Front Screen Supported Tech Button Goes to Supported Tech", () => {
        cy.visit("/");
        cy.get(".navbar__link").contains("Supported Tech").click()
        cy.get("iframe");        
    });
    it("Nav Bar Logo Goes to Home Screen", () => {
        cy.visit("/");
        cy.get(".navbar__brand").contains("Glasswall SRE").click();
        cy.contains("Glasswall SRE")        
    });
    it("Front Screen Contains Medium Button", () => {
        cy.visit("/");
        cy.get(".navbar__link").contains("Medium");     
    });
    it("Front Screen Contains GitHub Button", () => {
        cy.visit("/");
        cy.get(".navbar__link").contains("GitHub");     
    });
    it("Front Screen Ready For Production Button", () => {
        cy.visit("/");
        cy.get(".MuiButtonBase-root").contains("Ready for Production?").click();
        cy.contains("Journey to Production")     
    });
    it("Does Front Screen Contain the 3 Cloumns", () =>{
        cy.visit("/");
        cy.get(".col--4").contains("Run Production");
        cy.get(".col--4").contains("Consulting and Guidance");
        cy.get(".col--4").contains("Infrastructure");
    });

}); 