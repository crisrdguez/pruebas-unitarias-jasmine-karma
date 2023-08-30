import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDisComponent } from './button-dis.component';

describe('ButtonDisComponent', () => {
  let component: ButtonDisComponent;
  let fixture: ComponentFixture<ButtonDisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDisComponent]
    });
    fixture = TestBed.createComponent(ButtonDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe emitir el valor de -1', ()=>{

    let nuevoContador = 0;

    component.onDis.subscribe(contador=>{ //cuando llame a onAdd, el valor emitido se lo voy a asignar a la variable nuevoContador
      nuevoContador = contador;
    })

    component.dis();


    expect(nuevoContador).toBe(-1);
  });
});
