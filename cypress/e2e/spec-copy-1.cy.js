describe('GET route / ', () => {
  it('GET route test', () => {
    cy.visit('http://localhost:8081/')
      cy.request('http://localhost:8081/')
      .its('status')
      .should('eq', 200)
  })
})

describe('balise title test', () => {
    it('finds the content "Welcome"', () => {
        cy.visit('http://localhost:8081/')
        cy.contains('Welcome to the Task Manager API!')
    })
})

describe('display tasks test', () => {
    it('finds the content "Liste des tâches"', () => {
        cy.visit('http://localhost:8081/')
        cy.contains('Liste des tâches')
    })
})
//
// describe('button test', () => {
//     it('add task button', () => {
//         cy.visit('http://localhost:8081/')
//         cy.get('button').click()
//     })
// })
//
// describe('input test', () => {
//     it('input task', () => {
//         cy.visit('http://localhost:8081/')
//         cy.get('input').type('test')
//     })
// })
//
// describe('delete task test', () => {
//     it('delete task', () => {
//         cy.visit('http://localhost:8081/')
//         cy.get('button').click()
//         cy.get('button').click()
//     })
//     }
// )
//
describe('toggle status task test', () => {
    it('update task', () => {
        cy.visit('http://localhost:8081/')
        cy.get('button').click()
    })
})
describe('Tasks handling', () => {
    it('Add and delete tasks', () => {
        cy.visit('http://localhost:8081/')
        cy.get('input').type('Nouvelle tâche')
        cy.get('button').contains('Ajouter').click()
        cy.contains('Nouvelle tâche')
        cy.get('button').contains('Supprimer').click()
        cy.contains('Nouvelle tâche')
    })
})