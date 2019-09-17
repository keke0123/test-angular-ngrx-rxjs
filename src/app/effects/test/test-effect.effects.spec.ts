import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TestEffectEffects } from './test-effect.effects';

describe('TestEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: TestEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestEffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TestEffectEffects>(TestEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
