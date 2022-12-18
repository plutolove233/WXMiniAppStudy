// components/tab-control/tabControl.ts
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		tabHeadline: {
			type: Array,
			value: ["衣服", "鞋子", "裤子"],
		},
		currentIndex: {
			type: Number,
			value: 0,
		},
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onItemTap(e: any){
			var currentIndex = e.currentTarget.dataset.index;
			this.setData({currentIndex});
			this.triggerEvent("getTabControlIndex", currentIndex);
		}
	}
})
