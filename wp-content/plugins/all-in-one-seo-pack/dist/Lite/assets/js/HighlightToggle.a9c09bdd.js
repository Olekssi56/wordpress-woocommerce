import{B as o}from"./Checkbox.eb948ddb.js";import{B as r}from"./Radio.2eaa81c8.js";import{n as s}from"./_plugin-vue2_normalizer.d86aa1f3.js";const a={components:{BaseCheckbox:o,BaseRadio:r},props:{type:{type:String,required:!0},name:{type:String,required:!0},value:{type:[Boolean,String,Event],required:!0},active:Boolean,size:String,round:Boolean},methods:{toggleCheckbox(){this.$refs.toggle.labelToggle()}}};var i=function(){var e=this,n=e._self._c;return n("div",{staticClass:"aioseo-highlight-toggle",class:[{active:e.active},{[e.size]:e.size}],on:{click:e.toggleCheckbox}},[n(`base-${e.type}`,{ref:"toggle",tag:"component",attrs:{name:e.name,value:e.value,size:e.size,round:e.round},on:{input:t=>e.$emit("input",t)}},[e._t("default")],2)],1)},l=[],u=s(a,i,l,!1,null,null,null,null);const m=u.exports;export{m as B};