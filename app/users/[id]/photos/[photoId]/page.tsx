interface UserPhotosPageProps {
  params: { id: number; photoId: number };
}

export default async function UserPhotosPage({ params }: UserPhotosPageProps) {
  const { id, photoId } = await params;

  return (
    <div>
      <div>User id: {id}</div>
      <div>Photo id: {photoId}</div>
    </div>
  );
}
