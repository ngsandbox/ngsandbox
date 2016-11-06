/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../app/spinner/my-spinner.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './my-spinner.component.css.shim';
export class Wrapper_MySpinner {
  context:import0.MySpinner;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor() {
    this.changed = false;
    this.context = new import0.MySpinner();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_counterValue(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.counterValue = currValue;
      this._expr_0 = currValue;
    }
  }
  check_bdgClass(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.bdgClass = currValue;
      this._expr_1 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_MySpinner_Host:import4.RenderComponentType = (null as any);
class _View_MySpinner_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _MySpinner_0_4:Wrapper_MySpinner;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_MySpinner_Host0,renderType_MySpinner_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'my-spinner',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MySpinner0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MySpinner_0_4 = new Wrapper_MySpinner();
    this._appEl_0.initComponent(this._MySpinner_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._MySpinner_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MySpinner) && (0 === requestNodeIndex))) { return this._MySpinner_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MySpinner_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._MySpinner_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MySpinner_Host0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  if ((renderType_MySpinner_Host === (null as any))) { (renderType_MySpinner_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MySpinner_Host0(viewUtils,parentInjector,declarationEl);
}
export const MySpinnerNgFactory:import9.ComponentFactory<import0.MySpinner> = new import9.ComponentFactory<import0.MySpinner>('my-spinner',viewFactory_MySpinner_Host0,import0.MySpinner);
const styles_MySpinner:any[] = [import10.styles];
var renderType_MySpinner:import4.RenderComponentType = (null as any);
class _View_MySpinner0 extends import3.AppView<import0.MySpinner> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_MySpinner0,renderType_MySpinner,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import2.createRenderElement(this.renderer,parentRenderNode,'div',new import2.InlineArray4(4,'class','btn-group pull-right votingWdt','role','toolbar'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'button',new import2.InlineArray2(2,'class','btn btn-default'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_2,'span',new import2.InlineArray2(2,'class','glyphicon glyphicon-menu-left'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_7 = import2.createRenderElement(this.renderer,this._el_0,'button',new import2.InlineArray2(2,'class','btn btn-default disabled'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._el_9 = import2.createRenderElement(this.renderer,this._el_7,'span',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._el_11 = import2.createRenderElement(this.renderer,this._el_7,'span',new import2.InlineArray2(2,'class','badge'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_7,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_15 = import2.createRenderElement(this.renderer,this._el_0,'button',new import2.InlineArray2(2,'class','btn btn-default'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_17 = import2.createRenderElement(this.renderer,this._el_15,'span',new import2.InlineArray2(2,'class','glyphicon glyphicon-menu-right'),(null as any));
    this._text_18 = this.renderer.createText(this._el_15,'\n    ',(null as any));
    this._text_19 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'swipeleft',this.eventHandler(this._handle_swipeleft_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'swiperight',this.eventHandler(this._handle_swiperight_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'swipedown',this.eventHandler(this._handle_swipedown_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'swipeup',this.eventHandler(this._handle_swipeup_0_3.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_15,'click',this.eventHandler(this._handle_click_15_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    ,([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_20:any = import2.interpolate(1,'glyphicon ',this.context.bdgClass,'');
    if (import2.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementProperty(this._el_9,'className',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = import2.interpolate(1,'',this.context.counterValue,'');
    if (import2.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setText(this._text_12,currVal_21);
      this._expr_21 = currVal_21;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_swipeleft_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.context.decrement()) !== false);
    return (true && pd_0_0);
  }
  private _handle_swiperight_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.context.increment()) !== false);
    return (true && pd_0_0);
  }
  private _handle_swipedown_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.context.decrement()) !== false);
    return (true && pd_0_0);
  }
  private _handle_swipeup_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.context.increment()) !== false);
    return (true && pd_0_0);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this.context.decrement()) !== false);
    return (true && pd_2_0);
  }
  private _handle_click_15_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_15_0:any = ((<any>this.context.increment()) !== false);
    return (true && pd_15_0);
  }
}
export function viewFactory_MySpinner0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<import0.MySpinner> {
  if ((renderType_MySpinner === (null as any))) { (renderType_MySpinner = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_MySpinner,{})); }
  return new _View_MySpinner0(viewUtils,parentInjector,declarationEl);
}