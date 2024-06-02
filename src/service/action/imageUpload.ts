export const imageUpload = async (image: File) => {
  const formData = new FormData();

  formData.append('file', image);
  formData.append('upload_preset', 'ix9dsb4b');
  const originalFileName = image.name
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-z0-9]/gi, '_')
    .toLowerCase();
  formData.append('public_id', originalFileName);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_API}`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await res.json();

    return result;
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};
