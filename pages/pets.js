import Image from "next/image"
export default function PetsPage() {
  return (
    <div>
        {
           ['1', '2'].map((path) => {
            return (
                <div key={path}>
                    <img src={`/${path}.jpg`}  alt='pet' width='280' height='420' />
                </div>
                )
           
           })}

    </div>
  )
}
