import temp_pic from "../../images/card-images/temp-pic.jpg";

export default function Card() {
  return (
    <div className="p-10">
      <div className="p-5 w-4/5 max-w-72 rounded-lg overflow-hidden shadow-2xl">
        <img className="rounded-lg" src={temp_pic.src} alt={"logo"}/>
        <p className="font-bold text-4xl py-4">Header</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  )
}