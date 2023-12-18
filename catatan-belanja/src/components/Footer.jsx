export default function Footer({items}) {

  if(items.length === 0 ) return <footer className="stats">Daftar belanjaan masih Kosong!</footer>

  const totalItems = items.length;
  const chekedItems = items.filter((item) => item.checked === true).length;
  const percentage = Math.round((chekedItems / totalItems) * 100)

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {chekedItems} barang sudah dibeli ({percentage}%)
    </footer>
  );
}