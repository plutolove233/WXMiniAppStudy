// components/section-view/section-view.ts
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		title:{
			type: String,
			value: "默认标题"
		},
		content:{
			type: String,
			value: "默认内容"
		}
	},

	externalClasses:["info"],

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		sectionClick(){
			console.log("component section is be clicked");
			this.triggerEvent("sectionClick", ["hello", 9511])
		}
	}
})
