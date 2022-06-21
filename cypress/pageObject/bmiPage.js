class bmiPage{
  _confirmButton = '.przycisk'

  getConfirmButton(){
    return cy.get(this._confirmButton)
  }
}
export default bmiPage;