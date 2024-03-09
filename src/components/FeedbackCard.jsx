import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (


  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
     <h4 className="font-poppins font-semibold text-[30px] leading-[32px] text-white text-center mb-4">
          {title}
        </h4>
    <img src={img} alt={name} />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>


  </div>
);


export default FeedbackCard;