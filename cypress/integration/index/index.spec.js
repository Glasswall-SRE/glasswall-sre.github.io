

describe("Integration", () => {
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

}); 