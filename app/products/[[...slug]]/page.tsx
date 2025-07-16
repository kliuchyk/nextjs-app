interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

export default function ProductsPage({
  params: { slug },
  searchParams: { sortOrder },
}: Props) {
  return (
    <div>
      <h3>ProductsPage</h3>
      <div>{slug}</div>
      <div>{sortOrder}</div>
    </div>
  );
}
