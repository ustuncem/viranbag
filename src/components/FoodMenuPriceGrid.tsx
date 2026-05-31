import type { Product } from "./FoodMenuItem";

export interface Props {
	columns: string[];
	items: Product[];
}

export default function FoodMenuPriceGrid({ columns, items }: Props) {
	const gridTemplateColumns = `1fr repeat(${columns.length}, minmax(4rem, auto))`;

	return (
		<div>
			<div
				className="mb-2 grid gap-x-4 border-b border-solid pb-2 text-lg"
				style={{ gridTemplateColumns }}
			>
				<span />
				{columns.map((column) => (
					<span
						key={column}
						className="text-right text-lg font-bold"
					>
						{column}
					</span>
				))}
			</div>

			{items.map((item, idx) => (
				<div
					key={item.title}
					className={`grid gap-x-4 border-b border-solid pb-2 text-lg ${idx !== items.length - 1 ? "mb-2" : ""}`}
					style={{ gridTemplateColumns }}
				>
					<span className="font-semibold">
						{item.title}{" "}
						{item.titleEN && (
							<span className="text-lg font-light">/ {item.titleEN}</span>
						)}
					</span>
					{columns.map((column) => (
						<span
							key={column}
							className="text-right font-medium"
						>
							{item.prices?.[column] || "-"}
						</span>
					))}
				</div>
			))}
		</div>
	);
}
