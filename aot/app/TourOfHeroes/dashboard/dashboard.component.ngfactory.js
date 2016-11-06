/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../app/TourOfHeroes/dashboard/dashboard.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../../app/TourOfHeroes/services/team.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/common/src/pipes/date_pipe';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/core/src/i18n/tokens';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import18 from '@angular/router/src/router';
import * as import19 from '@angular/router/src/router_state';
import * as import20 from '@angular/common/src/location/location_strategy';
import * as import21 from '@angular/router/src/directives/router_link';
export var Wrapper_DashboardComponent = (function () {
    function Wrapper_DashboardComponent(p0) {
        this.changed = false;
        this.context = new import0.DashboardComponent(p0);
    }
    Wrapper_DashboardComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_DashboardComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_DashboardComponent;
}());
var renderType_DashboardComponent_Host = null;
var _View_DashboardComponent_Host0 = (function (_super) {
    __extends(_View_DashboardComponent_Host0, _super);
    function _View_DashboardComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DashboardComponent_Host0, renderType_DashboardComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DashboardComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'my-dashboard', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_DashboardComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._DashboardComponent_0_4 = new Wrapper_DashboardComponent(this.parentInjector.get(import8.TeamService));
        this._appEl_0.initComponent(this._DashboardComponent_0_4.context, [], compView_0);
        compView_0.create(this._DashboardComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_DashboardComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DashboardComponent) && (0 === requestNodeIndex))) {
            return this._DashboardComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_DashboardComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DashboardComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._DashboardComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DashboardComponent_Host0;
}(import1.AppView));
function viewFactory_DashboardComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DashboardComponent_Host === null)) {
        (renderType_DashboardComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_DashboardComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var DashboardComponentNgFactory = new import10.ComponentFactory('my-dashboard', viewFactory_DashboardComponent_Host0, import0.DashboardComponent);
var styles_DashboardComponent = [];
var renderType_DashboardComponent = null;
var _View_DashboardComponent0 = (function (_super) {
    __extends(_View_DashboardComponent0, _super);
    function _View_DashboardComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DashboardComponent0, renderType_DashboardComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DashboardComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import3.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_DashboardComponent1);
        this._NgFor_2_6 = new import11.Wrapper_NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._pipe_date_0 = new import12.DatePipe(this.parentInjector.get(import15.LOCALE_ID));
        this.init([], [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_DashboardComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    _View_DashboardComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.players;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.detectChangesInInputProps(this, this._anchor_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DashboardComponent0;
}(import1.AppView));
export function viewFactory_DashboardComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DashboardComponent === null)) {
        (renderType_DashboardComponent = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_DashboardComponent, {}));
    }
    return new _View_DashboardComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_DashboardComponent1 = (function (_super) {
    __extends(_View_DashboardComponent1, _super);
    function _View_DashboardComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DashboardComponent1, renderType_DashboardComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._arr_27 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
    }
    _View_DashboardComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'col-sm-6 col-md-4'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'thumbnail'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'caption'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'h3', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_4, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_4, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_15 = import4.createRenderElement(this.renderer, this._el_4, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n					', null);
        this._el_17 = import4.createRenderElement(this.renderer, this._el_15, 'button', new import4.InlineArray2(2, 'class', 'btn btn-primary'), null);
        this._RouterLink_17_3 = new import17.Wrapper_RouterLink(this.parent.parentInjector.get(import18.Router), this.parent.parentInjector.get(import19.ActivatedRoute), this.parent.parentInjector.get(import20.LocationStrategy));
        this._text_18 = this.renderer.createText(this._el_17, 'Edit', null);
        this._text_19 = this.renderer.createText(this._el_15, '\n			', null);
        this._text_20 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n	', null);
        this._pipe_date_0_0 = import4.pureProxy2(this.parent._pipe_date_0.transform.bind(this.parent._pipe_date_0));
        var disposable_0 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21
        ], [disposable_0], []);
        return null;
    };
    _View_DashboardComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.RouterLink) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._RouterLink_17_3.context;
        }
        return notFoundResult;
    };
    _View_DashboardComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import7.ValueUnwrapper();
        var currVal_17_0_0 = this._arr_27('/team/player/edit', this.context.$implicit._id);
        this._RouterLink_17_3.check_routerLink(currVal_17_0_0, throwOnChange, false);
        this._RouterLink_17_3.detectChangesInInputProps(this, this._el_17, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_23 = import4.interpolate(2, '', this.context.$implicit.name, ' ', this.context.$implicit.lastName, '');
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_7, currVal_23);
            this._expr_23 = currVal_23;
        }
        valUnwrapper.reset();
        var currVal_24 = import4.interpolate(1, 'Bithday: ', valUnwrapper.unwrap(import4.castByValue(this._pipe_date_0_0, this.parent._pipe_date_0.transform)(this.context.$implicit.birthday, 'dd-MMM-yyyy')), '');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_24, currVal_24))) {
            this.renderer.setText(this._text_10, currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_26 = import4.interpolate(1, 'Email: ', this.context.$implicit.email, '');
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setText(this._text_13, currVal_26);
            this._expr_26 = currVal_26;
        }
        this._RouterLink_17_3.detectChangesInHostProps(this, this._el_17, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_DashboardComponent1.prototype._handle_click_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_17_0 = (this._RouterLink_17_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_17_0);
    };
    return _View_DashboardComponent1;
}(import1.AppView));
function viewFactory_DashboardComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_DashboardComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=dashboard.component.ngfactory.js.map