var lis = {
	template: '#lis',
	data() {
		const list = [{
			image: ''
		}];
		return {
			list,
			waterfallW: 220, //图片div宽度
			screenWidth: document.body.clientWidth //屏幕宽度
		};
	},
	created() {
		for (var i = 1; i < 23; i++) {
			this.list.push({
				image: 'image/0000000' + i + '.jpg'//加载图片
			});
		}

	},
	mounted() {
		var nodeList = this.$refs.col; //图片
		this.doSort(nodeList);
	},
	methods: {
		doSort: function(nodeList) {
			var itemWidth = this.waterfallW;
			var columns = parseInt(this.screenWidth / (itemWidth + gap));
			var arr = [];
			for (var i = 0; i < nodeList.length; i++) {
				if (i < columns) {
					nodeList[i].style.top = 0;
					nodeList[i].style.left = (itemWidth + gap) * i + 'px';
					arr.push(nodeList[i].offsetHeight);
				} else {
					var minHeight = arr[0];
					var index = 0;
					for (var j = 0; j < arr.length; j++) {
						if (minHeight > arr[j]) {
							minHeight = arr[j];
							index = j;
						}
					}
					nodeList[i].style.top = arr[index] + gap + 'px';
					nodeList[i].style.left = nodeList[index].offsetLeft + 'px';
					arr[index] = arr[index] + nodeList[i].offsetHeight + gap;
				}
			}
		}
	}
};
