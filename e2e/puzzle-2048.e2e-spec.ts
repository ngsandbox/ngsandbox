import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import {TilesComponent} from "../app/subapps/2048/tiles.component";

let comp:    TilesComponent;
let fixture: ComponentFixture<TilesComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('BannerComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TilesComponent ], // declare the test component
        });

        fixture = TestBed.createComponent(TilesComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('tile'));
        el = de.nativeElement;

        // it('should display original title', () => {
        //     fixture.detectChanges();
        //     expect(el.textContent).toContain(comp.game.gameState);
        // });
        //
        // it('should display a different test title', () => {
        //     comp.title = 'Test Title';
        //     fixture.detectChanges();
        //     expect(el.textContent).toContain('Test Title');
        // });

    });
});

