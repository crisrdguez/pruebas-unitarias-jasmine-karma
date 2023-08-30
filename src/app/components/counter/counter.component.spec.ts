import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from '../button-add/button-add.component';
import { ButtonDisComponent } from '../button-dis/button-dis.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent, ButtonDisComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear el texto counter 23', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    console.log(compiled);

    expect(compiled.querySelector('h1')?.textContent).toContain('Contador: 23');
  });


  it("valor inicial del contador es 23", ()=>{

    const counter = new CounterComponent();

    expect(counter.contador).toBe(23);
  })
});

describe("Integracion Testing", ()=>{

  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations:[CounterComponent,ButtonAddComponent,ButtonDisComponent],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("evento click Add", () => {
    const compiled:HTMLElement = fixture.nativeElement;

    const counterValue  = compiled.querySelector("h1")!; //con el ! es obligatorio

    const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector("#addID");

    btnAdd.click();

    fixture.detectChanges();

    expect(counterValue?.textContent).toEqual('Contador: 24');
  });

  it("evento click Dis", () => {
    const compiled:HTMLElement = fixture.nativeElement;

    const counterValue  = compiled.querySelector("h1")!; //con el ! es obligatorio

    const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector("#disID");

    btnAdd.click();

    fixture.detectChanges();

    expect(counterValue?.textContent).toEqual('Contador: 22');
  });

});


