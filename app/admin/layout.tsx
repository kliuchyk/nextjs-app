interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">Admin sidebar</aside>
      <div>{children}</div>
    </div>
  );
}
