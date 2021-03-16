import { style } from '@angular/animations';

import{ Component } from '@angular/core'
@Component({
    //Selector :Indica qual será o rótulo para instância desse componente dentro dos templates de outros componentes da aplicação
    selector:   'app-topo',
    //Para que o componente funcione é necessário informar qual será o template que essa clase utilizará
    templateUrl: './topo.component.html',
    //Style espera um array
    styleUrls: ['./topo.component.scss']
})
export class TopoComponent {

    public titulo: string = "Aprendendo Inglês"
}