import { Component, OnInit } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

export class NewPersonComponentContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.styl'],
  providers: [HeroService]
})
export class NewPersonComponent implements CloseGuard, ModalComponent<NewPersonComponentContext> {
  context: NewPersonComponentContext;
   id: number=null;
   name: string='';
   age: string='';

  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<NewPersonComponentContext>, private heroService: HeroService) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }

  onKeyUp(value) {
    this.dialog.close();
  }

  ok() {
    this.heroService.create(this.id, this.name, this.age).then((hero) => {
      this.dialog.close(hero);
    });
  }

  close() {
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return false;
  }

  ngOnInit() {
  }

}
