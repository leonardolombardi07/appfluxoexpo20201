export default function limitStringNameSize(name) {
  try {
    if (name.length > 10) {
      const names = name.split(" ");
      return names[0];
    } else {
      return name;
    }
  } catch (error) {
    return null;
  }
}
