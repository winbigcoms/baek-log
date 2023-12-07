// 페이지 첫 접근시 localstoreage 확인했을 때, 토큰 없으면 로그인 모달이 뜸
describe('template spec', () => {
  it('페이지 첫 접근시 localstoreage 확인했을 때, access_token 없으면 로그인 모달이 뜸', () => {
    cy.visit('http://localhost:3000/playground/multi-twitch');
    cy.getLocalStorage('access_token').then(data => {
      console.log(data);
    });
  });
});
