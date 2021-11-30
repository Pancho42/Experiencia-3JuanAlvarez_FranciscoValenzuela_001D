import {browser, element, by } from 'protractor';
 
describe('Pruebas Rastrolab', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("La página de inicio se muestra por defecto", ()=>{
       expect(element(by.css(".titulo ion-title")).getText()).toContain("Rastrolab");
    });  
    //creación de prueba 2
    it("El Inicio muestra el mensaje sobre Rastrolab exitosamente", ()=>{
        expect(element(by.css(".contenido ion-card-content")).getText()).toContain("perfil laboral");
    });  
});


 















