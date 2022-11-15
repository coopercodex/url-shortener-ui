describe('url shortener ui', () => {
  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      fixture: "userFlow.json"
    });
    cy.visit('http://localhost:3000')
  });
  it('should show user the home page', () => {
    cy.contains('header', 'URL Shortener')
  })

  it('should not show a different page', () => {
    cy.get()
      .should('not.exist', 'hello world')
  })

  it('should show user the home page', () => {
    cy.contains('a', "http://localhost:3001/useshorturl/1")
    cy.contains('p', "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
  })

  it('should show a form', () => {
    cy.contains('form')
    cy.get('input').first()
      .should('have.class', 'titleinput')
    cy.get('input').eq(1)
      .should('have.class', 'urlinput')
  })

  it('should allow user to type in form', () => {
    cy.get('.titleinput').type('cat pic')
      .should('have.value', 'cat pic')
    cy.get('.urlinput').type('https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F548467d8-c5f1-4551-9f58-6817a8d2c45e%2FNationalGeographic_2572187_square.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&tbnid=eAP244UcF5wdYM&vet=12ahUKEwid8anV5bD7AhVMl4QIHTzdCtUQMygAegUIARDgAQ..i&docid=K6Qd9XWnQFQCoM&w=3072&h=3072&q=cat%20image&ved=2ahUKEwid8anV5bD7AhVMl4QIHTzdCtUQMygAegUIARDgAQ')
      .should('have.value', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F548467d8-c5f1-4551-9f58-6817a8d2c45e%2FNationalGeographic_2572187_square.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&tbnid=eAP244UcF5wdYM&vet=12ahUKEwid8anV5bD7AhVMl4QIHTzdCtUQMygAegUIARDgAQ..i&docid=K6Qd9XWnQFQCoM&w=3072&h=3072&q=cat%20image&ved=2ahUKEwid8anV5bD7AhVMl4QIHTzdCtUQMygAegUIARDgAQ')
  })

  it('should allow user to get a shorter url', () => {

    cy.intercept("Post", 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      fixture: "userPost.json"
    });
    cy.get('.titleinput').type('cat pic test');
    cy.get('.urlinput').type('https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F548467d8-c5f1-4551-9f58-6817a8d2c45e%2FNationalGeographic_2572187_square.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&tbnid=eAP244UcF5wdYM&vet=12ahUKEwid8anV5bD7AhVMl4QIHTzdCtUQMygAegUIARDgAQ..i&docid=K6Qd9XWnQFQCoM&w=3072&h=3072&q=cat%20image&ved=2ahUKEwid8anV5bD7AhVMl4QIHTzdCtUQMygAegUIARDgAQ')
    cy.get('button').click()
    cy.contains('h3', 'cat pic test')
    cy.contains('p', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F548467d8-c5f1-4551-9f58-6817a8d2c45e%2FNationalGeographic_2572187_square.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&tbnid=eAP244UcF5wdYM&vet=12ahUKEwid8anV5bD7AhVMl4QIHTzdCtUQMygAegUIARDgAQ..i&docid=K6Qd9XWnQFQCoM&w=3072&h=3072&q=cat%20image&ved=2ahUKEwid8anV5bD7AhVMl4QIHTzdCtUQMygAegUIARDgAQ')
    cy.contains('a', 'http://localhost:3001/useshorturl/6')
  })
})