export interface Product {
	title: string;
	titleEN: string;
	price?: string;
	prices?: Record<string, string>;
	description: string;
	descriptionEN: string;
	containerStyle?: string;
}

export interface Props extends Product {}

export default function FoodMenuItem({
	title,
	titleEN,
	price,
	description,
	descriptionEN,
	containerStyle,
}: Props) {
	return (
		<div className={`${containerStyle}`}>
			<p className="mb-2 flex justify-between gap-x-4 border-b border-solid pb-2 text-lg font-semibold">
				<span className="flex">
					{title}{" "}
					{titleEN && <span className="text-lg font-light">/ {titleEN}</span>}
					<span className="flex gap-x-2"></span>
				</span>
				<span className="font-medium">{price}</span>
			</p>

			<p className="font-secondary mb-2 text-base font-semibold">
				{description}
			</p>
			<p className="font-secondary text-base font-light">{descriptionEN}</p>
		</div>
	);
}
