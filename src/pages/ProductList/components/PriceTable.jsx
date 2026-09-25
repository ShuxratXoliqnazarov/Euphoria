import SectionTitle from '@/components/ui/SectionTitle'

const ROWS = [
  ['Pick Any 4- Womens Plain T-shirt Combo', 1099],
  ['Pick Any 4- Plain Womens Boxer Combo', 1099],
  ['Pick Any 4 - Women Plain Full Sleeve T-shirt Combo', 1399],
  ['Multicolor Checkered Long Casual Shirts for Women', 499],
  ['Pick Any 2: Plain Boxy Casual Shirts for Women Combo', 799],
  ['Blue Floral Anarkali Kurti', 599],
  ['Jade Black Narrow Cut Flexible Women Jeggings', 998],
  ['Mustard-yellow Solid Straight-Fit Women Pant', 499],
  ['Women Pants Combo - Pick Any 2', 800],
  ['Pista Green Solid Boxy Casual Shirts for Women', 449],
  ['Plain Burgundy Womens Boxer', 349],
  ['Striped Front Tie Casual Shirts for Women', 449],
]

export default function PriceTable({ label }) {
  return (
    <section className="mt-20">
      <SectionTitle className="md:text-[28px]">Buy {label}&apos;s Clothing at Best Price</SectionTitle>

      <div className="mt-10 overflow-x-auto rounded-xl bg-light md:ml-6">
        <table className="w-full min-w-[520px] text-left">
          <thead>
            <tr className="border-b border-border/60 text-lg text-dark md:text-[22px]">
              <th className="px-6 py-8 font-semibold md:px-12">{label}&apos;s Clothing</th>
              <th className="w-44 border-l border-border/60 px-6 text-center font-semibold">Best Price</th>
            </tr>
          </thead>
          <tbody className="text-gray md:text-lg">
            {ROWS.map(([name, price], i) => (
              <tr key={name}>
                <td className={`px-6 py-3 md:px-12 ${i === 0 ? 'pt-8' : ''} ${i === ROWS.length - 1 ? 'pb-8' : ''}`}>
                  {name}
                </td>
                <td className="border-l border-border/60 text-center">₹{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
