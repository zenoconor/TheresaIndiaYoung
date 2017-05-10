"use strict";define("checkbox",["lodash","core","santaProps"],function(t,i,e){var s=function(i){var e=t.get(this,"refs.input");return{validity:t.toPlainObject(t.get(e,"validity",{})),validationMessage:t.get(e,"validationMessage",""),valid:t.get(i,"valid",!0)}};return{displayName:"Checkbox",propTypes:{compData:e.Types.Component.compData.isRequired,compProp:e.Types.Component.compProp.isRequired,renderFlags:e.Types.RenderFlags.all,shouldResetComponent:e.Types.RenderFlags.shouldResetComponent},mixins:[i.compMixins.skinBasedComp,i.compMixins.runTimeCompData,i.compMixins.compStateMixin(s),i.compMixins.inputFocusMixin],statics:{useSantaTypes:!0,behaviors:t.assign({change:{methodName:"validate"},setCustomValidity:{methodName:"setCustomValidity",params:["customValidity"]}},i.compMixins.inputFocusMixin.INPUT_FOCUS_BEHAVIORS)},focus:function(){this.refs.input.focus()},blur:function(){this.refs.input.blur()},validate:function(){var t=!this.props.compProp.required||this.refs.input.checked;this.setState({valid:t}),this.handleAction("validate")},setCustomValidity:function(t){this.setState({customValidity:t})},getInitialState:function(){return t.assign(s(),{checked:!1,valid:!0,customValidity:""})},componentWillMount:function(){this.setState({checked:this.props.compData.checked,valid:!this.props.compProp.required||this.props.compData.checked})},componentWillReceiveProps:function(t){var i={checked:t.compData.checked};"editor"===t.renderFlags.componentViewMode&&(i.valid=!0),t.shouldResetComponent!==this.props.shouldResetComponent&&(i.customValidity=""),this.setState(i)},componentDidUpdate:function(t,i){i.customValidity!==this.state.customValidity&&this.refs.input.setCustomValidity(this.state.customValidity)},onChange:function(){if(!this.props.compProp.readOnly&&!this.props.compProp.isDisabled){var t={checked:!this.state.checked};this.setState(t),this.updateData(t),this.handleAction("change",t),this.validate()}},onFocus:function(){this.handleAction("focus")},onBlur:function(){this.handleAction("blur")},getSkinProperties:function(){return{"":{"data-error":!this.state.valid,"data-disabled":!!this.props.compProp.isDisabled},container:{tabIndex:0},input:{onFocus:this.onFocus,onBlur:this.onBlur,disabled:!!this.props.compProp.isDisabled,required:this.props.compProp.required,checked:this.state.checked,onChange:this.onChange,value:this.props.compData.value}}}}});
//# sourceMappingURL=checkbox.min.js.map