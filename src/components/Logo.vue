<template>
	<img
		src="/logo.png"
		:width="getWidth"
		:height="getHeight"
		alt=".NET Uzbekistan's Logo"
	/>
</template>

<script>
export default {
	props: {
		width: {
			type: Number,
			default: 40
		}
	},

	computed: {
		getWidth() {
			return this.width;
		},

		getHeight() {
			return Math.ceil((this.getWidth / 48) * 48);
		}
	}
};
</script>
