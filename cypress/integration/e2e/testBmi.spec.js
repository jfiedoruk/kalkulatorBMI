/// <reference types="cypress" />

context('KalkulatorBMI', ()=>{
  describe('Landing Page', ()=> {
     it('Test1', ()=>{
       cy.visit('http://localhost:8080/');
       cy.get('.title').should('contain','Kalkulator BMI');
     });
  })

  describe('Next Tests', ()=>{
    beforeEach('Enter KalkulatorBMI', ()=>{
     cy.visit('http://localhost:8080/');
     cy.get('.title').should('contain','Kalkulator BMI');
    });
    it('Test2', ()=>{
      cy.get('.height').type('170');
      cy.get('.przycisk').click();
      cy.get('#wzrostWyswietlony').should('contain','170');
    });
    it('Test3', ()=>{
      cy.get('.weight').type('60');
      cy.get('.przycisk').click();
      cy.get('#wagaWyswietlona').should('contain','60');
    });
    it('Test4', ()=>{
      cy.get('.height').type('241');
      cy.get('.przycisk').click();
      cy.get('#wzrostWyswietlony').should('contain','Wzrost nie jest poprawny.');
    });
    it('Test5', ()=>{
      cy.get('.height').type('119');
      cy.get('.przycisk').click();
      cy.get('#wzrostWyswietlony').should('contain','Wzrost nie jest poprawny.');
    });
    it('Test6', ()=>{
      cy.get('.weight').type('201');
      cy.get('.przycisk').click();
      cy.get('#wagaWyswietlona').should('contain','Waga nie jest poprawna.');
    });
    it('Test7', ()=>{
      cy.get('.weight').type('39');
      cy.get('.przycisk').click();
      cy.get('#wagaWyswietlona').should('contain','Waga nie jest poprawna.');
    });
    it('Test8', ()=>{
      cy.get('.przycisk').click();
      cy.get('#wzrostWyswietlony').should('contain','Wzrost nie jest poprawny.');
    });
    it('Test9', ()=>{
      cy.get('.przycisk').click();
      cy.get('#wagaWyswietlona').should('contain','Waga nie jest poprawna.');
    });
    it('Test10', ()=>{
      cy.get('.height').type('170');
      cy.get('.weight').type('60')
      cy.get('.przycisk').click();
      cy.get('.wynikWyswietlony').should('contain','20.76');
    });
    it('Test11', ()=>{
      cy.get('.height').type('170');
      cy.get('.weight').type('60');
      cy.get('.przycisk').click();
      cy.get('.height').type('170');
      cy.get('.weight').type('65');
      cy.get('.przycisk').click();
      cy.get('#opinia').should('contain','Twoje BMI wzrosło!');
    });
    it('Test12', ()=>{
      cy.get('.height').type('170');
      cy.get('.weight').type('60');
      cy.get('.przycisk').click();
      cy.get('.height').type('170');
      cy.get('.weight').type('58');
      cy.get('.przycisk').click();
      cy.get('#opinia').should('contain','Twoje BMI spadło!');
    });
    it('Test13', ()=>{
      cy.get('.height').type('170');
      cy.get('.weight').type('60')
      cy.get('.przycisk').click();
      cy.get('#pomiaryHistorii').should('contain','Pomiar #1');
    });
    it('Test14', ()=>{
      cy.get('.height').type('170');
      cy.get('.weight').type('60');
      cy.get('.przycisk').click();
      cy.get('.height').type('170');
      cy.get('.weight').type('58');
      cy.get('.przycisk').click();
      cy.get('#pomiaryHistorii').should('contain','Pomiar #2');
    });
})
})