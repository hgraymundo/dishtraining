import { Component, OnInit } from '@angular/core';
import { FunctionalAreaService } from '../../services/functional-area.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from '../../shared/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-functional-area',
  templateUrl: './functional-area.component.html',
  styleUrls: ['./functional-area.component.css']
})
export class FunctionalAreaComponent implements OnInit {
  
  searchFilter: any;
  p: number = 1;
  FunctionalAreas: [];

  constructor(
    private functionalAreaService: FunctionalAreaService,
    private confirmDialogService: ConfirmDialogService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.loadFuncionalAreas();
  }

  loadFuncionalAreas() {
    this.functionalAreaService.getFunctionalArea().subscribe( result => {
      this.FunctionalAreas = result;
    })
  }

  public openConfirmationDialog(id_: any, title_: any) {
    let _title = 'Confirma!.'
    let _content = '¿Estás seguro de eliminar el área de: '+ title_ +' ?'
    this.confirmDialogService.confirm( _title, _content )
    .then( result => { 
      if(result) {
        this.functionalAreaService.deleteFunctionalArea(id_).subscribe( result => {
          this.toastrService.success(JSON.stringify(result[0].message));
          this.loadFuncionalAreas();
        })
      }
     })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  enable(id_: any) { 
    this.functionalAreaService.setEnableFunctionalArea(id_).subscribe( result => { console.log( result )
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadFuncionalAreas();
    }, error => {
      this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

  disable(id_: any) { 
    this.functionalAreaService.setDisableFunctionalArea(id_).subscribe( result => { console.log( result )
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadFuncionalAreas();
    }, error => {
      this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

}
