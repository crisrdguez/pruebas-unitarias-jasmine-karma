import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAddComponent]
    });
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe emitir el valor de 1', ()=>{

    let nuevoContador = 0;

    component.onAdd.subscribe(contador=>{ //cuando llame a onAdd, el valor emitido se lo voy a asignar a la variable nuevoContador
      nuevoContador = contador;
    })

    component.add();


    expect(nuevoContador).toBe(1);
  });
});
