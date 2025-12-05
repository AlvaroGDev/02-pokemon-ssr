import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemons-page',
  imports: [],
  templateUrl: './pokemons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsPage { }
