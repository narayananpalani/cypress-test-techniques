const recruitmentTab_Homepage = '//*[@id=\'menu_recruitment_viewRecruitmentModule\']'
const addBtn_RecrTab = '//*[@id=\'btnAdd\']'
const uploadBtn_RecrTab = '//*[@id=\'addCandidate_resume\']'

export const recOrangehrmPage = {
  clickRecTab () {
    cy.xpath(recruitmentTab_Homepage)
        .invoke('show').should('be.visible')
        .click()
  },

  clickAddRec () {
    cy.xpath(addBtn_RecrTab)
        .invoke('show').should('be.visible')
        .click()
  },

  uploadResume () {
    const fileName = 'Resume.txt'

    cy.readFile('.//cypress//fixtures//Resume.txt').then(function (fileContent) {
      cy.xpath(uploadBtn_RecrTab).attachFile({ fileContent, fileName, mimeType: 'application/txt' })
      cy.xpath(uploadBtn_RecrTab).click()
    })
  },

  uploadResumeForce () {
    const fileName = 'ResumeIncorrectExt.png'

    cy.readFile('.//cypress//fixtures//Resume.txt').then(function (fileContent) {
      cy.xpath(uploadBtn_RecrTab).attachFile({ fileContent, fileName, mimeType: 'application/txt' })
      cy.xpath(uploadBtn_RecrTab).dblclick({ force: true })
    })
  },

}
