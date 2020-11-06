<template>
	<Layout>
		<div class="pt-8 md:pt-16">
			<div class="flex flex-col items-center">
				<div class="flex flex-col items-center mb-2 text-ui-primary">
					<Logo :width="80" />
					<h2
						class="text-3xl text-6xl font-black tracking-tighter border-none"
					>
						.NET UZB
					</h2>
				</div>
				<h1 class="text-4xl text-center lg:text-5xl">
					O'zbek xalqi uchun qurilgan .NET sayti!
				</h1>
				<p class="text-xl font-medium text-center">
					Biz bilan birga o'rganing va shakllantiring...
					<br />
					<strong class="text-ui-primary"
						>Bir necha daqiqangiz bormi? </strong
					>
				</p>

				<div class="py-4">
					<code
						class="block px-4 py-1 select-all bg-ui-border text-ui-typo"
						>dotnet run salom-dunyo</code
					>
				</div>

				<div class="flex justify-center mt-8">
					<g-link
						to="/docs/"
						class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
					>
						Gaz bosamiz!
						<ArrowRightCircleIcon class="ml-4" size="1x" />
					</g-link>
				</div>

				<p class="mt-8 text-center">
					Open Source. CC0-1.0 Litsenziya.
					<span
						class="border-b border-dashed border-ui-primary text-ui-primary"
						>Qonunga xilofmidiyey bilmadim koroche bilmadim! ;)</span
					>.
				</p>
			</div>

			<div
				class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
			></div>

			<div class="flex flex-wrap justify-center -mx-4">
				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<ZapIcon size="3x" class="mb-6 text-ui-primary" />
					<h3
						class="font-bold tracking-wide uppercase text-ui-primary"
					>
						Judayam tez
					</h3>
					<p class="text-lg text-left">
						Sayt Gridsome texnologiyasi asosida yozilgan. Ichida Vue.js keladi va statik fayllar chiqarib beradi.
						Bundanda tez bo'lishi mumkin emas!
						<span
							class="border-b border-dashed border-ui-primary text-ui-primary"
							>Be hazl</span
						>.
					</p>
				</div>

				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<SearchIcon size="3x" class="mb-6 text-ui-primary" />
					<h3
						class="font-bold tracking-wide uppercase text-ui-primary"
					>
						Tezkor qidiruv
					</h3>
					<p class="text-lg text-left">
						Hamma sarlavhalar saqlangan. Tezkor qidiruv
						Fuse.js yordamida yozilgan. Qidirayotgan ma'lumotingizni
						<span
							class="border-b border-dashed border-ui-primary text-ui-primary"
							>ko'z ochib yumguncha</span
						> topasiz.
					</p>
				</div>

				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<MoonIcon size="3x" class="mb-6 text-ui-primary" />
					<h3
						class="font-bold tracking-wide uppercase text-ui-primary"
					>
						Juda yorug', juda shira
					</h3>
					<p class="text-lg text-left">
						Kechqurun ishlaysizmi? Tungi ko'rinishimiz yoqib oling
						va ko'zingizning nurini asrang.
					</p>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import Logo from "@/components/Logo";
import {
	ArrowRightCircleIcon,
	ZapIcon,
	CodeIcon,
	MoonIcon,
	SearchIcon
} from "vue-feather-icons";

export default {
	components: {
		Logo,
		ArrowRightCircleIcon,
		ZapIcon,
		CodeIcon,
		MoonIcon,
		SearchIcon
	},

	metaInfo() {
		const title = ".NET Uzbekistan";
		const description =
			".NET Uzbekistan - DotNet yo'nalishi bo'yicha O'zbekistonda tashkil qilingan community!";

		return {
			title: title,
			meta: [
				{
					name: "description",
					content: description
				},
				{
					key: "og:title",
					name: "og:title",
					content: title
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: title
				},
				{
					key: "og:description",
					name: "og:description",
					content: description
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: description
				}
			]
		};
	}
};
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>
